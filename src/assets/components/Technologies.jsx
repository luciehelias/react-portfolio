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
  return (
    <div className="lg:my-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-light"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-8 "
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="border-2 border-neutral-400 rounded-2xl p-2"
        >
          <RiJavascriptLine className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="border-2 border-neutral-400 rounded-2xl p-2"
        >
          <FaHtml5 className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="border-2 border-neutral-400 rounded-2xl p-2"
        >
          <FaCss3Alt className="text-7xl text-sky-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="border-2 border-neutral-400 rounded-2xl p-2"
        >
          <SiTypescript className="text-7xl text-sky-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="border-2 border-neutral-400 rounded-2xl p-2"
        >
          <SiTailwindcss className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="border-2 border-neutral-400 rounded-2xl p-2"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="border-2 border-neutral-400 rounded-2xl p-2"
        >
          <TbBrandReactNative className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="border-2 border-neutral-400 rounded-2xl p-2"
        >
          <SiMongodb className="text-7xl text-green-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="border-2 border-neutral-400 rounded-2xl p-2"
        >
          <FaNodeJs className="text-7xl text-green-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="border-2 border-neutral-400 rounded-2xl p-2"
        >
          <SiExpress className="text-7xl text-grey-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
