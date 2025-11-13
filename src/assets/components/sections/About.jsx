import about from "../../images/about.avif";

import { motion } from "framer-motion";
import Title from "../basics/Title";
import BoldText from "../basics/BoldText";
import TextSection from "../basics/TextSection";

const About = () => {
  return (
    <motion.div
      id="about"
      className="lg:pt-20 pt-10 pb-4 w-full "
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
    >
      <Title title="A propos de Moi" />
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/3 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl h-80 object-cover hidden sm:block"
              src={about}
              alt="photo"
            />
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <div className="flex justify-center lg:justify-normal lg:ml-28">
            <TextSection className="my-0 sm:my-4">
              Développeuse full stack avec une appétence pour le Front-End en
              début de parcours professionnel, j’ai découvert une véritable
              passion pour
              <BoldText>
                {" "}
                la création d’applications web dynamiques et accessibles.{" "}
              </BoldText>
              J'ai suivi une formation intensive et acquis de nombreuses
              compétences que j'ai eu l’occasion d’appliquer sur des projets
              concrets.
              <BoldText> Curieuse et motivée</BoldText>, j’aime apprendre de
              nouvelles technologies et relever des défis techniques pour
              élargir mes compétences. Toujours prête à collaborer et à
              m’adapter, je suis enthousiaste à l’idée de
              <BoldText> contribuer à des projets stimulants</BoldText>, en
              m’efforçant d’améliorer chaque ligne de code pour offrir des
              solutions de qualité.
            </TextSection>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
