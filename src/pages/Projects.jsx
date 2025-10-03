import React, { useRef } from "react";
import ProjectMap from "./adminDashbord/ProjectMap";
import { motion } from "framer-motion";

const Projects = () => {
  const container = useRef();
  return (
    <div
      id="project"
      ref={container}
      className="flex justify-center items-center flex-col "
    >
      {/* Section Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl font-bold tracking-wide"
      >
        Projects
      </motion.h2>
      <div className="cardContainer  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  p-5 gap-4 w-full ">
        <ProjectMap />
      </div>
    </div>
  );
};
export default Projects;
