import React from 'react'
import EachExpense from './EachExpense';
import { LuWarehouse } from "react-icons/lu";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { VscGift } from "react-icons/vsc";
import { FaSackDollar } from "react-icons/fa6";

const Expense = () => {
  return (
    <div className='max-sm:px-12 grid sm:grid-cols-2 gap-4 md:grid-cols-4 md:gap-1 lg:gap-8 py-8 dark:text-black'>
        <EachExpense icon={<LuWarehouse color='white' size={24} />} title='10.5k' desc='Sallers active our site' background='dark:bg-white' />
        <EachExpense icon={<HiOutlineCurrencyDollar color='black' size={24} />} title='33k' desc='Monthly Produduct Sale' background='bg-green-700' selected='bg-white' text='dark:text-black text-white' border='none' />
        <EachExpense icon={<VscGift color='white' size={24} />} title='45.5k' desc='Customer active in our site' background='dark:bg-white' />
        <EachExpense icon={<FaSackDollar color='white' size={24} />} title='25k' desc='Anual gross sale in our site' background='dark:bg-white' />
    </div>
  )
}

export default Expense