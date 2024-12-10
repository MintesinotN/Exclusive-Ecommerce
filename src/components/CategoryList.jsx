import React from 'react'

const CategoryList = ({setSelected,category,image}) => {
  return (
    <div onClick={()=>setSelected(category)} className='flex flex-col items-center justify-center gap-4 border-teal-950 border-2 rounded-md py-4 px-2 text-lg min-w-fit dark:bg-white'>
        <img src={image} alt={category} className='w-48 h-40' />
        <p className='capitalize dark:text-black'>{category}</p>
    </div>
  )
}

export default CategoryList