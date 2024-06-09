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
import { motion } from "framer-motion-3d";
import { AnimatePresence } from "framer-motion";

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

function Rover() {
  return (
    <AnimatePresence>
      <motion.group
        key={"rover"}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Model />
      </motion.group>
    </AnimatePresence>
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
      <PerspectiveCamera makeDefault position={[0.75, 0, 5]} />
      <directionalLight position={[0, 3, 2]} intensity={3} />
      <Suspense fallback={<Loader />}>
        <Rover />
      </Suspense>
    </Canvas>
  );
}
