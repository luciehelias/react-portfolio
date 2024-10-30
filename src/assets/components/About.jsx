import about from "../images/about.avif";

import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="lg:pt-20 pt-10 pb-4">
      <h1 className="my-8 lg:my-20 text-center text-2xl lg:text-5xl font-light">
        A Propos de <span className=" text-purple-800 font-semibold">Moi</span>
      </h1>
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="rounded-2xl h-80 object-cover "
              src={about}
              alt="photo"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              className="my-4 max-w-xl py-6 font-light whitespace-pre-line text-l lg:text-xl"
            >
              Développeuse full stack en début de parcours professionnel, j’ai
              découvert une véritable passion pour{" "}
              <span className="font-bold text-purple-800">
                la création d’applications web dynamiques et accessibles.
              </span>
              <br />
              J'ai suivi une formation intensive et acquis de nombreuses
              compétences que j’ai eu l’occasion d’appliquer sur des projets
              concrets.{" "}
              <span className="font-bold text-purple-800">
                Curieuse et motivée
              </span>
              , j’aime apprendre de nouvelles technologies et relever des défis
              techniques pour élargir mes compétences.
              <br />
              Toujours prête à collaborer et à m’adapter, je suis enthousiaste à
              l’idée de{" "}
              <span className="font-bold text-purple-800">
                contribuer à des projets stimulants
              </span>
              , en m’efforçant d’améliorer chaque ligne de code pour offrir des
              solutions de qualité.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
