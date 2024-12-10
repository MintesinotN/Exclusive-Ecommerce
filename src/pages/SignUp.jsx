import React, { useState, useContext } from 'react'
import Button from '../components/Button'
import { FcGoogle } from "react-icons/fc";
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const navigate = useNavigate()

  const [data, setData] = useState({})
  const [register,setRegister] = useState(false)


  const { url, setUserId } = useContext(StoreContext)

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const onSignup = async (event) => {

    const newUrl = url+"/users";

    const response = await axios.get(newUrl); // Fetch data
    const users = response.data.data; // Assuming API returns an array of users or similar structure
      console.log(users)
    const user = users.find((u) => u.email === data.email);

    if (user) {
      alert("user Already Exist!")
    }

    else if (!data.name || !data.email || !data.password) {
      alert('All fields are required!');
      return;
    }

    else if (!/\S+@\S+\.\S+/.test(data.email)) {
      alert('Please enter a valid email address!');
      setData(data=>({...data,email:""}))
      return;
    }

    else {
    const newUrl = url+"/users";
    
    await axios.post(newUrl, data)

    onLogin();

    setData({})

    alert('Form submitted successfully!');

  }
  }  

  const onLogin = async (event) => {

    if (!data.email || !data.password) {
      alert('All fields are required!');
      return;
    }

    else if (!/\S+@\S+\.\S+/.test(data.email)) {
      alert('Please enter a valid email address!');
      setData(data=>({...data,email:"",password:""}))
      return;
    }

    else {

    const newUrl = url+"/users";

    const response = await axios.get(newUrl); // Fetch data
    const users = response.data.data; // Assuming API returns an array of users or similar structure
      console.log(users)
    const user = users.find((u) => u.email === data.email);
    if (!user){
      alert("The user doesn't exist!")
    }

    else{
    const userC = user.password === data.password ? user._id : null;

    if (userC) {
      setUserId(userC);
      navigate('/home');
      console.log("Login Successfully!");
    } else {
      alert("Invalid Credential!");
    }
    }

  }

  }


  return (
    <div className='xl:mx-32 mx-2 md:mx-8 dark:text-white py-12'>
      <div className='flex max-sm:flex-col gap-y-12 items-center md:gap-8 gap-4 lg:gap-20'>
        <img src="./src/assets/Sign_up.png" alt="" className='xl:-ml-32 sm:max-md:w-72 max-xl:w-96 max-xl:h-96' />
        <form onSubmit={(e) => e.preventDefault()} className='flex flex-col'>
          <h3 className='font-medium text-2xl'>{register ? 'Log in to Exclusive' : 'Create an account'}</h3>
          <p className='pt-2 pb-5'>Enter your details below</p>
          <div className='flex flex-col gap-5'>
            {
              register ? '' : <label htmlFor="name">
                <input name='name' value={data.name} onChange={onChangeHandler} type="text" className='outline-none dark:bg-black' placeholder='Name' required />
                <hr className='border-gray-300 my-1' />
              </label>
            }
            <label htmlFor="email">
              <input name='email' value={data.email} onChange={onChangeHandler} type="email" className='outline-none dark:bg-black' placeholder='Email or Phone Number' required />
              <hr className='border-gray-300 my-1' />
            </label>
            <label htmlFor="password">
              <input name='password' value={data.password} onChange={onChangeHandler} type="password" className='outline-none dark:bg-black' placeholder='Password' required />
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
            register ? <p className='text-green-800 dark:text-white text-center'>Haven't you account? <span onClick={() => setRegister(false)} className='font-medium dark:text-green-700'>Sign in</span></p> : <p className='text-green-800 dark:text-white text-center'>Already have account? <span onClick={() => setRegister(true)} className='font-medium dark:text-green-700'>Log in</span></p>
          }
        </form>
      </div>
    </div>
  )
}

export default SignUp