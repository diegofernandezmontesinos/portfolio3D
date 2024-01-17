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
} from "../assets";

export const navLinks = [
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Oracle SQL",
    icon: mongodb,
  },
  {
    name: "Bootstrap",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "FrontEnd Software Developer",
    company_name: "Alten ADC Spain",
    // icon: starbucks,
    // iconBg: "#383E56",
    date: "August 2023 - now",
    points: [
      "Software development for TRATON, in this case for the Scania International Team. I created an app using SignalR and React version 18.",
      "Frontend developer using React with Redux as main framework.",
      "TypeScript as main languages.",
      "Docker.",
      "Figma for designing apps.",
      "Jira and GitLab.",
      "International project whoses main language was english.",
    ],
  },
  {
    title: "Full Stack Software Developer",
    company_name: "Keapps",
    // icon: tesla,
    // iconBg: "#E6DEDD",
    date: "Feb 2023 - Aug 2023",
    points: [
      "Software developer in Getafe, whose final client is AIRBUS Defense and Space. ",
      "I have been working in the Honey EuroDrone programme, this software upload and actualize the technical documents of the vehicle.",
      "I developed the app using the framework AngularJS, and languages HTML, CSS and JavaScript. For the backend I developed with Java version 8.",
      "Sourcetree (Git control version) was apply on work.",
      "For the Data Base, I used Oracle SQL Developer.",
    ],
  },
  {
    title: "Full Stack Software Developer",
    company_name: "Technologycal Sharks",
    // icon: shopify,
    // iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Diseño de páginas web para distintas compañías usando como framework ReactJs y Angular. Sobre lenguajes, usé HTML, CSS y en ocasiones, Bootstrap.",
      "Resolución de problemas informáticos de páginas web usando HTML, CSS, JavaScript, Typerscript, React y Angular.",
      "Manejo de base de datos de la empresa usando MySQL.",
      "En ocasiones, codificación de programas usando Java.",
      "Esta empresa se desempeñaba en hacer páginas web para comercios y una plataforma de pago online, dicha plataforma se diseñó usando React.",
      "Diseños responsive de páginas web.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
