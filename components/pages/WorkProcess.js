"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HEADINGS = {
  MAIN_TITLE: "STEPS",
  SUB_TITLE: "WE DO",
  WORK_PROCESS: ["WORK", "PROCESS"],
};

const STEPS = [
  { id: "01", title: "UI/UX Designing" },
  { id: "02", title: "Web Development" },
  { id: "03", title: "SEO" },
];

const BUTTON_TEXT = "LET'S START";
const DESCRIPTION =
  "Our process includes UI/UX designing for seamless user experiences, web development for robust applications, and SEO to enhance online visibility.";
export default function WorkProcess() {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start center", "center start"],
  });

  const width = useTransform(scrollYProgress, [0, 1], ["90px", "3000px"]);

  return (
    <div className="workProcess z-10 relative bg-black text-white overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div>
          <h2 className="text-4xl md:text-4xl sm:text-3xl strokeTextWhite font-eraBold mb-0">
            {HEADINGS.MAIN_TITLE}
          </h2>
          <div className="flex gap-2">
            <h2 className="text-4xl md:text-4xl sm:text-3xl font-eraBold">
              {HEADINGS.SUB_TITLE}
            </h2>
            <span>
              {HEADINGS.WORK_PROCESS.map((word, index) => (
                <p key={index} className="text-xs font-era text-gray-50">
                  {word}
                </p>
              ))}
            </span>
          </div>
        </div>

        {/* Cards Grid */}
        <div ref={cardRef} className="grid md:grid-cols-3 gap-6 mt-16">
          {STEPS.map((step) => (
            <Card key={step.id} className="gradientCard bg-white/20 border-0">
              <CardHeader>
                <div className="text-2xl text-white px-1 ml-auto mb-10">
                  {step.id}
                </div>
                <CardTitle className="tracking-wider text-2xl text-white font-eraBold">
                  {step.title}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="relative customBtnRounded rounded-full my-8 border-2 font-era bg-white text-black transition-colors">
          <a href="#footer" variant="none" size="lg">
            {BUTTON_TEXT}
          </a>
          <motion.div
            style={{ width }}
            className="customBtnRoundedAnime bg-[#ffffde]"
          ></motion.div>
        </div>

        {/* Description */}
        <p className="text-gray-400 max-w-6xl text-justify">{DESCRIPTION}</p>
      </div>
    </div>
  );
}
