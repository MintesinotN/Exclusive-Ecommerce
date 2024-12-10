import React from 'react'
import Expense from '../components/Expense'
import MembersContainer from '../components/MembersContainer'
import ServiceTipsContainer from '../components/ServiceTipsContainer'

const About = () => {
  return (
    <div className='xl:mx-32 mx-2 sm:mx-8 dark:text-white py-12'>
    <p><span className='text-gray-500'>Home /</span> About</p>
    <div className='flex items-center py-12 md:gap-8 lg:gap-24'>
      <div className='flex flex-col gap-8'>
        <h1 className='font-semibold text-5xl'>Our Story</h1>
        <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.</p>
        <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
      </div>
      <img src="./src/assets/AboutPic.png" alt="" className='hidden md:block xl:-mr-32 max-xl:w-96 max-xl:h-96' />
    </div>
    <Expense />
    <MembersContainer />
    <div className='flex justify-center gap-3 mb-4 my-12'>
      <p className='w-3 h-3 rounded-full bg-gray-200'></p>
      <p className='w-3 h-3 rounded-full bg-gray-200'></p>
      <p className='w-3 h-3 rounded-full bg-green-700 border-2 border-gray-200'></p>
      <p className='w-3 h-3 rounded-full bg-gray-200'></p>
      <p className='w-3 h-3 rounded-full bg-gray-200'></p>
    </div>
    <ServiceTipsContainer />
    </div>
  )
}

export default About