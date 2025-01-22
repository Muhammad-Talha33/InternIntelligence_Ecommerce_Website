import React from 'react'

export default function page() {
  return (
    <div className="relative flex flex-col  justify-center items-center mx-4 my-8 rounded-xl bg-transparent">
  <img src="/images/nike.png" alt="" className="block 0"/>
  <p className="text-[#111111] text-2xl font-bold text-center  my-8 ">
  YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE
  </p>
  <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
    <div className="mb-1 flex flex-col gap-6">
      
      <div className="w-full max-w-sm min-w-[200px]">
        <input type="email" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Email address" />
      </div>
      <div className="w-full max-w-sm min-w-[200px]">
        <input type="password" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Password" />
      </div>
    </div>
    <div className="inline-flex items-center mt-2">
      <label className="flex items-center cursor-pointer relative" >
        <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check-2" />
        <span className="absolute text-white opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
        </span>
      </label>
      <label className="cursor-pointer ml-2 text-slate-600 text-sm" >
        Keep me signed in
      </label>
     
    </div>
    <p className='text-center text-[#8D8D8D] text-[15px] mt-5'>By logging in, you agree to Nike's<span><a href="" className='underline hover:text-black'> Privacy Policy.</a></span></p>
    <p className='text-center text-[#8D8D8D] text-[15px]'>and<span><a href="" className='underline hover:text-black'> Terms of Use.</a></span></p>
    <button className="mt-4 w-full rounded-md bg-[#000000] py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      SIGN IN
    </button>
    <p className="flex justify-center mt-6 text-sm text-[#8D8D8D]">
     <a href="/join-us">
     Not a Member?
        </a>
      <a href="/join-us" className="ml-1 text-sm font-semibold text-[#111111] underline">
       Join Us.
      </a>
    </p>
  </form>
</div>
  )
}
