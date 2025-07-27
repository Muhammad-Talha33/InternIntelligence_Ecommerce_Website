"use client";
import React from 'react';

export default function AboutPage() {
  return (
    <section className="md:py-24 py-16 relative bg-white">
      <div className="max-w-7xl px-4 md:px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
           <div className="justify-center hidden md:flex ">
            <div className="w-full max-w-[560px] rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
              <img
                src="https://img.freepik.com/free-photo/business-office-remote-lifestyle_23-2151998101.jpg?t=st=1753508260~exp=1753511860~hmac=36b5b6002ad1e0895df1e3aabd7a46be55d56bbb662bb03b11f9d0e8ef26731d&w=1800"
                alt="About buyloom"
                className="w-full h-full object-cover"
                loading='lazy'
              />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h6 className="text-gray-700 text-base uppercase tracking-wide">About Us</h6>
              <h2 className="text-gray-900 text-4xl md:text-5xl font-bold leading-snug">
                Style, Sustainability & Satisfaction – All in One Place
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                At <strong>buyloom</strong>, we’re more than just an online store – we’re a community that values authenticity, quality, and conscious fashion. Since our inception, our goal has been to bridge the gap between premium fashion and everyday affordability.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                Whether you&apos;re exploring the latest trends, hunting for timeless classics, or gifting something meaningful, we bring you curated collections from 100+ trusted brands. With fast shipping, responsive support, and a commitment to sustainability, ShopEase continues to win hearts across the globe.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              {[
                { title: '10+ Years', desc: 'Serving fashion-forward customers' },
                { title: '500K+ Orders', desc: 'Delivered with care & speed' },
                { title: '100+ Brands', desc: 'Selected for trust & quality' },
                { title: '98% Happy Customers', desc: 'Driven by your satisfaction' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all"
                >
                  <h4 className="text-gray-900 text-2xl font-bold">{item.title}</h4>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Content */}
          <div className="flex justify-center md:hidden">
            <div className="w-full max-w-[560px] rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
              <img
                src="https://pagedone.io/asset/uploads/1717742431.png"
                alt="About buyloom"
                className="w-full h-full object-cover"
                loading='lazy'
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
