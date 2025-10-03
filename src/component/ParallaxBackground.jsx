// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React from "react";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const mauntain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const plantsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mauntain2Y = useTransform(x, [0, 0.8], ["0%", "30%"]);
  const mauntain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);
  return (
    <section className=" absolute inset-0 mt-[-5px] ">
      <div className=" relative w-full h-screen overflow-y-hidden">
        {/* background */}
        <div
          className=" absolute h-screen inset-0 w-full -z-50"
          style={{
            backgroundImage: "url(/image/sky.webp)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        {/* mountain 03  */}
        <motion.div
          className=" absolute h-screen inset-0 w-full -z-40"
          style={{
            backgroundImage: "url(/image/mountain-3.webp)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mauntain3Y,
          }}
        />
        {/* mountain 02 */}
        <motion.div
          className=" absolute h-screen inset-0 w-full -z-30"
          style={{
            backgroundImage: "url(/image/mountain-2.webp)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mauntain2Y,
          }}
        />
        {/*plantes */}
        <motion.div
          className=" absolute h-screen inset-0 w-full -z-20"
          style={{
            backgroundImage: "url(/image/planets.webp)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: plantsX,
          }}
        />
        {/* mountain 01 */}
        <motion.div
          className=" absolute h-screen inset-0 w-full -z-10"
          style={{
            backgroundImage: "url(/image/mountain-1.webp)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mauntain1Y,
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
