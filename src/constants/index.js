import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  nextjs,
  github1,
  sql,
  orli,
  markq,
  Quizzyverse,
  RottenTomatoes,
  Reddit,
  comingsoon,
  FlappyBird,
  WeatherApp,
  logo,
} from "../assets";

export const navLinks = [
  // {
  //   id: 'cv/Cv-Desbazeille-Mayeul.pdf',
  //   title: 'CV',
  // },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "NextJS",
    icon: nextjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Github",
    icon: github1,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Responsable développement web",
    company_name: "Orli",
    icon: orli,
    iconBg: "#383E56",
    date: "Mai 2023 - Juillet 2023",
    points: [
      "J’étais le responsable du développement web de la start-up",
      "J’ai effectué du SEO, campagne marketing, récupération de data via des outils de gestion tels GA, Semrush.",
    ],
  },
  {
    title: "Alternance de rêve",
    company_name: "?",
    icon: markq,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - ?",
    points: [
      "Développer et maintenir des applications web en utilisant React.js et d'autres technologies connexes.",
      "Collaborer avec des équipes interfonctionnelles comprenant des designers, des chefs de produit et d'autres développeurs pour créer des produits de haute qualité.",
      "Mettre en œuvre un design réactif et garantir la compatibilité entre les navigateurs.",
      "Participer à des revues de code et fournir des retours constructifs à d'autres développeurs.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Mayeul est un garçon travailleur, pour lui trouver une alternance serait un accomplissement.",
    name: "Maman",
    designation: "Maman",
    company: "Mayeul",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "Tout pareil que maman 🤷‍♂️.",
    name: "Papa",
    designation: "Papa",
    company: "Mayeul",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Si vous pensez que je suis une personne sérieuse, travailleuse, marrante, déterminée, vous avez totalement raison 😁",
    name: "Moi-même",
    designation: "Etudiant",
    company: "Epitech",
    image: logo,
  },
];

const projects = [
  {
    name: "Quizzyverse",
    description:
      "Jeu de quiz, comme son nom l'indique, où l'on peut jouer à quelques jeux, réalisé durant la CodingAcademy à Epitech Paris",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nextjs",
        color: "black-text-gradient",
      },
      {
        name: "expressjs",
        color: "blue-text-gradient",
      },
    ],
    image: Quizzyverse,
    source_code_link: "https://github.com/Acrazie/Quizzyverse",
  },
  {
    name: "Rotten Tomatoes",
    description:
      "Site qui répertorie les films, leurs affiches, et donne toutes les informations nécessaires à l'utilisateur, que ce soit la date de sortie, les acteurs, les descriptions...",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nextjs",
        color: "black-text-gradient",
      },
      {
        name: "expressjs",
        color: "blue-text-gradient",
      },
    ],
    image: RottenTomatoes,
    source_code_link: "https://github.com/Acrazie",
  },
  {
    name: "RedditLike",
    description:
      "Ce projet est une application web inspirée de Reddit, développée en utilisant le framework Laravel pour le backend, Vue.js pour le frontend et MySQL pour les bases de données.",
    tags: [
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
      {
        name: "vuejs",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "white-text-gradient",
      },
    ],
    image: Reddit,
    source_code_link: "https://github.com/Acrazie",
  },
  {
    name: "FlappyBird",
    description:
      "Le projet de réplique de jeu mobile en Java m'a permis de comprendre l'orienté objet Java.",
    tags: [
      {
        name: "java",
        color: "orange-text-gradient",
      },
    ],
    image: FlappyBird,
    source_code_link: "https://github.com/Acrazie/Java2D-Game",
  },
  {
    name: "Weather-App",
    description:
      "L'idée de ce projet m'est venue du fait que les applications météo étaient soit trop anciennes, soit pas assez précises, et du fait que je voulais utiliser les APis de Google.",
    tags: [
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "white-text-gradient",
      },
    ],
    image: WeatherApp,
    source_code_link: "https://github.com/Acrazie/Weather-App",
  },
  {
    name: "More Coming Soon",
    description: "More coming soon.",
    tags: [
      {
        name: "python",
        color: "pink-text-gradient",
      },
      {
        name: "pygame",
        color: "green-text-gradient",
      },
    ],
    image: comingsoon,
    source_code_link: "https://github.com/Acrazie",
  },
];

export { services, technologies, experiences, testimonials, projects };
