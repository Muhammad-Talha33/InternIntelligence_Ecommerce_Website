"use client";
import React, { useEffect, useState } from "react";
import { recommendedProducts} from "../../sanity/fetchProducts";
import Link from "next/link";
import { IoBagHandleOutline, IoEyeOutline } from "react-icons/io5";
import { addToCart } from "../actions/action";
import Swal from "sweetalert2";
import { GoStarFill } from "react-icons/go";
import { IoIosStarOutline } from "react-icons/io";
import { RiStarHalfFill } from "react-icons/ri";
import { motion } from "framer-motion";

type Product = {
  _id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  ratingCount: number;
  description: string;
};

const YouMayAlsoLike = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await recommendedProducts();
      setProducts(data);
    };

    getProducts();
  }, []);

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
  

  return (
    <motion.section className="py-16 border-t-2 border-gray-200 mt-16" initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}>
      <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-left -mt-6">You may also like</h2>
        <div className="flex justify-between items-center mb-12">
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={product._id} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                {/* Conditional badge */}
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

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-contain bg-white"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Link href={`/product/${product._id}`}>
                    <button className="bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center shadow-md mx-1 hover:bg-gray-200 transition">
                      <IoEyeOutline className="text-black text-xl" />
                    </button>
                  </Link>
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="bg-white text-black w-10 h-10 rounded-full flex items-center justify-center shadow-md mx-1 hover:bg-gray-200  transition"
                  >
                    <IoBagHandleOutline className="text-black" />
                  </button>
                </div>
              </div>
              
              <Link href={`/product/${product._id}`}>
                <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center mb-1">
                  <div className="flex text-amber-400 text-sm">
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

export default YouMayAlsoLike;
