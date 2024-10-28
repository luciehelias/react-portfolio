export const HERO_CONTENT = `Développeuse passionnée et rigoureuse, je maîtrise les technologies front-end et back-end à travers des langages comme JavaScript, React, Node.js, et Express. Formée au sein du bootcamp Le Réacteur, j’ai eu l’opportunité de réaliser divers projets techniques, de la création d'interfaces utilisateurs réactives à la construction de serveurs back-end. Mes compétences incluent également l’intégration d’APIs, la gestion de bases de données, et la création d’applications mobiles en React Native.`;

export const MOTIVATION = `Chaque projet me permet de produire un code propre, testé et réutilisable. Autodidacte, je continue de renforcer mes connaissances en explorant de nouvelles technologies et en m’investissant dans des plateformes de formation comme Frontend Mentor ou OpenClassrooms.`;

export const ABOUT_TEXT = `Développeuse full stack en début de carrière, j’ai découvert une véritable passion pour la création d’applications web dynamiques et accessibles. Ayant suivi une formation intensive, j’ai acquis des compétences en JavaScript, React, Node.js, et MongoDB, que j’ai eu l’occasion d’appliquer sur des projets concrets. Curieuse et motivée, j’aime apprendre de nouvelles technologies et relever des défis techniques pour élargir mes compétences. 

Toujours prête à collaborer et à m’adapter, je suis enthousiaste à l’idée de contribuer à des projets stimulants, en m’efforçant d’améliorer chaque ligne de code pour offrir des solutions de qualité.`;

import FrontendMentor1 from "../images/frontend mentor 1.png";
import FrontendMentor2 from "../images/frontend mentor 2.png";
import FrontendMentor3 from "../images/frontend mentor 3.png";
import Marvel from "../images/project marvel .png";
import Tripadvisor from "../images/project tripadvisor.png";
import Vinted from "../images/projet Vinted.png";
import Padel from "../images/project deuce padel 1.png";

export const EXPERIENCES = [
  {
    year: "2024 - Maintenant",
    role: "Formation : Dévéloppeuse Full Stack",
    company: "Autodidacte",
    description:
      "Je me forme de manière autodidacte sur différentes plateformes tel que Frontend Mentor, OpenClassrooms, Youtube ou encore en suivant des formations payantes de développeur tel que Traversy Media",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "React.js",
      "Typescript",
      "Tailwind",
    ],
  },
  {
    year: "Juillet 2024 - Octobre 2024",
    role: "Formation : Développeuse Full Stack",
    company: "Le Reacteur",
    description:
      "J'ai suivi une formation intense chez Le Reacteur qui est un bootcamp principalement sur React et React Native. J'ai pu travailler sur différents projets utilisant des stacks différentes. A la fin de la formation, j'ai également pu créer une MVP pour une start-up. ",
    technologies: [
      "Javascript",
      "React.js",
      "React Native",
      "Node.js",
      "mongoDB",
      "Express.js",
    ],
  },
  {
    year: " Mars 2017 - Maintenant ",
    role: "Barista Freelance / Manager Barista ",
    company: "Nouvelle-Zélande, Australie, France",
    description:
      "En tant que Freelance, je travaille dans plusieurs cafés parisiens de manière ponctuel ou régulière comme chez Noir Coffee Shop. J'ai pû pendant 3 ans travailler à l'étranger et devenir manager d'équipe. J'ai dû former et recruter des nouveaux employés internationaux, mais également participer activement au développement de la stratégie commerciale d'un restaurant et faire ainsi 30% de CA de plus que les années précédentes. ",
  },
  {
    year: "Mars 2021 - Juin 2021",
    role: "Assistante communication et marketing",
    company: "Morjana Cosmetiques",
    description: `J'ai créer un site e-commerce avec le " CMS Wix pour permettre à l'entreprise de partir sur un positionnement en B2C en plus de leur positionnement en B2B. Mais finalement après un changement de la direction, le projet n'a pas vu le jour. `,
  },
];

export const PROJECTS = [
  {
    title: "Frontend Mentor",
    image: FrontendMentor1,
    description:
      "J'ai pu réaliser différents challenges en partant de zéro en essayent de recopier les images données ou en suivant un Figma si celui-ci était donné. J'ai actuellement fait 9 challenges.  ",
    link: "https://www.frontendmentor.io/profile/luciehelias",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Marvel",
    image: Marvel,
    description:
      "J'ai créé une application Marvel où l'utilisateur peut chercher grâce à la barre de recherche ses comics favoris ou ses personnages favoris et les mettre dans ses favoris.",
    link: "https://project-marvel-react.netlify.app",
    technologies: ["HTML", "CSS", "React", "Node.js", "Express"],
  },
  {
    title: "TripAdvisor",
    image: Tripadvisor,
    description:
      "J'ai créé un clone de l'application TripAdvisor avec un carousel de photos ainsi qu'un envoi automatisé de mails.",
    link: "https://project-tripadvisor-clone.netlify.app",
    technologies: ["Node.js", "Express", "HTML", "CSS", "Javascript"],
  },
  {
    title: "Vinted",
    image: Vinted,
    description:
      "J'ai créé un clone de l'application Vinted avec la possibilité d'inscription et de connexion grâce au backend, la publication d'annonce, une barre de recherche, un moyen de paiement grâce à stipe et la possibilité d'upload de photos.",
    link: "https://project-vinted-clone.netlify.app",
    technologies: ["Node.js", "Express", "HTML", "CSS", "React"],
  },
  {
    title: "MVP - Deuce Padel",
    image: Padel,
    description:
      "Au sein d'une équipe de 4, j'ai pu en 2 semaines créé une application mobile de mise en contact de joueurs de Padel avec Expo depuis un Figma. J'ai notamment pû gérer la partie de la gestion de l'authentification avec un système de context, la création d'un hook personnalisée pour la validation du formulaire, la création d'une liste de composants dynamiques et réutilisable (buttons, card, input, checkbox, modal...), mais aussi la configuration des appels API avec le backend que nous avons créé et la gestions des données avec des hooks (useEffect, useState).",
    technologies: ["React Native", "CSS", "Figma", "Node.js", "Express"],
  },
];

export const CONTACT = {
  address: "4 rue auguste chabrières 75015 Paris ",
  email: "lucie.helias.dev@gmail.com",
};
