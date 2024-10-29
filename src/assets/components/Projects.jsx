import { PROJECTS } from "../constants";

import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-5xl"
      >
        Mes projets
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className={`w-full max-w-xl ${
                project.image ? "lg:w-3/4" : "lg:w-full"
              }`}
            >
              <h2 className="mb-2 font-semibold lg:text-2xl">
                {project.title}
              </h2>
              <p className="mb-4 text-neutral-500 lg:text-base">
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="flex gap-2 items-center text-blue-700 mb-2 lg:text-sm"
                >
                  <FaLink /> Découvrir le site {project.title}
                </a>
              )}
              <div className="flex gap-6">
                {project.githubFrontend && (
                  <a
                    href={project.githubFrontend}
                    target="_blank"
                    className="flex gap-2 items-center text-black mb-2 lg:text-sm"
                  >
                    <FaGithub />
                    Frontend
                  </a>
                )}
                {project.githubBackend && (
                  <a
                    href={project.githubBackend}
                    target="_blank"
                    className="flex gap-2 items-center text-black mb-2 lg:text-sm"
                  >
                    <FaGithub />
                    Backend
                  </a>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className=" rounded bg-pink-200 px-2 py-1 text-sm font-medium text-purple-800 "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
            {project.image && (
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4 "
              >
                <a
                  href={project.link}
                  target="_blank"
                  className="flex gap-2 items-center text-blue-500 mb-4"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={100}
                    className="mt-6 rounded overflow-scroll lg:ml-10 object-cover"
                  />
                </a>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
