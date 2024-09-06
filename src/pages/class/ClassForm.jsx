import React, { useState } from 'react'
import CusInput from '../../components/CusInput';
import CusRadio from '../../components/CusRadio';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../config/Firebase-config';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function ClassForm() {
  let navigate = useNavigate();
  const [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
    fatherName:"",
    phone:"",
    class:"",
    gender:"",
    date:""
  });
  const [buttonDisable,setButtonDisable] = useState(false);
  const formHandler = async (e)=>{
    e.preventDefault();
    setButtonDisable(true);

    try {
      const docRef = await addDoc(collection(db, "class"),formData);
      console.log("added",);
      setButtonDisable(false);
      setFormData({
        firstName:"",
        lastName:"",
        fatherName:"",
        phone:"",
        class:"",
        gender:"",
        date:"",
      });
      toast.success("added")
      navigate("/teacher-list")
    } catch (e) {
      setButtonDisable(false);
      console.error("Error adding document: ", e);
    }
  }
  return (
    <div className='max-w-[600px] m-auto py-10'>
      <h1 className="text-center pb-2 text-2xl font-semibold">Register Class</h1>
      <form className='flex flex-col gap-4' onSubmit={formHandler}>
      <CusInput value={formData.firstName} place="John" type="text" label="First Name" setFormData={(e)=>setFormData({...formData,firstName:e.target.value})}/>
      <CusInput value={formData.lastName} place="Denis" type="text" label="Last Name" setFormData={(e)=>setFormData({...formData,lastName:e.target.value})}/>
      <CusInput value={formData.fatherName} place="Mark Denis" type="text" label="Father Name" setFormData={(e)=>setFormData({...formData,fatherName:e.target.value})}/>
      <CusInput value={formData.phone} place="+923002211" type="number" label="Phone" setFormData={(e)=>setFormData({...formData,phone:Number(e.target.value)})}/>
      <CusInput value={formData.class} place="12" type="number" label="Class" setFormData={(e)=>setFormData({...formData,class:Number(e.target.value)})}/>
      <CusInput value={formData.date} type="date" label="Date of birth" setFormData={(e)=>setFormData({...formData,date:e.target.value})}/>
      <div>
      <h4>Gender</h4> 
      <CusRadio value={formData.gender}  label="Male" name='gender' setFormData={(e)=>setFormData({...formData,gender:e.target.value})}/>  
      <CusRadio value={formData.gender} label="Female" name='gender' setFormData={(e)=>setFormData({...formData,gender:e.target.value})}/>  
      </div>  
      <button disabled={buttonDisable}  className={`text-white py-1 rounded-sm ${!buttonDisable ? "bg-blue-600":"bg-blue-200 cursor-not-allowed"}`}>Sumbit</button>
      </form>
    </div>
  )
}

export default ClassForm