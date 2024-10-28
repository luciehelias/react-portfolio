import { motion } from "framer-motion";

import { HERO_CONTENT } from "../constants";
import { MOTIVATION } from "../constants";

import profilePic from "../images/Lucie-Helias.jpg";

const Hero = () => {
  return (
    <div className="w-full lg:my-36">
      <div className="flex flex-wrap items-end mt-20">
        <div className=" w-full lg:w-1/2 lg:p-10">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="pb-12 text-7xl font-light tracking-tight lg:mt-10 lg:text-6xl"
            >
              Lucie Hélias
            </motion.h1>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="bg-clip-text text-3xl font-extralight "
            >
              Développeuse full-stack (react)
            </motion.span>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="my-2 max-w-xl py-6 font-extralight tracking-tighter whitespace-pre-line text-justify"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className=" max-w-xl font-extralight tracking-tighter whitespace-pre-line text-justify"
            >
              {MOTIVATION}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              src={profilePic}
              alt=" photo de profil"
              className="rounded-2xl h-80 my-10 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
