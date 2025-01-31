import React, { useContext, useState } from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import NoteNB from './NoteNB';
import CategoryList from './CategoryList';
import Display from './Display';
import { StoreContext } from '../context/StoreContext';
import EachProduct from './EachProduct';
import Button from './Button';
import ServiceTipsContainer from './ServiceTipsContainer';

const Browse = () => {

  const [countValue, setCountValue] = useState(5);
  const {setSelected,allProducts} = useContext(StoreContext)

  const CategoriesList = [
    {
      category: "men's clothing",
      image:'./assets/men.png'
    },
    {
      category: "women's clothing",
      image:'./assets/women.png'
    },
    {
      category: 'jewelery',
      image:'./assets/jewelery.png'
    },
    {
      category: "electronics",
      image:'./assets/electronics.png'
    }
  ];

  return (
    <div className='xl:mx-32 mx-2 sm:mx-8 dark:text-white'>
        <NoteNB value='Categories' />
        <div className='flex justify-between items-end mt-2'>
            <div className='basis-1/2 flex flex-col sm:flex-row sm:items-end justify-between'>
                <h2 className='sm:text-4xl text-xl font-semibold text-nowrap'>Browse By Category</h2>
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
        <div className='flex gap-6 my-10 overflow-x-auto custom-scroll'>
        {CategoriesList.map((category) => 
          <CategoryList key={category.category} setSelected={setSelected} category={category.category} image={category.image} />
        )}
        </div>
        <hr className='my-10' />
        <div className='flex gap-2 text-sm items-center dark:text-white text-orange-400 font-semibold'>
        <div className='bg-orange-400 w-3 h-6 rounded-sm'></div>
        <p>Available</p>
        </div>
        <Display />
        <div className='bg-black flex mt-20 lg:px-24 lg:py-4'>
          <div className='basis-1/2 hidden lg:flex flex-col gap-5 justify-center'>
          <p className='text-orange-500'>Categories</p>
          <h2 className='text-4xl py-4 font-semibold text-white'>Enhance Your Music Experience</h2>
          <div className='flex gap-4'>
            <div className='bg-white w-14 h-14 rounded-full flex flex-col justify-center leading-3 items-center'>
              <h4 className='font-semibold'>23</h4>
              <p className='text-sm'>Hours</p>
            </div>
            <div className='bg-white w-14 h-14 rounded-full flex flex-col justify-center leading-3 items-center'>
              <h4 className='font-semibold'>05</h4>
              <p className='text-sm'>Days</p>
            </div>
            <div className='bg-white w-14 h-14 rounded-full flex flex-col justify-center leading-3 items-center'>
              <h4 className='font-semibold'>59</h4>
              <p className='text-sm'>Minutes</p>
            </div>
            <div className='bg-white w-14 h-14 rounded-full flex flex-col justify-center leading-3 items-center'>
              <h4 className='font-semibold'>35</h4>
              <p className='text-sm'>Seconds</p>
            </div>
          </div>
          <Button content='Buy Now!' background='bg-orange-400' text='text-white' border='' />
          </div>
          <div>
          <img src="./assets/Music.png" alt="Musical Instrument" className='mx-auto' />
          </div>
        </div>
        <div className='my-12'>
        <NoteNB value='Our Products' />
        <div className='flex justify-between items-end mt-2'>
            <div className='basis-1/2 flex flex-col sm:flex-row sm:items-end justify-between'>
                <h2 className='sm:text-4xl text-xl font-semibold text-nowrap'>Explore Our Products</h2>
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
        </div>
        <div className='flex gap-5 flex-wrap justify-center sm:justify-start'>
          {
            allProducts.slice(0,countValue).map((product,key)=>
              <EachProduct key={key} image={product.image} title={product.title} price={product.price} rating={product.rating} />
            )
          }
        </div>
        <div className='flex justify-center sm:justify-start md:justify-center mt-4'>
        {countValue==5 ? <div onClick={()=>setCountValue(allProducts.length)}><Button content='View All Products' background='bg-green-800' text='text-white' border='' /></div> : <div onClick={()=>setCountValue(5)}><Button content='Show Less' background='bg-green-800' text='text-white' border='' /></div>}
        </div>
        <div className='my-12'>
        <NoteNB value='Featured' />
        <div className='flex justify-between items-end mt-2'>
            <div className='basis-1/2 flex flex-col sm:flex-row sm:items-end justify-between'>
                <h2 className='sm:text-4xl text-xl font-semibold text-nowrap'>New Arrival</h2>
            </div>
        </div>
        </div>
        <div className='grid grid-cols-4 grid-rows-4 p-8 -mx-2 sm:mx-0 justify-items-stretch'>
            <img src='./assets/Arrival1.png' className='bg-black col-span-2 row-span-4' />
            <img src='./assets/Arrival2.png' className='bg-black col-span-2 row-span-2' />
            <img src='./assets/Arrival3.png' className='bg-black row-span-2' />
            <img src='./assets/Arrival4.png' className='bg-black row-span-2' />
        </div>
        <ServiceTipsContainer />
    </div>
  )
}

export default Browse