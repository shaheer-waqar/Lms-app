import { TextField } from '@mui/material';
import React from 'react'

function CusInput({type,label,setFormData,value,place}) {


  return (
    <div>
    <label className='font-[500]'>{label}</label>
    <input type={type} 
    onChange={setFormData}
    className={`border-2 rounded-[2px] outline-zinc-900 py-1 px-2 w-full ${type === "file" && "block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"}`}
    placeholder={place}
    required
    value={value}
    />
    </div>
  )
}

export default CusInput