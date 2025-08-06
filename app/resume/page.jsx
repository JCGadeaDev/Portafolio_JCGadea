"use client";

import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaJs,
  FaReact,
  FaAngular,
  FaPython,
  FaJira,
  FaTrello,
  FaNode,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaMicrosoft, // Para el ícono de Excel
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiAstro,
  SiCanvas,
  SiNotion,
  SiNextdotjs,
  SiMysql,
  SiAsana,
  SiExpress,
  SiPostgresql,
  SiSupabase,
  SiOracle,
  SiPrisma,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiPostman,
  SiSwagger,
  SiVite,
  SiWebpack,
  SiGithubactions,
  SiGooglecolab,
  SiNetlify,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

//About data
const about = {
  title: "Sobre mí",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quo odio neque fugiat labore. Aliquid minima qui aspernatur laboriosam ipsum doloribus vel sapiente aperiam libero, eum eveniet excepturi ullam vitae?",
  info: [
    {
      fieldName: "Nombre: ",
      fieldValue: "Juan Carlos Gadea",
    },
    {
      fieldName: "Teléfono: ",
      fieldValue: "(+505)85785399 / (+39)3444528131",
    },
    {
      fieldName: "Experiencia: ",
      fieldValue: "4+ Years",
    },
    {
      fieldName: "Correo: ",
      fieldValue: "jcgambeta89@gmail.com",
    },
    {
      fieldName: "Freelance: ",
      fieldValue: "Disponible",
    },
    {
      fieldName: "Idiomas: ",
      fieldValue: "Español, Inglés",
    },
  ],
};

//Experience Data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Mi Experiencia",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illum nobis officia doloribus optio pariatur ducimus tempore, quos assumenda quae asperiores ullam veritatis, earum ratione ab labore adipisci rerum officiis.",
  items: [
    {
      company: "Tech Solutions Inc",
      position: "Developer",
      duration: "2018-2025",
    },
    {
      company: "Tech Solutions Inc",
      position: "Developer",
      duration: "2018-2025",
    },
    {
      company: "Tech Solutions Inc",
      position: "Developer",
      duration: "2018-2025",
    },
    {
      company: "Tech Solutions Inc",
      position: "Developer",
      duration: "2018-2025",
    },
    {
      company: "Tech Solutions Inc",
      position: "Developer",
      duration: "2018-2025",
    },
    {
      company: "Tech Solutions Inc",
      position: "Developer",
      duration: "2018-2025",
    },
  ],
};

//Education Data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Mis Estudios",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illum nobis officia doloribus optio pariatur ducimus tempore, quos assumenda quae asperiores ullam veritatis, earum ratione ab labore adipisci rerum officiis.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Developer",
      duration: "2018-2025",
    },
    {
      institution: "Online Course Platform",
      degree: "Developer",
      duration: "2018-2025",
    },
    {
      institution: "Online Course Platform",
      degree: "Developer",
      duration: "2018-2025",
    },
    {
      institution: "Online Course Platform",
      degree: "Developer",
      duration: "2018-2025",
    },
    {
      institution: "Online Course Platform",
      degree: "Developer",
      duration: "2018-2025",
    },
    {
      institution: "Online Course Platform",
      degree: "Developer",
      duration: "2018-2025",
    },
    {
      institution: "Online Course Platform",
      degree: "Developer",
      duration: "2018-2025",
    },
    {
      institution: "Online Course Platform",
      degree: "Developer",
      duration: "2018-2025",
    },
    {
      institution: "Online Course Platform",
      degree: "Developer",
      duration: "2018-2025",
    },
    {
      institution: "Online Course Platform",
      degree: "Developer",
      duration: "2018-2025",
    },
    {
      institution: "Online Course Platform",
      degree: "Developer",
      duration: "2018-2025",
    },
  ],
};

//Skills Data
const skills = {
  title: "Stack Tecnológico",
  description:
    "Estoy en constante aprendizaje y abierto a incorporar nuevas tecnologías que aporten valor a cada proyecto. Algunas de las tecnologías que manejo y en las que sigo perfeccionando mis habilidades son:",
  categories: [
    {
      name: "Frontend",
      skills: [
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaReact />, name: "React" },
        { icon: <FaAngular />, name: "Angular" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiAstro />, name: "Astro" },
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3 />, name: "CSS" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <FaBootstrap />, name: "Bootstrap" },
        { icon: <SiCanvas />, name: "Canvas" },
      ],
    },
    {
      name: "Backend",
      skills: [
        { icon: <FaNode />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express" },
      ],
    },
    {
      name: "Databases",
      skills: [
        { icon: <TbSql />, name: "SQL" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiSupabase />, name: "Supabase" },
        { icon: <SiOracle />, name: "Oracle PL/SQL - APEX" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiPrisma />, name: "Prisma ORM" },
      ],
    },
    {
      name: "Data & Analytics",
      skills: [
        { icon: <FaPython />, name: "Python" },
        { icon: <SiPandas />, name: "Pandas" },
        { icon: <SiNumpy />, name: "NumPy" },
        { icon: <SiJupyter />, name: "Jupyter" },
        { icon: <SiGooglecolab />, name: "Google Colab" },
        { icon: <FaMicrosoft />, name: "Advanced Excel" },
      ],
    },
    {
      name: "DevOps & Cloud",
      skills: [
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <FaGithub />, name: "GitHub" },
        { icon: <SiGithubactions />, name: "GitHub Actions" },
        { icon: <SiVite />, name: "Vite" },
        { icon: <IoLogoVercel />, name: "Vercel" },
        { icon: <SiNetlify />, name: "Netlify" },
        { icon: <SiWebpack />, name: "Webpack" },
        { icon: <VscAzure />, name: "Azure" },
        { icon: <FaAws />, name: "AWS" },
      ],
    },
    {
      name: "API & Testing",
      skills: [
        { icon: <SiPostman />, name: "Postman" },
        { icon: <SiSwagger />, name: "Swagger UI" },
      ],
    },
    {
      name: "Agile & Project Management",
      skills: [
        { icon: <FaJira />, name: "Jira" },
        { icon: <FaTrello />, name: "Trello" },
        { icon: <SiNotion />, name: "Notion" },
        { icon: <SiAsana />, name: "Asana" },
      ],
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 pt-8">
            <TabsTrigger value="experience">Experiencia</TabsTrigger>
            <TabsTrigger value="education">Educación</TabsTrigger>
            <TabsTrigger value="skills">Stack Tecnológico</TabsTrigger>
            <TabsTrigger value="about">Sobre</TabsTrigger>
          </TabsList>
          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left pt-8">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex  items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left pt-8">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className="text-accent">{item.degree}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex  items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              
                <div className="flex flex-col gap-[30px] xl:text-left pt-8">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0 text-justify">
                    {skills.description}
                  </p>
                </div>
                <div className="flex flex-col gap-[30px]">
                {skills.categories.map((category, idx) => (
                  <div key={idx} className="mb-8">
                    <h4 className="text-2xl font-semibold mb-4 text-accent">
                      {category.name}
                    </h4>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {category.skills.map((skill, index) => (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-4xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TabsContent>
            {/* About me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left pt-8">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex flex-col xl:flex-row items-start xl:items-center justify-start gap-1 xl:gap-4"
                      >
                        <span className="text-white/60 text-sm">
                          {item.fieldName}
                        </span>
                        <span className="text-lg xl:text-xl">
                          {item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
