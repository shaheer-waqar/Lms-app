import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { createUserWithEmailAndPassword, sendEmailVerification, signOut } from "firebase/auth";
import { auth } from "../../config/Firebase-config";


function SignUp() {

  let [showPass,setShowPass] = useState(false);
  let [formData,setFormData] = useState({
    firstname:"",
    lastName:"",
    email:"",
    password:""
  });
  let navigate = useNavigate();

  const sumbitHandler = async (e)=>{
    e.preventDefault();
    try{
      await createUserWithEmailAndPassword(auth,formData.email,formData.password);
      localStorage.setItem("user",JSON.stringify(formData));
      await signOut(auth);
      
        navigate("/login");
    }catch(error){
        console.log(error.message);
    }
    
  }



  return (
    <div className="bg-gradient-to-r from-pink-600 to-purple-600 h-screen font-popins py-20 px-2">
      <div className="max-w-[400px]  border m-auto bg-white px-3 flex flex-col gap-5 py-5 rounded-sm shadow-lg">
        <div>
          <h1 className="text-center mt-10 text-2xl font-bold">Sign up</h1>
        </div>

        <div className="w-full flex gap-1">
          <div className="w-6/12">
            <button
              onClick={()=>navigate("/login")}
              className={`w-full  py-2 rounded-[4px] transition-all duration-500 border hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 hover:text-white `}
            >
              Login
            </button>
          </div>
          <div className="w-6/12">
            <button
              className={`w-full py-2 rounded-[4px] transition-all duration-500  bg-gradient-to-r from-pink-600 to-purple-600 text-white  border hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 hover:text-white"}`}
            >
              Signup
            </button>
          </div>
        </div>

        <form className="flex flex-col gap-5" onSubmit={sumbitHandler}>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-2">
            <div className="w-full border-[2px]">
              <input
                className="w-full focus:outline-purple-600  py-1 px-2"
                type="text"
                placeholder="First Name"
                onChange={(e)=>setFormData({...formData,firstname:e.target.value})}
                value={formData.firstname}
                required
              />
            </div>
            <div className="w-full border-[2px]">
              <input
                className="w-full focus:outline-purple-600  py-1 px-2"
                type="text"
                placeholder="last Name"
                onChange={(e)=>setFormData({...formData,lastName:e.target.value})}
                value={formData.lastName}
                required
              />
            </div>
            <div className="w-full border-[2px]">
              <input
                className="w-full focus:outline-purple-600  py-1 px-2"
                type="email"
                placeholder="Email"
                onChange={(e)=>setFormData({...formData,email:e.target.value})}
                value={formData.email}
                required
              />
            </div>
            <div className="w-full border-[2px] relative">
              <input
                className="w-full focus:outline-purple-600  py-1 px-2 bg-transparent"
                type={showPass ? "text" : "password"}
                placeholder="Password"
                onChange={(e)=>setFormData({...formData,password:e.target.value})}
                value={formData.password}
                required
              />
            <button type="button" className="absolute right-2 top-[50%] -translate-y-[50%] z-[100]">
              {
                showPass ? 
                <IoIosEye className="text-black text-xl" onClick={()=>setShowPass(prev =>!prev)}/>
                :
                <IoIosEyeOff className="text-black text-xl" onClick={()=>setShowPass(prev =>!prev)}/>

              }
            </button>
            </div>
          </div>
        </div>

        <div className="w-full">
          <button className="bg-gradient-to-r from-pink-600 to-purple-600 w-full py-2 text-white">
            Sign up
          </button>
        </div>

        </form>
        <div className="flex justify-center flex-col sm:flex-row">
          <p className="text-center">Already a member?</p>
          <NavLink to="/login" className="text-pink-700 cursor-pointer text-center hover:text-purple-600">
            Login Now
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
