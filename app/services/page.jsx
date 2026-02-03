"use client";

import { motion } from "framer-motion";
import Link from "next/link"; 
import { BsArrowDownRight } from "react-icons/bs"; 

const services = [
// SECCIÓN 1: DESARROLLO WEB (Frontend & Backend)
// SECCIÓN 1: DESARROLLO WEB (Frontend & Backend)
{
    num: "01",
    title: "Ingeniería Full-Stack & Arquitectura Web",
    description: (
      <>
        <p className="mb-4 text-justify text-text-muted">
          Construyo ecosistemas digitales robustos. Fusiono la agilidad del frontend moderno con la solidez de backends empresariales bajo estándares de arquitectura limpia.
        </p>
        <ul className="list-disc list-inside text-text-muted space-y-2 text-sm">
          <li>
            <strong className="text-white">Frontend & UI Moderno:</strong> 
            {" "}Maquetación pixel-perfect con <span className="text-accent">HTML5, CSS3, Tailwind CSS y Bootstrap</span>. 
            Desarrollo de SPAs con <span className="text-accent">Angular, React y Next.js</span>. 
            Consumo de APIs y gestión asíncrona mediante <span className="text-accent">Axios y Fetch</span>. 
            Manejo de estado con Zustand, Vite y Typescript.
          </li>
          <li>
            <strong className="text-white">Arquitectura Backend:</strong> 
            {" "}Soluciones sólidas en <span className="text-accent">ASP.NET Core (C#)</span> implementando arquitectura <span className="text-accent">MVC y vistas Razor</span>. 
            Desarrollo de APIs escalables con <span className="text-accent">Node.js y Express</span>. 
            Uso de <span className="text-accent">Patrones de Diseño</span> (Singleton, Repository, Factory).
          </li>
          <li>
            <strong className="text-white">QA & Infraestructura:</strong> 
            {" "}Testing exhaustivo de APIs con <span className="text-accent">Postman y SoapUI</span>, desarrollo rápido con <span className="text-accent">Oracle APEX</span>. 
            Despliegues en <span className="text-accent">Cloudflare, Vercel</span>, gestión de DNS y protocolos HTTPS/SSL. 
          </li>
        </ul>
      </>
    ),
    href: "/work",
},
  {
    num: "02",
    title: "DevOps, CI/CD & Cloud Infrastructure",
    description: (
      <>
        <p className="mb-4 text-justify text-text-muted">
          Garantizo la entrega continua y la estabilidad del software. Automatizo procesos repetitivos y gestiono infraestructuras que escalan automáticamente según la demanda.
        </p>
        <ul className="list-disc list-inside text-text-muted space-y-2 text-sm">
          <li>
            <strong className="text-white">Automatización & Versionado:</strong> Pipelines de CI/CD con <span className="text-accent">GitHub Actions, Cloud Build, Cloud Run</span> para despliegues automáticos. Gestión de flujos colaborativos avanzados con <span className="text-accent">Git</span>.
          </li>
          <li>
            <strong className="text-white">Cloud Multi-Entorno:</strong> Administración de recursos en <span className="text-accent">Azure, AWS y Google Cloud</span>. Computación serverless y gestión de almacenamiento.
          </li>
          <li>
            <strong className="text-white">Containerización:</strong> Estandarización con <span className="text-accent">Docker/Compose</span> y administración de servidores Linux (Ubuntu) con Nginx como proxy inverso. De ambiente local a la nube sin fricciones y viceversa. Administración de servicios, configuraciones de puertos con comandos Shell
          </li>
        </ul>
      </>
    ),
    href: "/work",
  },
  {
    num: "03",
    title: "Data Intelligence (BI) & SQL Analytics",
    description: (
      <>
        <p className="mb-4 text-justify text-text-muted">
          Transformo datos brutos en historias visuales para la toma de decisiones. Normalizo bases de datos complejas y diseño herramientas analíticas para gerencia y operaciones.
        </p>
        <ul className="list-disc list-inside text-text-muted space-y-2 text-sm">
          <li>
            <strong className="text-white">Dashboards de BI:</strong> 
            {" "}Diseño de tableros de control interactivos en <span className="text-accent">Power BI y Looker Studio</span>, visualizando KPIs críticos en tiempo real.
          </li>
          <li>
            <strong className="text-white">Ingeniería de Datos:</strong> 
            {" "}Gestión de BBDD relacionales y NoSQL (<span className="text-accent">SQL Server, PostgreSQL, Oracle, MongoDB, Firebase, Supabase</span>) y optimización de consultas complejas.
          </li>
          <li>
            <strong className="text-white">Data Science Stack:</strong> 
            {" "}Scripting para limpieza y análisis predictivo con <span className="text-accent">Python</span> (Pandas, NumPy, Scikit-learn, Statsmodels). 
            Creación de <strong className="text-white">Web Apps de Datos</strong> con <span className="text-accent">Streamlit</span> y visualización avanzada (Matplotlib, Plotly).
          </li>
        </ul>
      </>
    ),
    href: "/work",
},
  {
    num: "04",
    title: "Consultoría, Project Management & SEO",
    description: (
      <>
        <p className="mb-4 text-justify text-text-muted">
          Más allá del código, ofrezco dirección técnica y consultoría estratégica. Desde la planificación de cronogramas hasta la capacitación de equipos, aseguro que el proyecto sea viable, puntual y exitoso.
        </p>
        <ul className="list-disc list-inside text-text-muted space-y-2 text-sm">
          <li>
            <strong className="text-white">Gestión & Planificación:</strong> Elaboración de <span className="text-accent">cronogramas detallados</span>, hitos y gestión de recursos con metodologías Ágiles (Scrum/Kanban) usando Jira, Trello y Notion.
          </li>
          <li>
            <strong className="text-white">Consultoría & Capacitación:</strong> Diseño de arquitectura con <span className="text-accent">Visio/Lucidchart</span> y sesiones de <span className="text-accent">capacitación técnica</span> para potenciar las habilidades del equipo interno.
          </li>
          <li>
            <strong className="text-white">SEO Técnico & Estrategia:</strong> Auditoría de rendimiento, optimización Core Web Vitals y estrategia de posicionamiento orgánico. GA, GSC.
          </li>
        </ul>
      </>
    ),
    href: "/contact",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto px-4">
        
        {/* Grid animado */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center gap-6 group rounded-xl p-2 md:p-0"
              >
                {/* Header de la tarjeta */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>

                {/* Título */}
                <h2 className="text-[26px] md:text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>

                {/* Descripción y Lista */}
                <div className="text-text-muted border-l-2 border-white/10 pl-4 group-hover:border-accent/50 transition-colors duration-500">
                  {service.description}
                </div>

                {/* Borde inferior animado */}
                <div className="border-b border-white/20 w-full group-hover:border-accent transition-all duration-500"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;