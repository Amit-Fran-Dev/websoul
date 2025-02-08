"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  MessageCircle,
  Zap,
  Smartphone,
  CreditCard,
  Clock,
  MoveRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const HEADING_PRIMARY = "WE PROVIDE ADVANCED";
const HEADING_SECONDARY = "WEB DESIGN SERVICE IN RANCHI";
const SUBTEXT = "We are Freelancers";
const HERO_IMAGE_ALT = "Hero image";
const HERO_IMAGE_SRC = "/images/1.jpg";
const HERO_TAGLINE = "Landmark Analytics";
const HERO_TITLE = "Space in typographical terms is usually";
const BUTTON_VIEW_WORK = "View My Work";
const BUTTON_CONTACT_ME = "Contact Me";
const FEATURE_LIVE_CHAT = "Live Chatting";
const FEATURE_LIGHT_SPEED = "Light Speed";
const FEATURE_RESPONSIVE = "Responsive Design";
const FEATURE_PAYMENT = "Payment Gateway";
const FEATURE_SUPPORT = "24x7 Support";
const GUARANTEE_HEADING = "Money\nBack\nGuaranty";
const GUARANTEE_PERCENTAGE = "100%";
const GUARANTEE_TEXT =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quis veniam vel omnis? Commodi, maiores veritatis? Eum voluptate soluta ducimus delectus magni, suscipit sunt. Velit quod cum quae possimus tempore?";
const BUTTON_READ_MORE = "READ MORE";

const HeroSection = () => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });


  const translateY = useTransform(scrollYProgress, [0, 1], ["-2rem", "-20rem"]);

  return (
    <>
     <span className="block relative">
        <motion.img
          ref={imgRef}
          src="/ThreeDAssets/glassGroup2.png"
          className=" absolute z-0 md:top-0 top-14 w-[100%] h-[auto] md:w-[99%] md:h-[auto]"
          animate={{
            translateY:[-20,20]
          }}
          transition={{
            repeat:Infinity,
            repeatType:'mirror',
            duration:4,
            ease:'easeInOut'

          }}
        />
      </span>
    <div className="container relative z-10 max-w-6xl mx-auto px-4 pt-12 text-center">
      <h2 className="text-4xl strokeText font-scollar mb-0">
        {HEADING_PRIMARY}
      </h2>
      <h2 className="font-eraBold text-4xl font-black mb-2">
        {HEADING_SECONDARY}
      </h2>
      <p className="text-xl font-era text-gray-600 mb-8">{SUBTEXT}</p>
      <div
        ref={containerRef}
        className="relative z-10 hidden md:block aspect-[4/2] md:aspect-[3.1] rounded-2xl overflow-hidden mb-4 bg-black"
      >
        <motion.img
          src={HERO_IMAGE_SRC}
          alt={HERO_IMAGE_ALT}
          className="w-full mt-40 md:mt-0"
          style={{
            translateY,
          }}
        />
        <div className="absolute  inset-0 flex items-center p-8 ">
          <div className="text-white text-left max-w-md tracking-widest">
            <p style={{ textShadow: "0 0 12px #111" }} className="text-sm mb-4">
              {HERO_TAGLINE}
            </p>
            <h4
              style={{ textShadow: "1px 1px 1px #111" }}
              className="text-lg md:text-3xl font-era font-bold mb-6"
            >
              {HERO_TITLE}
            </h4>
            <div className="mt-10 flex items-center gap-x-6">
              <Button className="bg-black hover:bg-lime hover:text-black text-white px-8 py-3 !rounded-button font-semibold">
                {BUTTON_VIEW_WORK}
              </Button>
              <Button className="bg-white/0 hover:bg-lime hover:text-black text-white font-semibold flex items-center gap-2">
                {BUTTON_CONTACT_ME} <MoveRight />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex buttonGroupSt p-1 rounded-full flex-wrap relative font-sans font-bold justify-between gap-2 mb-20">
        <Feature
          icon={<MessageCircle strokeWidth={1.5} />}
          text={FEATURE_LIVE_CHAT}
        />
        <Feature icon={<Zap strokeWidth={1.5} />} text={FEATURE_LIGHT_SPEED} />
        <Feature
          icon={<Smartphone strokeWidth={1.5} />}
          text={FEATURE_RESPONSIVE}
        />
        <Feature
          icon={<CreditCard strokeWidth={1.5} />}
          text={FEATURE_PAYMENT}
        />
        <Feature icon={<Clock strokeWidth={1.5} />} text={FEATURE_SUPPORT} />
      </div>

      <div className="max-w-6xl mx-auto  text-left">
        <div className="mb-4 relative overlapText">
          <h3 className="text-2xl  font-eraBold mb-2">
            {GUARANTEE_HEADING}
          </h3>
          <span className="fadedText top-20 absolute text-8xl font-bold font-eraBold text-gray-900">
            {GUARANTEE_PERCENTAGE}
          </span>
        </div>
        <p className="text-gray-600  mb-4">{GUARANTEE_TEXT}</p>
        <Button variant="none" size="lg" className="font-eraBold">
          {BUTTON_READ_MORE}
        </Button>
      </div>
    </div>
   
    </>
  );
};

export default HeroSection;

function Feature({ icon, text }) {
  return (
    <div
      style={{ borderWidth: "1px" }}
      className="flex hover:bg-green-300 border-black hover:border-green-500 cursor-pointer rounded-full items-center gap-2 text-black px-1 sm:px-5 py-1"
    >
      {icon}
      <span className="text-sm font-medium hidden lg:block">{text}</span>
    </div>
  );
}
