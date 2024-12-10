import React, { useContext, useState } from 'react'
import axios from 'axios'
import InputField from '../components/InputField'
import CheckOutList from '../components/CheckOutList'
import Button from '../components/Button'
import { StoreContext } from '../context/StoreContext'

const CheckOut = () => {

  const {cart,sum,allProducts,url,userId} = useContext(StoreContext);
  const [address, setAddress] = useState({});
  const [saveInfo, setSaveInfo] = useState(false);

  const OnChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAddress(data => ({ ...data, [name]: value }))
  }

  const handleCheckboxChange = (event) => {
    setSaveInfo(event.target.checked); // Update the state based on the checkbox
  };

  const orderAddress = async () => {
    
    if (!address.firstName || !address.streetAddress || !address.city || !address.phoneNumber || !address.email) {
      alert('All fields are required!');
      return;
    }

    else if (!/\S+@\S+\.\S+/.test(address.email)) {
      alert('Please enter a valid email address!');
      setAddress(data=>({...data,email:""}))
      return;
    }

    else if (!saveInfo) {
      alert("Please confirm the data!")
    }

    else {
    const newUrl = `${url}/users/address/${userId}`;

    try {
      await axios.patch(newUrl, {
        addressData: address
      });
      alert("Order-address data added successfully!");
    } catch (error) {
      console.error("Error adding order data:", error.message);
      alert("Go to SignUp and Login First!")
    }}
  };

  console.log(address)

  return (
    <div className='xl:mx-32 mx-2 sm:mx-8 dark:text-white py-12'>
    <p><span className='text-gray-500'>Account / My Account / Product / View Cart /</span> CheckOut</p>
    <h2 className='sm:text-4xl text-xl text-nowrap my-8'>Billing Details</h2>
    <div className='flex flex-col md:flex-row gap-8 xl:gap-32'>
      <div className='basis-1/2 flex flex-col gap-6'>
      <InputField name='firstName' value={address.firstName || ''} onchange={OnChangeHandler} labelCol='text-gray-500' label='First Name*' required='true' />
      <InputField name='companyName' value={address.companyName || ''} onchange={OnChangeHandler} labelCol='text-gray-500' label='Company Name' />
      <InputField name='streetAddress' value={address.streetAddress || ''} onchange={OnChangeHandler} labelCol='text-gray-500' label='Street Address*' required='true' />
      <InputField name='apartment' value={address.apartment || ''} onchange={OnChangeHandler} labelCol='text-gray-500' label='Apartment, floor, etc. (optional)' />
      <InputField name='city' value={address.city || ''} onchange={OnChangeHandler} labelCol='text-gray-500' label='Town/City*' required='true' />
      <InputField name='phoneNumber' value={address.phoneNumber || ''} onchange={OnChangeHandler} labelCol='text-gray-500' label='Phone Number*' required='true' />
      <InputField name='email' value={address.email || ''} onchange={OnChangeHandler} labelCol='text-gray-500' label='Email Address*' required='true' />
      <p><span><input type="checkbox" checked={saveInfo} onChange={handleCheckboxChange} className='w-4 h-4 cursor-pointer' /></span> Save this information for faster check-out next time</p>
      </div>
      <div className='basis-1/2 '>
      <div className='lg:w-3/4'>
      {
        cart.map(cartItem => {
            const item = allProducts.find((data) => data.id === cartItem.id);

            if (!item) {
              return (
                <div key={cartItem.id} className='text-center'>
                  Product not found in the store
                </div>
              );
            }

            const { price, image } = item;

            return (
              <CheckOutList
                image={image}
                totalPrice={cartItem.count*price}
              />
            );
          })
        }
      <div className='flex flex-col gap-2 py-6'>
      <div className='flex justify-between'>
        <p>Subtotal:</p>
        <p>${sum.toFixed(2)}</p>
      </div>
      <hr />
      <div className='flex justify-between'>
        <p>Shipping:</p>
        <p>Free</p>
      </div>
      <hr />
      <div className='flex justify-between'>
        <p>Total:</p>
        <p>${sum.toFixed(2)}</p>
      </div>
      </div>
      <div className='flex flex-col gap-6'>
        <div className='flex justify-between items-center'>
          <input type="radio" name='name' className='w-6 h-6 cursor-pointer' />
          <div className='flex gap-2'>
            <img src="./assets/visa1.png" alt="" />
            <img src="./assets/visa2.png" alt="" />
            <img src="./assets/visa3.png" alt="" />
            <img src="./assets/visa4.png" alt="" />
          </div>
        </div>
        <input type="radio" name='name' className='w-6 h-6 cursor-pointer' />
      </div>
      </div>
      <div className='items-start flex gap-4 flex-col sm:flex-row py-8'>
        <label name='coup' className='px-4 py-3 rounded-sm sm:w-full dark:border-none border-2 border-gray-400 dark:bg-white'>
          <input type="text" name='coup' placeholder='Coupon Code' className='outline-none outline' />
        </label>
        <Button content='Apply Coupon' background='bg-green-800' text='text-white' border='' />
      </div>
      <Button onclick={orderAddress} content='Place Order' background='bg-green-800' text='text-white' border='' />
      </div>
    </div>
    </div>
  )
}

export default CheckOut