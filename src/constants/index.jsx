import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  react,
  eru,
  node,
  full,
  mysql,
  githubtech,
  weather,
  pokemon,
  commerce,
  note,
  planner,
  todo,
  poke,
  forecast,
  recipe,
  artvicco,
  ui,
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
    title: "React  Developer",
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: githubtech,
  },
];

const experiences = [
  {
    title: "Student",
    company_name: "Erciyes University",
    icon: eru,
    iconBg: "#383E56",
    date: "2019 ",
    points: [
      "Begining a student of a engineer and learn lots of things. Coding journey begins here",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Front-End Journey",
    icon: react,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Jan 2023",
    points: [
      "After  2 years of pandemic sleep, i started to web development journey.",
      "First learned basics of HTML, CSS and JavaScript ",
      "Then working on a freamework time is come. I choose ReactJs and start working on it",
      "Finally i learn ReactJs, Redux and TailwindCss. Now working on NextJS",
    ],
  },
  {
    title: "Back-End Developer",
    company_name: "Back-End Journey",
    icon: node,
    iconBg: "#383E56",
    date: "Nov 2022 - May 2023",
    points: [
      "When i learn basics of JavaScript i start working on NodeJs.",
      "Then i started work on  front and back-end development simultaneously.",
      "While working learned MongoDb and Mysql for Data Base management.",
      "Finally i can make web api's for my Front-end works.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "As a junior",
    icon: full,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "I know im still beginning of the road. And i wil improve my skills",
      "I want to collaborate with other developers to create high-quality products.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Front-End Journey",
    icon: react,
    iconBg: "#E6DEDD",
    date: "Present",
    points: [
      "After I learn React for front-end and Node.js for back-end development i practice lots of self projects. ",
      " After them i start working on React Native for mobile development.",
      "Currently building basic projects on mobile. Mostly web projects i buileded.",
    ],
  },
  {
    title: "Engineer",
    company_name: "Erciyes University",
    icon: eru,
    iconBg: "#383E56",
    date: "2024 ",
    points: ["End of University"],
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
    name: "Artvicco E-Commerce Site",
    description:
      "E commerce website for Artvicco products.Frontend and Backend development. Build with NextJs, TypeScript and MongoDB.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: artvicco,
    source_code_link: "https://github.com/ZiyaOzgul/Artvicoo",
  },
  {
    name: "Admin Dashboard",
    description:
      "Admin Dashboard project.Frontend and Backend development. Build with NextJs, TypeScript and MongoDB.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: ui,
    source_code_link: "https://github.com/ZiyaOzgul/ui-project",
  },

  {
    name: "Weather Forecast",
    description:
      "Weather Forecast application current, daily and weekly forecast of your city. Build with ReactJs and OpenWeatherApi.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "OpenWeatherApi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/ZiyaOzgul/React-Weather-App",
  },
  {
    name: "Pokdex",
    description:
      "Pokedex application for pokemon info and stats. Build with ReactJs, Redux and PokedexApi",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "pokedexApi",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: pokemon,
    source_code_link: "https://github.com/ZiyaOzgul/Pokedex-App",
  },
  {
    name: "E-Commerce Template",
    description: "A basic E-Commerce site template. Build with ReactJs",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: commerce,
    source_code_link: "https://github.com/ZiyaOzgul/E-Commerce-Template",
  },
  {
    name: "Note Application",
    description:
      "Basic Note Application. Build with ReactJs,Redux and Tailwindcss",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
    ],
    image: note,
    source_code_link: "https://github.com/ZiyaOzgul/Note-app-MongoDb",
  },
  {
    name: "Daily Planner",
    description:
      "Daily Planner Application. Build with ReactJs,Redux and Tailwindcss",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
    ],
    image: planner,
    source_code_link: "https://github.com/ZiyaOzgul/Bitirme",
  },
];

export const MobileProjects = [
  {
    name: "Native Forecast Application",
    description:
      "Mobile Forecast Application. Build with React Native,Redux and Tailwindcss",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
    ],
    image: forecast,
    source_code_link: "https://github.com/ZiyaOzgul/Native-Weather-App",
  },
  {
    name: "Native Recipe Application",
    description:
      "Mobile Recipe Book Application. Build with React Native,Redux and Tailwindcss",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
    ],
    image: recipe,
    source_code_link: "https://github.com/ZiyaOzgul/Native-Recipe-App",
  },
  {
    name: "Native ToDo Application",
    description:
      "Mobile ToDo Application. Build with React Native,Redux and Tailwindcss",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/ZiyaOzgul/Native-TodoApp-With-Redux",
  },
  {
    name: "Native Pokedex Application",
    description:
      "Mobile Pokedex Application. Build with React Native,Redux and Tailwindcss",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
    ],
    image: poke,
    source_code_link: "https://github.com/ZiyaOzgul/Native-Pokedex-App",
  },
];
export { services, technologies, experiences, testimonials, projects };
