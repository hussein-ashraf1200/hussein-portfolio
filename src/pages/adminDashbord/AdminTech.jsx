import React from "react";
import TechMap from "../../pages/adminDashbord/TechMap";
import { useNavigate } from "react-router-dom";

const AdminTech = () => {
  const navigate = useNavigate();

  return (
    <div id="tech">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <p className="text-white text-xl sm:text-2xl underline mb-5">
          AdminTech
        </p>
        <button
          onClick={() => navigate("/dashboard/addtech")}
          className="bg-red-400 h-10 w-40 text-gray-900   p-1 rounded-2xl"
        >
          Add Tech
        </button>
      </div>

      <div className="mt-10">
        <TechMap />
      </div>
    </div>
  );
};

export default AdminTech;
