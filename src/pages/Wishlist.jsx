import React from 'react'
import Button from '../components/Button'
import NoteNB from '../components/NoteNB'

const Wishlist = () => {
  return (
    <div className='xl:mx-32 mx-2 sm:mx-8 dark:text-white py-12'>
        <div className='flex flex-col sm:flex-row justify-between gap-y-2 sm:items-end'>
            <h2 className='sm:text-2xl text-xl text-nowrap capitalize'>Wishlist ()</h2>
            <div>
            <Button content='Move All To Bag' background='dark:white' text='' border='border-2 border-gray-400 rounded-md' />
            </div>
        </div>
        <div className='flex justify-between items-end pt-12'>
            <NoteNB value='Just For You' />
            <div>
            <Button content='See All' background='dark:white' text='' border='border-2 border-gray-400 rounded-md' />
            </div>
        </div>
    </div>
  )
}

export default Wishlist