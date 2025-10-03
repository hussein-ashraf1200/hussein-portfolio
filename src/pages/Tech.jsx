import React from "react";
import TechMap from "./adminDashbord/TechMap";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <div id="tech" className="">
      {/* Section Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-bold tracking-wide"
      >
        Technologies
      </motion.h2>
      <div>
        <TechMap />
      </div>
    </div>
  );
};

export default Tech;
