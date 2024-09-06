import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function AuthProtected() {
  if(localStorage.getItem("userId")) return <Navigate to={"/"}/>
  return (
    <div className='grid md:grid-cols-2 grid-cols-1'>
        <div className='bg-[#304156] h-screen hidden justify-center items-center text-white md:flex'>
            <h1 className='text-[4vw] px-10 font-bold leading-[50px] '>Learnig  Managment System</h1>
        </div>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default AuthProtected