import React from "react";
import { HiMiniShoppingCart } from "react-icons/hi2"

export default function page() {
  return (
    <section className="text-gray-400  body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="/images/Rectangle3.png"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-black text-5xl title-font font-medium mb-1">
              Nike Air Force 1 PLT.AF.ORM
            </h1>
           
            <p className="leading-relaxed text-[20px] text-[#111111] line-height">
            Turn style on its head with this crafted take on the <br /> Air Jordan 1 Mid. Its "inside out"-inspired <br /> construction, including unique layering and <br /> exposed foam accents, ups the ante on this <br /> timeless Jordan Brand silhouette. Details like the <br /> deco stitching on the Swoosh add coveted <br /> appeal, while the unexpected shading, rich <br /> mixture of materials and aged midsole aesthetic <br /> give this release an artisan finish.
            </p>
            
            <div className="my-5">
              <span className="title-font font-medium text-4xl text-black">
              ₹ 8 695.00
              </span>
              <a href="/cart">

              <button className="flex flex-row gap-3 text-white my-10 bg-[#111111] b py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              <HiMiniShoppingCart className="text-white text-2xl"/>

              Add To Cart
              </button>
              </a>
           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
