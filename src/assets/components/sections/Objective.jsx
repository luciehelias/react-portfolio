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
          Actuellement en{" "}
          <span className="font-bold text-purple-800">stage de 6 mois</span>{" "}
          chez <span className="font-bold text-purple-800">Canal+</span>, je
          mets en pratique mes compétences en JavaScript, TypeScript et React au
          sein du player Web et Tv. Mon objectif est d’approfondir mes
          connaissances dans ces technologies et de contribuer à des projets à
          forte valeur ajoutée. À l’avenir, je suis à la recherche d’un poste en
          CDI, où je pourrai continuer à développer mes compétences et
          participer à des projets ambitieux en développement.
        </p>
        <p className="font-light whitespace-pre-line text-l lg:text-xl 2xl:text-2xl">
          <span className="underline text-pink-600 font-bold">
            Les projets du moment :
          </span>{" "}
          <ul className="list-disc ml-6 lg:ml-12 mt-2">
            <li>
              Apprendre quotidiennement au sein du groupe Canal+ sur le player
              Web et Tv
            </li>
            {/* <li>Continuer l'apprentissage de TypeScript</li> */}
            {/* <li>Continuer </li> */}
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
