import React from "react";
import Slider from "react-slick";

import { PROJECTS } from "../constants";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import "../style/slider.css";

const Projects = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <motion.div
      id="projects"
      className="lg:pt-20 pt-10 pb-4"
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className="my-10 lg:my-20 text-center text-2xl lg:text-6xl">
        Mes projets
      </h1>
      <p className="font-light tracking-tighter whitespace-pre-line lg:justify-center mb-12 lg:mb-32 text-l lg:text-xl 2xl:text-2xl lg:px-50">
        Chaque projet me permet de produire{" "}
        <span className="font-bold text-purple-800">
          un code propre, testé et réutilisable
        </span>
        . Autodidacte, je continue de renforcer mes connaissances en explorant
        de nouvelles technologies et en m’investissant dans des plateformes de
        formation comme{" "}
        <span className="font-bold text-purple-800">Frontend Mentor</span> et{" "}
        <span className="font-bold text-purple-800">OpenClassrooms</span>.
      </p>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              className={`w-full max-w-xl ${
                project.image ? "lg:w-3/4" : "lg:w-full"
              }`}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
            >
              <h2 className="mb-2 font-semibold lg:text-2xl 2xl:text-3xl">
                {project.title}
              </h2>
              <p className="mb-4 text-neutral-500 text-sm lg:text-base 2xl:text-xl">
                {project.description}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="flex gap-2 items-center text-blue-700 mb-2 lg:text-sm 2xl:text-base"
                >
                  <FaLink /> Découvrir mon projet {project.title}
                </a>
              )}
              <div className="flex gap-6">
                {project.githubFrontend && (
                  <a
                    href={project.githubFrontend}
                    target="_blank"
                    className="flex gap-2 items-center text-black mb-2 lg:text-sm 2xl:text-base"
                  >
                    <FaGithub />
                    Frontend
                  </a>
                )}
                {project.githubBackend && (
                  <a
                    href={project.githubBackend}
                    target="_blank"
                    className="flex gap-2 items-center text-black mb-2 lg:text-sm 2xl:text-base"
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
                    className="rounded bg-purple-400 text-white px-2 py-1 font-medium lg:text-base 2xl:text-xl "
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
                className="w-full lg:w-1/4"
              >
                {typeof project.image === "object" ? (
                  <Slider
                    {...sliderSettings}
                    className="w-full h-full lg:ml-10"
                  >
                    {Object.values(project.image).map((imgSrc, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={imgSrc}
                        alt={`${project.title} - Image ${imgIndex + 1}`}
                        className="object-contain w-full h-64 lg:h-80 "
                      />
                    ))}
                  </Slider>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex gap-2 items-center text-blue-500 mb-4"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="mt-6 rounded object-contain lg:ml-10  "
                    />
                  </a>
                )}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
