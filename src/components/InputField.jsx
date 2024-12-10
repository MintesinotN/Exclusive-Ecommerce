import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const InputField = ({name,value,onchange,labelCol='',label='',placeholder,required}) => {

  return (
    <label className='flex flex-col gap-1'>
    <p className={labelCol}>{label}</p>
    <div className='px-4 py-3 bg-gray-100 rounded-sm'>
    <input name={name} value={value} onChange={onchange} type="text" placeholder={placeholder} required={required} className='placeholder: outline-none outline bg-gray-100' />
    </div>
    </label>
  )
}

export default InputField