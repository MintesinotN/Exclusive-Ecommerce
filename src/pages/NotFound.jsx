import React from 'react'
import Button from '../components/Button'

const NotFound = () => {
  return (
    <div className='xl:mx-32 mx-2 sm:mx-8 dark:text-white py-12'>
    <p><span className='text-gray-500'>Home /</span> 404 Error</p>
    <div className='py-12 sm:py-20 md:py-32 items-center flex flex-col gap-4 sm:gap-8 md:gap-12 justify-center'>
        <h1 className='font-semibold text-xl sm:text-6xl md:text-8xl'>404 Not Found</h1>
        <p>Your visited page not found. <span className='max-sm:hidden'>You may go home page.</span></p>
        <Button content='Back to home page' background='bg-green-700' text='text-white' />
    </div>
    </div>
  )
}

export default NotFound