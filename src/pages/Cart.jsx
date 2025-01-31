import React, { useContext } from 'react'
import CartDescription from '../components/CartDescription'
import Button from '../components/Button'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

    const navigate = useNavigate();
    const {cart,allProducts,sum} = useContext(StoreContext);

  return (
    <div className='xl:mx-32 mx-2 sm:mx-8 dark:text-white py-12'>
        <p><span className='text-gray-500'>Home /</span> Cart</p>
        <div className='flex flex-col gap-8 my-8 overflow-x-auto custom-scroll'>
            <div className='flex py-4 sm:px-8 shadow-sm justify-between min-w-[400px]'>
                <p className='basis-5/12'>Product</p>
                <p className='basis-2/12'>Price</p>
                <p className='basis-3/12'>Quantity</p>
                <p className='basis-1/12 pl-2'>Subtotal</p>
                <p className='basis-1/12 pl-2'>Remove</p>
            </div>
            {  
          cart.length ? cart.map(cartItem => {
            // Find the product in allProducts based on cart item's id
            const item = allProducts.find((data) => data.id === cartItem.id);

            // Check if the product exists; if not, return a fallback UI
            if (!item) {
              return ;
            }

            // Destructure properties from the item
            const { price, image } = item;

            // Render CartDescription component
            return (
              <CartDescription
                key={cartItem.id}
                id={cartItem.id}
                price={price}
                image={image}
                count={cartItem.count}
              />
            );
          }) : <div className='text-center'>The cart is empty</div>
        }
        </div>
        <div className='flex flex-col gap-4 sm:flex-row sm:justify-between'>
        <Button onclick={()=>navigate('/home')} content='Return To Shop' background='dark:white' text='' border='border-2 border-gray-400 rounded-md' />
        <Button content='Update Cart' background='dark:white' text='' border='border-2 border-gray-400 rounded-md' />
        </div>
        <hr className='sm:hidden my-12' />
        <div className='my-16 flex justify-between gap-4 flex-wrap'>
            <div className='items-start flex gap-4 flex-col sm:flex-row'>
                <div name='coup' className='px-4 py-3 rounded-sm w-fit dark:border-none border-2 border-gray-400 dark:bg-white'>
                    <input type="text" name='coup' placeholder='Coupon Code' className='outline-none outline dark:text-black' />
                </div>
                <Button content='Apply Coupon' background='bg-green-800' text='text-white' border='' />
            </div>
            <div className='flex flex-col px-2 sm:px-5 py-7 rounded-sm border-2 border-black gap-4'>
                <h4 className='font-medium text-lg'>Cart Total</h4>
                <div className='flex flex-col gap-3'>
                    <div className='flex justify-between'>
                        <p>Subtotal:</p>
                        <p>${sum.toFixed(2)}</p>
                    </div>
                    <hr />
                    <div className='flex justify-between'>
                        <p>Shipping:</p>
                        <p>Free</p>
                    </div>
                    <hr className=' lg:w-96' />
                    <div className='flex justify-between'>
                        <p>Total:</p>
                        <p>${sum.toFixed(2)}</p>
                    </div>
                    <div className='flex justify-center'>
                    <Button onclick={()=>navigate('/checkOut')} content='Procees to checkout' background='bg-green-800' text='text-white' border='' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart