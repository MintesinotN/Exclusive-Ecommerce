import React from 'react'

const ServiceTips = ({icon,title,desc}) => {
  return (
    <div className='flex flex-col items-center gap-2'>
        <div className='w-16 h-16 bg-gray-500 flex justify-center items-center rounded-full'>
            <div className='flex justify-center items-center bg-black w-12 h-12 rounded-full'>
            {icon}
            </div>
        </div>
        <h3 className='font-semibold'>{title}</h3>
        <p className='text-sm'>{desc}</p>
    </div>
  )
}

export default ServiceTips