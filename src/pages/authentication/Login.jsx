import React, { useState } from "react";
import { json, NavLink, useNavigate } from "react-router-dom";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { auth, db } from "../../config/Firebase-config";
import { toast } from "react-toastify";
import { doc, getDoc } from "firebase/firestore";

const Login = () => {
  let [showPass, setShowPass] = useState(false);
  let [disableBtn, setDisableBtn] = useState(false);
  let [formData, serFormData] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const sumbitHandler = (e) => {
    e.preventDefault();
    setDisableBtn(true);
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(async (res) => {
        const userId = res.user.uid;
        const getuser = await getDoc(doc(db, "users", userId)).then(
          (userResp) => {
            const data = userResp.data();
            localStorage.setItem("userId", userId);
            localStorage.setItem("userData", JSON.stringify(data));
          }
        );
        toast.success("Login sucessfully");
        navigate("/");
        setDisableBtn(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setDisableBtn(false);
        // alert(err.message)
      });
  };

  const googleHandler = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="h-screen font-popins py-20 px-2">
      <div className="max-w-[400px]  border m-auto bg-white px-3 flex flex-col gap-5 py-5 rounded-sm shadow-lg">
        <div>
          <h1 className="text-center mt-10 text-2xl font-bold">Login</h1>
        </div>

        <div className="w-full flex gap-1">
          <div className="w-6/12">
            <button
              className={`w-full py-2 rounded-[4px] transition-all duration-500  bg-blue-600 from-blue-600 to-purple-600 text-white  border hover:bg-blue-600 hover:from-blue-600 hover:to-purple-600 hover:text-white"}`}
            >
              Login
            </button>
          </div>
          <div className="w-6/12">
            <button
              onClick={() => navigate("/sign-up")}
              className={`w-full  py-2 rounded-[4px] transition-all duration-500 border hover:bg-blue-600 hover:from-blue-600 hover:to-purple-600 hover:text-white `}
            >
              Sign up
            </button>
          </div>
        </div>

        <form className="flex flex-col gap-5" onSubmit={sumbitHandler}>
          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-2">
              <div className="w-full border-[2px]">
                <input
                  className="w-full focus:outline-blue-600  py-1 px-2"
                  type="email"
                  placeholder="Email"
                  onChange={(e) =>
                    serFormData({ ...formData, email: e.target.value })
                  }
                  value={formData.email}
                  required
                />
              </div>
              <div className="w-full border-[2px] relative">
                <input
                  className="w-full focus:outline-blue-600  py-1 px-2 bg-transparent"
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) =>
                    serFormData({ ...formData, password: e.target.value })
                  }
                  value={formData.password}
                  required
                />
                <button
                  type="button"
                  className="absolute right-2 top-[50%] -translate-y-[50%] z-[100]"
                >
                  {showPass ? (
                    <IoIosEye
                      className="text-black text-xl"
                      onClick={() => setShowPass((prev) => !prev)}
                    />
                  ) : (
                    <IoIosEyeOff
                      className="text-black text-xl"
                      onClick={() => setShowPass((prev) => !prev)}
                    />
                  )}
                </button>
              </div>
            </div>
            {/* <p className="text-blue-600 hover:text-purple-600 text-sm cursor-pointer text-center hover:underline">
            Forgot Password
          </p> */}
          </div>

          <div className="w-full">
            <button
              disabled={disableBtn}
              className={`${
                disableBtn ? "bg-blue-200 cursor-not-allowed" : "bg-blue-600"
              } w-full py-2 text-white font-semibold`}
            >
              Login
            </button>
          </div>
          <hr className="border-[1px]" />
        </form>
        {/* <div className="w-full">
          <button className="bg-blue-600 from-blue-600 to-purple-600 w-full py-2 font-semibold text-white flex items-center justify-center gap-2"
          onClick={googleHandler}>
          <FcGoogle className='text-2xl'/> 
          <span>Login With Google</span>
          </button>
        </div> */}
        <div className="flex justify-center flex-col sm:flex-row">
          <p className="text-center">Not a member?</p>
          <NavLink
            to="/sign-up"
            className="text-blue-700 cursor-pointer text-center hover:text-purple-600"
          >
            sign up Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
