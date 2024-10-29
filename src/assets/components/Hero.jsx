import { motion } from "framer-motion";

import profilePic from "../images/Lucie-Helias.jpg";

const Hero = () => {
  return (
    <div className="w-full lg:my-36">
      <div className="flex flex-wrap items-end mt-20">
        <div className=" w-full lg:w-1/2 lg:p-10">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="pb-12 text-7xl font-light tracking-tight lg:mt-10 lg:text-6xl"
            >
              Lucie Hélias
            </motion.h1>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="bg-clip-text text-4xl font-light "
            >
              Développeuse full-stack <span className="font-bold">(React)</span>
            </motion.span>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter whitespace-pre-line text-justify text-xl"
            >
              Développeuse passionnée et rigoureuse, je maîtrise les
              technologies front-end et back-end à travers des langages comme{" "}
              <span className="font-bold text-purple-800">
                JavaScript, React , Node.js et Express
              </span>
              . Formée au sein du bootcamp{" "}
              <span className="font-bold text-purple-800">Le Reacteur</span>,
              j’ai eu l’opportunité de réaliser divers projets techniques, de la
              création d'interface utilisateur réactive à la construction de
              serveurs back-end. Mes compétences incluent également
              l’intégration d’APIs, la gestion de bases de données, et la
              création d’applications mobiles en{" "}
              <span className="font-bold text-purple-800">React Native</span>.
            </motion.p>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className=" max-w-xl font-light tracking-tighter whitespace-pre-line text-justify text-xl"
            >
              Chaque projet me permet de produire un code propre, testé et
              réutilisable. Autodidacte, je continue de renforcer mes
              connaissances en explorant de nouvelles technologies et en
              m’investissant dans des plateformes de formation comme{" "}
              <span className="font-bold text-purple-800">Frontend Mentor</span>
              ou{" "}
              <span className="font-bold text-purple-800">OpenClassrooms</span>.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              src={profilePic}
              alt=" photo de profil"
              className="rounded-2xl h-80 my-10 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
