import React, { useState } from 'react'

const Header = () => {

  const [selectedOption, setSelectedOption] = useState("Amharic");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  }

  return (
    <div className='bg-black text-white flex px-4 py-4 items-center justify-between'>
        <div className='hidden lg:block lg:basis-1/12 xl:basis-3/12'></div>
        <div className='hidden sm:block lg:6/12'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className='font-medium underline underline-offset-1'>ShopNow</span></div>
        <div className='sm:hidden font-normal text-3xl'>e<span className='font-medium font-serif text-6xl'>x</span>clusive</div>
        <div className='lg:basis-3/12 lg:pl-24 xl:pl-32'>
        <select value={selectedOption} onChange={handleChange} name="" id="" className='bg-black outline-none appearance-none flex gap-2 px-4'>
            <option value="English">English</option>
            <option value="Amharic">Amharic</option>
        </select>
        </div>
    </div>
  )
}

export default Header