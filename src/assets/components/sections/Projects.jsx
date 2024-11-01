import { PROJECTS } from "../../constants/index";

import { motion } from "framer-motion";

import Title from "../basics/Title";
import Project from "../Project";

const Projects = () => {
  return (
    <motion.div
      id="projects"
      className="lg:pt-20 pt-10 pb-4"
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
    >
      <Title title="Mes projets" />
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
          <Project key={index} {...project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
