"use client";

import {
  PerspectiveCamera,
  useProgress,
  Html,
  ScrollControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "./models/Model";
import { Suspense } from "react";

function Loader() {
  const { active, progress } = useProgress();

  return (
    <Html center>
      <div className="text-text text-center">
        {progress.toFixed(0)} % loaded
      </div>
    </Html>
  );
}
export default function Scene() {
  return (
    <Canvas
      style={{
        width: "512px",
        height: "512px",
      }}
    >
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <directionalLight position={[0, 3, 2]} intensity={3} />
      <Suspense fallback={<Loader />}>
        <ScrollControls damping={0.1} pages={3}>
          <Model />
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
}
