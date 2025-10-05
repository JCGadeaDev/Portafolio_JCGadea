"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Desarrollo Web y Experiencia de Usuario (UX)",
    description: (
      <>
        <p className="mb-4 text-justify">
          Transformo tus ideas en aplicaciones web modernas, eficientes y centradas en el usuario. Mi enfoque combina un diseño limpio con una arquitectura robusta para entregar soluciones escalables, desde landing pages hasta sistemas empresariales complejos.
        </p>
        <ul className="list-disc list-inside text-white/80 space-y-2">
          <li>
            <strong>Aplicaciones Full-Stack:</strong> Desarrollo End-to-End con JavaScript, TypeScript, React, Next.js, Angular y Node.js.
          </li>
          <li>
            <strong>Soluciones CMS y E-commerce:</strong> Creación y personalización de sitios en WordPress y Wix Studio, optimizados para la autogestión.
          </li>
          <li>
            <strong>Optimización de Rendimiento:</strong> Interfaces rápidas y responsivas con un enfoque en Core Web Vitals y la mejor experiencia de usuario.
          </li>
        </ul>
      </>
    ),
    href: "#desarrollo-web-ux",
  },
  {
    num: "02",
    title: "SEO, SEM y Estrategia Digital",
    description: (
      <>
        <p className="mb-4 text-justify">
          Aumento tu visibilidad online y atraigo tráfico cualificado a tu sitio web. Diseño e implemento estrategias de posicionamiento orgánico (SEO) y campañas de pago (SEM) que convierten visitantes en clientes.
        </p>
        <ul className="list-disc list-inside text-white/80 space-y-2">
          <li>
            <strong>Auditoría SEO On-Page y Técnica:</strong> Optimización de estructura, velocidad, y contenido para cumplir con las mejores prácticas de Google.
          </li>
          <li>
            <strong>Estrategia de Contenidos:</strong> Investigación de palabras clave y redacción de copys persuasivos que conectan con tu audiencia.
          </li>
          <li>
            <strong>Campañas y Analítica:</strong> Gestión de campañas en Google Ads y configuración de Google Analytics para medir el impacto y optimizar el ROI, integraciones de etiquetas y pixeles a los web sites.
          </li>
        </ul>
      </>
    ),
    href: "#seo-estrategia-digital",
  },
  {
    num: "03",
    title: "Análisis de Datos e Inteligencia de Negocio",
    description: (
      <>
        <p className="mb-4 text-justify">
          Convierto datos complejos en decisiones estratégicas. Utilizo Python, SQL y herramientas de visualización para automatizar reportes, analizar KPIs y generar insights que impulsan la eficiencia y el crecimiento de tu negocio.
        </p>
        <ul className="list-disc list-inside text-white/80 space-y-2">
          <li>
            <strong>Dashboards Interactivos:</strong> Creación de paneles en Power BI y Looker Studio para una visualización clara de tus datos.
          </li>
          <li>
            <strong>Automatización de Reportes:</strong> Desarrollo de scripts en Python (Pandas) para limpiar, procesar y generar informes de forma automática.
          </li>
          <li>
            <strong>Procesos ETL y SQL:</strong> Extracción y transformación de datos desde múltiples fuentes para consolidar una única fuente de verdad.
          </li>
        </ul>
      </>
    ),
    href: "#analisis-datos-bi",
  },
  {
    num: "04",
    title: "Gestión Ágil de Proyectos Tecnológicos",
    description: (
      <>
        <p className="mb-4 text-justify">
          Aseguro que tus proyectos tecnológicos se entreguen a tiempo, dentro del presupuesto y alineados con tus objetivos. Lidero equipos utilizando metodologías ágiles (Scrum y Kanban) para garantizar transparencia, colaboración y entrega continua de valor.
        </p>
        <ul className="list-disc list-inside text-white/80 space-y-2">
          <li>
            <strong>Planificación y Roadmap:</strong> Definición de objetivos, cronogramas y recursos, gestionando el backlog para maximizar el impacto.
          </li>
          <li>
            <strong>Liderazgo de Equipos:</strong> Coordinación de equipos multidisciplinarios y facilitación de ceremonias ágiles para eliminar bloqueos.
          </li>
          <li>
            <strong>Comunicación y Reporte:</strong> Uso de Jira, Planner, Trello y Notion para un seguimiento transparente y la generación de reportes para stakeholders.
          </li>
        </ul>
      </>
    ),
    href: "#gestion-agil",
  },
];

const ServicesPage = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-8 sm:py-10 md:py-12 xl:py-0">
      <div className="container mx-auto px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[60px] max-w-[90%] md:max-w-none mx-auto"
        >
          {services.map((service, index) => {
            const isLastCard = index === services.length - 1;
            const isOddTotal = services.length % 2 !== 0;

            return (
              <div
                key={index}
                id={service.href.substring(1)}
                className={`
                  flex flex-col justify-between h-full 
                  min-h-[420px] sm:min-h-[480px] md:min-h-[520px] 
                  p-4 sm:p-6 md:p-8 
                  bg-[#18181b] rounded-2xl shadow-lg 
                  group transition-all duration-500
                  ${
                    isLastCard && isOddTotal
                      ? "md:col-span-2 md:w-1/2 md:mx-auto"
                      : ""
                  }
                `}
              >
                {/* top */}
                <div className="w-full flex justify-between items-center mb-4">
                  <div className="text-4xl sm:text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-12 h-12 sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-2xl sm:text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-xl sm:text-2xl md:text-[32px] font-bold leading-tight text-white group-hover:text-accent transition-all duration-500 mb-2 text-center min-h-[60px] sm:min-h-[70px] md:min-h-[80px] flex items-center justify-center">
                  {service.title}
                </h2>
                {/* description */}
                <div className="text-white/80 text-justify flex-1 flex flex-col justify-between text-sm sm:text-base">
                  {service.description}
                </div>
                {/* border */}
                <div className="border-b border-white/20 w-full mt-6"></div>
              </div>
            );
          })}
        </motion.div>
      </div>

       <Footer />
    </section>
  );
};

export default ServicesPage;