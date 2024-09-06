import React, { useEffect, useState } from "react";

function Home() {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    if (data) {
      setUserData(data);
    } else {
      setUserData({});
    }
  },[]);
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl text-center py-2 font-semibold">
        Welcome {userData.firstname} {userData.lastName}{" "}
      </h1>
      <p className="px-2 py-2">
        This Learning Management System <strong>(LMS)</strong> is designed to efficiently manage
        school and institutional data. It allows organizations to add and
        organize data related to students, staff. Users can add new
        subjects,and track important information
        in a structured and user-friendly interface, making academic and
        administrative management more streamlined and accessible.
      </p>
    </div>
  );
}

export default Home;
