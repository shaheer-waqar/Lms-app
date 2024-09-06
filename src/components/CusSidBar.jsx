import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { LinksData } from "../data/LinksData";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config/Firebase-config";
import { MdMenu } from "react-icons/md";



function CusSidBar() {
  let [showLinks, setShowLinks] = useState(null);
  let [menu, setMenu] = useState(false);
  let [user,setUser] = useState(null);
  let navigate = useNavigate();

  const renderLinks = (label) => {
    if (showLinks == label) {
      setShowLinks(null);
    } else setShowLinks(label);
  };
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setUser(user.email);
      }
    })

  },[])
  const [openSideBar, setOpenSideBar] = useState(false);

  const Logout = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/login")

    } catch (error) {
      console.log(error);
    }
  };
  const menuClose = () => {
    setMenu(false);
  };
  const menuOpen = (e) => {
    e.stopPropagation();
    setMenu((prev) => !prev);
  };
  return (
    <>
      <div
        onClick={menuClose}
        className="flex justify-end  fixed z-[150] w-full nav"
      >
        <div className="flex w-full md:w-[calc(100%-280px)]  bg-white shadow-lg h-[50px] justify-between px-3 items-center">

        <h1
          onClick={() => setOpenSideBar((prev) => !prev)}
          className="block md:hidden  text-2xl font-bold  "
        >
          <MdMenu/>
        </h1>

        <h1 className="text-sm font-bold">Learnig Manangment System</h1>
        <div className="relative">
          <button
            className="h-[30px] w-[30px] bg-zinc-200 uppercase rounded-full text-lg font-semibold"
            title="setting"
            onClick={menuOpen}
          >
            {user?.slice(0,1)}
            
          </button>
          <button
            onClick={Logout}
            className={`absolute right-0 top-8  bg-white w-auto px-2 py-2  rounded-md shadow-xl ${
              menu ? "block" : "hidden"
            }`}
          >
            Logout
          </button>
        </div>
        </div>
      </div>

      <div onClick={menuClose} className="flex justify-end">
        <div
          className={`w-full max-w-[280px] bg-[#304156] z-[200] no-scrollbar overflow-scroll h-screen pt- flex flex-col gap-0 shadow-xl
          fixed  md:left-0  transition-all duration-300 ${
            openSideBar ? "left-0" : "left-[-300px]"
          }`}
        >
          {LinksData.map((val, index) => (
            <div key={val.label} className={`hover:bg-[#263445]`}>
              <button
                className={`flex justify-between px-3 py-2 text-white items-center w-full mb-1 `}
                onClick={() => renderLinks(val.label)}
              >
                <h1 className="text-xl text-white font-semibold flex items-center gap-3 ">
                  {val.icons} {val.label}
                </h1>
                <h1
                  className={`text-xl transition-all duration-200  ${
                    showLinks === val.label ? "rotate-180" : ""
                  }`}
                >
                  <IoIosArrowDown />
                </h1>
              </button>
              <PagesLinks
                label={val.label}
                link={val}
                showLinks={showLinks}
                setOpenSideBar={setOpenSideBar}
              />
            </div>
          ))}
        </div>

        <div  
        onClick={() => setOpenSideBar(false)}
         className="pt-[50px] h-[100%]  w-full md:w-[calc(100%-280px)]  overflow-hidden px-2"  >
          <Outlet onClick={menuClose}/>
        </div>
      </div>
    </>
  );
}

export default CusSidBar;

function PagesLinks({ link, showLinks, label, setOpenSideBar }) {
  let { links } = link;

  return (
    <div
      className={` flex flex-col transition-max-height duration-500 ease-in-out overflow-hidden ${
        showLinks === label ? "max-h-40" : "max-h-0"
      }`}
    >
      {links.map((e, i) => {
        return (
          <NavLink
            onClick={() => setOpenSideBar(false)}
            key={e.name}
            className={({ isActive }) =>
              ` pl-10 capitalize text-lg w-full inline-block hover:bg-[#001528]  py-2 ${
                isActive ? "text-blue-500" : " text-white"
              }`
            }
            to={e.path}
          >
            {e.name}
          </NavLink>
        );
      })}
    </div>
  );
}
