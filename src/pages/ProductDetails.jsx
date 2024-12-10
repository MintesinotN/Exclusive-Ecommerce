import React from 'react'
import NoteNB from '../components/NoteNB'
import { IoIosStar } from "react-icons/io";

const ProductDetails = () => {
  return (
    <div className='xl:mx-32 mx-2 sm:mx-8 dark:text-white py-12'>
    <p><span className='text-gray-500'>Home / Gaming /</span> Havic HV G-92 Gamepad</p>
    <div className='grid grid-cols-3 py-12'>
        <div className='flex col-span-2'>
        <div className='basis-1/4'></div>
        <div className='basis-3/4'></div>
        </div>
        <div className='flex flex-col col-span-1'>
        <h2>Havic HV G-92 Gamepad</h2>
        <div className='flex items-center gap-1'>
        {[1,2,3,4,5].map((star) => (
            <IoIosStar key={star} className={5 >= star ? 'text-yellow-500' : 'text-gray-300'} />
        ))}
        <p className='text-nowrap pl-2 text-zinc-500'>(150 Reviews) | </p>
        <p className='text-nowrap text-yellow-200'>In Stock</p>
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