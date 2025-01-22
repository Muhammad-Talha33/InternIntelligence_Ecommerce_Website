import React from 'react'

export default function Category() {
  return (
    <section className="text-black body-font">
  <div className="container px-[104px] lg:px-52 py-24 mx-auto">
    
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 className="font-semibold title-font tracking-widest text-black mb-4 text-sm text-center sm:text-center hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer">Icons</h2>
        <nav className="flex flex-col sm:items-center sm:text-left text-[#757575] text-center items-left -mb-1 space-y-4 ">
          <a className='hover:text-black cursor-pointer hover:scale-125 transition-transform duration-500 ease-in-out'>
            Air Force 1
          </a>

          <a className='hover:text-black cursor-pointer hover:scale-125 transition-transform duration-500 ease-in-out'>
          Huarache
          </a>

          <a className='hover:text-black cursor-pointer hover:scale-125 transition-transform duration-500 ease-in-out'>
          Air Max 90
          </a>

          <a className='hover:text-black cursor-pointer hover:scale-125 transition-transform duration-500 ease-in-out'>
          Air Max 95
          </a>
        </nav>
      </div>

      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
      <h2 className="font-semibold title-font tracking-widest text-black mb-4 text-sm text-center sm:text-center hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer">Shoes</h2>
        <nav className="flex flex-col sm:items-center sm:text-left text-[#757575] text-center items-left -mb-1 space-y-4 ">
          <a className='hover:text-black cursor-pointer hover:scale-125 transition-transform duration-500 ease-in-out'>
            All Shoes
          </a>

          <a className='hover:text-black cursor-pointer hover:scale-125 transition-transform duration-500 ease-in-out'>
          Custom Shoes
          </a>

          <a className='hover:text-black cursor-pointer hover:scale-125 transition-transform duration-500 ease-in-out'>
            Jordan Shoes
          </a>

          <a className='hover:text-black cursor-pointer hover:scale-125 transition-transform duration-500 ease-in-out'>
          Running Shoes
          </a>
        </nav>
      </div>
      
      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
      <h2 className="font-semibold title-font tracking-widest text-black mb-4 text-sm text-center sm:text-center hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer">Clothing</h2>
        <nav className="flex flex-col sm:items-center sm:text-left text-[#757575] text-center items-left -mb-1 space-y-4">
          <a className='hover:text-black cursor-pointer hover:scale-125 transition-transform duration-500 ease-in-out'>
          All Clothing
          </a>

          <a className='hover:text-black cursor-pointer hover:scale-125 transition-transform duration-500 ease-in-out'>
          Modest Wear
          </a>

          <a className='hover:text-black cursor-pointer hover:scale-125 transition-transform duration-500 ease-in-out'>
          Hoodies & Pullovers
          </a>

          <a className='hover:text-black cursor-pointer hover:scale-125 transition-transform duration-500 ease-in-out'>
          Shirts & Tops
          </a>
        </nav>
      </div>

      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
       <h2 className="font-semibold title-font tracking-widest text-black mb-4 text-sm text-center sm:text-center hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer">Kids&apos;</h2>
        <nav className="flex flex-col sm:items-center sm:text-left text-[#757575] text-center items-left -mb-1 space-y-4 ">
          <a className='hover:text-black cursor-pointer hover:scale-125 transition-transform duration-500 ease-in-out'>
          Infant & Toddler Shoes
          </a>

          <a className='hover:text-black cursor-pointer hover:scale-125 transition-transform duration-500 ease-in-out'>
          Kids&apos; Shoes
          </a>

          <a className='hover:text-black cursor-pointer hover:scale-125 transition-transform duration-500 ease-in-out'>
          Kids&apos; Jordan Shoes
          </a>

          <a className='hover:text-black cursor-pointer hover:scale-125 transition-transform duration-500 ease-in-out'>
          Kids&apos; Basketball Shoes
          </a>
        </nav>
      </div>
    </div>
    
  </div>
</section>
  )
}
