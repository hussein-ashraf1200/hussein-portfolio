import { useRef, useEffect } from "react";
import Hero from "./Hero";
import { useSplitText } from "../Hooks/useSpiltText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ExperienceMap from "../component/ExperienceMap";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const container = useRef();
  const heroRef = useRef();

  useSplitText(".aboutText", {
    yPercent: 200,
  });

  // 🟢 GSAP Animation
  useEffect(() => {
    gsap.from(heroRef.current, {
      x: 400,
      duration: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 50%",
        toggleActions: "play none none reverse",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div
      ref={container}
      id="experience"
      className="text-xl flex flex-col justify-center items-center 
                 min-h-screen px-4 md:px-10 lg:px-20 py-16 overflow-x-hidden"
    >
      <div
        className="flex flex-col-reverse md:flex-row justify-between items-center 
                   w-full max-w-6xl gap-10 md:gap-16 lg:gap-32"
      >
        {/* النص */}
        <div className="flex flex-col justify-center items-start text-center md:text-left max-w-xl">
          <h1 className="text-red-400 mt-4 text-4xl md:text-3xl lg:text-4xl">
            Ex <span className="text-white text-2xl">perience</span>
          </h1>

          <div>
            <ExperienceMap />
          </div>
        </div>

        {/* الموديل جاي من اليمين */}
        <div
          ref={heroRef}
          className="flex justify-center items-center w-full md:w-1/2"
        >
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Experience;
