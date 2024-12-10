import React, { useContext } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { StoreContext } from '../context/StoreContext';

const CartDescription = ({id,price,image,count}) => {

  const {Increment,Decrement,Remover} = useContext(StoreContext)

  const itemPrice = Math.round(price * 100) / 100

  return (
    <div className='flex items-center py-4 sm:px-8 shadow-sm dark:shadow-gray-900 min-w-[400px]'>
        <p className='basis-5/12'>
        <img src={image} alt="" width={32} />
        </p>
        <p className='basis-2/12'>{itemPrice}</p>
        <div className='basis-3/12'>
        <div className='gap-4 w-fit rounded-md flex items-center border border-gray-400 py-1 px-2'>
        <p>{count}</p>
        <div>
          <div onClick={()=>Increment(id)}>
          <IoIosArrowUp />
          </div>
          <div onClick={()=>Decrement(id)}>
          <IoIosArrowDown />
          </div>
        </div>
        </div>
        </div>
        <p className='basis-1/12 pl-2'>{itemPrice*count}</p>
        <p onClick={()=>Remover(id)} className='basis-1/12 text-center'>X</p>
    </div>
  )
}

export default CartDescription