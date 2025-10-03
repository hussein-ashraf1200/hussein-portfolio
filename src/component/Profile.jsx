// src/component/Profile.jsx
import AboutText from "./AboutText";
import React from "react";
import SotryLife from "../component/SotryLife";

const Profile = () => {
  return (
    <div className="container flex flex-col sm:flex-row justify-between items-start gap-8 mt-10">
      {/* Text Section */}
      <div className="w-full sm:w-1/2">
        <AboutText />
      </div>

      {/* Book Section */}
      <div className="w-full sm:w-1/2 flex justify-center items-start mt-0 sm:mt-[-40px] md:mt-[12px]">
        <SotryLife />
      </div>
    </div>
  );
};

export default Profile;
