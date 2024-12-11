import React from 'react'

const CheckOutList = ({image,totalPrice}) => {
  return (
    <div className='flex justify-between my-2 items-center'>
        <div>
        <img src={image} alt="" width={32} />
        </div>
        <p>${totalPrice}</p>
    </div>
  )
}

export default CheckOutList