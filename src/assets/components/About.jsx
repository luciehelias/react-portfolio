import about from "../images/about.avif";
import { ABOUT_TEXT } from "../constants";

import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="pb-4 lg:my-36">
      <h1 className="my-20 text-center text-4xl font-light">
        A Propos de <span className="text-neutral-400">Moi</span>
      </h1>
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="rounded-2xl h-80 object-cover"
              src={about}
              alt="photo"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="my-4 max-w-xl py-6 font-extralight whitespace-pre-line text-justify"
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
