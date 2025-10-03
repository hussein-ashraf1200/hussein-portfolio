import React from "react";
import { ShinyText } from "../components/lightswind/shiny-text";
import { useRef } from "react";
import { useSplitText } from "../Hooks/useSpiltText";

const AboutText = () => {
  const container = useRef();
  useSplitText(".aboutMe");
  return (
    <div ref={container} className="p-3  font-[mozilla]">
      <div
        className="lg:w-[500px] mb-15
   w-[300px] md:w-[300px] flex flex-col justify-start items-start 
   gap-2 p-2 bg-[#FD9D8F] 
   rounded-2xl 
   shadow-[10px_20px_25px_rgba(0,0,0,0.35)]"
      >
        <h1 className="text-4xl">
          I'm <span className="text-red-400 font-semibold">Hussein</span>
        </h1>
        <span>
          <ShinyText
            baseColor="rgba(75, 75, 75, 0.8)" // matches gray-600
            shineColor="rgba(220, 38, 38, 1)" // matches red-600
            speed={3}
            size="2xl"
            weight="bold"
          >
            Frontend Developer
          </ShinyText>
        </span>

        <p className="aboutMe text-base lg:text-xl md:text-base ">
          I am a passionate Front-End developer with a knack for crafting
          responsive and efficient web applications. I have honed my skills in
          front-end technologies like React. My goal is to leverage my expertise
          to create innovative user interfaces that drive business growth and
          deliver exceptional user experiences.
        </p>
      </div>
    </div>
  );
};

export default AboutText;
