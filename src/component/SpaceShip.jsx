import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function SpaceShip(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/space_ship.glb");
  const { actions } = useAnimations(animations, group);

  // شغل أي Animation جاهزة لو موجودة
  useEffect(() => {
    if (animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  // لو مفيش Animations: حركة Orbit حوالين المركز
  useFrame((state, delta) => {
    if (animations.length === 0 && group.current) {
      const t = state.clock.getElapsedTime(); // وقت التشغيل
      const radius = 2; // نصف القطر
      group.current.position.x = Math.sin(t) * radius;
      group.current.position.z = Math.cos(t) * radius;
      group.current.position.y = -1.5; // نفس ارتفاع الأسترونوت
      group.current.rotation.y += delta; // دوران بسيط
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[0, 165.006, -135]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[0, 106.39, 3.109]}
          rotation={[-0.087, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[0, 202.721, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1_1__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-55.281, 197.753, -69.179]}
          rotation={[0, 0, -0.698]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[55.281, 197.753, -69.179]}
          rotation={[0, 0, -0.698]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1_1_2__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-85.16, 165, -69.179]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1_2__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[85.16, 165, -69.179]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1_3__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-80.061, 227.271, -40.118]}
          rotation={[Math.PI / 2, 0.873, 0.048]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[80.061, 227.271, -40.118]}
          rotation={[Math.PI / 2, 0.873, 0.048]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1_4__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-146.491, 164.98, -2.857]}
          rotation={[Math.PI / 2, 0, 0.048]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[146.491, 164.98, -2.857]}
          rotation={[Math.PI / 2, 0, 0.048]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1_5__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-79.098, 226.124, -7.029]}
          rotation={[Math.PI / 2, 0.873, 0.048]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_3__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[79.098, 226.124, -7.029]}
          rotation={[Math.PI / 2, 0.873, 0.048]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1_6__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-142.776, 164.98, 74.348]}
          rotation={[Math.PI / 2, 0, 0.048]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_4__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[142.776, 164.98, 74.348]}
          rotation={[Math.PI / 2, 0, 0.048]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/space_ship.glb");
