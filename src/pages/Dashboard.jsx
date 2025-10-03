import React from "react";
import SideBar from "../component/adminDashbord/SideBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div
      id="dashboard"
      className="flex p-2  justify-center 
    "
    >
      {/* ثابت */}
      <SideBar />

      {/* يتغير حسب الصفحة */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
