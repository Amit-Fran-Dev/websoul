"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ServiceItem({ service }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["50% end", "end 50%"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [10, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="relative">
      <div className="mt-16 mb-6 relative">
        <h3 className="text-2xl z-20 font-era mb-2">{service.title}</h3>
        <motion.span
          ref={ref}
          style={{ y, opacity }}
          className="fadedText absolute text-8xl font-bold font-eraBold text-gray-900"
        >
          {service.number}
        </motion.span>
      </div>
      <p className="text-black">{service.description}</p>
      <button className="text-sm my-6 font-era hover:text-gray-600 transition-colors">
        READ MORE
      </button>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <div className="container max-w-6xl px-6 pt-12">
      <div className="text-right mb-16">
        <h2 className="text-3xl md:text-4xl font-eraBold font-bold mb-2">
          OUR SERVICES
        </h2>
        <p className="text-black">
          We provide responsible and SEO-friendly websites for your business.
        </p>
      </div>

      {services.map((service, index) => (
        <ServiceItem key={index} service={service} />
      ))}
    </div>
  );
}

export const services = [
  {
    number: "01",
    title: "UI/UX DESIGNING",
    description:
      "Our UI/UX design process is all about crafting intuitive, visually stunning, and user-friendly experiences. We focus on understanding user behavior and business goals to design interfaces that are not only beautiful but also functional and engaging. Every interaction is thoughtfully designed to enhance usability and keep visitors engaged.",
  },
  {
    number: "02",
    title: "WEB DEVELOPMENT",
    description:
      "We specialize in building modern, responsive, and high-performing web solutions tailored to your needs. Whether it's a sleek business website, a dynamic web app, or a powerful e-commerce platform, our development ensures speed, security, and scalability. We use the latest technologies to create seamless experiences across all devices.",
  },
  {
    number: "03",
    title: "SEARCH ENGINE OPTIMIZATION",
    description:
      "A great website deserves great visibility. Our SEO strategies help you rank higher on search engines, drive organic traffic, and reach the right audience. From keyword research to technical optimization and content strategy, we ensure your website stays ahead of the competition and attracts potential customers effortlessly.",
  },
];
