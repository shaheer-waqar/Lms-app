import React from "react";
import CusTables from "../../components/CusTables";
import { useNavigate } from "react-router-dom";

function StudentList() {
  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "class", headerName: "Class", width: 160 },
    { field: "gender", headerName: "Gender", width: 160 },
  ];
  let navigate = useNavigate();
  return (
    <>
      <h1 className="text-2xl text-center mt-2 font-semibold">
        Students List
      </h1>
      <div className="flex justify-end w-full mb-2">
        <button
          onClick={() => navigate("/register-student")}
          className="border-blue-500 border-2 px-5 font-semibold py-1 hover:bg-blue-600 hover:text-white transition-all duration-500 rounded-[3px]"
        >
          Register
        </button>
      </div>
      <CusTables data="students" columns={columns} />
    </>
  );
}

export default StudentList;
