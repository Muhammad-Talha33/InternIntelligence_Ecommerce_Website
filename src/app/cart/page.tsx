import React from 'react'

export default function page() {
  return (
    <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 lg:mb-10">
  <div className="px-4 pt-8">
    <div className='bg-[#F7F7F7] py-6 px-3'>
    <p className="text-[13px] text-[#111111] font-medium">Free Delivery</p>
    <p className="text-[#111111] text-[11px]">Applies to orders of ₹ 14 000.00 or more. <a href="/products" className='underline text-[11px] hover:font-semibold'><span>View details</span></a></p>
    </div>

    <div className='my-3'>
    </div>

    <div className="mt-8 space-y-3  bg-white px-2 py-4 sm:px-6">
    <h2 className='text-[#111111] lg:text-[22px] text-2xl'>Bag</h2>
      <div className="flex flex-col rounded-lg bg-white sm:flex-row">
        <img className="m-2 w-[150px] rounded-md border object-cover object-center" src="/images/tshirt.png" alt="" />
        <div className="flex w-full flex-col px-4 py-4">
          <span className="font-semibold text-[#111111]">Nike Dri-FIT ADV TechKnit Ultra</span>
          <span className="float-right text-[#757575]">Men's Short-Sleeve Running Top</span>
          <span className="float-right text-[#757575]">Ashen Slate/Cobalt Bliss</span>
          <span className="float-right text-[#757575]">Size: L</span>
          <span className="float-right text-[#757575]">Quantity: 1</span>
          <p className="text-[15px] text-[#111111]">MRP: ₹ 3 895.00</p>
        </div>
      </div>
      <div className="flex flex-col rounded-lg bg-white sm:flex-row">
        <img className="m-2 w-[150px] rounded-md border object-cover object-center" src="/images/Rectangle4.png" alt="" />
        <div className="flex w-full flex-col px-4 py-4">
          <span className="font-semibold text-[#111111]">Nike Air Force 1 Mid '07</span>
          <span className="float-right text-[#757575]">Men's Shoes</span>
          <span className="float-right text-[#757575]">Flat Pewter/Light Bone/Black/White</span>
          <span className="float-right text-[#757575]">Size: 8</span>
          <span className="float-right text-[#757575]">Quantity: 1</span>
          <p className="text-[15px] text-[#111111]">MRP : ₹ 10 795.00</p>


        </div>
      </div>
      
      
    </div>
    </div>
    
    <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
    <p className="text-[21px] font-medium text-[#111111]">Summary</p>

      {/* <!-- Total --> */}
      <div className="mt-6 py-2">
        <div className="flex items-center justify-between">
          <p className="text-[15px] font-medium text-[#111111]">Subtotal</p>
          <p className="text-[#111111] text-sm">₹ 14 690.00</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Estimated Delivery & Handling</p>
          <p className=" text-[#111111]">Free</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between border-t">
        <p className="text-sm font-medium text-gray-900">Total</p>
        <p className="text-sm text-gray-900">₹ 14 690.00</p>
      </div>

      <div className='flex justify-center items-center border-t'>
      <a href="/">
      <button className="mt-10 mb-8 rounded-[30px] bg-black px-6 py-3 font-medium text-white hover:bg-slate-600 duration-700 ">Member Checkout</button>
      </a>
      </div>

    </div>
    
  </div>
  
     
  )
}
