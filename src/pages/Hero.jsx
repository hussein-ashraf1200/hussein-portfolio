import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

function MyModel() {
  const { scene, animations } = useGLTF("/models/model7.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && actions.Walk) {
      actions.Walk.play();
    } else {
      const firstAction = Object.values(actions)[0];
      if (firstAction) {
        firstAction.play();
      }
    }
  }, [actions]);

  return <primitive object={scene} scale={2} position={[0, -1.5, 0]} />;
}

const Hero = () => {
  return (
    <div className="sm:w-[350px] w-[250px] sm:h-[500px] h-[350px] cursor-pointer">
      <Canvas
        camera={{ position: [0, 1, 5] }}
        gl={{ outputEncoding: THREE.sRGBEncoding }}
      >
        {/* الإضاءة */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow />

        {/* الموديل */}
        <MyModel />
      </Canvas>
    </div>
  );
};

export default Hero;
