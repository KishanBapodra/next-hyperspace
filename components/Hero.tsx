"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const headingText = "Mars Rover: Mach 8".split(" ");
  const description = "With updated weapons system and improved AI.".split(" ");

  return (
    <div className="bg-slate-900 min-h-screen flex justify-center items-center">
      <div className="max-w-lg flex flex-col gap-4">
        <div className="text-5xl text-text ">
          {headingText.map((el, i) => (
            <motion.span
              className="mr-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 5,
              }}
              key={i}
            >
              {el}
            </motion.span>
          ))}
        </div>
        <div>
          {description.map((el, i) => (
            <motion.span
              className="text-xl text-text mr-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 5 + 1,
              }}
              key={i}
            >
              {el}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
