"use client";

import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { Group } from "three";

useGLTF.preload("/ufo_vehicle.glb");

export default function Model() {
  const group = useRef<Group>(null);
  const { animations, scene } = useGLTF("/ufo_vehicle.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    //@ts-ignore
    actions["move"].play();
  }, [actions]);

  return (
    <group rotation={[0, -Math.PI / 4, 0]} ref={group}>
      <primitive object={scene} />
    </group>
  );
}
