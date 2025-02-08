"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function RoundAnimation() {
  const roundRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: roundRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ["5rem", "-2rem"]);

  return (
    <div id="service" ref={roundRef} className="max-w-6xl mx-auto h-14 block relative">
      <motion.img
        src="/ThreeDAssets/roundBlack.png"
        width="100"
        height="100"
        className="absolute z-20 md:top-0 left-0"
        style={{ translateY }}
      />
    </div>
  );
}
