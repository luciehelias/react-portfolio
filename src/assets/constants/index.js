import FrontendMentor1 from "../images/frontend-mentor-1.png";
import FrontendMentor2 from "../images/frontend-mentor-2.png";
import FrontendMentor3 from "../images/frontend-mentor-3.png";
import FrontendMentor4 from "../images/frontend-mentor-4.png";
import FrontendMentor5 from "../images/frontend-mentor-5.png";
import FrontendMentor6 from "../images/frontend-mentor-6.png";
import FrontendMentor7 from "../images/frontend-mentor-7.png";
import Marvel from "../images/project-marvel.png";
import Tripadvisor from "../images/project-tripadvisor.png";
import Vinted from "../images/projet-Vinted.png";

export const EXPERIENCES = [
  {
    year: "Maintenant",
    role: " Recherche Stage ou Alternance : Dévéloppeuse Full Stack",
    company: "?",
    description:
      "Disponible de suite pour intégrer une entreprise et ainsi évoluer aux côtés de professionnels tout en apportant mon énergie et mes compétences à vos projets.",
  },
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
    year: "Septembre 2024",
    role: "MVP : Dévéloppeuse Full Stack",
    company: "Start-up : Deuce Padel",
    description: `
    Au sein d'une équipe de 4, j'ai pu réalisé en 2 semaines le MVP (minimum viable product) d'une application mobile de mise en contact de joueurs de Padel avec Expo depuis un Figma. J'ai notamment pû gérer la partie de la gestion de l'authentification avec un système de context, la création d'un hook personnalisée pour la validation du formulaire, la création d'une liste de composants dynamiques et réutilisable (buttons, card, input, checkbox, modal...), mais aussi la configuration des appels API avec le backend que nous avons créé et la gestions des données avec des hooks (useEffect, useState).
    `,
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
    description: `J'ai suivi une formation intense chez Le Reacteur qui est un bootcamp principalement sur React et React Native. J'ai pu travailler sur différents projets utilisant des stacks différentes. 
      
      A la fin de la formation, j'ai également créer une application full stack qui reprendre les codes d'une grande entreprise de fast food. `,
    technologies: ["React Native", "CSS", "Figma", "Node.js", "Express"],
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
    image: {
      FrontendMentor1,
      FrontendMentor2,
      FrontendMentor3,
      FrontendMentor4,
      FrontendMentor5,
      FrontendMentor6,
      FrontendMentor7,
    },
    description:
      "J'ai pu réaliser différents challenges en partant de zéro en essayent de recopier les images données ou en suivant un Figma si celui-ci était donné. J'ai actuellement fait 9 challenges.  ",
    link: "https://www.frontendmentor.io/profile/luciehelias",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Marvel",
    image: Marvel,
    githubFrontend: "https://github.com/luciehelias/frontend-marvel",
    githubBackend: "https://github.com/luciehelias/backend-marvel",
    description:
      "J'ai créé une application Marvel où l'utilisateur peut chercher grâce à la barre de recherche ses comics favoris ou ses personnages favoris et les mettre dans ses favoris.",
    link: "https://project-marvel-react.netlify.app",
    technologies: ["HTML", "CSS", "React", "Node.js", "Express"],
  },
  {
    title: "TripAdvisor",
    image: Tripadvisor,
    githubFrontend: "https://github.com/luciehelias/TripAdvisor",
    githubBackend: "https://github.com/luciehelias/TripAdvisor-BackEnd",
    description:
      "J'ai créé un clone de l'application TripAdvisor avec un carousel de photos ainsi qu'un envoi automatisé de mails.",
    link: "https://project-tripadvisor-clone.netlify.app",
    technologies: ["Node.js", "Express", "HTML", "CSS", "Javascript"],
  },
  {
    title: "Vinted (Desktop)",
    image: Vinted,
    githubBackend: "https://github.com/luciehelias/Vinted",
    githubFrontend: "https://github.com/luciehelias/Vinted-Frontend",
    description:
      "J'ai créé un clone de l'application Vinted avec la possibilité d'inscription et de connexion grâce au backend, la publication d'annonce, une barre de recherche, un moyen de paiement grâce à stipe et la possibilité d'upload de photos.",
    link: "https://project-vinted-clone.netlify.app",
    technologies: ["Node.js", "Express", "HTML", "CSS", "React"],
  },
];
