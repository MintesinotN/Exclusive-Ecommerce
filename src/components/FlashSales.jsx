import React, { useContext } from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import EachProduct from './EachProduct';
import { StoreContext } from '../context/StoreContext';
import Button from './Button';
import NoteNB from './NoteNB';

const FlashSales = () => {

    const {allProducts} = useContext(StoreContext);

  return (
    <div className='xl:mx-32 mx-2 sm:mx-8 mt-12 sm:mt-32 dark:text-white'>
        <NoteNB value="Today's" />
        <div className='flex justify-between items-end'>
            <div className='basis-1/2 flex flex-col sm:flex-row sm:items-end justify-between'>
                <h2 className='sm:text-4xl text-xl font-semibold text-nowrap'>Flash Sales</h2>
                <div className='flex items-end'>
                    <div className='sm:px-2'>
                        <p className='text-xs font-semibold max-sm:hidden'>Days</p>
                        <h2 className='sm:text-4xl text-xl font-medium'>03</h2>
                    </div>
                    <h2 className='sm:text-3xl text-xl font-medium'>:</h2>
                    <div className='px-2'>
                        <p className='text-xs font-semibold max-sm:hidden'>Hours</p>
                        <h2 className='sm:text-4xl text-xl font-medium'>23</h2>
                    </div>
                    <h2 className='sm:text-3xl text-xl font-medium'>:</h2>
                    <div className='px-2'>
                        <p className='text-xs font-semibold max-sm:hidden'>Minutes</p>
                        <h2 className='sm:text-4xl text-xl font-medium'>19</h2>
                    </div>
                    <h2 className='sm:text-3xl text-xl font-medium'>:</h2>
                    <div className='px-2'>
                        <p className='text-xs font-semibold max-sm:hidden'>Seconds</p>
                        <h2 className='sm:text-4xl text-xl font-medium'>56</h2>
                    </div>
                </div>
            </div>
            <div className='basis-1/2 justify-end flex gap-2'>
            <div className='bg-gray-100 w-9 h-9 rounded-full flex items-center justify-center'>
            <IoIosArrowRoundBack size={28} color='black' />
            </div>
            <div className='bg-gray-100 w-9 h-9 rounded-full flex items-center justify-center'>
            <IoIosArrowRoundForward size={28} color='black' />
            </div>
            </div>
        </div>
        <div className='xl:-mr-32 mt-8 flex gap-5 overflow-x-auto custom-scroll'>
            {allProducts.map((product,index)=><EachProduct key={index} id={product.id} image={product.image} title={product.title} price={product.price} rating={product.rating}  />)}
        </div>
        <div className='flex justify-center mt-4'>
        <Button content='View All Products' background='bg-green-800' text='text-white' border='' />
        </div>
        <hr className='my-16' />
    </div>
  )
}

export default FlashSales