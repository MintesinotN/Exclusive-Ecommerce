import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import InputField from '../components/InputField';
import Button from '../components/Button';

const Contact = () => {
  return (
    <div className='xl:mx-32 mx-2 sm:mx-8 dark:text-white py-12'>
      <p><span className='text-gray-500'>Home /</span> Contact</p>
      <div className='py-12 flex gap-8 max-md:flex-col'>
        <div className='p-1 sm:p-6 flex flex-col gap-4 dark:shadow-gray-900 shadow-sm basis-1/3'>
        <div className='flex gap-2 items-center'>
          <div className='bg-green-700 w-8 h-8 rounded-full flex items-center justify-center'>
          <IoCallOutline color='white' />
          </div>
          <p className='font-medium'>Call TO US</p>
        </div>
        <p className='text-nowrap'>We are available 24/7, 7 days a weeks.</p>
        <p>Phone +8801611112222</p>
        <hr className='my-3' />
        <div className='flex gap-2 items-center'>
          <div className='bg-green-700 w-8 h-8 rounded-full flex items-center justify-center'>
          <MdOutlineLocalPostOffice color='white' />
          </div>
          <p className='font-medium'>Write To US</p>
        </div>
        <p>Fill out our form and we will contact you within 24 hours.</p>
        <p>Emails: customer@exclusive.com</p>
        <p>Emails: support@exclusive.com</p>
        </div>
        <div className='p-2 sm:p-6 shadow-sm basis-2/3 dark:shadow-gray-900 flex flex-col gap-6'>
        <div className='grid xl:grid-cols-3 gap-3'>
        <InputField placeholder='Your Name*' />
        <InputField placeholder='Your Email*' />
        <InputField placeholder='Your Phone*' />
        </div>
        <textarea name="" id="" className='h-full w-full bg-gray-100 resize-none px-4 py-3 outline-none rounded-sm' placeholder='Your Message' />
        <div className='flex justify-center sm:justify-end'>
        <Button content='Send Message' background='bg-green-700' text='text-white' />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact