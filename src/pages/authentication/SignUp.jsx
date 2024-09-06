import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { createUserWithEmailAndPassword, sendEmailVerification, signOut } from "firebase/auth";
import { auth, db } from "../../config/Firebase-config";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";


function SignUp() {

  let [showPass,setShowPass] = useState(false);
  let [disableBtn,setDisableBtn] = useState(false);
  let [formData,setFormData] = useState({
    firstname:"",
    lastName:"",
    email:"",
    password:""
  });
  let navigate = useNavigate();

  const sumbitHandler = async (e)=>{
    e.preventDefault();
    setDisableBtn(true);
    await createUserWithEmailAndPassword(auth,formData.email,formData.password)
    .then( async res =>{
      const userId = res.user.uid
      console.log(res)
      
      await setDoc(doc(db,"users",userId),formData);
      
      await signOut(auth);
      toast.success("Acount created sucessfully");
      navigate("/login");
      setDisableBtn(false);
    })
    .catch(error =>{
      setDisableBtn(false);
        console.log(error.message);
        toast.error(error.message);

    })
    
  }



  return (
    <div className="h-screen font-popins py-20 px-2">
      <div className="max-w-[400px]  border m-auto bg-white px-3 flex flex-col gap-5 py-5 rounded-sm shadow-lg">
        <div>
          <h1 className="text-center mt-10 text-2xl font-bold">Sign up</h1>
        </div>

        <div className="w-full flex gap-1">
          <div className="w-6/12">
            <button
              onClick={()=>navigate("/login")}
              className={`w-full  py-2 rounded-[4px] transition-all duration-500 border hover:bg-blue-600 hover:from-pink-600 hover:to-purple-600 hover:text-white `}
            >
              Login
            </button>
          </div>
          <div className="w-6/12">
            <button
              className={`w-full py-2 rounded-[4px] transition-all duration-500  bg-blue-600 from-pink-600 to-purple-600 text-white  border hover:bg-blue-600 hover:from-pink-600 hover:to-purple-600 hover:text-white"}`}
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
                className="w-full focus:outline-blue-600  py-1 px-2"
                type="text"
                placeholder="First Name"
                onChange={(e)=>setFormData({...formData,firstname:e.target.value})}
                value={formData.firstname}
                required
              />
            </div>
            <div className="w-full border-[2px]">
              <input
                className="w-full focus:outline-blue-600  py-1 px-2"
                type="text"
                placeholder="last Name"
                onChange={(e)=>setFormData({...formData,lastName:e.target.value})}
                value={formData.lastName}
                required
              />
            </div>
            <div className="w-full border-[2px]">
              <input
                className="w-full focus:outline-blue-600  py-1 px-2"
                type="email"
                placeholder="Email"
                onChange={(e)=>setFormData({...formData,email:e.target.value})}
                value={formData.email}
                required
              />
            </div>
            <div className="w-full border-[2px] relative">
              <input
                className="w-full focus:outline-blue-600  py-1 px-2 bg-transparent"
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
          <button 
          disabled={disableBtn}
          className={`${
            disableBtn ? "bg-blue-200 cursor-not-allowed" : "bg-blue-600"
          } w-full py-2 text-white font-semibold`}>
            Sign up
          </button>
        </div>

        </form>
        <div className="flex justify-center flex-col sm:flex-row">
          <p className="text-center">Already a member?</p>
          <NavLink to="/login" className="text-blue-600 cursor-pointer text-center hover:text-purple-600">
            Login Now
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
