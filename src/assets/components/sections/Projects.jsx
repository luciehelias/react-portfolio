import { PROJECTS } from "../../constants/index";

import { motion } from "framer-motion";

import Title from "../basics/Title";
import Project from "../Project";
import BoldText from "../basics/BoldText";
import TextSection from "../basics/TextSection";

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
      <TextSection className="tracking-tighter lg:justify-center mb-12 lg:mb-32 lg:px-50">
        {" "}
        Chaque projet me permet de produire
        <BoldText> un code propre, testé et réutilisable </BoldText>.
        Autodidacte, je continue de renforcer mes connaissances en explorant de
        nouvelles technologies et en m’investissant dans des plateformes de
        formation comme <BoldText> Frontend Mentor </BoldText> et
        <BoldText> OpenClassrooms.</BoldText>
      </TextSection>
      <div>
        {PROJECTS.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
