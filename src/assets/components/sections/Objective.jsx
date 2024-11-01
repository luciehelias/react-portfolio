import { motion } from "framer-motion";
import Title from "../basics/Title";

const Objective = () => {
  return (
    <motion.div
      id="objective"
      className="lg:pt-20 pt-10 pb-4 lg:my-36"
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex flex-col ">
        <Title title="Mes objectifs" />
        <p className="my-2 lg:py-4 font-light whitespace-pre-line text-l lg:text-xl 2xl:text-2xl">
          Actuellement en recherche d'un{" "}
          <span className="font-bold text-purple-800">
            stage entre 3 et 6 mois
          </span>{" "}
          ou <span className="font-bold text-purple-800">une alternance</span>,
          je souhaite approfondir les langages acquis durant ma formation. En
          parallèle, je continue de me former aux technologies courantes du
          marché et de consolider mes connaissances dans les outils déjà
          explorés.
        </p>
        <p className="font-light whitespace-pre-line text-l lg:text-xl 2xl:text-2xl">
          <span className="underline text-pink-600 font-bold">
            Les projets du moment :
          </span>{" "}
          <ul className="list-disc ml-6 lg:ml-12 mt-2">
            <li>
              Remettre à jour le code fait pendant la formation au Reacteur →
              Vinted en responsive
            </li>
            <li>Suivre un cours TypeScript</li>
            <li>Commencer le projet : jeu du pendu en React et TypeScript</li>
          </ul>
        </p>
        <div className="flex justify-center items-center flex-col">
          <p className="my-12 pb-4 lg:py-6 whitespace-pre-line text-l lg:text-2xl 2xl:text-3xl font-normal">
            Je serais ravie de contribuer à vos projets ! N'hésitez pas à me
            contacter pour en discuter
          </p>
          <a
            href="#contact"
            className="border border-neutral-400 rounded-2xl p-4 bg-purple-400 text-white text-xl 2xl:text-2xl font-medium text-center hover:scale-125 transition delay-150 duration-300 ease-in-out"
          >
            Contactez-moi
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Objective;
