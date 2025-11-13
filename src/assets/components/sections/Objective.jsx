import { motion } from "framer-motion";
import Title from "../basics/Title";
import BoldText from "../basics/BoldText";
import TextSection from "../basics/TextSection";

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
        <TextSection className="my-2 lg:py-4">
          J’ai récemment terminé un
          <BoldText> stage de 6 mois chez Canal+</BoldText>, où j’ai mis en
          pratique mes compétences en JavaScript, TypeScript et React au sein
          des équipes en charge du player Web et TV. Cette expérience m’a permis
          de contribuer à des projets concrets, alliant performance,
          accessibilité et qualité du code. Grâce à ma formation, j’ai également
          acquis des bases solides en développement backend avec Node.js.
          Aujourd’hui, je suis à la recherche d’opportunités soit en{" "}
          <BoldText>alternance </BoldText>
          soit en
          <BoldText> CDI ou CDD </BoldText>
          pour continuer à évoluer sur des projets ambitieux, aussi bien en
          développement front-end qu’en fullstack.
        </TextSection>
        <p className="font-light whitespace-pre-line text-lg lg:text-xl 2xl:text-2xl">
          <span className="underline text-pink-600 font-bold">
            Les projets du moment :
          </span>
        </p>
        <ul className="font-light whitespace-pre-line text-lg lg:text-xl 2xl:text-2xl list-disc ml-6 lg:ml-12 mt-2">
          <li>
            Continuer à travailler sur le projet (Next.JS) VocaBuddy avec un
            autre développeur - un projet d’apprentissage de langues par
            flashcards.
          </li>
        </ul>
        <div className="flex justify-center items-center flex-col">
          <p className="my-12 pb-4 lg:py-6 whitespace-pre-line text-lg lg:text-2xl 2xl:text-3xl font-normal">
            Je serais ravie de contribuer à vos projets ! N'hésitez pas à me
            contacter pour en discuter.
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
