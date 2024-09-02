import React from 'react'
import CusTables from '../../components/CusTables';
import { useNavigate } from 'react-router-dom';

function TeacherList() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {field: 'email', headerName: 'Email',width: 160,},
    { field: 'gender', headerName: 'Gender', width: 130 },
  ];
  let navigate = useNavigate();
  return (
    <>
    <h1 className='text-2xl text-center mt-2 mb-2 font-semibold' >Teachers List</h1>
    <div className="flex justify-end w-full mb-2">
        <button
          onClick={() => navigate("/rigister-student")}
          className="border-pink-500 border-2 px-5 font-semibold py-1 hover:bg-pink-600 hover:text-white transition-all duration-500 rounded-[3px]"
        >
          Register
        </button>
      </div>
    <CusTables data="teachers" columns={columns} />
    </>
  );
}

export default TeacherList