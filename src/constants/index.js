export const myProjects = [
  {
    id: 1,
    title: "GTA VI Inspired Website",
    description:
      "A visually rich, animated website inspired by the upcoming GTA VI, showcasing cutting-edge frontend development.",
    subDescription: [
      "Built using React, GSAP for animations, and Tailwind CSS for styling.",
      "Created a fully responsive, immersive UI replicating the GTA VI vibe.",
      "Used Framer Motion and advanced scroll-based transitions for modern UX.",
    ],
    href: "https://gta-vi-landing-demo.vercel.app/",
    logo: "",
    image: "/assets/projects/gta.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 3, name: "GSAP", path: "/assets/logos/gsap.svg" },
    ],
  },
  {
    id: 2,
    title: "CoinFlipper - Blockchain Game",
    description:
      "A decentralized coin-flipping game powered by smart contracts on the Ethereum blockchain.",
    subDescription: [
      "Developed Solidity smart contracts for secure betting logic.",
      "Integrated Metamask and web3.js for wallet connectivity.",
      "Frontend built with React, Vite, and deployed on Polygon testnet.",
    ],
    href: "https://coinflipper-demo.vercel.app/",
    logo: "",
    image: "/assets/projects/coinflipper.jpg",
    tags: [
      { id: 1, name: "Solidity", path: "/assets/logos/solidity.svg" },
      { id: 2, name: "Web3.js", path: "/assets/logos/web3.png" },
      { id: 3, name: "React", path: "/assets/logos/react.svg" },
    ],
  },
  {
    id: 3,
    title: "Obys Agency Clone",
    description:
      "Pixel-perfect replica of the Obys Agency site using modern web technologies.",
    subDescription: [
      "Used Locomotive Scroll and GSAP for advanced scrolling animations.",
      "Created full-page smooth transitions with Framer Motion.",
      "Responsive and performant build using Vite + React.",
    ],
    href: "https://obysagency-demo.netlify.app/",
    logo: "",
    image: "/assets/projects/obys-agency.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "GSAP", path: "/assets/logos/gsap.svg" },
      { id: 3, name: "Framer Motion", path: "/assets/logos/framer-motion.svg" },
    ],
  },
  {
    id: 4,
    title: "AI Resume Analyzer",
    description:
      "An AI-powered tool that analyzes resumes and gives instant feedback based on job descriptions.",
    subDescription: [
      "Integrated OpenAI API for intelligent resume evaluation.",
      "Used React and Tailwind CSS for sleek UI/UX.",
      "Highlighted strengths and weaknesses with keyword insights.",
    ],
    href: "https://ai-resume-analyzer-demo.vercel.app/",
    logo: "",
    image: "/assets/projects/resume-ai.jpg",
    tags: [
      { id: 1, name: "OpenAI", path: "/assets/logos/openai.png" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 5,
    title: "Pizza Ordering App",
    description:
      "A simple and efficient pizza ordering interface built with React and best practices.",
    subDescription: [
      "Handled cart logic, dynamic pricing, and state management with Redux.",
      "Built reusable components with responsive layout.",
      "Improved performance using lazy loading and code splitting.",
    ],
    href: "https://react-pizza-fast.vercel.app/",
    logo: "",
    image: "/assets/projects/pizza.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Redux", path: "/assets/logos/redux.svg" },
      { id: 3, name: "Vite", path: "/assets/logos/vitejs.svg" },
    ],
  },
  {
    id: 6,
    title: "Heart Disease Prediction System",
    description:
      "Machine learning project to predict the likelihood of heart disease using patient data.",
    subDescription: [
      "Used logistic regression and SVM for binary classification.",
      "Built with Python and Streamlit for a web-based interface.",
      "Visualized insights with Matplotlib and Seaborn.",
    ],
    href: "https://github.com/devansh-chouhan",
    logo: "",
    image: "/assets/projects/heart-disease.jpg",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "Django", path: "/assets/logos/django.png" },
      { id: 3, name: "Scikit-Learn", path: "/assets/logos/sklearn.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "Github",
    href: "https://github.com/devansh-chouhan",
    icon: "/assets/socials/github.webp",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/devansh-chouhan",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Leetcode",
    href: "https://leetcode.com/devanshchouhan",
    icon: "/assets/socials/leetcode.png",
  },
];

export const experiences = [
  {
    title: "MERN Stack Intern",
    job: "Internship – Real Estate App",
    date: "2023",
    contents: [
      "Learned full-stack development using MongoDB, Express, React, and Node.js.",
      "Built a real estate web application with features like property listing, user authentication, and image uploads.",
      "Worked on both frontend and backend, improving understanding of REST APIs and database design.",
    ],
  },
  {
    title: "Blockchain Developer",
    job: "Blockchain Project (Client Work)",
    date: "2024",
    contents: [
      "Developed a blockchain-based application integrating Ethereum smart contracts.",
      "Used Solidity, Hardhat, and Ethers.js to write, test, and deploy contracts.",
      "Built a React-based frontend to interact with contracts and provide a smooth user experience.",
    ],
  },
  {
    title: "Hackathon",
    job: "College Hackathon Project",
    date: "2025",
    contents: [
      "Built a full-stack web application during a college hackathon hosted at another institution.",
      "Collaborated with a team to solve a real-world problem under time constraints.",
      "Focused on innovation, rapid prototyping, and presenting the solution effectively to judges.",
    ],
  },
];

export const highlights = [
  {
    title: "Quick Learner",
    description:
      "Picked up full-stack skills and blockchain development within months.",
  },
  {
    title: "Builder Mindset",
    description:
      "Created real projects like a real estate app, Ethereum dApp, and a hackathon solution.",
  },
  {
    title: "Team Collaborator",
    description:
      "Worked with teams during internship and hackathon with effective coordination.",
  },
  {
    title: "Problem Solver",
    description:
      "Solved 500+ coding problems on LeetCode, strengthening data structures and algorithms knowledge.",
  },
  {
    title: "Emerging Tech Explorer",
    description:
      "Exploring fields like Blockchain, Machine Learning, and Data Science through hands-on projects and self-learning.",
  },
  {
    title: "Consistent Learner",
    description:
      "Regularly upgrade skills through self-learning, online courses, and project-based practice.",
  },
  {
    title: "UI Enthusiast",
    description:
      "Enjoys crafting responsive, modern UIs using React, Tailwind CSS, and Three.js.",
  },
  {
    title: "Goal-Oriented",
    description:
      "Focuses on completing meaningful, functional projects rather than just tutorials.",
  },
];
