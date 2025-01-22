import React from "react";

export default function page() {
  return (
    <section className="bg-white ">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form className="w-full max-w-md">
          <div className="flex justify-center mx-auto my-7">
            <img className="w-auto h-7 sm:h-8" src="/images/nike.png" alt="" />
          </div>
            <h1 className="text-center text-[#111111] text-2xl font-bold">BECOME A NIKE MEMBER</h1>
            <p className="text-center text-[#8D8D8D] my-7">Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>

          <div className="relative flex items-center mt-8">
            <input
              type="email"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-5 dark:text-gray-700 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email address"
            />
          </div>

          <div className="relative flex items-center mt-8">
            <input
              type="password"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-5 dark:text-gray-700 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Password"
            />
          </div>

          <div className="relative flex items-center mt-8">
            <input
              type="text"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-5 dark:text-gray-700 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="First Name"
            />
          </div>

          <div className="relative flex items-center mt-8">
            <input
              type="text"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-5 dark:text-gray-700 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Last Name"
            />
          </div>

          <div className="relative flex items-center mt-8">
            <input
              type="text"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-5 dark:text-gray-700 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Date of BIrth"
            />
          </div>
          <p className="text-[#8D8D8D] text-center my-2">
            Get a Nike Member Reward every year on your Birthday.
          </p>

          <div className="relative flex items-center mt-8">
            <input
              type="text"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-5 dark:text-gray-700 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="India"
            />
          </div>

          <p className="text-[#8D8D8D] my-2 text-center">
            Sign up for emails to get updates from Nike on products, offers and
            your Member benefits
          </p>

          <p className="text-[#8D8D8D] my-2 text-center">By creating an account, you agree to Nike&apos;s <a href="" className="underline text-[#8D8D8D]"><span>Privacy</span></a> Policy and Terms of Use.</p>

          <div className="mt-6 ">
            <button className="w-full px-6 py-3 text-[15PX] font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              JOIN US
            </button>

            <div className="mt-6 text-center my-6">
              <a
                href="#"
                className="text-sm text-[#8D8D8D] hover:underline dark:text-[#8D8D8D] "
              >
                Already a Member?
              </a>
              <a
                href="/signin"
                className="text-sm text-[#111111] hover:underline dark:text-[#111111] "
              >
                <span>Sign In.</span>
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
