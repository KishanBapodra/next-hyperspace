"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const headingText = "Mars Rover: Mach 8".split(" ");
  const description = "With updated weapons systems".split(" ");

  return (
    <div className="mt-10 p-4 sm:p-0 flex justify-center items-center gap-3 sm:h-auto w-screen sm:w-auto">
      <div className="text-center sm:text-start flex flex-col gap-4 ">
        <div className="text-3xl sm:text-5xl text-text">
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
        <div className="w-screen text-wrap sm:w-auto">
          {description.map((el, i) => (
            <motion.span
              className="text-md sm:text-xl text-text mr-3"
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
