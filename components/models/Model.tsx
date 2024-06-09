"use client";

import { useAnimations, useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { Group } from "three";

export default function Model() {
  const group = useRef<Group>(null);
  const { animations, scene } = useGLTF("/ufo_vehicle.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    //@ts-ignore
    actions["move"].play();
  }, [actions]);

  return (
    <group rotation-y={-Math.PI / 4} ref={group}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/ufo_vehicle.glb");
