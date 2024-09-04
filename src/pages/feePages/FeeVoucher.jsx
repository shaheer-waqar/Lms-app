import React from 'react'
import { feeData } from '../../data/FeeDAta';

function FeeVoucher() {
  return (
    <div >
         <h1 className='text-2xl font-semibold text-center pb-10'>Fee Voucher</h1>
        <div className='w-full max-w-[500px] m-auto flex flex-col gap-5'>
        {feeData.map((value)=>{
                return(
                    <div key={value.class} className=' px-6 py-2   shadow-[0_5px_20px_-10px_rgba(0,0,0,0.3)] border-2 rounded-lg '>
                    <h1 className='font-semibold text-center'>Class:{value.class}</h1>  
                    <div className='flex justify-between'>
                      <p className='text-lg'>Class </p>
                      <p>{value.class}</p>
                    </div>
                    <div className='flex justify-between'>
                      <p className='text-lg'>Monthly fee</p>
                      <p>Rs:{value.monthlyfee}</p>
                    </div>
                    <div className='flex justify-between'>
                      <p className='text-lg'>Yearly fee </p>
                      <p>Rs:{value.yearlyfee}</p>
                    </div>
                    <div className='flex justify-center'>
                        <button className='px-2 py-1 border-2 border-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300'>Pay now </button>
                    </div>
                  </div>
                )
            })
            }
        </div>
    </div>
  )
}

export default FeeVoucher