"use client";
import Link from 'next/link';
import React from 'react'

export default function SpecialOfferBanner() {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-amber-400 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Text and Timer */}
        {/* Right: Image */}
        <div className="md:w-1/2">
          <img
            src="https://img.freepik.com/premium-photo/flat-lay-with-shirt-jeans-shoes-with-accessories-wooden-background_824701-5204.jpg"
            alt="Summer Sale"
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900 ">Summer Sale</h2>
          <p className=" sm:text-lg md:text-xl text-lg text-gray-700 ">
            Up to 50% off on selected items. Limited time offer.
          </p>

          {/* Timer */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
            {['00', '12', '45', '30'].map((value, index) => (
              <div key={index} className="bg-black rounded-lg px-4 py-2 sm:px-5 sm:py-3 text-center min-w-[60px]">
                <span className="block text-xl sm:text-2xl font-bold">{value}</span>
                <span className="text-xs sm:text-sm text-gray-300">
                  {['Days', 'Hours', 'Minutes', 'Seconds'][index]}
                </span>
              </div>
            ))}
          </div>

          {/* Button */}
          <div>
            <Link
              href="/products"
              className="inline-block mt-4 sm:mt-6 py-2.5 px-6 sm:px-8 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              Shop the Sale
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
