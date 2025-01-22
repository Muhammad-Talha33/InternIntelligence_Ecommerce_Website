import React from "react";
import { BiSolidLike } from "react-icons/bi";
import { AiFillDislike } from "react-icons/ai";


export default function page() {
  return (
    // <!-- component -->
    <div className="p-8">
      <h1 className="text-[32px] text-center text-[#111111] font-medium">
        GET HELP
      </h1>
      {/* Search Icon */}
      <div
        style={{ position: "relative" }}
        className="flex justify-center items-center"
      >
        <input
          className="rounded-lg py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block border-2 border-gray-400"
          placeholder="What can we help you with?"
        />
      </div>

      <div className="bg-white p-4 rounded-lg py-8 lg:mt-12">
        <div className="space-y-2 px-2 xl:px-16 mt-12">
          <div className="my-6">
            <div className="my-6">
              <h3 className="text-[#111111] text-[28px] font-medium">
                WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
              </h3>
            </div>

            <p className="text-[#111111] text-[15px]">
              We want to make buying your favourite Nike shoes and gear online
              fast and easy, and we accept the following payment options:
            </p>
            <div className="my-8">
              <p className="text-[#111111] mx-6 text-base">
                Visa, Mastercard, Diners Club, Discover, American Express, Visa
                Electron, Maestro
              </p>
              <p className="text-[#111111] mx-6 text-[15px]">
                If you enter your PAN information at checkout, you&apos;ll be able to
                pay for your order with PayTM or a local credit or debit card.
              </p>
              <p className="text-[#111111] mx-6 text-base">Apple Pay</p>
            </div>

            <div>
              <p className="text-[#111111]">
                {" "}
                <a href="/signin" className="underline font-semibold">
                  <span>Nike Members</span>
                </a>{" "}
                can store multiple debit or credit cards in their profile for
                faster checkout. If you&apos;re not already a Member,{" "}
                <a href="/join-us" className="underline font-semibold">
                  <span>join</span> <br /> us{" "}
                </a>{" "}
                today.
              </p>

              <div className="gap-3 flex ">
                <a href="/join-us">
                  <button className="text-white bg-black my-6 rounded-[30px] w-[106.13px] h-[39px] hover:bg-blue-700 duration-700">
                    JOIN US
                  </button>
                </a>
                <a href="/">
                  <button className="text-white bg-black my-6 rounded-[30px] w-[106.13px] h-[39px] hover:bg-blue-700 duration-700">
                    SHOP NIKE
                  </button>
                </a>
              </div>

            </div>
          </div>

          <h4 className="text-xl font-bold text-gray-800 tracking-widest">
            FAQs
          </h4>
          <div className="mt-4 flex">
            <div>
              <div className="flex items-center h-16">
                <span className="text-[16px] text-[#111111] font-bold">
                  Does my card need international purchases enabled?
                </span>
              </div>
              <div className="flex items-center py-2">
                <span className="text-gray-500">
                  Yes, we recommend asking your bank to enable international
                  purchases on your card. You will be notified at checkout{" "}
                  <br /> if international purchases need to be enabled.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex">
            <div>
              <div className="flex items-center h-16">
                <span className="text-[16px] text-[#111111] font-bold">
                  Can I pay for my order with multiple methods?
                </span>
              </div>
              <div className="flex items-center py-2">
                <span className="text-gray-500">
                  No, payment for Nike orders can&apos;t be split between multiple
                  payment methods.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex">
            <div>
              <div className="flex items-center h-16">
                <span className="text-[16px] text-[#111111] font-bold">
                  What payment method is accepted for SNKRS orders?
                </span>
              </div>
              <div className="flex items-center py-2">
                <span className="text-gray-500">
                  You can use any accepted credit card to pay for your SNKRS
                  order.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex">
            <div>
              <div className="flex items-center h-16">
                <span className="text-[16px] text-[#111111] font-bold">
                  Why don&apos;t I see Apple Pay as an option?
                </span>
              </div>
              <div className="flex items-center py-2">
                <span className="text-gray-500">
                  To see Apple Pay as an option in the Nike App or on Nike.com,
                  you&apos;ll need to use a compatible Apple device running the
                  latest OS, be signed in to your iCloud account and have a
                  supported card in your Wallet. Additionally, you&apos;ll need to
                  use Safari to use Apple Pay on Nike.com.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex">
            <div>
              <div className="flex items-center h-16">
                <span className="text-[15px] text-[#111111] font-bold">
                  Was this answer helpful?
                </span>
              </div>
              <div className="flex items-center  gap-2 py-2">
                <span className="text-black">
                  <BiSolidLike className="text-2xl" />
                </span>
                <span className="text-black">
                  <AiFillDislike className="text-2xl" />
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col ">
            <p className="text-[#757575]">RELATED</p>

            <a href="" className="my-2">
              <span className="text-[#111111] text-[16px] hover:underline">
                - WHAT ARE NIKE&apos;S DELIVERY OPTIONS?
              </span>
            </a>
            <a href="" className="my-2">
              <span className="text-[#111111] text-[16px] hover:underline">
                - HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
              </span>
            </a>
          </div>
        </div>

{/* Contact us */}
        <div>

        </div>
      </div>
    </div>
  );
}
