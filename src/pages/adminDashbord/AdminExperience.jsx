import React from "react";
import ExperienceMap from "../../component/ExperienceMap";
import { useNavigate } from "react-router-dom";

const AdminExperience = () => {
  const navigate = useNavigate();

  return (
    <div id="experience">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <p className=" text-white text-2xl underline mb-5 ">AdminExperience</p>
        <button
          onClick={() => navigate("/dashboard/addexperience")}
          className="bg-red-400 h-10 w-40 text-gray-900   p-1 rounded-2xl"
        >
          Add Experience
        </button>
      </div>
      <div className="mt-10">
        <ExperienceMap />
      </div>
    </div>
  );
};

export default AdminExperience;
