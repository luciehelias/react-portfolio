import Slider from "react-slick";

import { motion } from "framer-motion";

import "../style/slider.css";
import GithubLink from "./basics/GithubLink";
import WebsiteLink from "./basics/WebsiteLink";

import Skill from "./basics/Skill";
import ProjectImage from "./basics/ProjectImage";

const Project = (project, index) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
      <motion.div
        className={`w-full max-w-xl ${
          project.image ? "lg:w-3/4" : "lg:w-full"
        }`}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
      >
        <h2 className="mb-2 font-semibold lg:text-2xl 2xl:text-3xl">
          {project.title}
        </h2>
        <p className="mb-4 text-neutral-500 text-sm lg:text-base 2xl:text-xl">
          {project.description}
        </p>

        {project.link && (
          <WebsiteLink url={project.link} title={project.title} />
        )}
        <div className="flex gap-6">
          {project.githubFrontend && (
            <GithubLink url={project.githubFrontend} title="Frontend" />
          )}
          {project.githubBackend && (
            <GithubLink url={project.githubBackend} title="Backend" />
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <Skill key={index} tech={tech} />
          ))}
        </div>
      </motion.div>
      {project.image && (
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/4"
        >
          {typeof project.image === "object" ? (
            <Slider {...sliderSettings} className="w-full h-full lg:ml-10">
              {Object.values(project.image).map((imgSrc, imgIndex) => (
                <img
                  key={imgIndex}
                  src={imgSrc}
                  alt={`${project.title} - Image ${imgIndex + 1}`}
                  className="object-contain w-full h-64 lg:h-80 mt-6  "
                />
              ))}
            </Slider>
          ) : (
            <ProjectImage
              link={project.link}
              image={project.image}
              title={project.title}
            />
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Project;
