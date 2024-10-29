import { EXPERIENCES } from "../constants";

import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div id="experiences" className="pt-20 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-5xl"
      >
        Mon parcours
      </motion.h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center pb-4"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400 lg:text-lg">
                {experience.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <div className="flex gap-4 items-center">
                {" "}
                <img
                  src={experience.image}
                  alt={experience.role}
                  width={30}
                  // height={10}
                />
                <h2 className="mb-2 font-semibold lg:text-xl">
                  {experience.role} - {""}
                  <span className="text-sm text-purple-400 lg:text-xl">
                    {experience.company}
                  </span>
                </h2>
              </div>

              <p className="mb-4 text-neutral-500 lg:text-base">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies?.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-pink-200 px-2 py-1 text-sm font-medium text-purple-800 "
                  >
                    {tech}
                  </span>
                ))}
                {experience.competence?.map((competence, index) => (
                  <span
                    key={index}
                    className="rounded bg-lime-400 px-2 py-1 text-sm font-medium text-purple-800 "
                  >
                    {competence}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
