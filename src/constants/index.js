import {
  python,
  pytorch,
  tensorflow,
  streamlit,
  git,
  docker,
  ainspired,
  instanceseg,
  monopoly,
  mario,
  llm,
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
    name: "Streamlit",
    icon: streamlit,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const projects = [
  {
    name: "AI'nspired: Image similarity comparison",
    description: 
    "Compared web-sourced images with AI-generated ones using DINOV2, implementing patch-wise similarity analysis and attention map visualizations for artistic inspiration insights",
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
        name: "Streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: ainspired,
    source_code_link: "https://github.com/adamtms/AI-nspired/",
  },

  {
    name: "Instance Segmentation on Cityscapes dataset",
    description: 
    "Slightly modified Mask R-CNN to segment urban scenes—detecting cars, bikes, and pedestrians—with custom dataset handling, tensorboard logging and an interactive dashboard. All packaged within a docker file.",
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
        name: "Streamlit",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      }
    ],
    image: instanceseg,
    source_code_link: "https://github.com/j-millet/CV_project3",
  },
  
  {
    name: "Monopoly game state tracking",
    description: 
    "Real-time game tracking using OpenCV to detect dice values, pawn movements, and property transactions through full game logic implementation.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
    ],
    image: monopoly,
    source_code_link: "https://github.com/B0cz3k/monopoly",
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
    ],
    image: mario,
    source_code_link: "https://github.com/B0cz3k/Mario",
  },

  {
    name: "RAG LLM PDF Chatbot",
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
        name: "Streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: llm,
    source_code_link: "https://github.com/B0cz3k/llm_pdf_chatbot",
  },
];

export { technologies, projects };
