import { motion } from "framer-motion";

import profilePic from "../../images/Lucie-Helias.png";
import BoldText from "../basics/BoldText";
import TextSection from "../basics/TextSection";

const Hero = () => {
  return (
    <div className="w-full " id="portfolio">
      <div className="flex flex-wrap items-end mt-20">
        <div className=" w-full lg:w-2/3 lg:p-10">
          <div className="flex flex-col items-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="pb-12 text-6xl font-light tracking-tight mt-10 lg:text-7xl items-start"
            >
              Lucie Hélias
            </motion.h1>
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-clip-text text-3xl lg:text-4xl 2xl:text-5xl font-light "
            >
              Développeuse
              <span className="font-bold">
                FullStack / Front-end - React/TypeScript{" "}
              </span>
            </motion.h2>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <TextSection className="lg:my-2 lg:max-w-xl xl:max-w-6xl tracking-tighter ">
                {" "}
                Développeuse passionnée et rigoureuse, je viens de finir un
                stage de 6 mois dans le groupe Canal+ au sein de l'équipe player
                Web et Tv. J'ai eu l'opportunité de contribuer à l'amélioration
                du player actuel ainsi que de développer le nouveau player
                récemment mis en production.
                <br />
                Je me suis spécialisée dans les technologies Front-End et
                Back-End à travers des langages comme{" "}
                <BoldText>
                  JavaScript, React, Typescript, Node.js et Express.
                </BoldText>
                <br />
                Formée au sein du bootcamp
                <span className="font-bold">
                  <a
                    href="https://www.lereacteur.io/bootcamp-javascript/formation-developpeur-web-mobile/"
                    target="_blank"
                    className="cursor-pointer "
                  >
                    {" "}
                    Le Reacteur
                  </a>
                </span>
                , et également de manière autodidacte, j’ai eu l’opportunité de
                réaliser divers projets techniques, de la création d'interfaces
                utilisateurs réactives à la construction de serveurs back-end.
                <br />
                Mes compétences incluent également l’intégration d’APIs, la
                gestion de bases de données et la création d’applications
                mobiles en
                <BoldText> React Native.</BoldText>
                <br />
                <br />
                Aujourd’hui, je suis activement à la recherche de nouvelles
                missions en <BoldText>freelance, CDI ou CDD.</BoldText> Ultra
                motivée et enthousiaste, je souhaite mettre mes compétences au
                service de projets innovants et challengeants.
              </TextSection>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={profilePic}
              alt="photo de profil de lucie, développeuse web"
              className="rounded-2xl h-80 lg:h-[30rem] xl:h-[40rem] lg:my-10 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
