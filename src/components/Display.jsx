import React, { useContext } from 'react'
import Button from './Button'
import { StoreContext } from '../context/StoreContext'
import EachProduct from './EachProduct'

const Display = () => {

    const {allProducts,selected,setSelected,AddToCart} = useContext(StoreContext)

    const selectedOne = selected ? allProducts.filter((product)=>product.category===selected) : allProducts;

  return (
    <div>
        <div className='flex justify-between items-end'>
            <h2 className='sm:text-4xl text-xl font-semibold text-nowrap capitalize'>{selected ? selected : 'All Products'}</h2>
            <div onClick={()=>setSelected('')} className='xl:mr-32 mr-0'>
            <Button content='View All' background='bg-green-800' text='text-white' border='' />
            </div>
        </div>
        <div className='mt-8 flex gap-5 flex-wrap justify-center sm:justify-start'>
        {
            selectedOne.map((product)=>
                <EachProduct onclick={()=>AddToCart(product.id)} customVal="group-hover:flex" id={product.id} image={product.image} title={product.title} price={product.price} rating={product.rating} />
            )
        }
        </div>
    </div>
  )
}

export default Display