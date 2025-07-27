"use client";

import { useEffect, useState } from "react";
import { fetchProductById } from "@/sanity/fetchProductBySlug";
import { useRouter } from "next/navigation";
import { HiMiniShoppingCart } from "react-icons/hi2";
import Swal from "sweetalert2";
import { addToCart } from "@/app/actions/action";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import YouMayAlsoLike from "@/app/components/YouMayAlsoLike";
import Link from "next/link";
import { CgChevronLeft } from "react-icons/cg";
import { GoStarFill } from "react-icons/go";

type Product = {
  _id: number;
  name: string;
  category: string;
  price: number;
  inventory: number;
  colors: string[];
  status: string;
  image: string;
  description: string;
  rating: number;
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProductById(id);
        if (!data) {
          router.push("/404");
        } else {
          setProduct(data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        router.push("/404");
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id, router]);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${product.name} added to your cart`,
      showConfirmButton: false,
      timer: 1000,
    });

    addToCart(product);
  };

  if (loading) {
    return (
      <div className="text-center text-4xl h-full py-14 my-28 text-black">
        <LoadingSpinner/>
      </div>
    );
  }

  if (!product) {
    return <div className="text-center text-4xl my-28">Product not found</div>;
  }

  return (
    <section className="text-black  body-font overflow-hidden">

        <div className="mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 py-4">
            <Link
              href={"/products"}
              className="text-[#666666] hover:text-black transition text-sm"
            >
              Shop
            </Link>
            <CgChevronLeft />
            <span>Back to</span>
          </nav>
        </div>
      </div>

      <div className="container px-5 py-14 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={product.name}
            className="lg:w-[37%] md:w-[37%] w-full lg:h-auto h-64 object-contain object-center rounded"
            src={product.image}
            loading="lazy"
          />
          <div className="md:w-1/2 md:mt-0 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
              {product.status}
            </h2>
            <h1 className="text-black text-3xl title-font font-medium mb-1">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex mb-4">
              <span className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <GoStarFill
                    key={i}
                    fill={i < product.rating ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth={2}
                    className="w-4 h-4 text-yellow-400"
                    viewBox="0 0 24 24"
                  />
                    
                  
                ))}
                <span className="ml-3">({product.rating}5)</span>
              </span>
            </div>

            {/* Description */}
            <p className="leading-relaxed mb-4">{product.description}</p>

            <div className="flex mb-6 items-center border-b-2 border-gray-300 pb-5">
              {/* Size */}
              <div className="flex items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border-2 border-gray-500 focus:ring-2 focus:ring-indigo-900 bg-transparent py-2 pl-3 pr-10 text-black appearance-none focus:outline-none focus:border-indigo-500">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* Price + Buttons */}
            <div className="flex items-center">
              <span className="title-font font-medium text-2xl text-black">
                ${product.price}
              </span>
              <button
                onClick={(e) => handleAddToCart(e, product)}
                className="flex ml-auto text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded"
              >
                <HiMiniShoppingCart className="text-xl mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <YouMayAlsoLike/>
      </div>
    </section>
  );
}
