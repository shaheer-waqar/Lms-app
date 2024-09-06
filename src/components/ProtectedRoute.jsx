import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { auth } from '../config/Firebase-config';

function ProtectedRoute({Components}) {
    if(!localStorage.getItem("userId")) return <Navigate to="/login"/>
  return (
    <>
   <Components/> 
  
    </>
  )
}

export default ProtectedRoute