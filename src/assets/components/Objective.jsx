import { motion } from "framer-motion";

const Objective = () => {
  return (
    <div id="future" className="lg:pt-20 pt-10 pb-4 lg:my-36">
      <div className="flex flex-col ">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-8 lg:my-20 text-center text-2xl lg:text-5xl"
        >
          Mes Objectifs
        </motion.h1>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.4 }}
          className="my-2 lg:py-4 font-light whitespace-pre-line text-l lg:text-xl"
        >
          Actuellement en recherche d'un{" "}
          <span className="font-bold text-purple-800">
            stage entre 3 et 6 mois
          </span>{" "}
          ou <span className="font-bold text-purple-800">une alternance</span>,
          je souhaite approfondir les langages acquis durant ma formation. En
          parallèle, je continue de me former aux technologies courantes du
          marché et de consolider mes connaissances dans les outils déjà
          explorés.
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.4 }}
          className="font-light whitespace-pre-line text-l lg:text-xl"
        >
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
        </motion.p>
        <div className="flex justify-center items-center flex-col">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.4 }}
            className="my-12 pb-4 lg:py-6 whitespace-pre-line text-l lg:text-2xl font-normal"
          >
            Je serais ravie de contribuer à vos projets ! N'hésitez pas à me
            contacter pour en discuter
          </motion.p>
          <a
            href="#contact"
            className="border border-neutral-400 rounded-2xl p-4 bg-purple-400 text-white text-xl font-medium text-center hover:scale-125 transition delay-150 duration-300 ease-in-out"
          >
            Contactez-moi
          </a>
        </div>
      </div>
    </div>
  );
};

export default Objective;
