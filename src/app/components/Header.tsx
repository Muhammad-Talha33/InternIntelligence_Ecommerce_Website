"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { IoBagHandleOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { LiaOpencart } from "react-icons/lia";
import { motion } from 'framer-motion';
import Link from "next/link";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileShopOpen, setIsMobileShopOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);

    // Update the URL dynamically with the search term
    router.push(`/products?search=${encodeURIComponent(e.target.value)}`);
  };

  return (
    <motion.header className="sticky top-0 z-50 bg-white shadow-sm" initial={{ opacity: 0, y: -100 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-['Pacifico'] text-2xl text-primary">
        <span>
          <LiaOpencart  className="inline-flex gap-2 mr-2 text-3xl"/>
        </span>
          buyloom
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-gray-900 font-medium hover:text-gray-700 hover:underline transition-colors"
          >
            Home
          </Link>

          {/* Shop Dropdown */}
          <div className="relative group">
            <Link href="/products">
              <button className="flex items-center text-gray-900 font-mediumhover:text-gray-700 hover:underline transition-colors">
                Shop
              </button>
            </Link>
          </div>

          {["About Us"].map((item) => (
            <Link
              key={item}
              href="/about-us"
              className="text-gray-900 font-medium hover:text-gray-700 hover:underline transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Utility Icons */}
        <div className="flex items-center space-x-6">
          {/* Search */}
          <div className="relative">
            {/* Search icon button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-black transition-colors -mr-2 "
            >
              <CiSearch className="text-xl text-black" />
            </button>

            {/* Dropdown search input */}
            <div
              className={`
      absolute left-1 transform -translate-x-1/2 mt-2 w-72 bg-white shadow-lg rounded-lg p-4 z-50 transition-all duration-300 ease-in-out 
      ${isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
    `}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 text-sm text-black"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center text-gray-400">
                  <CiSearch className="text-xl text-black" />
                </div>
              </div>
            </div>
          </div>

          {/* Cart Dropdown */}
          <Link href="/cart">
            <IoBagHandleOutline className="text-black -mr-2 text-xl sm:text-lg hover:text-amber-500 cursor-pointer" />
          </Link>

          {/* Account Dropdown */}
          <div className="relative group hidden md:block">
            <button className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-primary transition-colors">
              <LuUserRound className="text-black text-xl" />
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded hidden group-hover:block z-10">
              {["Sign In", "Register", "My Account", "Orders"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700 transition-transform duration-300"
          >
            {isMobileMenuOpen ? (
              <HiOutlineX
                size={24}
                className="text-black rotate-180 transition-transform duration-300"
              />
            ) : (
              <HiOutlineMenu
                size={24}
                className="text-black transition-transform duration-300"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-3 space-y-3">
          <Link href="/" className="block py-2 text-gray-900 font-medium">
            Home
          </Link>

          {/* Mobile Shop Toggle */}
          <div>
            <Link href="/products">
              <button
                onClick={() => setIsMobileShopOpen(!isMobileShopOpen)}
                className="flex items-center justify-between w-full py-2 text-gray-900 font-medium"
              >
                Shop
                <i className="ri-arrow-down-s-line"></i>
              </button>
            </Link>
          </div>

          {["About Us"].map((item) => (
            <Link
              key={item}
              href="/about-us"
              className="block py-2 text-gray-900 font-medium"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
      {/* )} */}
    </motion.header>
  );
};

export default Header;
