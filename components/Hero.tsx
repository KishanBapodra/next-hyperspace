"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const heroText = "Introducing next-gen, ASUS TUF".split(" ");

  return (
    <div className="bg-slate-900 min-h-screen flex justify-center items-center">
      <div className=" max-w-lg">
        {heroText.map((el, i) => (
          <motion.span
            className="text-5xl text-accent mr-3"
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
    </div>
  );
}
