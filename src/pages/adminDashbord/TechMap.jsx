import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";

// Variants function for floating + rotation
const iconVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: -15, // تتحرك لفوق
    transition: {
      duration,
      ease: "easeInOut", // حركة ناعمة
      repeat: Infinity,
      repeatType: "reverse", // ترجع لتحت تلقائي
    },
  },
});
const TechMap = () => {
  const [technologie, setTechnologie] = useState([]);
  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "technologies"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTechnologie(data);
      } catch (error) {
        console.error("Error fetching technologies:", error);
      }
    };

    fetchExperiences();
  }, []);
  return (
    <div>
      {/* Icons Container */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {technologie.map((tech) => (
          <motion.div
            key={tech.id}
            variants={iconVariants(tech.duration || 2)}
            initial="initial"
            animate="animate"
            className={`rounded-2xl border-4 border-neutral-800 p-6 
                        bg-gradient-to-br from-neutral-900
                         to-neutral-700 
                        drop-shadow-[0_0_15px_#22d3ee] 
                        flex flex-col items-center`}
          >
            <img
              src={tech.imgurl}
              alt={tech.name}
              loading="lazy"
              className="w-16 h-16"
            />

            <p className="mt-3 text-white font-semibold tracking-wide">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMap;
