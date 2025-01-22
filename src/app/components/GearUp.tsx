import React from 'react'

export default function GearUp() {
  return (
    <div >
        <h1 className='text-[#111111] font-semibold sm:mx-[225px] mx-[112.5px] text-[22px] mt-20'>Gear Up</h1>
   
    <div className="flex justify-center items-center flex-wrap gap-2">
    <div className="relative flex flex-col my-6 bg-white shadow-sm  rounded-lg w-[300px]">
      <div className="relative p-2.5 h-[293px] overflow-hidden rounded-xl bg-clip-border">
        <img
          src="/images/tshirt.png"
          alt="card-image"
          className="h-[300px] w-[300px] object-cover rounded-md hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-slate-800 text-[14px] font-semibold">
          Nike Dri-FIT ADV TechKnit Ultra
          </p>
          <p className="text-[#111111] text-[15px] font-semibold">
           ₹ 3 895
          </p>
        </div>
        <p className="text-[#757575] text-[16px] leading-normal font-normal">
        Men&apos;s Short-Sleeve 
        </p>
        <p className='text-[#757575] text-[16px] leading-normal font-normal'>Running Top</p>
      </div>
    </div>

   
    {/* <!-- Card Component 2 --> */}
    <div className="relative flex flex-col my-6 bg-white shadow-sm  rounded-lg w-[300px]">
      <div className="relative p-2.5 h-[293px] overflow-hidden rounded-xl bg-clip-border">
        <img
          src="/images/short.png"
          alt="card-image"
          className="h-[300px] w-[300px] object-cover rounded-md hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-slate-800 text-[15px] font-semibold">
          Nike Dri-FIT Challenger
          </p>
          <p className="text-[#111111] text-[15px] font-semibold">
          ₹ 2 495
          </p>
        </div>
        <p className="text-[#757575] text-[16px] leading-normal font-normal">
        Men&apos;s 18cm (approx.) 2-
        </p>
        <p className='text-[#757575] text-[16px] leading-normal font-normal'>in-1 Versatile Shorts</p>
      </div>
    </div>

    <div className="relative flex flex-col my-6 bg-white shadow-sm  rounded-lg w-[300px]">
      <div className="relative p-2.5 h-[293px] overflow-hidden rounded-xl bg-clip-border">
        <img
          src="/images/wtshirt.png"
          alt="card-image"
          className="h-[300px] w-[300px] object-cover rounded-md hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-slate-800 text-[15px] font-semibold">
          Nike Dri-FIT ADV Run Division
          </p>
          <p className="text-[#111111] text-[15px] font-semibold">
          ₹ 5 295
          </p>
        </div>
        <p className="text-[#757575] text-[16px] leading-normal font-normal">
        Women&apos;s Long-Sleeve 
        </p>
        <p className="text-[#757575] text-[16px] leading-normal font-normal">
        Running Top
        </p>
      </div>
    </div>
    <div className="relative flex flex-col my-6 bg-white shadow-sm  rounded-lg w-[300px]">
      <div className="relative p-2.5 h-[293px] overflow-hidden rounded-xl bg-clip-border">
        <img
          src="/images/leggings.png"
          alt="card-image"
          className="h-[300px] w-[300px] object-cover rounded-md hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-slate-800 text-[15px] font-semibold">
          Nike Fast
          </p>
          <p className="text-[#111111] text-[15px] font-semibold">
          ₹ 3 795
          </p>
        </div>
        <p className="text-[#757575] text-[16px] leading-normal font-normal">
        Women&apos;s Mid-Rise 7/8 
        </p>
        <p className="text-[#757575] text-[16px] leading-normal font-normal">
        Running Leggings with Pockets
        </p>
      </div>
    </div>


   
  
    {/* <!-- Add more card components here --> */}
  </div>
  </div>
  )
}
