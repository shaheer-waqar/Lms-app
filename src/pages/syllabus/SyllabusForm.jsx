import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../../config/Firebase-config";
import { addDoc, collection } from "firebase/firestore";
import CusInput from "../../components/CusInput";
import CusFile from "../../components/CusFile";
import { ref, uploadBytes } from "firebase/storage";
import { toast } from "react-toastify";

function SyllabusForm() {
  const [formData, setFormData] = useState({
    subjectName: "",
    class: "",
    file: "No File Chosen",
  });
  let navigate = useNavigate();
  const [buttonDisable, setButtonDisable] = useState(false);
  const formHandler = async (e) => {
    e.preventDefault();
    if (
      formData.file == "No File Chosen" &&
      formData.class &&
      formData.subjectName
    )
      return alert("chose file please");
    setButtonDisable(true);


    try {
      const storageRef = ref(storage, `images/${formData.file}`);

      const upload = await uploadBytes(storageRef, formData.file);

      const docRef = await addDoc(collection(db, "syllabus"), {
        ...formData,
        file: upload.ref.fullPath,
      });
      console.log("added");
      setButtonDisable(false);
      setFormData({
        subjectName: "",
        class: "",
        file: "No File Chosen",
      });
      toast.success("added");
      navigate("/syllabus-list")
    } catch (e) {
      setButtonDisable(false);
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div className="max-w-[600px] m-auto py-10">
      <h1 className="text-center pb-2 text-2xl font-semibold">Add Syllabus</h1>

      <form className="flex flex-col gap-4" onSubmit={formHandler}>
        <CusInput
          value={formData.subjectName}
          place="Math"
          type="text"
          label="Subject Name"
          setFormData={(e) =>
            setFormData({ ...formData, subjectName: e.target.value })
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
        <CusFile
          value={formData.file}
          setFormData={(e) =>
            setFormData({ ...formData, file: e.target.files[0].name })
          }
        ></CusFile>
        <button
          disabled={buttonDisable}
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

export default SyllabusForm;
