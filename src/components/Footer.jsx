import React from 'react'
import { LuSendHorizontal } from "react-icons/lu";
import { BsQrCode } from "react-icons/bs";
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { RiLinkedinLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='bg-black'>
    <hr className='invisible dark:visible mx-4 md:mx-8 xl:mx-32' />
    <div className='flex mx-4 md:mx-8 xl:mx-32 py-8 xl:py-16 text-white gap-16 flex-col sm:flex-row sm:flex-wrap'>
        <div className='flex flex-col gap-3'>
            <h3 className='font-semibold text-2xl'>Exclusive</h3>
            <h4 className='text-lg font-medium'>Subscribe</h4>
            <p>Get 10% off your first order</p>
            <div className='flex items-center border-white py-2 px-4 border-2 rounded-sm w-fit'>
                <input type="text" placeholder='Enter your email' className='bg-black placeholder:text-gray-700 -mr-8 outline outline-none' />
                <LuSendHorizontal color='white' size={20} />
            </div>
        </div>
        <div className='flex flex-col gap-3'>
            <h4 className='text-lg font-medium'>Support</h4>
            <div className='flex flex-col gap-3'>
                <p className='text-wrap'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                <p className='pr-4 text-nowrap'>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </div>
        </div>
        <div className='flex flex-col gap-3'>
            <h4 className='text-lg font-medium'>Account</h4>
            <div className='flex flex-col gap-3'>
                <p>My Account</p>
                <p className='text-nowrap'>Login / Register</p>
                <p>Cart</p>
                <p>Wishlist</p>
                <p>Shop</p>
            </div>
        </div>
        <div className='flex flex-col gap-3'>
            <h4 className='text-lg font-medium'>Quick Link</h4>
            <div className='flex flex-col gap-3'>
                <p className='text-nowrap pr-2'>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
            </div>
        </div>
        <div className='flex flex-col gap-3'>
            <h4 className='text-lg font-medium'>Download App</h4>
            <p className='text-nowrap'>Save $3 with App New User Only</p>
            <div className='flex gap-2'>
            <BsQrCode size={96} />
            <div className='flex flex-col justify-between'>
                <img src="./assets/Google_play.png" width={130} alt="" />
                <img src="./assets/App_store.png" width={130} alt="" />
            </div>
            </div>
            <div className='flex gap-5'>
            <RiFacebookLine size={24} />
            <CiTwitter size={24} />
            <IoLogoInstagram size={24} />
            <RiLinkedinLine size={24} />
            </div>
        </div>
    </div>
    <hr className='border-gray-700' />
    <p className='text-gray-700 text-center py-4 text-lg'>
    <span className='text-2xl'>&#169;</span> Copyright Rimel 2022. All right reserved
    </p>
    </div>
  )
}

export default Footer