"use client";
import React from 'react'

export default function NewsLetter() {
  return (
    <section className="py-16 bg-amber-400 text-black mb-4">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Subscribe to Our Newsletter</h2>
          <p className="text-gray-700 mb-8">
            Stay updated with our latest collections, exclusive offers, and
            style tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-md border-none text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-700 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>
        </div>
      </div>
    </section>

  )
}
