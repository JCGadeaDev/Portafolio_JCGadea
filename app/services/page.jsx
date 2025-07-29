"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Desarrollo Front-End",
    description: (
      <>
        <p className="mb-1 text-justify">
          Diseño y desarrollo de interfaces modernas, responsivas y centradas en
          el usuario utilizando tecnologías como HTML, CSS, JavaScript,
          TypeScript, React, Next.js, Tailwind CSS y Oracle APEX. Me enfoco en
          una arquitectura limpia, accesibilidad y rendimiento para garantizar
          experiencias fluidas en todos los dispositivos.
        </p>
        <span className="block font-semibold text-white/80">
          Servicios incluyen:
        </span>
        <ul className="list-disc list-inside text-white/80 space-y-1 pl-4">
          <li>Desarrollo de sitios web responsivos y landing pages</li>
          <li>
            Implementación de interfaces con TailwindCSS, Bootstrap o CSS
            personalizado
          </li>
          <li>Componentes UI en Oracle APEX y personalización low-code</li>
          <li>Diseño accesible desde el inicio y uso de HTML semántico</li>
          <li>Aplicaciones de una sola página (SPAs) con React o Angular</li>
          <li>
            Arquitectura basada en componentes usando frameworks como React y
            Angular
          </li>
          <li>Integración con APIs REST y servicios backend</li>
          <li>
            Manejo de peticiones HTTP con Fetch y Axios, incluyendo gestión de
            errores y transformación de datos
          </li>
          <li>
            Gestión eficiente de estados y efectos secundarios con React Hooks
          </li>
          <li>
            Herramientas de desarrollo con Vite y empaquetado con Webpack y
            Turbopack
          </li>
          <li>
            Configuración de pipelines CI/CD y automatización con GitHub Actions
          </li>
          <li>Control de versiones y colaboración con Git y GitHub</li>
        </ul>
      </>
    ),
    href: "#desarrollo-frontend",
  },
  {
    num: "02",
    title: "Análisis de Datos y Automatización",
    description: (
      <>
        <p className="mb-1 text-justify">
          Transformación de datos en bruto en insights accionables a través de
          automatización, visualización y reportes. Utilizo Python, Pandas, SQL,
          Power BI y Matplotlib para ayudar a los equipos a tomar decisiones
          informadas basadas en datos.
        </p>
        <span className="block font-semibold text-white/80">
          Servicios incluyen:
        </span>
        <ul className="list-disc list-inside text-white/80 space-y-1 pl-4">
          <li>Limpieza y automatización de datos con Python</li>
          <li>
            Extracción y generación de reportes con SQL (PostgreSQL, Supabase)
          </li>
          <li>Dashboards interactivos en Power BI</li>
          <li>Generación de insights para estrategias de negocio</li>
          <li>Visualización de datos con Matplotlib y Seaborn</li>
          <li>
            Transformación de datos y construcción de pipelines con Pandas
          </li>
          <li>
            Seguimiento de tareas, análisis manual y reportes rápidos con
            Microsoft Excel
          </li>
          <li>
            Desarrollo de proyectos analíticos en Jupyter Notebooks, con
            entornos como Anaconda y Google Colab
          </li>
          <li>
            Integración de APIs externas para consumo de datos en tiempo real
          </li>
          <li>
            Procesos ETL para consolidación de datos desde múltiples fuentes
          </li>
          <li>
            Data storytelling: traducción de análisis técnicos en insights
            accionables para stakeholders
          </li>
          <li>
            Colaboración con equipos multidisciplinarios para alinear productos
            de datos con objetivos del negocio
          </li>
        </ul>
      </>
    ),
    href: "#analisis-datos",
  },
  {
    num: "03",
    title: "Gestión de Proyectos Ágiles",
    description: (
      <>
        <p className="mb-1 text-justify">
          Generación de valor a través de prácticas ágiles estructuradas que
          fomentan la colaboración, la adaptabilidad y la mejora continua. Guío
          a los equipos de proyecto mediante ciclos iterativos que alinean el
          desarrollo con los objetivos del negocio, asegurando transparencia,
          responsabilidad y resultados medibles.
        </p>
        <span className="block font-semibold text-white/80">
          Servicios incluyen:
        </span>
        <ul className="list-disc list-inside text-white/80 space-y-1 pl-4">
          <li>
            Planificación de sprints, revisiones y retrospectivas basadas en
            Scrum
          </li>
          <li>Gestión del backlog, priorización y sesiones de refinamiento</li>
          <li>
            Daily stand-ups y facilitación del equipo para eliminar bloqueos
          </li>
          <li>Comunicación con stakeholders y reportes alineados a KPIs</li>
          <li>Coordinación entre equipos multidisciplinarios y distribuidos</li>
          <li>
            Documentación de proyectos y transferencia de conocimiento con
            Trello, Notion, Sharepoint, Miro, Jira y Confluence
          </li>
          <li>
            Integración de prácticas ágiles en entornos híbridos o remotos
          </li>
        </ul>
      </>
    ),
    href: "#gestion-agil",
  },
  {
    num: "04",
    title: "Soluciones Digitales End-to-End",
    description: (
      <>
        <p className="mb-1 text-justify">
          Combinando frontend, backend y estrategia de datos para entregar
          aplicaciones completas, escalables y orientadas al negocio. Desde el
          concepto hasta el despliegue, alineo la ejecución técnica con
          necesidades reales del entorno empresarial.
        </p>
        <span className="block font-semibold text-white/80">
          Servicios incluyen:
        </span>
        <ul className="list-disc list-inside text-white/80 space-y-1 pl-4">
          <li>Desarrollo de MVPs full-stack con Node.js y Express</li>
          <li>
            Integración y pruebas de APIs con Postman, Soap UI y Swagger UI
          </li>
          <li>Prototipado rápido y desarrollo low-code con Oracle APEX</li>
          <li>Soluciones en tiempo real y sin servidor usando Supabase</li>
          <li>Despliegue en la nube e infraestructura en Azure y AWS</li>
          <li>
            Diseño de soluciones que conectan tecnología con objetivos de
            negocio
          </li>
          <li>Automatización de pruebas end-to-end con Playwright</li>
          <li>
            Explorando actualmente el Model Context Protocol (MCP) para
            habilitar agentes digitales inteligentes, modulares y con conciencia
            contextual.
          </li>
        </ul>
      </>
    ),
    href: "#soluciones-digitales",
  },
  {
    num: "05",
    title: "Redacción y Estrategia de Contenido Digital",
    description: (
      <>
        <p className="mb-1 text-justify">
          Creación de copys atractivos y contenido estratégico para aumentar el
          engagement, la visibilidad y la conexión con la comunidad. Contribuí
          como copywriter en WordCamp Nicaragua 2025, desarrollando mensajes
          dirigidos para múltiples plataformas.
        </p>
        <span className="block font-semibold text-white/80">
          Servicios incluyen:
        </span>
        <ul className="list-disc list-inside text-white/80 space-y-1 pl-4">
          <li>
            Redacción de copys para publicaciones en redes sociales (enfoque
            inbound y outbound)
          </li>
          <li>
            Desarrollo de campañas de email marketing utilizando Mailchimp
          </li>
          <li>
            Estrategia de contenido para atraer asistentes, patrocinadores y
            voluntarios
          </li>
          <li>
            Coordinación de mensajes con el equipo organizador para asegurar
            coherencia de marca
          </li>
          <li>
            Uso de herramientas de inteligencia artificial para automatizar y
            optimizar la creación de contenido
          </li>
          <li>
            Mejora de la eficiencia de campañas y alcance del evento mediante
            automatización estratégica
          </li>
        </ul>
      </>
    ),
    href: "#contenido-digital",
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
                {/* description*/}
                <div className="text-white/80 text-justify flex-1 flex flex-col justify-between text-sm sm:text-base">
                  {service.description}
                </div>
                {/*border */}
                <div className="border-b border-white/20 w-full mt-6"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;
