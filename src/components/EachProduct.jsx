import React from 'react'
import { IoIosStar } from "react-icons/io";

const EachProduct = ({onclick,customVal='',id,image,title,price,rating}) => {
  return (
    <div key={id} className='flex flex-col gap-2 font-medium max-w-56'>
        <div className='group flex items-center justify-center py-4 px-2 w-56 h-56 rounded-md border border-black dark:bg-white dark:border-white relative' >
            <img src={image} alt={title} className='' width={108} />
            <div onClick={onclick} className={`cursor-pointer hidden py-1 justify-center absolute bottom-0 bg-black text-white w-full rounded-md ${customVal}`}>
            Add To Cart
            </div>
        </div>
        <h3 className='uppercase'>{title}</h3>
        <p className='text-red-500 text-xl'>${price}  <del className='text-zinc-500'>${price*2}</del></p>
        <div className='flex items-center gap-1'>
        {[1,2,3,4,5].map((star) => (
            <IoIosStar key={star} className={rating.rate >= star ? 'text-yellow-500' : 'text-gray-300'} />
        ))}
        <p className='pl-2 text-zinc-500'>({rating.count})</p>
        </div>
    </div>
  )
}

export default EachProduct