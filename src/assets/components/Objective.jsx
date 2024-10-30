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
          className="my-2 pb-4 lg:py-6 font-light whitespace-pre-line text-l lg:text-xl"
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
          className="lg:my-2 lg:py-6 font-light whitespace-pre-line text-l lg:text-xl text-center"
        >
          <span className="underline text-pink-600 font-bold">
            Le projet du moment
          </span>{" "}
          : Remettre à jour les codes faits pendant la formation au Reacteur
        </motion.p>
      </div>
    </div>
  );
};

export default Objective;
