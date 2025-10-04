import React, { Suspense } from "react";
import HeroText from "./HeroText";
import ParallaxBackground from "./ParallaxBackground";
import { Astronut } from "./Astronut";
import { Canvas } from "@react-three/fiber";

const HeroFirstPage = () => {
  return (
    <section
      className="relative flex justify-center items-start md:items-start
     md:justify-start min-h-screen overflow-hidden"
    >
      {/* النص */}
      <HeroText />

      {/* الخلفية */}
      <ParallaxBackground />

      {/* 3D Canvas */}
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          {/* Suspense بيدي سلاسة عند تحميل الـ3D Models */}
          <Suspense fallback={null}>
            <Astronut scale={0.4} position={(0, 2, 0)} />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

export default HeroFirstPage;
