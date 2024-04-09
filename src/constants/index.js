import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  unet,
  mario,
  llm,
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
    name: "git",
    icon: git,
  },
];

const projects = [
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
    name: "RAG LLM",
    description:
      "LLM agent with RAG capabilities, tailored for PDF document understanding and summarization. Can chat about any PDF document given to it.",
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
    image: llm,
    source_code_link: "https://github.com/B0cz3k/llm_pdf_chatbot",
  },

  {
    name: "Image segmentation",
    description:
      "Image segmentation using a U-net implementation from scratch in PyTorch. Trained on Carvana dataset.",
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
    image: unet,
    source_code_link: "https://github.com/B0cz3k/image_segmentation",
  },
];

export { technologies, projects };
