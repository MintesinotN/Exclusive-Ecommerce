import React from 'react'

const NoteNB = ({value}) => {
  return (
    <div className='flex gap-2 text-sm items-center dark:text-white text-green-900 font-semibold'>
        <div className='bg-green-900 w-3 h-6 rounded-sm'></div>
        <p className='text-nowrap'>{value}</p>
    </div>
  )
}

export default NoteNB