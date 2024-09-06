import React, { useState } from "react";
// import FormHeading from '../components/FormHeading';
import CusInput from "../../components/CusInput";
import CusRadio from "../../components/CusRadio";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/Firebase-config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function StudentForm() {
  let navigate=useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    class: "",
    gender: "",
  });
  const [buttonDisable, setButtonDisable] = useState(false);
  const formHandler = async (e) => {
    e.preventDefault();
    setButtonDisable(true);
    
    try {
      const docRef = await addDoc(collection(db, "students"), formData);
      setButtonDisable(false);
      console.log("added");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        class: "",
        gender: "",
      });
      toast.success("added");
      navigate("/student-list");

    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div className="max-w-[600px] m-auto py-10">
      <h1 className="text-center pb-2 text-2xl font-semibold">Register Student</h1>
      <form className="flex flex-col gap-4" onSubmit={formHandler}>
        <CusInput
          value={formData.firstName}
          place="John"
          type="text"
          label="First Name"
          setFormData={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
        <CusInput
          value={formData.lastName}
          place="Denis"
          type="text"
          label="Last Name"
          setFormData={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />
        <CusInput
          value={formData.email}
          place="john@denis.com"
          type="email"
          label="Email"
          setFormData={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
        <CusInput
          value={formData.class}
          place="12"
          type="number"
          label="Class"
          setFormData={(e) =>
            setFormData({ ...formData, class: Number(e.target.value) })
          }
        />
        <div>
          <h4>Gender</h4>
          <CusRadio
            value={formData.gender}
            label="Male"
            name="gender"
            setFormData={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          />
          <CusRadio
            value={formData.gender}
            label="Female"
            name="gender"
            setFormData={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          />
        </div>
        <button
          disabled={buttonDisable}
          value={formData.firstName}
          className={`text-white py-1 rounded-sm ${
            buttonDisable ? "bg-pink-300 cursor-not-allowed " : "bg-pink-600"
          }`}
        >
          Sumbit
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
