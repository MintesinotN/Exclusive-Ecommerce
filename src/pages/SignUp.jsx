import React, { useState, useContext } from 'react'
import Button from '../components/Button'
import { FcGoogle } from "react-icons/fc";
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignUp = () => {

  const navigate = useNavigate();

  const [data, setData] = useState({
    name:"",
    email:"",
    password:""
  })
  const [register,setRegister] = useState(false)

  const { url, setToken, token } = useContext(StoreContext)

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const onSignup = async (event) => {
    event.preventDefault()
    let newUrl = url;

    newUrl += "/api/user/register"

    const response = await axios.post(newUrl,data);

    if (response.data.success) {
      setToken(response.data.token);
      sessionStorage.setItem("token",response.data.token);
      navigate('/home');
      toast.success('Login successful!');
    }
    else{
      toast.error(response.data.message || 'Login failed');
    }
  } 

  const onLogin = async (event) => {
    event.preventDefault()
    let newUrl = url;

    newUrl += "/api/user/login"

    const response = await axios.post(newUrl,data);

    if (response.data.success) {
      setToken(response.data.token);
      sessionStorage.setItem("token",response.data.token);
      navigate('/home');
      toast.success('Login successful!');
    }
    else{
      toast.error(response.data.message || 'Login failed');
    }
  }


  return (
    <div className='xl:mx-32 mx-2 md:mx-8 dark:text-white py-12'>
      <div className='flex max-sm:flex-col gap-y-12 items-center md:gap-8 gap-4 lg:gap-20'>
        <img src="./assets/Sign_up.png" alt="" className='xl:-ml-32 sm:max-md:w-72 max-xl:w-96 max-xl:h-96' />
        <form onSubmit={(e) => e.preventDefault()} className='flex flex-col'>
          <h3 className='font-medium text-2xl'>{register ? 'Log in to Exclusive' : 'Create an account'}</h3>
          <p className='pt-2 pb-5'>Enter your details below</p>
          <div className='flex flex-col gap-5'>
            {
              register ? '' : <label htmlFor="name">
                <input name='name' value={data.name} onChange={onChangeHandler} type="text" className='outline-none dark:bg-black w-full px-2' placeholder='Name' required />
                <hr className='border-gray-300 my-1' />
              </label>
            }
            <label htmlFor="email">
              <input name='email' value={data.email} onChange={onChangeHandler} type="email" className='outline-none dark:bg-black w-full px-2' placeholder='Email or Phone Number' required />
              <hr className='border-gray-300 my-1' />
            </label>
            <label htmlFor="password">
              <input name='password' value={data.password} onChange={onChangeHandler} type="password" className='outline-none dark:bg-black w-full px-2' placeholder='Password' required />
              <hr className='border-gray-300 my-1' />
            </label>
          </div>
          <div className='flex flex-col gap-3 my-6'>
            {
              register ? <div className='flex justify-between max-lg:flex-col max-sm:gap-4'>
                <Button onclick={onLogin} content='Login' background='bg-green-700' text='w-full text-white' />
                <Button content='Forget Password?' text='text-green-600 w-full border' background='dark:bg-white' />
              </div> :
              <div className='flex flex-col gap-4'>
                <Button onclick={onSignup} content='Create Account' background='bg-green-700 w-full' text='text-white' />
                <Button content={<div className='flex items-center gap-2'><FcGoogle size={24} /> Sign up with Google</div>} border='border-2 border-gray-200 w-full' />
              </div>
            }
          </div>
          {
            register ? <p className='text-green-800 dark:text-white text-center'>Haven't you account? <span onClick={() => setRegister(false)} className='font-medium dark:text-green-700 cursor-pointer'>Sign in</span></p> : <p className='text-green-800 dark:text-white text-center'>Already have account? <span onClick={() => setRegister(true)} className='font-medium dark:text-green-700 cursor-pointer'>Log in</span></p>
          }
        </form>
      </div>
    </div>
  )
}

export default SignUp