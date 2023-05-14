import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  website,
  mario,
  bmp,
  threejs,
  python,
  pytorch,
  tensorflow,
  c,
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

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "BMP-File Parser",
    description:
      "A program that displays information about headers of a BMP file, can rewrite the image in grayscale, show the histogram of colors of the image and also encode and decode a message within that file.",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "git",
        color: "pink-text-gradient",
      },
    ],
    image: bmp,
    source_code_link: "https://github.com/B0cz3k/bmp_parser",
  },
  {
    name: "Super Mario Reinforcement Learning",
    description:
      "Reinforcement learning agent that learns itself to play Super Mario Bros on a simulated environment via OpenAI's Gym.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "PyTorch",
        color: "orange-text-gradient",
      },
      {
        name: "git",
        color: "pink-text-gradient",
      },
    ],
    image: mario,
    source_code_link: "https://github.com/B0cz3k/Mario",
  },
  {
    name: "This website",
    description:
      "Created from tutorial on YouTube, then tailored to my needs. Makes use of some of the most popular technology behind webdev right now.",
    tags: [
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "orange-text-gradient",
      },
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      }
    ],
    image: website,
    source_code_link: "https://github.com/B0cz3k/3d-website",
  },
];

export { technologies, projects };
