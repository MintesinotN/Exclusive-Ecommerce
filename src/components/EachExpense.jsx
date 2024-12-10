import React from 'react'

const EachExpense = ({background='',text='',title,desc,icon,border='border border-black',selected='bg-black'}) => {
  return (
    <div className={`flex flex-col items-center gap-2 ${background} ${text} ${border} py-8 rounded-sm`}>
        <div className='w-16 h-16 bg-gray-500 flex justify-center items-center rounded-full'>
            <div className={`flex justify-center items-center w-12 h-12 rounded-full ${selected}`}>
            {icon}
            </div>
        </div>
        <h3 className='font-semibold text-2xl'>{title}</h3>
        <p className='text-sm'>{desc}</p>
    </div>
  )
}

export default EachExpense