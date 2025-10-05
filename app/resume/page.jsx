"use client";

// Se añaden nuevos iconos para las herramientas que mencionaste
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
  FaMicrosoft,
  FaWordpress,
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaSearchPlus,
  FaTimes,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiAstro,
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
  SiWix,
  SiLooker,
  SiGoogleanalytics,
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
import Footer from "@/components/Footer";
import React, {useState} from "react"; // Modal de certificaciones

// =================================================================
// 1. DATOS COMPLETAMENTE ACTUALIZADOS
// =================================================================

const about = {
  title: "Acerca de mí",
  description:
    "Lo que más me gusta de la tecnología es su capacidad para resolver problemas reales. Ya sea diseñando una interfaz de usuario limpia o analizando un conjunto de datos para encontrar un patrón oculto, mi objetivo es el mismo: crear algo útil y eficiente. Convierto conversaciones sobre estrategia en código funcional y hojas de cálculo en historias claras. Creo firmemente en la colaboración y la mejora constante como el motor para lograrlo.",
  info: [
    { fieldName: "Nombre: ", fieldValue: "Juan Carlos Gadea" },
    {
      fieldName: "Teléfono: ",
      fieldValue: "(+505) 8578 5399 / (+39) 344 452 8131",
    },
    { fieldName: "Experiencia: ", fieldValue: "4+ Años" },
    { fieldName: "Correo: ", fieldValue: "jcgambeta89@gmail.com" },
    { fieldName: "Freelance: ", fieldValue: "Disponible" },
    {
      fieldName: "Idiomas: ",
      fieldValue: "Español (Nativo), Inglés (Intermedio)",
    },
  ],
};

//Experience Data
const experience = {
  title: "Mi Experiencia",
  description:
    "Mi trayectoria abarca desde el desarrollo de software y la gestión de proyectos en entornos corporativos hasta la creación de soluciones full-stack, análisis de datos y estrategias SEO como profesional independiente.",
  items: [
    {
      company: "inVicta Business Partners",
      position: "Technology Solutions & Analytics Specialist",
      duration: "Ago 2025 - Actualidad",
      highlights: [
        "Evaluación de plataformas tecnológicas para medir y optimizar el impacto en el negocio.",
        "Desarrollo de sitios y e-commerce con CMS (WordPress, Wix) aplicando estrategias SEO para aumentar la visibilidad y el tráfico.",
        "Configuración y manejo de plugins en WordPress.",
        "Implementación de analítica web (Google Analytics, GTM) para el seguimiento de KPIs y optimización de la conversión.",
        "Diseño de flujos de trabajo basados en datos para identificar mejoras y reducir costos operativos.",
        "Análisis con Google Analytics, seguimiento con Google Tag Manager y Meta Pixel.",
        "Gestión de DNS y hosting (GoDaddy).",
        "Asesoramiento estratégico a la gerencia en la selección e integración de nuevas tecnologías.",
      ],
    },
    {
      company: "Profesional Independiente",
      position: "Desarrollador Web Full Stack | Analista de Datos | SEO",
      duration: "Feb 2025 - Actualidad",
      highlights: [
        "Creación de soluciones full-stack eficientes con el stack MERN (React, Node.js, Express).",
        "Desarrollo de sitios web optimizados para SEO, mejorando la visibilidad y el tráfico orgánico.",
        "Desarrollo de sitios web con Next.js, Astro, WordPress y Wix.",
        "Experiencia en web responsive y optimización de rendimiento.",
        "Automatizacion de flujos con GitHub Actions.",
        "He desarrollado múltiples proyectos, incluyendo landing pages, sitios corporativos, tiendas ecommerce, portafolios de trabajo, así como soluciones personalizadas en CMS (WordPress y Wix Studio).",
        "Certificaciones en tecnologías de desarrollo web, y de manera constante me estoy capacitando, creando nuevos proyectos y colaborando con otros desarrolladores para potenciar la innovación y el aprendizaje compartido.",
      ],
    },
    {
      company: "Claro Nicaragua",
      position: "Analista de Sistemas | Proyectos | Programador",
      duration: "May 2022 - Ene 2025",
      highlights: [
        "Liderazgo en el desarrollo de aplicaciones empresariales con Oracle (SQL, APEX) para automatizar procesos críticos.",
        "Gestión del ciclo de vida completo de proyectos, desde la planificación hasta el soporte post-implementación.",
        "Coordinación de pruebas funcionales (SIT, UAT)",
        "Control de avance y cambios con herramientas ágiles (Jira, Trello) bajo enfoques Scrum y Kanban.",
        "Generación de reportes ejecutivos para la alta dirección y documentación técnica funcional.",
        "Liderar el desarrollo de sistemas digitales y garantizar la entrega en tiempo, forma y presupuesto.",
        "Gestión integral del ciclo de vida deproyectos: análisis, planificación, ejecución, seguimiento y cierre.",
      ],
    },
    {
      company: "Seguros Iniser Nicaragua",
      position: "Programador Informático",
      duration: "Jul 2018 - Jun 2019",
      highlights: [
        "Desarrollo y mantenimiento de sistemas de información con Oracle PL/SQL, Forms y Reports.",
        "Diseño e implementación de soluciones de software, incluyendo modelado de bases de datos y lógica de negocio.",
        "Soporte funcional y técnico a usuarios, y capacitación en nuevas funcionalidades.",
      ],
    },
    {
      company: "RS Seguridad Digital",
      position: "Asistente de Operaciones Técnicas",
      duration: "Mar 2017 - May 2017",
      highlights: [
        "Apoyo en la gestión y monitoreo de sistemas de seguridad de la información.",
        "Asistencia técnica y resolución de incidencias de primer nivel a clientes.",
      ],
    },
  ],
};

const education = {
  title: "Mi Formación",
  description:
    "Mi base en ingeniería de sistemas se enriquece con una formación continua y exhaustiva, validada por certificaciones en desarrollo, gestión de proyectos, cloud y análisis de datos.",
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
      {
        institution: "Codigo Facilito",
        degree: "Curso Profesional de React",
        duration: "2025",
        image: "/assets/certificates/CodigoFacilitoReact.webp"
      },
      {
        institution: "Código Facilito",
        degree: "Consumiendo APIs con JavaScript Fetch",
        duration: "2025",
        image: "/assets/certificates/CodigoFacilitoFetch.webp"
      },
      {
        institution: "Código Facilito",
        degree: "Curso Profesional de JavaScript",
        duration: "2025",
        image: "/assets/certificates/CodigoFacilitoJavaScript.webp"
      },
      {
        institution: "Código Facilito",
        degree: "Bootcamp de Github Actions",
        duration: "2025",
        image: "/assets/certificates/CodigoFacilitoGithubActions.webp"
      },
      {
        institution: "Código Facilito",
        degree: "Curso Profesional de Base de Datos",
        duration: "2025",
        image: "/assets/certificates/CodigoFacilitoBasedeDatos.webp"
      },
      {
        institution: "Código Facilito",
        degree: "Curso de Fundamentos de Microsoft Azure",
        duration: "2025",
        image: "/assets/certificates/CodigoFacilitoAzure.webp"
      },
      {
        institution: "Código Facilito",
        degree: "Curso de Bases y conceptos de la Ciencia de Datos",
        duration: "2025",
        image: "/assets/certificates/CodigoFacilitoCienciaDeDatos.webp"
      },
      {
        institution: "Código Facilito",
        degree: "Curso de Introduccción al Análisis de Datos con Python",
        duration: "2025",
        image: "/assets/certificates/CodigoFacilitoIntroduccionAnalisisPython.webp"
      },
      {
        institution: "Microsoft Partner Gold Learning",
        degree: "Developing Solutions for Microsoft Azure",
        duration: "2025",
        image: "/assets/certificates/DevelopingSolutions.webp"
      },
      {
        institution: "Desafío Latam",
        degree: "React en acción: De cero a experto en Desarrollo Front End",
        duration: "2025",
        image: "/assets/certificates/ReactAccion.webp"
      },
      {
        institution: "Desafío Latam",
        degree:
          "Domina el Análisis con SQL: Extracción, transformación y optimización.",
        duration: "2025",
        image: "/assets/certificates/DominaAnalisisSQL.webp"
      },
      {
        institution: "Desafío Latam",
        degree: "Introducción al Análisis de Datos con Python",
        duration: "2025",
        image: "/assets/certificates/DesafioLatamIntroduccionPython.webp"
      },
      {
        institution: "Desafío Latam",
        degree: "Aprende Power BI desde cero",
        duration: "2025",
        image: "/assets/certificates/AprendePowerBI.webp"
      },
      {
        institution: "Santander Open Academy",
        degree: "Introducción a la Ciencia de Datos",
        duration: "2025",
        image: "/assets/certificates/SantanderCienciaDeDatos.webp"
      },
      {
        institution: "Alura Latam",
        degree:
          "IA: Explorando el potencial de la inteligencia artificial generativa",
        duration: "2025",
        image:"/assets/certificates/IAAluralatam.webp"
      },
      {
        institution: "Alura Latam",
        degree: "Inmersión IA con Google Gemini",
        duration: "2025",
        image:"/assets/certificates/IAGemini.webp"
      },
      {
        institution: "Google",
        degree: "Fundamentos de la Gestión de Proyectos",
        duration: "2025",
        image:"/assets/certificates/FundamentosGestionProyectosGoogle.webp"
      },
      {
        institution: "PMI / Linkedin Learning",
        degree: "Fundamentos de la Gestión de Proyectos",
        duration: "2025",
        image:"/assets/certificates/FundamentosGestionProyectosPMI.webp"
      },
      {
        institution: "Linkedin Learning",
        degree: "Curso de Aprende JIRA",
        duration: "2025",
        image:"/assets/certificates/AprendeJira.webp"
      },
      {
        institution: "CoderHouse",
        degree: "Programa CoderCamp de Empleabilidad",
        duration: "2025",
        image:"/assets/certificates/CoderEmpleabilidad.webp"
      },
      {
        institution: "Hashtag Treinamentos",
        degree: "Excel Avanzado",
        duration: "2025",
        image:"/assets/certificates/SemanaExcel.webp"
      },
      {
        institution: "Linkedin Learning",
        degree: "Fundamentos del Networking Profesional",
        duration: "2025",
        image:"/assets/certificates/FundamentosNetworking.webp"
      },
      {
        institution: "Novacomp Tecnología de la Información",
        degree: "Webinar La Formula Perfecta: Azure + GenAI",
        duration: "2025",
        image:"/assets/certificates/WebinarAzureIAGenerativa.webp"
      },
      {
        institution: "Net4Skills",
        degree:
          "Seminario:Conoce como crear reportes poderosos usando Analytics de PowerBI",
        duration: "2025",
        image:"/assets/certificates/SeminarioReportePowerBI.webp"
      },
      {
        institution: "Net4Skills",
        degree:
          "Seminario: Reduce Costos en tu organización implmentando la Infraestructura de Azure.",
        duration: "2025",
        image:"/assets/certificates/SeminarioReduceCostos.webp"
      },
      {
        institution: "Net4Skills",
        degree:
          "Seminario: Domina la nueva era de la infraestructura híbrida, VMware Cloud Foundation",
        duration: "2025",
        image:"/assets/certificates/SeminarioVWwareCloudFormation.webp"
      },
      {
        institution: "Net4Skills",
        degree:
          "Seminario: Conoce como resolver desafíos complejos y dirigir equipos ágiles con Disciplined Agile",
        duration: "2025",
        image:"/assets/certificates/SeminarioDisciplinedAgile.webp"
      },
      {
        institution: "Net4Skills",
        degree:
          "Seminario: AWS Discovery Day Data Analytics Fundamentals on AWS",
        duration: "2025",
        image:"/assets/certificates/SeminarioAWSDataAnalytics.webp"
      },
      {
        institution: "Net4Skills",
        degree: "Seminario: AWS Análitica de Datos, descubriendo oportunidades",
        duration: "2025",
        image:"/assets/certificates/SeminarioAWSAnaliticaDatos.webp"
      },
      {
        institution: "Netec",
        degree:
          "Seminario: IA Generativa, automatiza, innova, y potencia la productividad",
        duration: "2025",
        image:"/assets/certificates/IAGenerativaAutomatiza.webp"
      },
      {
        institution: "Terraform Specialist",
        degree: "Infrastructure as Code in AWS",
        duration: "2023",
        image:"/assets/certificates/TerraformSpecialist.webp"
      },

      {
        institution: "Edu Claro",
        degree: "Norma ISO 45001",
        duration: "2023",
        image:"/assets/certificates/NormaISO45001.webp"
      },
      {
        institution: "Security First",
        degree: "Capacitación Metodología Desarrollo Seguro",
        duration: "2023",
        image:"/assets/certificates/DesarrolloSeguro.webp"
      },
      {
        institution: "Centro Nacional de Tecnología Francisco Moreno",
        degree: "AWS Cloud Practitioner",
        duration: "2022",
        image:"/assets/certificates/AWSPractitioner.webp"
      },
      {
        institution: "Cloud Computing Community Nicaragua",
        degree: "Practical AWS Course for Beginners",
        duration: "2022",
        image:"/assets/certificates/AWSCloudNicaragua.webp"
      },
      {
        institution: "FreeCodeCamp",
        degree: "Responsive Web Design",
        duration: "2022",
        image:"/assets/certificates/ResponsiveWebDesign.webp"
      },
      {
        institution: "Google Actívate",
        degree: "Introduction to Web Development I: HTML & CSS",
        duration: "2022",
        image:"/assets/certificates/IntroduccionDesarrolloWeb.webp"
      },
      {
        institution: "Cisco",
        degree: "IT Essentials: Technical Support & OS",
        duration: "2016-2017",
        image:"/assets/certificates/CiscoITEssentials.webp"
      },
    ],
  },
};

const skills = {
  title: "Stack Tecnológico",
  description:
    "Mi conjunto de herramientas está en constante evolución, abarcando desde el desarrollo frontend y backend hasta el análisis de datos, SEO y gestión de proyectos para ofrecer soluciones integrales.",
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
      ],
    },
    {
      name: "Backend & Databases",
      skills: [
        { icon: <FaNode />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express" },
        { icon: <TbSql />, name: "SQL" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiSupabase />, name: "Supabase" },
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
        { icon: <SiVite />, name: "Vite" },
        { icon: <IoLogoVercel />, name: "Vercel" },
        { icon: <SiNetlify />, name: "Netlify" },
        { icon: <VscAzure />, name: "Azure" },
        { icon: <FaAws />, name: "AWS" },
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
// 2. COMPONENTE CON LA VISTA Y TARJETAS REDISEÑADAS
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
        <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 pt-8">
              <TabsTrigger value="experience" className="w-full">
                <div className="flex items-center gap-2">
                  <FaBriefcase />
                  Experiencia
                </div>
              </TabsTrigger>
              <TabsTrigger value="education" className="w-full">
                <div className="flex items-center gap-2">
                  <FaGraduationCap />
                  Formación
                </div>
              </TabsTrigger>
              <TabsTrigger value="skills" className="w-full">
                <div className="flex items-center gap-2">
                  <FaCode />
                  Stack Tecnológico
                </div>
              </TabsTrigger>
              <TabsTrigger value="about" className="w-full">
                <div className="flex items-center gap-2">
                  <FaUser />
                  Acerca de mí
                </div>
              </TabsTrigger>
            </TabsList>
            <div className="min-h-[70vh] w-full">
              {/* experience */}
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left pt-8">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.description}
                  </p>
                  <ScrollArea className="h-[480px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {experience.items.map((item, index) => (
                        <li
                          key={index}
                          className="bg-[#232329] rounded-xl p-6 flex flex-col gap-4"
                        >
                          <span className="text-accent font-semibold">
                            {item.duration}
                          </span>
                          <h3 className="text-xl font-bold leading-snug">
                            {item.position}
                          </h3>
                          <p className="text-white/80 font-medium">
                            {item.company}
                          </p>
                          <ul className="text-white/60 text-sm list-disc list-inside space-y-1 text-left">
                            {item.highlights.map((highlight, i) => (
                              <li key={i}>{highlight}</li>
                            ))}
                          </ul>
                        </li>
                      ))}
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
                  <ScrollArea className="h-[480px] pr-4">
                    <div className="space-y-10">
                      <div>
                        <h4 className="text-xl font-semibold mb-4 text-accent">
                          {education.formal.title}
                        </h4>
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          {education.formal.items.map((item, index) => (
                            <li
                              key={index}
                              className="bg-[#232329] p-6 rounded-xl flex flex-col justify-center gap-2 group relative"
                            >
                              {item.image && (
                                <div onClick={() => setSelectedImage(item.image)} className="absolute top-4 right-4 text-white/60 group-hover:text-accent transition-all cursor-pointer">
                                    <FaSearchPlus />
                                </div>
                               )}
                              <span className="text-accent font-semibold">
                                {item.duration}
                              </span>
                              <h3 className="text-lg font-bold leading-snug">
                                {item.degree}
                              </h3>
                              <p className="text-white/60 text-sm">
                                {item.institution}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-4 text-accent">
                          {education.certifications.title}
                        </h4>
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          {education.certifications.items.map((item, index) => (
                              <li key={index} onClick={() => setSelectedImage(item.image)} className="bg-[#232329] p-6 rounded-xl flex flex-col justify-center gap-2 group relative cursor-pointer">
                              <div className="absolute top-4 right-4 text-white/60 group-hover:text-accent transition-all">
                                  <FaSearchPlus />
                              </div>
                              <span className="text-accent font-semibold">
                                {item.duration}
                              </span>
                              <h3 className="text-lg font-bold leading-snug">
                                {item.degree}
                              </h3>
                              <p className="text-white/60 text-sm">
                                {item.institution}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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
                  <ScrollArea className="h-[480px] pr-4">
                    <div className="flex flex-col gap-8">
                      {skills.categories.map((category, idx) => (
                        <div key={idx}>
                          <h4 className="text-2xl font-semibold mb-4 text-accent">
                            {category.name}
                          </h4>
                          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {category.skills.map((skill, index) => (
                              <li key={index}>
                                <TooltipProvider delayDuration={100}>
                                  <Tooltip>
                                    <TooltipTrigger className="w-full h-[120px] bg-[#232329] rounded-xl flex flex-col justify-center items-center gap-2 group">
                                      <div className="text-4xl group-hover:text-accent transition-all duration-300">
                                        {skill.icon}
                                      </div>
                                      <span className="text-white/80 text-sm">
                                        {skill.name}
                                      </span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>{skill.name}</p>
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

              {/* About me */}
              <TabsContent value="about" className="w-full">
                <div className="flex flex-col gap-[30px] pt-8 text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                    {about.description}
                  </p>

                  {/* LISTA DE INFORMACIÓN MEJORADA para Desktop y Mobile */}
                  <div className="max-w-[700px] mx-auto xl:mx-0">
                    {" "}
                    {/* Contenedor para controlar el ancho máximo */}
                    <ul className="flex flex-col gap-4">
                      {" "}
                      {/* Stack vertical en móvil */}
                      {about.info.map((item, index) => (
                        <li
                          key={index}
                          className="flex flex-col sm:flex-row sm:items-baseline sm:justify-center xl:justify-start gap-1 sm:gap-4"
                        >
                          <span className="text-white/60 font-medium sm:min-w-[120px] sm:text-right">
                            {item.fieldName}
                          </span>
                          <span className="text-lg xl:text-xl text-white break-all sm:text-left">
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

        {/* CAMBIO: Lógica del Modal para mostrar la imagen */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)} 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative"
            onClick={(e) => e.stopPropagation()} // Evita que el clic en la imagen cierre el modal
          >
            <img src={selectedImage} alt="Certificado" className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"/>
            <button onClick={() => setSelectedImage(null)} className="absolute -top-4 -right-4 bg-accent text-primary rounded-full p-2">
              <FaTimes />
            </button>
          </motion.div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Resume;
