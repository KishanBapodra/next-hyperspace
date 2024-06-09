"use client";

import {
  PerspectiveCamera,
  useProgress,
  Html,
  OrbitControls,
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
    <div className="w-4/5 h-2/3 sm:w-[512px] sm:h-[512px]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0.25, 0, 5]} />
        <OrbitControls makeDefault />
        <directionalLight position={[0, 3, 2]} intensity={3} />
        <Suspense fallback={<Loader />}>
          <Rover />
        </Suspense>
      </Canvas>
    </div>
  );
}
