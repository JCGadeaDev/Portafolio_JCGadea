"use client";

import React, { useState } from "react";
import {
  FaHtml5, FaCss3, FaBootstrap, FaJs, FaReact, FaAngular, FaPython,
  FaJira, FaTrello, FaNode, FaGitAlt, FaGithub, FaAws, FaMicrosoft,
  FaWordpress, FaUser, FaGraduationCap, FaBriefcase, FaCode,
  FaSearchPlus, FaTimes, FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss, SiTypescript, SiAstro, SiNotion, SiNextdotjs,
  SiMysql, SiAsana, SiExpress, SiPostgresql, SiSupabase, SiOracle,
  SiPrisma, SiPandas, SiNumpy, SiJupyter, SiPostman, SiSwagger,
  SiVite, SiWebpack, SiGithubactions, SiGooglecolab, SiNetlify,
  SiWix, SiLooker, SiGoogleanalytics, SiFirebase, SiGooglecloud,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";

// =================================================================
// DATOS (Mismos datos, sin cambios)
// =================================================================

const about = {
  title: "Acerca de mí",
  description: "Lo que más me gusta de la tecnología es su capacidad para resolver problemas reales. Ya sea diseñando una interfaz de usuario limpia o analizando un conjunto de datos para encontrar un patrón oculto, mi objetivo es el mismo: crear algo útil y eficiente. Convierto conversaciones sobre estrategia en código funcional y hojas de cálculo en historias claras.",
  info: [
    { fieldName: "Nombre: ", fieldValue: "Juan Carlos Gadea" },
    { fieldName: "Teléfono: ", fieldValue: "(+505)85785399 / (+39)3513183823" },
    { fieldName: "Experiencia: ", fieldValue: "5+ Años" },
    { fieldName: "Correo: ", fieldValue: "jcgambeta89@gmail.com" },
    { fieldName: "Freelance: ", fieldValue: "Disponible" },
    { fieldName: "Idiomas: ", fieldValue: "Español (Nativo), Inglés (Intermedio), Italiano (Básico)" },
  ],
};

const experience = {
  title: "Mi Experiencia Profesional",
  description: "Mi trayectoria abarca desde el desarrollo de software y la gestión de proyectos en entornos corporativos hasta la creación de soluciones full-stack, análisis de datos y estrategias SEO.",
  items: [
    {
      company: "inVicta Business Partners",
      position: "Technology Solutions & Analytics Specialist",
      duration: "Agosto 2025 – Actualidad (En remoto)",
      highlights: [
        "Analizo y evalúo soluciones tecnológicas para optimizar el rendimiento e impacto directo en el negocio.",
        "Diseño e implemento reportes y dashboards con KPIs clave para medir la efectividad de las soluciones tecnológicas.",
        "Identifico oportunidades de mejora en procesos e infraestructura, desarrollando flujos de trabajo basados en datos.",
        "Colaboro con equipos multidisciplinarios en la integración de herramientas y nuevas tecnologías.",
        "Gestiono el desarrollo web con CMS (WordPress, Wix), aplicando SEO On-Page y Técnico."
      ],
    },
    {
      company: "Profesional Independiente",
      position: "Desarrollador Web Full Stack | Analista de Datos | SEO",
      duration: "Febrero 2025 – Actualidad (En remoto)",
      highlights: [
        "Lidero el desarrollo Full-Stack, diseñando e implementando REST APIs (endpoints) con Node.js y utilizando servicios de backend como Supabase y Firebase.",
        "Desarrollo de soluciones web escalables (e-commerce, portafolios), incluyendo consumo de APIs y pasarelas de pago.",
        "Implemento métodos de autenticación seguros (OAuth y JWT).",
        "Implemento análisis de datos avanzados con Python y Power BI para optimizar decisiones de negocio.",
        "Administro bases de datos SQL y PostgreSQL para asegurar la integridad y el rendimiento.",
        "Automatizo flujos CI/CD mediante Git, GitHub y GitHub Actions.",
        "Aplico estrategias de SEO on-page y SEM en WordPress y Wix Studio."
      ],
    },
    {
      company: "Claro Nicaragua",
      position: "Analista de Sistemas | Analista de Proyectos - Transformación Digital",
      duration: "Mayo 2022 – Enero 2025 (Managua, Nicaragua)",
      highlights: [
        "Lideré el desarrollo e implementación de aplicaciones empresariales con Oracle SQL y Oracle APEX.",
        "Diseñé estructuras de datos relacionales e interfaces interactivas.",
        "Gestioné el ciclo de vida completo de proyectos tecnológicos y desarrollé documentación de software.",
        "Coordiné equipos interdepartamentales y stakeholders, supervisando pruebas SIT, UAT y QA.",
        "Administré el avance y los cambios de proyectos utilizando herramientas ágiles (Jira, Trello).",
        "Contribuí activamente en procesos de digitalización y automatización."
      ],
    },
    {
      company: "Seguros Iniser Nicaragua",
      position: "Programador Informático",
      duration: "Julio 2018 – Junio 2019 (Managua, Nicaragua)",
      highlights: [
        "Desarrollé y mantuve sistemas de información con PL/SQL, Oracle Database, Oracle Forms y Reports.",
        "Diseñé e implementé soluciones desde cero, incluyendo modelado de bases de datos y lógica de negocio.",
        "Creé reportes personalizados y gestioné portales web internos.",
        "Brindé soporte funcional y técnico continuo a usuarios."
      ],
    },
    {
      company: "Seguros Iniser Nicaragua",
      position: "Digitador y Analista de Suscripción",
      duration: "Junio 2017 – Julio 2018 (Managua, Nicaragua)",
      highlights: [
        "Gestioné el análisis y la suscripción de pólizas de seguros.",
        "Capacité a personal interno y externo sobre productos y herramientas tecnológicas."
      ],
    },
    {
      company: "RS SEGURIDAD DIGITAL INTERNACIONAL",
      position: "Asistente de Operaciones Técnicas",
      duration: "Marzo 2017 – Mayo 2017 (Managua, Nicaragua)",
      highlights: [
        "Realicé mantenimiento preventivo y correctivo de equipos de cómputo y sistemas CCTV.",
        "Instalé, reparé y configuré hardware y sistemas tecnológicos.",
        "Proporcioné soporte técnico presencial y remoto."
      ],
    },
  ],
};

const education = {
  title: "Mi Formación",
  description: "Mi base en ingeniería de sistemas se enriquece con una formación continua y exhaustiva, validada por certificaciones en desarrollo, gestión de proyectos, cloud y análisis de datos.",
  formal: {
    title: "Formación Universitaria",
    items: [
      {
        institution: "Universidad Nacional de Ingeniería (UNI-IES)",
        degree: "Ingeniería de Sistemas (Graduado)",
        duration: "2010 - 2016",
        image: "/assets/certificates/TituloUniversidad.webp"
      },
      {
        institution: "Universidad Centroamericana (UCA)",
        degree: "Administración de Empresas (3er año)",
        duration: "2007 - 2010",
        image: null
      },
    ],
  },
  certifications: {
    title: "Certificaciones y Formación Continua",
    items: [
      { institution: "Codigo Facilito", degree: "Curso Profesional de React", duration: "2025", image: "/assets/certificates/CodigoFacilitoReact.webp" },
      { institution: "Codigo Facilito", degree: "Curso Profesional de Docker", duration: "2025", image: "/assets/certificates/CodigoFacilitoDocker.webp" },
      { institution: "Código Facilito", degree: "Consumiendo APIs con JavaScript Fetch", duration: "2025", image: "/assets/certificates/CodigoFacilitoFetch.webp" },
      { institution: "Código Facilito", degree: "Curso Profesional de JavaScript", duration: "2025", image: "/assets/certificates/CodigoFacilitoJavaScript.webp" },
      { institution: "Código Facilito", degree: "Bootcamp de Github Actions", duration: "2025", image: "/assets/certificates/CodigoFacilitoGithubActions.webp" },
      { institution: "Código Facilito", degree: "Curso Profesional de Base de Datos", duration: "2025", image: "/assets/certificates/CodigoFacilitoBasedeDatos.webp" },
      { institution: "Código Facilito", degree: "Curso de Fundamentos de Microsoft Azure", duration: "2025", image: "/assets/certificates/CodigoFacilitoAzure.webp" },
      { institution: "Código Facilito", degree: "Curso de Bases y conceptos de la Ciencia de Datos", duration: "2025", image: "/assets/certificates/CodigoFacilitoCienciaDeDatos.webp" },
      { institution: "Código Facilito", degree: "Introducción al Análisis de Datos con Python", duration: "2025", image: "/assets/certificates/CodigoFacilitoIntroduccionAnalisisPython.webp" },
      { institution: "Microsoft Partner", degree: "Developing Solutions for Microsoft Azure", duration: "2025", image: "/assets/certificates/DevelopingSolutions.webp" },
      { institution: "Desafío Latam", degree: "React en acción: De cero a experto", duration: "2025", image: "/assets/certificates/ReactAccion.webp" },
      { institution: "Desafío Latam", degree: "Domina el Análisis con SQL", duration: "2025", image: "/assets/certificates/DominaAnalisisSQL.webp" },
      { institution: "Desafío Latam", degree: "Introducción al Análisis de Datos con Python", duration: "2025", image: "/assets/certificates/DesafioLatamIntroduccionPython.webp" },
      { institution: "Desafío Latam", degree: "Aprende Power BI desde cero", duration: "2025", image: "/assets/certificates/AprendePowerBI.webp" },
      { institution: "Santander Open Academy", degree: "Introducción a la Ciencia de Datos", duration: "2025", image: "/assets/certificates/SantanderCienciaDeDatos.webp" },
      { institution: "Alura Latam", degree: "IA: Potencial de la inteligencia artificial generativa", duration: "2025", image: "/assets/certificates/IAAluralatam.webp" },
      { institution: "Alura Latam", degree: "Inmersión IA con Google Gemini", duration: "2025", image: "/assets/certificates/IAGemini.webp" },
      { institution: "Google", degree: "Fundamentos de la Gestión de Proyectos", duration: "2025", image: "/assets/certificates/FundamentosGestionProyectosGoogle.webp" },
      { institution: "PMI / Linkedin", degree: "Fundamentos de la Gestión de Proyectos", duration: "2025", image: "/assets/certificates/FundamentosGestionProyectosPMI.webp" },
      { institution: "Linkedin Learning", degree: "Curso de Aprende JIRA", duration: "2025", image: "/assets/certificates/AprendeJira.webp" },
      { institution: "CoderHouse", degree: "Programa CoderCamp de Empleabilidad", duration: "2025", image: "/assets/certificates/CoderEmpleabilidad.webp" },
      { institution: "Hashtag Treinamentos", degree: "Excel Avanzado", duration: "2025", image: "/assets/certificates/SemanaExcel.webp" },
      { institution: "Linkedin Learning", degree: "Fundamentos del Networking Profesional", duration: "2025", image: "/assets/certificates/FundamentosNetworking.webp" },
      { institution: "Novacomp", degree: "Webinar: Azure + GenAI", duration: "2025", image: "/assets/certificates/WebinarAzureIAGenerativa.webp" },
      { institution: "Net4Skills", degree: "Reportes poderosos usando Analytics de PowerBI", duration: "2025", image: "/assets/certificates/SeminarioReportePowerBI.webp" },
      { institution: "Net4Skills", degree: "Reduce Costos implementando Infraestructura Azure", duration: "2025", image: "/assets/certificates/SeminarioReduceCostos.webp" },
      { institution: "Net4Skills", degree: "VMware Cloud Foundation", duration: "2025", image: "/assets/certificates/SeminarioVWwareCloudFormation.webp" },
      { institution: "Net4Skills", degree: "Disciplined Agile", duration: "2025", image: "/assets/certificates/SeminarioDisciplinedAgile.webp" },
      { institution: "Net4Skills", degree: "AWS Data Analytics Fundamentals", duration: "2025", image: "/assets/certificates/SeminarioAWSDataAnalytics.webp" },
      { institution: "Net4Skills", degree: "AWS Análitica de Datos", duration: "2025", image: "/assets/certificates/SeminarioAWSAnaliticaDatos.webp" },
      { institution: "Netec", degree: "IA Generativa: automatiza e innova", duration: "2025", image: "/assets/certificates/IAGenerativaAutomatiza.webp" },
      { institution: "Terraform Specialist", degree: "Infrastructure as Code in AWS", duration: "2023", image: "/assets/certificates/TerraformSpecialist.webp" },
      { institution: "Edu Claro", degree: "Norma ISO 45001", duration: "2023", image: "/assets/certificates/NormaISO45001.webp" },
      { institution: "Security First", degree: "Capacitación Metodología Desarrollo Seguro", duration: "2023", image: "/assets/certificates/DesarrolloSeguro.webp" },
      { institution: "Centro Nac. Tec.", degree: "AWS Cloud Practitioner", duration: "2022", image: "/assets/certificates/AWSPractitioner.webp" },
      { institution: "Cloud Computing Nic.", degree: "Practical AWS Course for Beginners", duration: "2022", image: "/assets/certificates/AWSCloudNicaragua.webp" },
      { institution: "FreeCodeCamp", degree: "Responsive Web Design", duration: "2022", image: "/assets/certificates/ResponsiveWebDesign.webp" },
      { institution: "Google Actívate", degree: "Introduction to Web Development: HTML & CSS", duration: "2022", image: "/assets/certificates/IntroduccionDesarrolloWeb.webp" },
      { institution: "Cisco", degree: "IT Essentials: Technical Support & OS", duration: "2016-2017", image: "/assets/certificates/CiscoITEssentials.webp" },
    ],
  },
};

const skills = {
  title: "Stack Tecnológico",
  description: "Mi conjunto de herramientas está en constante evolución, abarcando desde el desarrollo frontend y backend hasta el análisis de datos, SEO y gestión de proyectos para ofrecer soluciones integrales.",
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
        { icon: <SiWebpack />, name: "Webpack" },
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3 />, name: "CSS" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <FaBootstrap />, name: "Bootstrap" },
      ],
    },
    {
      name: "Backend & Databases",
      skills: [
        { icon: <FaNode />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express" },
        { icon: <SiSwagger />, name: "Swagger" },
        { icon: <TbSql />, name: "SQL" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiSupabase />, name: "Supabase" },
        { icon: <SiFirebase />, name: "Firebase" },
        { icon: <SiOracle />, name: "Oracle PL/SQL" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiPrisma />, name: "Prisma ORM" },
      ],
    },
    {
      name: "Data, Analytics & CMS",
      skills: [
        { icon: <FaPython />, name: "Python" },
        { icon: <SiPandas />, name: "Pandas" },
        { icon: <SiNumpy />, name: "Numpy" },
        { icon: <SiJupyter />, name: "Jupyter" },
        { icon: <SiGooglecolab />, name: "Google Colab" },
        { icon: <FaMicrosoft />, name: "Power BI & Excel" },
        { icon: <SiLooker />, name: "Looker Studio" },
        { icon: <SiGoogleanalytics />, name: "Google Analytics" },
        { icon: <FaWordpress />, name: "WordPress" },
        { icon: <SiWix />, name: "Wix Studio" },
      ],
    },
    {
      name: "DevOps, Cloud & Tools",
      skills: [
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <FaGithub />, name: "GitHub" },
        { icon: <SiGithubactions />, name: "GitHub Actions" },
        { icon: <FaDocker />, name: "Docker" },
        { icon: <SiVite />, name: "Vite" },
        { icon: <IoLogoVercel />, name: "Vercel" },
        { icon: <SiNetlify />, name: "Netlify" },
        { icon: <VscAzure />, name: "Azure" },
        { icon: <FaAws />, name: "AWS" },
        { icon: <SiGooglecloud />, name: "Google Cloud" },
        { icon: <SiPostman />, name: "Postman" },
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

// =================================================================
// 3. COMPONENTE REDISEÑADO (ESTILO DEEP SPACE)
// =================================================================

const Resume = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto px-4 sm:px-0">
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            {/* SIDEBAR DE TABS ESTILIZADA */}
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">
                  <FaBriefcase className="mr-2 text-xl" /> Experiencia
              </TabsTrigger>
              <TabsTrigger value="education">
                  <FaGraduationCap className="mr-2 text-xl" /> Formación y Certificaciones
              </TabsTrigger>
              <TabsTrigger value="skills">
                  <FaCode className="mr-2 text-xl" /> Stack Tecnológico
              </TabsTrigger>
              <TabsTrigger value="about">
                  <FaUser className="mr-2 text-xl" /> Acerca de mí
              </TabsTrigger>
            </TabsList>

            {/* CONTENIDO DE LAS TABS */}
            <div className="min-h-[70vh] w-full">
              
              {/* === EXPERIENCIA === */}
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-text-muted mx-auto xl:mx-0 text-justify">
                    {experience.description}
                  </p>
                  <ScrollArea className="h-[480px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 pr-4">
                      {experience.items.map((item, index) => (
                        <li
                          key={index}
                          // Tarjeta rediseñada: bg-secondary (#1E293B) con borde y efecto hover
                          className="bg-[#1E293B] border border-transparent hover:border-accent/40 rounded-xl p-6 flex flex-col gap-2 transition-all duration-300 shadow-md hover:shadow-cyan-500/5 group"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                                {item.duration}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold leading-tight text-white group-hover:text-accent transition-colors">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-2 mb-4">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/80 font-medium">{item.company}</p>
                          </div>
                          <ul className="text-text-muted text-sm list-disc list-inside space-y-2 text-left">
                            {item.highlights.map((highlight, i) => (
                              <li key={i} className="leading-relaxed">{highlight}</li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* === EDUCACIÓN === */}
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-text-muted mx-auto xl:mx-0 text-justify">
                    {education.description}
                  </p>
                  <ScrollArea className="h-[520px] pr-4">
                    <div className="space-y-10">
                      
                      {/* Universidad */}
                      <div>
                        <h4 className="text-xl font-semibold mb-6 text-accent border-b border-accent/20 pb-2 inline-block">
                            {education.formal.title}
                        </h4>
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          {education.formal.items.map((item, index) => (
                            <li key={index} className="bg-[#1E293B] border border-slate-800 hover:border-accent/40 p-6 rounded-xl flex flex-col justify-center gap-2 group relative transition-all duration-300">
                               {item.image && (
                                <div onClick={() => setSelectedImage(item.image)} className="absolute top-4 right-4 text-text-muted group-hover:text-accent transition-all cursor-pointer p-2 hover:bg-white/5 rounded-full">
                                    <FaSearchPlus size={18} />
                                </div>
                               )}
                              <span className="text-accent text-sm font-semibold uppercase">{item.duration}</span>
                              <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors pr-8">
                                {item.degree}
                              </h3>
                              <p className="text-text-muted text-sm">{item.institution}</p>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Certificaciones */}
                      <div>
                        <h4 className="text-xl font-semibold mb-6 text-accent border-b border-accent/20 pb-2 inline-block">
                            {education.certifications.title}
                        </h4>
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          {education.certifications.items.map((item, index) => (
                             <li key={index} 
                                 onClick={() => setSelectedImage(item.image)} 
                                 className="bg-[#1E293B] border border-slate-800 hover:border-accent/40 p-6 rounded-xl flex flex-col justify-center gap-2 group relative cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5"
                             >
                              <div className="absolute top-4 right-4 text-text-muted group-hover:text-accent transition-all">
                                  <FaSearchPlus size={16} />
                              </div>
                              <span className="text-accent text-xs font-semibold uppercase">{item.duration}</span>
                              <h3 className="text-base font-bold text-white group-hover:text-accent transition-colors pr-6 leading-tight">
                                {item.degree}
                              </h3>
                              <p className="text-text-muted text-xs">{item.institution}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* === SKILLS === */}
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[800px] text-text-muted mx-auto xl:mx-0 text-justify">
                    {skills.description}
                  </p>
                  <ScrollArea className="h-[480px] pr-4">
                    <div className="flex flex-col gap-10">
                      {skills.categories.map((category, idx) => (
                        <div key={idx}>
                          <h4 className="text-2xl font-semibold mb-6 text-white border-l-4 border-accent pl-4">
                            {category.name}
                          </h4>
                          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            {category.skills.map((skill, index) => (
                              <li key={index}>
                                <TooltipProvider delayDuration={100}>
                                  <Tooltip>
                                    <TooltipTrigger className="w-full h-[120px] bg-[#1E293B] border border-transparent hover:border-accent rounded-xl flex flex-col justify-center items-center gap-4 group transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                                      <div className="text-5xl text-white group-hover:text-accent transition-all duration-300 group-hover:scale-110">
                                        {skill.icon}
                                      </div>
                                      <span className="text-text-muted group-hover:text-white text-sm font-medium transition-colors">
                                        {skill.name}
                                      </span>
                                    </TooltipTrigger>
                                    <TooltipContent className="bg-white text-primary border-none">
                                      <p className="font-semibold">{skill.name}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* === ACERCA DE MÍ === */}
              <TabsContent value="about" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-text-muted mx-auto xl:mx-0 text-justify leading-relaxed">
                    {about.description}
                  </p>
                  <div className="max-w-[800px] mx-auto xl:mx-0 bg-[#1E293B] p-8 rounded-xl border border-slate-800">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                      {about.info.map((item, index) => (
                        <li key={index} className="flex flex-col gap-1 items-start">
                          <span className="text-accent font-medium text-sm uppercase tracking-wide">
                              {item.fieldName}
                          </span>
                          <span className="text-lg text-white font-semibold break-all text-left">
                              {item.fieldValue}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>

            </div>
          </Tabs>
        </div>
      </motion.div>

      {/* MODAL DE IMAGEN (Con AnimatePresence) */}
      <AnimatePresence>
        {selectedImage && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
            >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-[90vw] max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={selectedImage}
                    alt="Certificado"
                    className="w-full h-full object-contain rounded-lg shadow-2xl border border-white/10"
                />
                <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 md:-right-12 bg-white/10 hover:bg-accent text-white hover:text-primary rounded-full p-3 transition-all"
                >
                <FaTimes size={20} />
                </button>
            </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default Resume;