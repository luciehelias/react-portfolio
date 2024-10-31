import React, { useState } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const technologies = [
    {
      icon: (
        <RiJavascriptLine className="text-5xl lg:text-7xl text-yellow-400" />
      ),
      name: "JavaScript",
    },
    {
      icon: <FaHtml5 className="text-5xl lg:text-7xl text-orange-500" />,
      name: "HTML5",
    },
    {
      icon: <FaCss3Alt className="text-5xl lg:text-7xl text-sky-600" />,
      name: "CSS3",
    },
    {
      icon: <SiTypescript className="text-5xl lg:text-7xl text-sky-600" />,
      name: "TypeScript",
    },
    {
      icon: <SiTailwindcss className="text-5xl lg:text-7xl text-blue-400" />,
      name: "Tailwind CSS",
    },
    {
      icon: <RiReactjsLine className="text-5xl lg:text-7xl text-cyan-400" />,
      name: "React",
    },
    {
      icon: (
        <TbBrandReactNative className="text-6xl lg:text-7xl text-cyan-400" />
      ),
      name: "React Native",
    },
    {
      icon: <SiMongodb className="text-5xl lg:text-7xl text-green-400" />,
      name: "MongoDB",
    },
    {
      icon: <FaNodeJs className="text-5xl lg:text-7xl text-green-400" />,
      name: "Node.js",
    },
    {
      icon: <SiExpress className="text-5xl lg:text-7xl text-gray-400" />,
      name: "Express",
    },
  ];

  return (
    <motion.div
      className="lg:my-24 lg:pt-20 pt-10 pb-4"
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className="my-8 lg:my-20 text-center text-2xl lg:text-6xl">
        Mes technologies
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="relative border-2 border-neutral-400 rounded-2xl p-4 flex flex-col items-center lg:gap-6 w-20 h-32 lg:w-auto"
          >
            {tech.icon}
            <span className="text-xs lg:text-sm font-semibold text-neutral-800 text-wrap pt-2 lg:pt-0">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Technologies;
