"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Shapes from "./Shapes";

export default function SimpleScene() {
  return (
    <div className="h-3/5 mt-10 w-4/12">
      <Canvas
        style={{
          backgroundColor: "#006488",
        }}
      >
        <OrbitControls />
        <ambientLight />
        <Shapes />
      </Canvas>
    </div>
  );
}
