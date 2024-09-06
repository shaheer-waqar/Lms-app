import { TextField } from '@mui/material';
import React from 'react'

function CusInput({type,label,setFormData,value,place}) {


  return (
    <div>
    <label className='font-[500]'>{label}</label>
    <input type={type} 
    onChange={setFormData}
    className={`border-2 rounded-[2px] py-1 px-2 w-full outline-blue-600`}
    placeholder={place}
    required
    value={value}
    />
    </div>
  )
}

export default CusInput