"use client";
import Link from 'next/link';
import React from 'react'

export default function FollowUs() {


type FollowUsImage = {
  id:number
imageUrl: string
}

const images:FollowUsImage[] = [
  {
    imageUrl: "https://img.freepik.com/free-photo/gen-z-person-exploring-absurdist-fashion-beauty_23-2151103989.jpg?t=st=1753506441~exp=1753510041~hmac=2d7dd8b2967ddc025ce0c1f32a442ef3f7d102a47e04178b2096a95e1a5b7907&w=1800",
    id:1

  },

  {
    imageUrl: "https://img.freepik.com/free-photo/fashionable-leather-luggage-accessories-travel-generated-by-ai_188544-38417.jpg?t=st=1753502776~exp=1753506376~hmac=f6a16871f594d515b1157dd757a3d55f46b862d6969fac841466a86f933f2373&w=1800",
    id:2
  },

  {
    imageUrl: "https://img.freepik.com/free-photo/medium-shot-man-having-fun_23-2151194141.jpg?t=st=1753507266~exp=1753510866~hmac=df2d4b35d84b7110bd4950b18b4a61c3fea8c830a1836da7b995d29d79160275&w=1800",
    id:3
  },

  {
    imageUrl: "https://img.freepik.com/free-photo/luggage-essentials-sunglasses-camera-book-ready-travel_23-2151976530.jpg?t=st=1753507408~exp=1753511008~hmac=8fa6f12a62713d3c757d4cc5fea3ba71fec0e55e6d1418ac67f5470174388308&w=1800",
    id:4
  },

  {
    imageUrl: "https://img.freepik.com/free-photo/gen-z-person-exploring-absurdist-fashion-beauty_23-2151104064.jpg?t=st=1753507536~exp=1753511136~hmac=7349fa1e3b29bbf62c5c6e7cc8c4ee721aaee22110cfd27a7b648d4bf68cd7a7&w=1800",
    id:5
  },

  {
    imageUrl: "https://img.freepik.com/free-photo/close-up-person-wearing-futuristic-sneakers_23-2151005704.jpg?t=st=1753507685~exp=1753511285~hmac=324adfde2681a50a4ddd55e91a65af9f400d92e3857001149ca3d66bfddcad8f&w=1800",
    id:6
  }
] 

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
          Follow Us on Instagram
        </h2>
        <p className="text-gray-600 text-center mb-10">@synthsensations</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {images.map((image, id)=>(
            <Link key={id} href="#"  className="block aspect-square overflow-hidden rounded-xl group shadow-md">
              <img src={image.imageUrl} alt="Instagram Post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
            </Link>
          ))}
        </div>
      </div>
    </section>

  )
}
