"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Group } from "three";

export default function Shapes() {
  const groupRef = useRef<Group>(null);
  const jumpStartTime = useRef<number | null>(null);
  const [hovered, setHover] = useState(false);
  const [isJumping, setIsJumping] = useState(false);

  useFrame(({ clock }) => {
    if (groupRef.current && isJumping) {
      if (jumpStartTime.current === null) {
        jumpStartTime.current = clock.getElapsedTime();
      }

      const elapsedTime = clock.getElapsedTime();
      const jumpDuration = 0.5;
      const jumpHeight = 1;

      const totalJumpTime = elapsedTime - jumpStartTime.current;
      const phase = (totalJumpTime % jumpDuration) / jumpDuration;

      const yOffset = Math.sin(phase * Math.PI) * jumpHeight;

      groupRef.current.position.y = yOffset;

      if (totalJumpTime >= 0.5) {
        setIsJumping(false);
        groupRef.current.position.y = 0;
        jumpStartTime.current = null;
      }
    }
  });

  return (
    <group scale={1.5} ref={groupRef} onClick={() => setIsJumping(true)}>
      <mesh
        name="face"
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
        position={[0, 1, 0]}
      >
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
      <mesh name="leftEye" position={[-0.1, 1, 0.25]}>
        <sphereGeometry args={[0.05]} />
        <meshStandardMaterial color="white" />
      </mesh>

      <mesh name="rightEye" position={[0.1, 1, 0.25]}>
        <sphereGeometry args={[0.05]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh name="neck" position={[0, 0.65, 0]}>
        <boxGeometry args={[0.3, 0.25, 0.35]} />
        <meshStandardMaterial color="olive" />
      </mesh>
      <mesh
        name="torso"
        position={[0, -0.08, 0]}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <boxGeometry args={[1, 1.2, 0.35]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
      <mesh name="leftLeg" position={[-0.2, -0.93, 0]}>
        <boxGeometry args={[0.3, 0.5, 0.25]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh name="rightLeg" position={[0.2, -0.93, 0]}>
        <boxGeometry args={[0.3, 0.5, 0.25]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}
