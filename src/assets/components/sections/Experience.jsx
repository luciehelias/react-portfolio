import { EXPERIENCES } from "../../constants";

import { motion } from "framer-motion";
import Title from "../basics/Title";

const Experience = () => {
  return (
    <motion.div
      id="experiences"
      className="lg:pt-20 pt-10 lg:pb-4"
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
    >
      <Title title="Mon parcours" />
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="lg:mb-8 mb-4 flex flex-wrap lg:justify-center pb-4"
          >
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400 lg:text-lg 2xl:text-xl">
                {experience.year}
              </p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <div className="flex gap-4 items-center">
                {" "}
                <img src={experience.image} alt={experience.role} width={30} />
                <h2 className="mb-2 font-semibold lg:text-xl 2xl:text-2xl">
                  {experience.role} - {""}
                  <span className="text-sm text-purple-400 lg:text-xl 2xl:text-2xl ">
                    {experience.company}
                  </span>
                </h2>
              </div>

              <p className="mb-4 text-neutral-500 text-sm lg:text-base 2xl:text-xl  ">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies?.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-purple-400 text-white px-2 py-1 text-sm lg:text-base 2xl:text-xl  font-medium  "
                  >
                    {tech}
                  </span>
                ))}
                {experience.competence?.map((competence, index) => (
                  <span
                    key={index}
                    className="rounded bg-pink-200 text-purple-800 px-2 py-1 text-sm lg:text-base 2xl:text-xl font-medium  "
                  >
                    {competence}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
