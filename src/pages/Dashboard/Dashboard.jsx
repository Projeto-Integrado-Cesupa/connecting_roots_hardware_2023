import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
