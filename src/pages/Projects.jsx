import  { useRef } from "react";
import ProjectMap from "./adminDashbord/ProjectMap";
// eslint-disable-next-line no-unused-vars
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
      <div className="cardContainer w-full ">
        <ProjectMap />
      </div>
    </div>
  );
};
export default Projects;
