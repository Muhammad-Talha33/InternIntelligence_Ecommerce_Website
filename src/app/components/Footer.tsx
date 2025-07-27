"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { LiaOpencart } from "react-icons/lia";
import {
  RiFacebookLine,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiMastercardFill,
  RiPaypalFill,
  RiVisaFill,
} from "react-icons/ri";

export default function Footer() {
  return (
    <motion.footer className="bg-white border-t border-gray-100 pt-12 pb-6" initial={{ opacity: 0, y: -100 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo + description */}
          <div className="md:w-1/3">
            <Link href="/" className="font-['Pacifico'] text-2xl text-primary">
              <span>
                <LiaOpencart className="inline-flex mr-2 text-3xl mb-2 md:mb-0s" />
              </span>
              buyloom
            </Link>
            <p className="text-gray-600 max-w-md">
              We offer premium quality clothing and accessories for men and
              women. Our mission is to provide sustainable fashion that lasts.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/3">
            <h3 className="text-sm font-semibold text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="hover:text-primary transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 md:w-1/3 md:justify-end">
            <Link
              href="https://www.facebook.com/profile.php?id=100090125664405"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
              target="_blank"
            >
              <RiFacebookLine />
            </Link>
            <Link
              href="https://www.instagram.com/synthsensations"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
              target="_blank"
            >
              <RiInstagramLine />
            </Link>
            <Link
              href="https://www.linkedin.com/in/muhammad-talha33"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
              target="_blank"
            >
              <RiLinkedinBoxFill />
            </Link>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center ">
            &copy; 2025 buyloom. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <RiVisaFill className="text-2xl text-gray-600" />
            <RiMastercardFill className="text-2xl text-gray-600" />
            <RiPaypalFill className="text-2xl text-gray-600" />
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
