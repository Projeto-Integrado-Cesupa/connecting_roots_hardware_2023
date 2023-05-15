import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {

  const token = window.localStorage.getItem('token');
  // if (token !== "null" && token != null) {
    return (
      <div className="">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    );
  // } else {
  //   window.location.href = "/Auth";
  // }

};

export default Dashboard;
