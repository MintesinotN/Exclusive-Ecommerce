import React, { useContext, useEffect, useState } from 'react'
import NoteNB from '../components/NoteNB'
import { IoIosStar } from "react-icons/io";
import Button from '../components/Button'
import { IoIosHeartEmpty } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {

  const navigate = useNavigate(); 
  const {detail,AddToCart} = useContext(StoreContext);

  return (
    <div className='xl:mx-32 mx-2 sm:mx-8 dark:text-white py-12'>
    <p><span className='text-gray-500'>Home / {detail.category} /</span> {detail.title}</p>
    <div className='xl:-ml-24 lg:max-xl:mx-32 grid grid-cols-3 py-12 gap-8 max-xl:flex max-xl:flex-col'>
        <div className='flex max-sm:flex-col-reverse col-span-2 gap-2 h-full'>
        <div className='basis-1/4 grid max-sm:grid-cols-4 grid-cols-1 gap-2'>
        <div className='bg-gray-100 max-sm:h-20'></div>
        <div className='bg-gray-100 max-sm:h-20'></div>
        <div className='bg-gray-100 max-sm:h-20'></div>
        <div className='bg-gray-100 max-sm:h-20'></div>
        </div>
        <div className='basis-3/4 bg-gray-100 flex justify-center items-center py-12 lg:max-xl:h-[500px]'>
        <img src={detail.image} alt="" width={300} className='sm:max-xl:h-96' />
        </div>
        </div>
        <div className='grid col-span-1 gap-4'>
        <h2 className='font-medium text-lg'>{detail.title}</h2>
        <div className='flex flex-wrap items-center gap-1'>
        {[1,2,3,4,5].map((star) => (
            <IoIosStar key={star} className={5 >= star ? 'text-yellow-500' : 'text-gray-300'} />
        ))}
        <p className='text-nowrap pl-2 text-zinc-500'>(150 Reviews) | </p>
        <p className='text-nowrap text-yellow-200'>In Stock</p>
        </div>
        <h4 className='text-lg'>${detail.price}</h4>
        <p>{detail.description}</p>
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
        <div className='max-sm:flex-col flex gap-2'>
          <div className='flex border border-black dark:bg-white dark:text-black min-h-[54px] max-w-60'>
            <div className='basis-1/4 flex justify-center items-center py-1 border border-black px-6 text-lg'>-</div>
            <div className='basis-1/2 flex justify-center items-center py-1 border border-black px-12'>3</div>
            <div className='basis-1/4 flex justify-center items-center py-1 border border-black px-6 bg-green-700 text-white text-lg'>+</div>
          </div>
          <div className='flex gap-2'>
          <div onClick={()=>{
            AddToCart(detail.id);
            // setCountVal(1);
            navigate('/cart');
          }}>
          <Button content='Buy Now' background='bg-green-700' text='text-white' />
          </div>
          <div className='flex items-center justify-center px-3 rounded-sm border border-black'>
          <IoIosHeartEmpty size={24} />
          </div>
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