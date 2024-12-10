import React from 'react'
import InputField from '../components/InputField'
import Button from '../components/Button'

const Account = () => {
  return (
    <div className='xl:mx-32 mx-2 sm:mx-8 dark:text-white py-12'>
    <div className='flex justify-between gap-1'>
    <p><span className='text-gray-500'>Home /</span> My Account</p>
    <p>Welcome! <span className='text-green-700'>Md Rimel</span></p>
    </div>
    <div className='my-12 flex flex-col md:flex-row gap-12 lg:gap-32'>
        <div className='flex flex-col gap-3 text-nowrap'>
            <div className='flex flex-col gap-3'>
                <h4 className='font-medium'>Manage My Account</h4>
                <div className='flex flex-col gap-2 pl-8 text-gray-500'>
                    <p>My Profile</p>
                    <p>Address Book</p>
                    <p>My Payment Options</p>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <h4 className='font-medium'>Manage My Orders</h4>
                <div className='flex flex-col gap-2 pl-8 text-gray-500'>
                    <p>My Returns</p>
                    <p>My Cancellations</p>
                </div>
            </div>
            <h4 className='font-medium'>My WishList</h4>
        </div>
        <div className='flex flex-col gap-3 w-full shadow-sm dark:shadow-gray-900 md:px-10 md:py-6 lg:px-20 lg:py-12'>
            <h3 className='font-medium text-lg text-green-700'>Edit Your Profile</h3>
            <div className='grid lg:grid-cols-2 gap-y-4 gap-x-12'>
            <InputField labelCol='dark:white' label='First Name' placeholder='Md' />
            <InputField labelCol='dark:white' label='Last Name' placeholder='Rimel' />
            <InputField labelCol='dark:white' label='Email' placeholder='rimel1111@gmail.com' />
            <InputField labelCol='dark:white' label='Address' placeholder='Kingston, 5236, United State' />
            </div>
            <div className='flex flex-col gap-2 py-4'>
            <p>Password Changes</p>
            <InputField placeholder='Current Password' />
            <InputField placeholder='New Password' />
            <InputField placeholder='Confirm New Password' />
            </div>
            <div className='flex justify-end'>
            <Button content='Cancel' background='white' text='dark:text-white' border='' />
            <Button content='Save Changes' background='bg-green-800' text='text-white' border='' />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Account