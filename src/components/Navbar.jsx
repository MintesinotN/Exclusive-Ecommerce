import React, { useContext, useState } from 'react'
import { HiOutlineSearch } from "react-icons/hi";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { RxAvatar } from "react-icons/rx";
import { StoreContext } from '../context/StoreContext';
import { MdOutlineCancel } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";
import { SlLogout } from "react-icons/sl";
import { FiShoppingBag } from "react-icons/fi";
import { useLocation } from 'react-router-dom';

const Navbar = () => {

  const currUrl = useLocation();
  const navigate = useNavigate();

  const [account,setAccount] = useState('hidden');
  const [menu,setMenu] = useState('hidden')
  const {userId,setUserId,cart,setCart} = useContext(StoreContext);

  const Logout = () => {
    setAccount('hidden');
    setUserId(0);
    sessionStorage.removeItem("cart");
    setCart([]);
  }

  return (
    <div className='pt-2 sm:pt-10 dark:text-white'>
        <div className='mx-4 sm:mx-8 xl:mx-32 justify-between flex items-center relative'>
        <div className='flex items-end gap-1 sm:gap-4'>
        <h2 className='font-semibold text-2xl sm:text-3xl'>Exclusive</h2>
        <div className='relative xl:hidden'>
        <div onClick={()=>{menu ? setMenu('') : setMenu('hidden')}}>
        <GiHamburgerMenu size={25} />
        </div>
        <div className={`${menu} absolute flex flex-col text-xl gap-4 text-nowrap bg-black py-4 px-4 -left-[117px] sm:-left-[169px] text-white w-52 border border-white rounded-sm`}>
        <NavLink to='home' className={({ isActive }) =>
          `${
            isActive ? "text-gray-400" : ""
          }`
        }>Home</NavLink>
        <hr />
            <NavLink to='contact' className={({ isActive }) =>
          `${
            isActive ? "text-gray-400" : ""
          }`
        }>Contact</NavLink>
        <hr />
            <NavLink to='about' className={({ isActive }) =>
          `${
            isActive ? "text-gray-400" : ""
          }`
        }>About</NavLink>
        <hr />
            <NavLink to='/' className={({ isActive }) =>
          `${
            isActive ? "text-gray-400" : ""
          }`
        }>Sign Up</NavLink>
        </div>
        </div>
        </div>
        <div className='hidden xl:flex justify-between text-xl gap-12'>
            <NavLink to='home' className={({ isActive }) =>
          `${
            isActive ? "underline underline-offset-8 decoration-slate-900 dark:decoration-slate-50" : ""
          }`
        }>Home</NavLink>
            <NavLink to='contact' className={({ isActive }) =>
          `${
            isActive ? "underline underline-offset-8 decoration-slate-900 dark:decoration-slate-50" : ""
          }`
        }>Contact</NavLink>
            <NavLink to='about' className={({ isActive }) =>
          `${
            isActive ? "underline underline-offset-8 decoration-slate-900 dark:decoration-slate-50" : ""
          }`
        }>About</NavLink>
            <NavLink to='/' className={({ isActive }) =>
          `${
            isActive ? "underline underline-offset-8 decoration-slate-900 dark:decoration-slate-50" : ""
          }`
        }>Sign Up</NavLink>
        </div>
        <div className='flex gap-4 items-center'>
            <label className='sm:flex items-center hidden bg-gray-100 py-2 px-4' htmlFor="search">
                <input className='bg-slate-100 dark:text-black outline-none w-52 placeholder:text-gray-500' type="text" id='search' placeholder='What are you looking for?' />
                <HiOutlineSearch className='dark:text-black' size={20} />
            </label>
            <IoIosHeartEmpty size={24} />
            <div onClick={()=>navigate('/cart')} className='relative'>
              <IoCartOutline size={24} />
              <div className={`${cart.length ? 'flex': 'hidden'} absolute justify-center items-center bg-green-700 rounded-full w-4 h-4 -top-2 -right-2 text-white text-[10px]`}>
                {cart.length}
              </div>
            </div>
            <div onClick={()=>{account ? setAccount('') : setAccount('hidden')}}>
              {
              userId ? <RxAvatar size={24} /> : ''
              }
            </div>
        </div>
        <div className={`bg-gray-600 ${account} p-4 flex flex-col gap-3 text-white absolute top-12 right-0 rounded-sm`}>
          <Link to='account' className='flex gap-4 items-center'>
          <RxAvatar size={20} />
          <p>Manage My Account</p>
          </Link>
          <Link to={currUrl} className='flex gap-4 items-center'>
          <FiShoppingBag size={20} />
          <p>My Order</p>
          </Link>
          <Link to={currUrl} className='flex gap-4 items-center'>
          <MdOutlineCancel size={20} />
          <p>My Cancellations</p>
          </Link>
          <Link to={currUrl} className='flex gap-4 items-center'>
          <IoIosStarOutline size={20} />
          <p>My Reviews</p>
          </Link>
          <Link to='/' onClick={()=>Logout()} className='flex gap-4 items-center'>
          <SlLogout size={20} />
          <p>Logout</p>
          </Link>
        </div>
        </div>
        <hr className='mt-4' />
    </div>
  )
}

export default Navbar