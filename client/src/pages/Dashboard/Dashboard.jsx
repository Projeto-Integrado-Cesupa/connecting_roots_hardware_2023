import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {

  const token = window.localStorage.getItem('token');
  if (token !== "null" && token != null) {
    return (
      <div className="overflow-hidden h-screen">
        <Navbar />
        <main>
          <Outlet className=""/>
        </main>
      </div>
    );
  } else {
    window.location.href = "/Auth";
  }

};

export default Dashboard;
