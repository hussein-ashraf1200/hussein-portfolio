import React from "react";

const LightLamp = () => {
  return (
    <div className="relative">
      <div className="w-full bg-red-600 h-1 rounded-xl flex justify-center items-center shadow">
        <span
          className="bg-gradient-to-t from-gray-50/60 to-transparent
                     opacity-100 w-20 h-7 absolute bottom-1  animate-pulse
                     [clip-path:polygon(38%_100%,65%_100%,100%_0,0%_0)] "
        ></span>
      </div>
    </div>
  );
};

export default LightLamp;
