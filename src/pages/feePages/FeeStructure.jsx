import React from 'react'
import { feeData } from '../../data/FeeDAta';

function FeeStructure() {
  return (
    <div>
        <h1 className='text-2xl font-semibold text-center pb-10'>Fee Structure</h1>
        <div className='grid md:grid-cols-2 gap-10 px-2 py-2 gap-y-10 grid-cols-1'>
            {feeData.map((value)=>{
                return(
                    <div key={value.class} className=' px-6 py-2   shadow-[0_5px_20px_-10px_rgba(0,0,0,0.3)] border-2 rounded-lg '>
                    <h1 className='font-semibold text-center'>Class:{value.class}</h1>  
                    <div className='flex justify-between text-pink-600'>
                      <p className='text-lg'>Monthly fee</p>
                      <p>Rs:{value.monthlyfee}</p>
                    </div>
                    <div className='flex justify-between'>
                      <p className='text-lg'>Yearly fee </p>
                      <p>Rs:{value.yearlyfee}</p>
                    </div>
                  </div>
                )
            })
            }
        </div>
    </div>
  )
}

export default FeeStructure