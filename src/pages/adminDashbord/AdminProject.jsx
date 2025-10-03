import React from "react";
import ProjectMap from "../adminDashbord/ProjectMap";
import { useNavigate } from "react-router-dom";

const AdminProject = () => {
  const navigate = useNavigate();

  return (
    <div id="projects">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <p className=" text-white text-2xl underline mb-5 ">AdminProject</p>
        <button
          onClick={() => navigate("/dashboard/addproject")}
          className="bg-red-400 h-10 w-40 text-gray-900   p-1 rounded-2xl"
        >
          Add Project
        </button>{" "}
      </div>
      <div className="mt-10 ">
        <ProjectMap />
        <div className="h-96"></div>
      </div>
    </div>
  );
};

export default AdminProject;
