import React from 'react'
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { RiLinkedinLine } from "react-icons/ri";

const Member = ({image,title,desc}) => {
  return (
    <div className='flex flex-col gap-2'>
        <div className='flex bg-gray-100 justify-center px-4 pt-4 h-full'>
            <img src={image} width={240} alt="" />
        </div>
        <h4 className='text-xl font-medium'>{title}</h4>
        <p>{desc}</p>
        <div className='flex gap-2'>
        <CiTwitter size={24} /> 
        <IoLogoInstagram size={24} />
        <RiLinkedinLine size={24} />
        </div>
    </div>
  )
}

export default Member