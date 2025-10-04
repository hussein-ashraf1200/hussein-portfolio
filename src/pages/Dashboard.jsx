import React from "react";
import SideBar from "../component/adminDashbord/SideBar";
import { Outlet } from "react-router-dom";
import AdminButton from "../component/AdminButton";
const Dashboard = () => {
  return (
    <div
      id="dashboard"
      className="flex flex-col p-2 justify-around  
    "
    >
      <div className="flex justify-end w-full">
        <div className=" flex justify-center items-center">
          <di className="p-2 mb-0 text-white font-semibold flex  justify-center items-center gap-2 rounded-2xl">
            <AdminButton />
          </di>
        </div>
      </div>

      <div className="flex ">
        {/* ثابت */}
        <SideBar />

        {/* يتغير حسب الصفحة */}
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
