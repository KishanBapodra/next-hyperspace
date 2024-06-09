"use client";

import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { Group } from "three";

useGLTF.preload("/asus_tuf_dash_f15_laptop.glb");

export default function Model() {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF(
    "/asus_tuf_dash_f15_laptop.glb"
  );
  const { actions, clips } = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    //@ts-ignore
    actions["Armature|ArmatureAction"].play().paused = true;
  }, [actions]);

  useFrame(
    () =>
      //@ts-ignore
      (actions["Armature|ArmatureAction"].time =
        //@ts-ignore
        (actions["Armature|ArmatureAction"].getClip().duration *
          scroll.offset) /
        3)
  );

  return (
    <group rotation={[0, -Math.PI / 2, 0]} scale={7.5} ref={group}>
      <primitive object={scene} />
    </group>
  );
}
