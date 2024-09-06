import { Box } from "@mui/material";
import React, { useState } from "react";
import CusInput from "../../components/CusInput";
import CusRadio from "../../components/CusRadio";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/Firebase-config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function FeeSubmission() {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    amount:"",
    paymentmethod:"",
  });
  let navigate = useNavigate();
  const [buttonDisable, setButtonDisable] = useState(false);
  const formHandler = async (e) => {
    e.preventDefault();
    setButtonDisable(true);

    try {
      const docRef = await addDoc(collection(db, "submittedfee"), formData);
      console.log("added");
      setButtonDisable(true);
      setFormData({
        name: "",
        class: "",
        amount:"",
        paymentmethod: "",
      });
      toast.success("Submited");
    } catch (e) {
      setButtonDisable(true);
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div className="max-w-[600px] m-auto py-10">
      <h1 className="text-center pb-2 text-2xl font-semibold">Payment form</h1>
      <form className="flex flex-col gap-4" onSubmit={formHandler}>
        <CusInput
          value={formData.name}
          place="John Denis"
          type="text"
          label="Name"
          setFormData={(e) =>
            setFormData({ ...formData, name: e.target.value })
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
        <CusInput
          value={formData.amount}
          place="1200"
          type="number"
          label="Amount"
          setFormData={(e) =>
            setFormData({ ...formData, amount: Number(e.target.value) })
          }
        />
        <div className="w-full">
        <label htmlFor="" className="font-semibold">Payment Method</label>
        <select value={formData.paymentmethod}  className="w-full border-2 py-1 px-2 mt-1 outline-blue-600" onChange={(e) => setFormData({ ...formData,paymentmethod: Number(e.target.value) })} >
          <option value="credit card">credit card</option>
          <option value="credit card">Debit card</option>
          <option value="credit card">Net Baking</option>
        </select>

        </div>

        <button
          disabled={buttonDisable}
          className={`text-white py-1 rounded-sm ${
            buttonDisable ? "bg-blue-300 cursor-not-allowed " : "bg-blue-600"
          }`}
        >
          Sumbit
        </button>
      </form>
    </div>
  );
}

export default FeeSubmission;
