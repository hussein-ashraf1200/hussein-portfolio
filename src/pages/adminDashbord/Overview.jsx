import React from "react";
import ExperienceMap from "../../component/ExperienceMap";
import Tech from "../Tech";
import Projects from "../Projects";
import TechMap from "./TechMap";

const Overview = () => {
  return (
    <div id="overview bg-red-600  ">
      <div className="experience">
        <h1 className="text-2xl text-white mb-4 underline">Experience</h1>
        <ExperienceMap />
      </div>
      <div className="techno ">
        <h1 className="text-2xl text-white mb-4 underline">Tecnoligies</h1>
        <div className="mt-20">
          <TechMap />
        </div>
      </div>
      <div className="project">
        <h1 className="text-2xl text-white mb-4 underline">projects</h1>
        <Projects />
      </div>
    </div>
  );
};

export default Overview;
