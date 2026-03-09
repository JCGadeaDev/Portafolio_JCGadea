"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import Footer from "components/Footer";

const services = [
  {
    num: "01",
    title: "Ingeniería Full-Stack & Arquitectura Web",
    description: (
      <>
        <p className="mb-4 text-text-muted leading-relaxed">
          Construyo ecosistemas digitales robustos. Fusiono la agilidad del frontend moderno con la solidez de backends empresariales bajo estándares de arquitectura limpia.
        </p>
        <ul className="space-y-3 text-sm">
          <li className="flex gap-3">
            <span className="text-accent mt-0.5 shrink-0">▸</span>
            <span className="text-text-muted">
              <strong className="text-white font-medium">Frontend & UI Moderno:</strong>{" "}
              Maquetación pixel-perfect con <span className="text-accent/90">HTML5, CSS3, Tailwind, Bootstrap</span>. Desarrollo de SPAs con <span className="text-accent/90">Angular, React, Next.js</span>. Consumo de APIs y gestión asíncrona mediante <span className="text-accent/90">Axios y Fetch</span> Manejo de Estado con Zustand. Experiencia en Vite, Javascript y TypeScript.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent mt-0.5 shrink-0">▸</span>
            <span className="text-text-muted">
              <strong className="text-white font-medium">Arquitectura Backend:</strong>{" "}
              <span className="text-accent/90">ASP.NET Core (C#)</span> con MVC y Razor. Desarrollo de APIs escalables <span className="text-accent/90">Node.js, Express y Spring Boot</span>. Patrones Singleton, Repository, Factory.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent mt-0.5 shrink-0">▸</span>
            <span className="text-text-muted">
              <strong className="text-white font-medium">QA & Infraestructura:</strong>{" "}
              Testing con <span className="text-accent/90">Postman y SoapUI</span>, Oracle APEX. Despliegues en <span className="text-accent/90">Cloudflare y Vercel</span>. DNS, HTTPS/SSL.
            </span>
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
        <p className="mb-4 text-text-muted leading-relaxed">
          Garantizo la entrega continua y la estabilidad del software. Automatizo procesos repetitivos y gestiono infraestructuras que escalan automáticamente.
        </p>
        <ul className="space-y-3 text-sm">
          <li className="flex gap-3">
            <span className="text-accent mt-0.5 shrink-0">▸</span>
            <span className="text-text-muted">
              <strong className="text-white font-medium">Automatización & CI/CD:</strong>{" "}
              Pipelines con <span className="text-accent/90">GitHub Actions, Cloud Build, Cloud Run</span>. Flujos colaborativos avanzados con Git, Gitflow.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent mt-0.5 shrink-0">▸</span>
            <span className="text-text-muted">
              <strong className="text-white font-medium">Cloud Multi-Entorno:</strong>{" "}
              Administración de recursos en <span className="text-accent/90">Azure, AWS y Google Cloud</span>. Computación serverless y almacenamiento.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent mt-0.5 shrink-0">▸</span>
            <span className="text-text-muted">
              <strong className="text-white font-medium">Containerización:</strong>{" "}
              <span className="text-accent/90">Docker/Compose</span>, servidores Linux (Ubuntu) con Nginx como reverse proxy. Shell scripting y gestión de servicios.
            </span>
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
        <p className="mb-4 text-text-muted leading-relaxed">
          Transformo datos brutos en historias visuales para la toma de decisiones. Normalizo bases de datos complejas y diseño herramientas analíticas para gerencia y operaciones.
        </p>
        <ul className="space-y-3 text-sm">
          <li className="flex gap-3">
            <span className="text-accent mt-0.5 shrink-0">▸</span>
            <span className="text-text-muted">
              <strong className="text-white font-medium">Dashboards BI:</strong>{" "}
              Tableros interactivos en <span className="text-accent/90">Power BI y Looker Studio</span>, visualizando KPIs criticos en tiempo real. Manejo avanzado de DAX para cálculos personalizados y modelado de datos.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent mt-0.5 shrink-0">▸</span>
            <span className="text-text-muted">
              <strong className="text-white font-medium">Ingeniería de Datos:</strong>{" "}
              Gestión de BBDD relacionales/NoSQL: <span className="text-accent/90">SQL Server, PostgreSQL, Oracle, MongoDB, Firebase, Supabase</span> Manejo de <span className="text-accent/90">Data lake, Data Mart y Data Warehouse</span>. Microsoft Fabric y entornos de Big Data.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent mt-0.5 shrink-0">▸</span>
            <span className="text-text-muted">
              <strong className="text-white font-medium">Data Science Stack:</strong>{" "}
              <span className="text-accent/90">Python</span> (Pandas, NumPy, Scikit-learn). Web Apps con <span className="text-accent/90">Streamlit</span>, visualización con Matplotlib y Plotly.
            </span>
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
        <p className="mb-4 text-text-muted leading-relaxed">
          Más allá del código, ofrezco dirección técnica y consultoría estratégica. Desde planificación de cronogramas hasta capacitación de equipos.
        </p>
        <ul className="space-y-3 text-sm">
          <li className="flex gap-3">
            <span className="text-accent mt-0.5 shrink-0">▸</span>
            <span className="text-text-muted">
              <strong className="text-white font-medium">Gestión & Planificación:</strong>{" "}
              Cronogramas, hitos y recursos con <span className="text-accent/90">Scrum/Kanban</span> usando Jira, Trello y Notion.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent mt-0.5 shrink-0">▸</span>
            <span className="text-text-muted">
              <strong className="text-white font-medium">Consultoría & Capacitación:</strong>{" "}
              Diseño de arquitectura con <span className="text-accent/90">Visio/Lucidchart</span> y sesiones de capacitación técnica.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent mt-0.5 shrink-0">▸</span>
            <span className="text-text-muted">
              <strong className="text-white font-medium">SEO Técnico:</strong>{" "}
              Auditoría de rendimiento, Core Web Vitals, posicionamiento orgánico. GA4 y Google Search Console.
            </span>
          </li>
        </ul>
      </>
    ),
    href: "/contact",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-8">
      <div className="container mx-auto px-4">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-10 xl:mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10 bg-accent/40" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-accent/70 font-medium">
              Servicios
            </span>
          </div>
          <h1 className="text-3xl xl:text-4xl font-bold text-white leading-tight">
            Lo que puedo hacer{" "}
            <span className="text-accent">por tu proyecto</span>
          </h1>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col gap-5 group glass-card rounded-2xl p-6 xl:p-8 hover:glass-card-accent transition-all duration-500 relative overflow-hidden"
            >
              {/* Shimmer on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer rounded-2xl pointer-events-none" />

              {/* Header */}
              <div className="flex justify-between items-start">
                <span className="text-5xl font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all duration-500 leading-none">
                  {service.num}
                </span>
                <Link
                  href={service.href}
                  className="w-11 h-11 rounded-full border border-white/15 flex justify-center items-center text-text-muted group-hover:border-accent group-hover:text-accent group-hover:bg-accent/10 group-hover:shadow-[0_0_16px_rgba(34,211,238,0.25)] transition-all duration-500 hover:rotate-45"
                >
                  <BsArrowUpRight className="text-base" />
                </Link>
              </div>

              {/* Título */}
              <h2 className="text-xl xl:text-2xl font-bold leading-snug text-white group-hover:text-accent transition-colors duration-500">
                {service.title}
              </h2>

              {/* Divider */}
              <div className="w-full h-px bg-white/8 group-hover:bg-accent/20 transition-colors duration-500" />

              {/* Descripción */}
              <div className="flex-1">
                {service.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </section>
  );
};

export default Services;
