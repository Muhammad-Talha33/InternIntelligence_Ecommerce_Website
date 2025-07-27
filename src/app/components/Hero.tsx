"use client";
import React from 'react';
import { motion } from 'framer-motion'
import Link from 'next/link';
const Hero: React.FC = () => {
  return (
    <motion.section className="hero-section relative" initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}>
      <div className="container mx-auto px-4 py-24 md:py-32 w-full">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Summer Collection 2025
          </h1>
          <p className="text-lg text-white mb-8">
            Discover our latest arrivals designed for comfort and style. Premium
            quality that lasts.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="py-3 px-6 bg-primary text-white bg-black font-medium rounded-md hover:bg-gray-800 transition-colors whitespace-nowrap"
            >
              Shop Now
            </Link>
            <Link
              href="/products"
              className="py-3 px-6 bg-white text-black font-medium rounded-md border border-gray-200 hover:bg-gray-50 transition-colors whitespace-nowrap"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
