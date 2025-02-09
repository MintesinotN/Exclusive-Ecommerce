import React from 'react'

const CheckOutList = ({category,image,totalPrice}) => {
  return (
    <div className='flex justify-between my-2 items-center'>
      <div className='flex items-center gap-2'>
      <img src={image} alt="" className='w-16 h-16 border border-black rounded-sm p-2' />
      <h4 className='text-lg'>{category}</h4>
      </div>
      <p>${totalPrice}</p>
    </div>
  )
}

export default CheckOutList