import React from 'react'

export default function BestOfAirMax() {
  return (
    <div >
        <h1 className='text-[#111111] font-semibold sm:mx-[225px] mx-[112.5px] text-[22px] mt-20'>Best of Air Max</h1>
   
    <div className="flex justify-center items-center flex-wrap gap-4" id='Air-Max'>
    {/* <!-- Card Component 1 --> */}
    <div className="relative flex flex-col my-6 bg-white shadow-sm  rounded-lg w-96">
      <div className="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
        <img
          src="/images/shoes.png"
          alt="card-image"
          className="h-full w-full object-cover rounded-md hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-slate-800 text-[15px] font-semibold">
          Nike Air Max Pulse
          </p>
          <p className="text-[#111111] text-[15px] font-semibold">
          ₹ 13 995
          </p>
        </div>
        <p className="text-[#757575] leading-normal font-normal">
          Women&apos;s Shoes
        </p>
        
      </div>
    </div>
   
    {/* <!-- Card Component 2 --> */}
    <div className="relative flex flex-col my-6 bg-white shadow-sm  rounded-lg w-96">
      <div className="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
        <img
          src="/images/shoes.png"
          alt="card-image"
          className="h-full w-full object-cover rounded-md hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-slate-800 text-[15px] font-semibold">
          Nike Air Max Pulse
          </p>
          <p className="text-[#111111] text-[15px] font-semibold">
          ₹ 13 995
          </p>
        </div>
        <p className="text-[#757575] leading-normal font-normal">
          Men&apos;s Shoes
        </p>
        
      </div>
    </div>

    {/* <!-- Card Component 3 --> */}
    <div className="relative flex flex-col my-6 bg-white shadow-sm  rounded-lg w-96">
      <div className="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
        <img
          src="/images/shoes2.png"
          alt="card-image"
          className="h-full w-full object-cover rounded-md hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-slate-800 text-[15px] font-semibold">
          Nike Air Max Pulse
          </p>
          <p className="text-[#111111] text-[15px] font-semibold">
          ₹ 13 995
          </p>
        </div>
        <p className="text-[#757575] leading-normal font-normal">
          Women&apos;s Shoes
        </p>
        
      </div>
    </div>
   
  
    {/* <!-- Add more card components here --> */}
  </div>
  </div>
  )
}
