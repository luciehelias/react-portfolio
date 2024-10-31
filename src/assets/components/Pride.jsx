import { motion } from "framer-motion";

import envolDuPapillon from "../images/envol-du-papillon.png";
import dansLesSongesDeKaelia from "../images/dans-les-songes-de-kaelia.png";

const Future = () => {
  return (
    <motion.div
      id="future"
      className="lg:pt-20 pt-10 pb-4 lg:my-36"
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1.4 }}
    >
      <div className="flex flex-col ">
        <h1 className="my-8 lg:my-20 text-center text-2xl lg:text-6xl ">
          Mes autres fiertés personnelles
        </h1>
        <div className="lg:flex gap-30">
          <div className="lg:w-1/2">
            <p className="my-2 py-2 font-light whitespace-pre-line text-l lg:text-l 2xl:text-xl">
              Pendant mon expatriation en Nouvelle-Zélande et en Australie,
              entre l'apprentissage d'un nouveau métier et la découverte de
              nouvelles cultures, j'ai consacré trois ans à l'écriture,
              finalisant le premier jet de{" "}
              <span className="font-bold text-purple-800">
                mon premier roman
              </span>{" "}
              et <span className="font-bold text-purple-800"> d'un second</span>{" "}
              en 2021. Les expériences de voyage, les rencontres et mon passé
              ont enrichi mon imagination, me permettant de créer deux univers
              uniques, chacun peuplé de personnages et d'intrigues qui leur sont
              propres.
            </p>
            <p className="my-2 py-2 font-light whitespace-pre-line text-l lg:text-l 2xl:text-xl">
              Au fil de ces années, j’ai partagé cette aventure littéraire avec
              mes lecteurs de l’époque, publiant chaque semaine un nouveau
              chapitre sur{" "}
              <span className="font-bold text-purple-800">Wattpad</span> où leur
              soutien et leurs retours ont été une précieuse source de
              motivation et d’inspiration. Ensemble, mes deux romans cumulent
              aujourd’hui près de{" "}
              <span className="font-bold text-purple-800">15 000 lectures</span>
              .
            </p>
            <p className="my-2 py-2 font-light whitespace-pre-line text-l lg:text-l 2xl:text-xl pb-8">
              Depuis, entre ma réorientation professionnelle, ma formation de
              future développeuse Web et mon activité de freelance, je consacre
              toujours du temps à retravailler mes manuscrits. J'explore sans
              cesse de nouvelles versions, peaufinant chaque détail pour
              préparer des envois aux maisons d'édition ou envisager l’aventure
              de l’auto-publication.
            </p>
          </div>
          <motion.div
            className="flex w-full lg:w-1/2 gap-6 lg:gap-10 lg:ml-4 lg:justify-center lg:items-center"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
          >
            <a
              href="https://www.wattpad.com/story/88214071-l%27envol-du-papillon-termin%C3%A9"
              target="_blank"
              className="border-2 border-neutral-300 rounded-2xl p-6 shadow-2xl"
            >
              {" "}
              <img
                src={envolDuPapillon}
                alt="Livre l'envol du papillon"
                className="rounded-xl"
                width={180}
              />
            </a>
            <a
              href="https://www.wattpad.com/story/171187324-dans-les-songes-de-kaelia-termin%C3%A9"
              target="_blank"
              className="border-2 border-neutral-300 rounded-2xl p-6  shadow-2xl"
            >
              <img
                src={dansLesSongesDeKaelia}
                alt="Livre Dans les songes de Kaelia"
                className="rounded-xl"
                width={180}
              />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Future;
