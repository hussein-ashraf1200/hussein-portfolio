import React from "react";
import { FlipWords } from "./Flipwords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Clean,", "Responsive,", "Modern,"];
  const state = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      className="z-10 mt-20 text-center md:mt-40 md:text-left
     rounded-3xl bg-clip-text text-white"
    >
      {/* desktop view  */}
      <div className="flex-col hidden md:flex ml-10 ">
        <motion.h1
          className="text-4xl font-medium"
          variants={state}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I`m Hussein
        </motion.h1>
        <div className=" flex flex-col items-start">
          <motion.p
            className="text-4xl font-medium text-white"
            variants={state}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Front-end Developer
          </motion.p>
          <motion.div
            className="flex items-center justify-center"
            variants={state}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-red-500 text-4xl flex items-center justify-center"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-white"
            variants={state}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.7 }}
          >
            Web Solutions
          </motion.p>
        </div>
      </div>

      {/* mobile view */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          variants={state}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.1 }}
        >
          Hi I`m Hussein
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black "
            variants={state}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.3 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={state}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6 }}
          >
            <FlipWords
              words={words}
              className="text-red-500 text-3xl font-bold"
            />
          </motion.div>
          <motion.p
            className="text-3xl font-black "
            variants={state}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.9 }}
          >
            Web Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
