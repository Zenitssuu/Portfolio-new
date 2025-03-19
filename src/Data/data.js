import { FaReact, FaNode, FaBootstrap, FaJava } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { DiJavascript1 } from "react-icons/di";
import { BiHomeAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BsBriefcase, BsChatLeftText } from "react-icons/bs";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { LuLinkedin } from "react-icons/lu";
// import fastKartImg from "../assets/fastKartImg.jpg"
import { myData } from "./constantData";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa6";
import { SiMongodb, SiMui, SiPostgresql, SiPostman, SiRedux } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";

export const skillsArr = [
  // {
  //   name: "Next.js",
  //   reactIcon: TbBrandNextjs ,
  //   percentage: {
  //     curr: 0,
  //     maxVal: 80,
  //   },
  //   showPercentage: false,
  // },
  {
    name: "React.js",
    reactIcon: FaReact,
    percentage: {
      curr: 0,
      maxVal: 80,
    },
    showPercentage: false,
  },
  {
    name: "Redux.js",
    reactIcon: SiRedux,
    percentage: {
      curr: 0,
      maxVal: 80,
    },
    showPercentage: false,
  },
  
  {
    name: "Node.js",
    reactIcon: FaNode,
    percentage: {
      curr: 0,
      maxVal: 50,
    },
    showPercentage: false,
  },
  {
    name: "JS (ES6+)",
    reactIcon: DiJavascript1,
    percentage: {
      curr: 0,
      maxVal: 80,
    },
    showPercentage: false,
  },
  {
    name: "C++",
    reactIcon: TbBrandCpp,
    percentage: {
      curr: 0,
      maxVal: 80,
    },
    showPercentage: false,
  },
  {
    name: "Java",
    reactIcon: FaJava,
    percentage: {
      curr: 0,
      maxVal: 80,
    },
    showPercentage: false,
  },
  {
    name: "Git",
    reactIcon: FaGitAlt,
    percentage: {
      curr: 0,
      maxVal: 75,
    },
    showPercentage: false,
  },
  {
    name: "Mongo DB",
    reactIcon: SiMongodb,
    percentage: {
      curr: 0,
      maxVal: 75,
    },
    showPercentage: false,
  },
  {
    name: "Postman",
    reactIcon: SiPostman,
    percentage: {
      curr: 0,
      maxVal: 75,
    },
    showPercentage: false,
  },
  {
    name: "Tailwind",
    reactIcon: RiTailwindCssFill,
    percentage: {
      curr: 0,
      maxVal: 75,
    },
    showPercentage: false,
  },
  {
    name: "MUI",
    reactIcon: SiMui,
    percentage: {
      curr: 0,
      maxVal: 75,
    },
    showPercentage: false,
  },
  {
    name: "Postgre",
    reactIcon: SiPostgresql,
    percentage: {
      curr: 0,
      maxVal: 75,
    },
    showPercentage: false,
  },
];


export const myselfData = {
  name: "Siddhant Saiba",
  intro: "I build web applications.",
  intro_desc:
    "I am a software developer enthusiasts specializing in developing high-performance web applications using React.js, Express.js and Node.js, with a strong emphasis on accessibility and user-centered design and high performance, adhering to industry standards and best practices to deliver inclusive digital experiences.",
};

export const aboutData = {
  about_para:
    `A backend developer specializing in Node.js, Express.js, and MongoDB, with expertise in API design, database architecture, and server-side logic. I have experience building RESTful APIs, implementing middleware, and integrating secure authentication mechanisms like JWT and OAuth. My strong foundation in frontend technologies like React.js, HTML, CSS, and JavaScript enables me to create seamless and efficient full-stack applications.\nIn addition to development, I have a solid background in competitive programming. I am a @Pupil on codeforces ,3-star coder on CodeChef and have solved over 250 problems on LeetCode, and have honed my problem-solving skills through diverse challenges. Currently, I am exploring AI tools to streamline development workflows and integrate intelligent features into web applications. My goal is to design secure, scalable, and innovative solutions while continually expanding my skill set in emerging technologies.`,
  totWorkingYear: new Date().getFullYear() - 2022,
  skills: [
    // {name: "Next.js"},
    {name: "React.js"},
    {name: "Redux"},
    {name: "JS (ES6+)"},
    {name: "Node.js"},
    {name: "Express"},
    {name: "NoSQL"},
  ]
};

export const projectData = [
  {
    imgLink: "https://res.cloudinary.com/dgze4nv70/image/upload/v1735476229/d0dim7fnlor9hdou8lcw.png",
    projectName: "Easy Eats",
    description:
      "It's food ordering website built using React.js, Express.js, OAuth, Feautures like Search, Filter, Add to cart, Delete from cart, Order from cart with secure transaction are there. Go check it out",
    tech_used: ["React.js", "Express.js" ,"Node.js", "OAuth2","Tailwind"],
    github: "https://github.com/Zenitssuu/Food-Delivery",
    live_link: "https://food-delivery-frontend-831b.onrender.com/",
  },
  {
    imgLink: "https://res.cloudinary.com/dgze4nv70/image/upload/v1735476230/occhjjbudczuqmcnoqtt.png",
    projectName: "Movie Hunk",
    description:
      "It's a movie booking website built using React.js, Express.js, Feautures like book ticket on a particular date is available with secure transaction. Go check it out",
    tech_used: ["React.js", "Express.js", "Node.js", "Taiwlind"],
    github: "https://github.com/Zenitssuu/Movie-Application---Movie-Hunk",
    live_link: "https://movie-application-movie-hunk-kn3xfztc1-siddhant-saibas-projects.vercel.app/",
  },
];

export const pageSections = [
  { name: "About", value: "about" },
  
  {name:"Skills", value: "skills"},
  { name: "Projects", value: "projects" },
  { name: "Experience", value: "experience" },
  // {name:"Testimonials", value: "testimonials"},
  { name: "Contact", value: "contact" },
]

export const middleNavList = [
  { name: "Myself", value: "myself", icon: BiHomeAlt, active: true },
  { name: "About", value: "about", icon: CgProfile, active: false },
  { name: "Skills", value: "skills", icon: FaUserGear, active: false },
  {
    name: "Experience",
    value: "experience",
    icon: BsBriefcase,
    active: false,
  },
  {
    name: "Contact",
    value: "contact",
    icon: BsChatLeftText,
    active: false,
  },
]

export const socialMediaLinks = [
  {
    name: "Github",
    icon: AiOutlineGithub,
    link: myData.github
  },
  // {
  //   name: "Instagram",
  //   icon: AiOutlineInstagram,
  //   link: myData.insta,
  // },
  {
    name: "Linkedin",
    icon: LuLinkedin,
    link: myData.linkedin,
  },
]
