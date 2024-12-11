import React from 'react'
import NoteNB from '../components/NoteNB'
import { IoIosStar } from "react-icons/io";
import Button from '../components/Button'
import { IoIosHeartEmpty } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";

const ProductDetails = () => {
  return (
    <div className='xl:mx-32 mx-2 sm:mx-8 dark:text-white py-12'>
    <p><span className='text-gray-500'>Home / Gaming /</span> Havic HV G-92 Gamepad</p>
    <div className='grid grid-cols-3 py-12'>
        <div className='flex col-span-2'>
        <div className='basis-1/4'></div>
        <div className='basis-3/4'></div>
        </div>
        <div className='grid col-span-1 gap-4'>
        <h2 className='font-medium text-lg'>Havic HV G-92 Gamepad</h2>
        <div className='flex items-center gap-1'>
        {[1,2,3,4,5].map((star) => (
            <IoIosStar key={star} className={5 >= star ? 'text-yellow-500' : 'text-gray-300'} />
        ))}
        <p className='text-nowrap pl-2 text-zinc-500'>(150 Reviews) | </p>
        <p className='text-nowrap text-yellow-200'>In Stock</p>
        </div>
        <h4 className='text-lg'>$192.00</h4>
        <p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
        <hr className='my-3' />
        <div className='flex gap-3 items-center'>
          <h4 className='text-lg'>Colours:</h4>
          <div className='flex gap-1'>
            <div className='bg-blue-400 rounded-full w-3 h-3 border border-black dark:border-white'></div>
            <div className='bg-green-600 rounded-full w-3 h-3'></div>
          </div>
        </div>
        <div className='flex gap-3 items-center'>
          <h4 className='text-lg'>Size:</h4>
          <div className='flex gap-1'>
            <div className='flex items-center justify-center border px-2 py-1 rounded-sm'>XS</div>
            <div className='flex items-center justify-center border px-2 py-1 rounded-sm'>S</div>
            <div className='flex items-center justify-center border px-2 py-1 rounded-sm bg-green-700 text-white'>M</div>
            <div className='flex items-center justify-center border px-2 py-1 rounded-sm'>L</div>
            <div className='flex items-center justify-center border px-2 py-1 rounded-sm'>XL</div>
          </div>
        </div>
        <div className='flex gap-2'>
          <div className='flex border border-black dark:bg-white dark:text-black'>
            <div className='basis-1/4 flex justify-center items-center py-1 border border-black px-6 text-lg'>-</div>
            <div className='basis-1/2 flex justify-center items-center py-1 border border-black px-12'>2</div>
            <div className='basis-1/4 flex justify-center items-center py-1 border border-black px-6 bg-green-700 text-white text-lg'>+</div>
          </div>
          <Button content='Buy Now' background='bg-green-700' text='text-white' />
          <div className='flex items-center justify-center px-3 rounded-sm border border-black'>
          <IoIosHeartEmpty size={24} />
          </div>
        </div>
        <div className='grid grid-rows-1 gap-3 px-5 py-3 border w-full'>
        <div className='flex gap-4 items-center'>
          <div>
            <TbTruckDelivery size={32} />
          </div>
          <div>
            <h5 className='font-medium'>Free Delivery</h5>
            <p>Enter your postal code for Delivery Availablity</p>
          </div>
        </div>
        <hr />
        <div className='flex gap-4 items-center'>
          <div>
          <HiArrowPathRoundedSquare size={32} />
          </div>
          <div>
            <h5 className='font-medium'>Return Delivery</h5>
            <p>Enter your postal code for Delivery Availablity</p>
          </div>
        </div>
        </div>
        </div>
    </div>
    <div>
    <NoteNB value='Related item' />

    </div>
    </div>
  )
}

export default ProductDetails