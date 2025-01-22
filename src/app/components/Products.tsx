"use client";
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../sanity/fetchProducts"; // Import fetch function
import { useSearchParams } from "next/navigation"; // For URL query parameters
import Link from "next/link";
import { HiMiniShoppingCart } from "react-icons/hi2";

type Product = {
  productName: string;
  slug: { current: string };
  category: string;
  price: number;
  inventory: number;
  colors: string[];
  status: string;
  imageUrl: string;
  description: string;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<Product[]>([]);

  const searchParams = useSearchParams(); // Get search query from URL
  const searchQuery = searchParams.get("search")?.toLowerCase() || ""; // Extract search query from URL

  // Fetch products when component mounts
  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setFilteredProducts(data); // Initialize with all products
      setLoading(false);
    };

    getProducts();
  }, []);

  // Filter products based on the search query
  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.productName.toLowerCase().includes(searchQuery) ||
        product.category.toLowerCase().includes(searchQuery)
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.productName} added to cart`);
  };

  if (loading) {
    return (
      <div className="text-center text-4xl h-full py-14 my-28 text-black">
        Loading...
      </div>
    );
  }

  return (
    <section className="text-gray-400 body-font">
      {/* Cart Details */}
      <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-black text-black text-center mb-3">
          Cart Details
        </h2>
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
              >
                <div>
                  <p className="font-medium text-slate-900">{item.productName}</p>
                  <p>{item.category}</p>
                  <p className="text-sm text-[#111111]">
                    {" "}
                    MRP : ₹{item.price.toFixed(2)}
                  </p>
                </div>
                <img
                  src={item.imageUrl}
                  alt={item.productName}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-black text-center">
            Your cart is currently empty. Add some products to get started!
          </p>
        )}
      </div>

      {/* Products Section */}
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl text-gray-600 font-semibold mb-7">
          New & Featured ({filteredProducts.length})
        </h1>
        <div className="flex flex-wrap m-4 lg:-m-4">
          {filteredProducts.map((product, i) => (
            <div
              key={i}
              className="lg:w-1/4 md:w-1/2 p-4 w-[348px] hover:duration-700 hover:scale-105 transition-transform ease-in-out"
            >
              <div className="block relative lg:h-[348px] h-auto rounded overflow-hidden">
                <Link href={`/product/${product.slug.current}`} key={i}>
                  <img
                    alt={product.productName}
                    className="object-cover object-center lg:w-[348px] lg:h-[348px] w-auto h-auto block cursor-pointer"
                    src={product.imageUrl}
                  />
                </Link>
              </div>

              <div className="mt-4">
                <Link href={`/product/${product.slug.current}`}>
                  <h3 className="text-[#9E3500] text-[15px] tracking-widest title-font mb-1">
                    {product.status}
                  </h3>
                  <h2 className="text-black title-font text-lg font-medium">
                    {product.productName}
                  </h2>
                  <p className="mt-1">{product.category}</p>
                  <p className="mt-1">{product.colors.length} Colour</p>
                  <p className="mt-1 text-[#111111] text-[15px] font-medium">
                    MRP : ₹{product.price}
                  </p>
                </Link>

                {/* Add to Cart Functionality */}
                <div className="my-5">
                  <button
                    onClick={() => addToCart(product)}
                    className="flex flex-row justify-center gap-3 text-white my-10 bg-[#111111] py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded-lg w-full duration-700"
                  >
                    <HiMiniShoppingCart className="text-white text-2xl" />
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
