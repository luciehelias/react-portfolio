import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full lg:my-36">
      <div className="flex flex-col ">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-5xl "
        >
          Mes Ambitions
        </motion.h1>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.4 }}
          className="my-2 py-6 font-light whitespace-pre-line text-justify text-xl"
        >
          Recherche activeme d'un{" "}
          <span className="font-bold text-purple-800">
            stage entre 3 et 6 mois
          </span>{" "}
          ou <span className="font-bold text-purple-800">une alternance</span>{" "}
          afin de pouvoir continuer à me perfectionner dans les languages que
          j'ai appris pendant ma formation au Reacteur. En parallèle, je
          continue à me former aux autre languages les plus courants sur le
          marché et à me tenir à jour des languages que j'ai commencé à
          apprendre.
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.4 }}
          className="my-2 py-6 font-light whitespace-pre-line  text-xl text-center"
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

export default Hero;
