"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PolygonAnimation() {
  const polygonRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: polygonRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ["5rem", "-2rem"]);
  const rotate = useTransform(scrollYProgress, [0, 1], ["-20deg", "10deg"]);

  return (
    <div id="steps" ref={polygonRef} className="max-w-6xl mx-auto h-14 block relative">
      <motion.img
        src="/ThreeDAssets/polygonBlack.png"
        width="100"
        height="100"
        className="absolute z-20 top-0 right-2"
        style={{ translateY, rotate }}
        alt=""
      />
    </div>
  );
}
