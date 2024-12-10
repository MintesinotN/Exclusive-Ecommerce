import React from 'react'
import { FaApple } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const LandingPage = () => {
  return (
    <div className='flex dark:text-white md:mx-8 xl:mx-32'>
        <div className='basis-3/12 hidden md:flex flex-col pt-10 gap-3 text-lg'>
        <div className='flex justify-between items-center'>
            <p>Woman's Fashion</p>
            <IoIosArrowForward />
        </div>
        <div className='flex justify-between items-center'>
            <p>Men's Fashion</p>
            <IoIosArrowForward />
        </div>
        <p>Electronics</p>
        <p>Home & Lifestyle</p>
        <p>Medicine</p>
        <p>Sports & Outdoor</p>
        <p>Baby's & Toys</p>
        <p>Groceries & Pets</p>
        <p>Health & Beauty</p>
        </div>
        <div className='border-r-[1px] hidden lg:block border-gray-200 pl-4'></div>
        <div className='lg:basis-9/12 md:ml-6 mt-9 bg-black text-white'>
            <div className='flex justify-center'>
                <div className='basis-1/2 p-12 xl:block hidden'>
                <div className='flex items-center gap-4'>
                <FaApple size={36} />
                <p className='text-sm'>iPhone 14 Series</p>
                </div>
                <h2 className='text-4xl py-4 font-semibold'>Up to 10% off Voucher</h2>
                <div className='flex gap-2 items-end'>
                    <p className='underline underline-offset-4 decoration-gray-400'>Show Now</p>
                    <IoIosArrowRoundForward size={24} />
                </div>
                </div>
                <img src="./assets/Landing.png" alt="" />
            </div>
            <div className='flex justify-center gap-3 mb-4'>
                <p className='w-3 h-3 rounded-full bg-green-700'></p>
                <p className='w-3 h-3 rounded-full bg-green-700'></p>
                <p className='w-3 h-3 rounded-full bg-green-700 border border-white'></p>
                <p className='w-3 h-3 rounded-full bg-green-700'></p>
                <p className='w-3 h-3 rounded-full bg-green-700'></p>
            </div>
        </div>
    </div>
  )
}

export default LandingPage