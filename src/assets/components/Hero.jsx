import { motion } from "framer-motion";

import profilePic from "../images/Lucie-Helias.png";

const Hero = () => {
  return (
    <div className="w-full " id="portfolio">
      <div className="flex flex-wrap items-end mt-20">
        <div className=" w-full lg:w-2/3 lg:p-10">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="pb-12 text-6xl font-light tracking-tight mt-10 lg:text-6xl items-start"
            >
              Lucie Hélias
            </motion.h1>
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-clip-text text-3xl lg:text-4xl font-light "
            >
              Développeuse web full-stack{" "}
              <span className="font-bold">(React)</span>
            </motion.h2>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="lg:my-2 max-w-xl py-6 font-light tracking-tighter whitespace-pre-line text-l lg:text-xl"
            >
              Développeuse passionnée et rigoureuse, je me suis spécialisée dans
              les technologies Front-End et Back-End à travers des langages
              comme{" "}
              <span className="font-bold text-purple-800">
                JavaScript, React, Node.js et Express.
              </span>
              <br />
              Formée au sein du bootcamp {""}
              <span className="font-bold">
                <a
                  href="https://www.lereacteur.io/bootcamp-javascript/formation-developpeur-web-mobile/"
                  target="_blank"
                >
                  Le Reacteur
                </a>
              </span>
              , j’ai eu l’opportunité de réaliser divers projets techniques, de
              la création d'interfaces utilisateurs réactives à la construction
              de serveurs back-end.
              <br />
              Mes compétences incluent également l’intégration d’APIs, la
              gestion de bases de données et la création d’applications mobiles
              en <span className="font-bold text-purple-800">React Native</span>
              .
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={profilePic}
              alt=" photo de profil"
              className="rounded-2xl h-80 lg:h-96 lg:my-10 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
