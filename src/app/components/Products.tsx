"use client";
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../sanity/fetchProducts";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { addToCart } from "../actions/action";
import Swal from "sweetalert2";
import { IoBagHandleOutline, IoEyeOutline } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";
import { RiStarHalfFill } from "react-icons/ri";
import { IoIosStarOutline } from "react-icons/io";
import LoadingSpinner from "./LoadingSpinner";
import { motion } from "framer-motion";

export type Product = {
  _id: number;
  name: string;
  category?: string;
  price: number;
  inventory?: number;
  status?: string;
  image: string;
  description: string;
  rating: number;
  ratingCount?: number;
  tags?: string;
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";
  const [activeTag, setActiveTag] = useState<string>("All");

  const uniqueTags = [
    "All",
    ...Array.from(new Set(products.flatMap((p: Product) => p.tags || []))),
  ];

  const handleTagFilter = (tag: string) => {
    setActiveTag(tag);
    if (tag === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p: Product) => p.tags?.includes(tag)));
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    };
    getProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery)
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  const handleSortChange = (value: string) => {
    const sortedProducts = [...filteredProducts];

    if (value === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts);
  };

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "bottom-right",
      toast: true,
      showConfirmButton: false,
      showCloseButton: true,
      timer: 6000,
      timerProgressBar: true,
      width: 350,
      background: "#ffffff",
      icon: "success",
      html: `
    <div style="display: flex; align-items: center;">
      <img src="${product.image}" style="width: 48px; height: 48px; border-radius: 6px; object-fit: contain; margin-right: 12px;" />
      <div style="flex: 1;">
        <div style="font-size: 14px; font-weight: 600; color: #111111; margin-bottom: 4px;">
          ${product.name} added to your cart
        </div>
        <a 
          href="/cart" 
          style="
            font-size: 13px; 
            color: #4f46e5; 
            text-decoration: none;
            font-weight: 500;
          "
          onmouseover="this.style.textDecoration='underline'"
          onmouseout="this.style.textDecoration='none'"
        >
          Go to your cart
        </a>
      </div>
    </div>
  `,
    });
    addToCart(product);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => {
      const star = i + 1;
      return rating >= star ? (
        <GoStarFill key={i} className=" text-amber-400" />
      ) : rating >= star - 0.5 ? (
        <RiStarHalfFill key={i} className=" text-amber-400" />
      ) : (
        <IoIosStarOutline key={i} className=" text-amber-400" />
      );
    });
  };

  if (loading) {
    return (
      <div className="text-center text-4xl h-full py-14 my-28 text-black">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <motion.section className="py-16" initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl text-gray-900 font-extrabold mb-10 text-center md:text-left">
          Curated Collection ({filteredProducts.length})
        </h1>
        {/* Mobile Dropdown */}
        <div className="md:hidden mb-4">
          <select
            value={activeTag}
            onChange={(e) => handleTagFilter(e.target.value)}
            className="w-full border px-4 py-2 rounded text-sm"
          >
            {uniqueTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4 my-4">
          {uniqueTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagFilter(tag)}
              className={`px-4 py-2 rounded ${
                activeTag === tag ? "bg-black text-white" : "bg-gray-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="flex justify-end mb-6">
          <select
            onChange={(e) => handleSortChange(e.target.value)}
            className="w-full md:w-auto border px-4 py-2 rounded text-sm"
          >
            <option value="">Sort by</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div key={product._id} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                {/* Badges based on position (optional) */}
                {index === 0 && (
                  <span className="absolute top-3 left-3 bg-primary text-white text-xs px-2 py-1 rounded">
                    New
                  </span>
                )}
                {index === 1 && (
                  <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs px-2 py-1 rounded">
                    Best Seller
                  </span>
                )}
                {index === 3 && (
                  <span className="absolute top-3 left-3 bg-rose-500 text-white text-xs px-2 py-1 rounded">
                    Sale
                  </span>
                )}

                <Link href={`/product/${product._id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-contain bg-white cursor-pointer"
                    loading="lazy"
                  />
                </Link>

                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Link href={`/product/${product._id}`}>
                    <button className="bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center shadow-md mx-1 hover:bg-gray-200 transition">
                      <IoEyeOutline className="text-black text-xl" />
                    </button>
                  </Link>
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="bg-white text-black w-10 h-10 hover:bg-gray-200  rounded-full flex items-center justify-center shadow-md mx-1  transition"
                  >
                    <IoBagHandleOutline className="text-black" />
                  </button>
                </div>
              </div>

              <Link href={`/product/${product._id}`}>
                <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                  Category: {product.tags}
                </p>
                <div className="flex items-center mb-1">
                  <div className="flex text-sm">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">
                    ({product.ratingCount || 0})
                  </span>
                </div>
                <p className="text-gray-900 font-medium">
                  ${product.price.toFixed(2)}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Products;
