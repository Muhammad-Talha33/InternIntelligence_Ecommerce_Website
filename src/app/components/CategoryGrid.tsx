"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

type Category = {
  title: string;
  subtitle: string;
  imageUrl: string;
  link: string;
  alt: string;
};

const categories: Category[] = [
  {
    title: 'Men',
    subtitle: 'View Collection',
    imageUrl:
    '/images/men.jpg',
    link: '/products',
    alt: "Men's Collection",
  },
  {
    title: 'Women',
    subtitle: 'View Collection',
    imageUrl:
      '/images/women.jpg',
    link: '/products',
    alt: "Women's Collection",
  },
  {
    title: 'Accessories',
    subtitle: 'View Collection',
    imageUrl:
      '/images/acc.jpg',
    link: '/products',
    alt: 'Accessories Collection',
  },
  {
    title: 'Electronics',
    subtitle: 'View Collection',
    imageUrl:
      '/images/elec.jpg',
    link: '/products',
    alt: 'Electronics Collection',
  },
];

const CategoryGrid: React.FC = () => {
  return (
    <motion.section className="py-16 bg-gray-50" initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.title} href={category.link} className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                <img
                  src={category.imageUrl}
                  alt={category.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading='lazy'
                />
                <div className="absolute inset-0 bg-black/20 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{category.title}</h3>
                    <p className="text-white/80 text-sm">{category.subtitle}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CategoryGrid;
