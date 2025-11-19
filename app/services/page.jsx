"use client";

import Footer from "@/components/Footer";
// Se han eliminado las importaciones externas (react-icons, next/link,)
// que causaban errores de compilación en este entorno de archivo único.
import { motion } from "framer-motion";

// Definición de los datos de servicios
const services = [
  {
    num: "01",
    title: "Desarrollo Full-Stack, Web y Experiencia de Usuario (UX)",
    description: (
      <>
        <p className="mb-4 text-justify">
          Transformo conceptos en aplicaciones web modernas, eficientes y centradas en el usuario, aplicando un diseño limpio con una arquitectura robusta. Mi experiencia abarca desde el desarrollo de landing pages y e-commerce hasta la construcción de complejos sistemas empresariales con foco en escalabilidad.
        </p>
        <ul className="list-disc list-inside text-white/80 space-y-2">
          <li>
            <strong>Desarrollo Full-Stack y API Management:</strong> Soluciones End-to-End con React, Next.js, Angular, TypeScript, JavaScript y backend con Node.js/Express, Supabase, Firebase. Incluye el diseño de APIs (Endpoints), su consumo eficiente (Fetch, Axios) e integración de métodos de autenticación (OAuth, JWT).
          </li>
          <li>
            <strong>Integración E-commerce y Monetización:</strong> Implementación de pasarelas de pago y servicios transaccionales, asegurando la seguridad y fluidez en la experiencia de compra.
          </li>
          <li>
            <strong>Arquitectura Empresarial BBDD y Agentes MPC:</strong> Administración de bases de datos SQL, PostgreSQL y MongoDB para asegurar la integridad y el rendimiento, incluyendo la implementación de sistemas con Oracle SQL y Oracle APEX en entornos empresariales y de agentes MCP para optimizar y automatizar procesos críticos en entornos corporativos.
          </li>
          <li>
            <strong>Automatización de Desarrollo:</strong> Implementación de flujos CI/CD mediante Git, GitHub y GitHub Actions, Docker, Docker Compose, mejorando la eficiencia y calidad en la entrega del software. Manejo de entornos de desarrollo y producción en la nube con Azure, AWS y GCP..
          </li>
        </ul>
      </>
    ),
    href: "#desarrollo-fullstack-ux",
  },
  {
    num: "02",
    title: "SEO, Estrategia Digital y Analítica Web",
    description: (
      <>
        <p className="mb-4 text-justify">
          Aumento tu visibilidad online y garantizo que el tráfico sea cualificado para maximizar la conversión. Diseño e implemento estrategias integrales que combinan el posicionamiento orgánico con la medición precisa del impacto.
        </p>
        <ul className="list-disc list-inside text-white/80 space-y-2">
          <li>
            <strong>Posicionamiento Estratégico (SEO/SEM):</strong> Aplicación de estrategias de SEO On-Page y Técnico en plataformas como WordPress y Wix Studio para mejorar el ranking y la autoridad.
          </li>
          <li>
            <strong>Analítica Avanzada:</strong> Configuración y gestión de herramientas clave (Google Analytics, Google Search Console, GTM, Meta Pixel) para la integración de etiquetas, medición del rendimiento web y optimización del ROI en campañas digitales.
          </li>
          <li>
            <strong>Auditoría y Optimización:</strong> Evaluación de estructura, velocidad y contenido para cumplir con las mejores prácticas de Google, junto con la investigación de palabras clave para una estrategia de contenidos efectiva.
          </li>
          <li>
            <strong>Campañas de Pago:</strong> Gestión y optimización de campañas en plataformas como Google Ads, centradas en atraer visitantes con alto potencial de conversión.
          </li>
        </ul>
      </>
    ),
    href: "#seo-estrategia-digital-analitica",
  },
  {
    num: "03",
    title: "Análisis de Datos e Inteligencia de Negocio (BI)",
    description: (
      <>
        <p className="mb-4 text-justify">
          Convierto conjuntos de datos complejos en decisiones estratégicas accionables. Utilizo herramientas avanzadas de programación y visualización para automatizar procesos, analizar KPIs clave y generar insights que impulsan el crecimiento y la eficiencia operativa.
        </p>
        <ul className="list-disc list-inside text-white/80 space-y-2">
          <li>
            <strong>Dashboards y Visualización BI:</strong> Creación de paneles de control interactivos en Power BI y Looker Studio para una visualización clara y la evaluación de la efectividad de las soluciones tecnológicas.
          </li>
          <li>
            <strong>Análisis Avanzado con Python:</strong> Implementación de análisis y scripting con Python (Pandas, NumPy) para limpieza, procesamiento, automatización de reportes y optimización de decisiones basadas en datos.
          </li>
          <li>
            <strong>Procesos ETL y SQL:</strong> Diseño e implementación de soluciones de datos, asegurando la Extracción, Transformación y Carga (ETL) de datos desde múltiples fuentes hacia una única fuente de verdad, utilizando Azure Data Factory, SQL y PL/SQL.
          </li>
          <li>
            <strong>Modelado de Datos:</strong> Diseño de estructuras de datos relacionales y optimización de consultas avanzadas para la gestión eficiente de grandes volúmenes de información.
          </li>
        </ul>
      </>
    ),
    href: "#analisis-datos-bi",
  },
  {
    num: "04",
    title: "Gestión Ágil de Proyectos y Liderazgo Técnico",
    description: (
      <>
        <p className="mb-4 text-justify">
          Aseguro la entrega exitosa de proyectos tecnológicos, alineando los resultados con los objetivos de negocio y manteniendo la eficiencia operativa. Mi enfoque es en el liderazgo técnico y la aplicación de metodologías ágiles para la entrega continua de valor.
        </p>
        <ul className="list-disc list-inside text-white/80 space-y-2">
          <li>
            <strong>Gestión Integral del Proyecto:</strong> Liderazgo del ciclo de vida completo (definición de roadmap, cronogramas y recursos), coordinando equipos multidisciplinarios y stakeholders.
          </li>
          <li>
            <strong>Metodologías Ágiles:</strong> Administración del avance y los cambios de proyectos utilizando Scrum y Kanban con herramientas como Jira, Confluence Planner, Notion y Trello, incluyendo el manejo de backlog.
          </li>
          <li>
            <strong>Documentación y Calidad:</strong> Desarrollo de documentación de software de alta calidad (manuales de usuario con Confluence, historias de usuario, criterios de aceptación) y supervisión de pruebas SIT, UAT y QA.
          </li>
          <li>
            <strong>Liderazgo y Comunicación:</strong> Habilidad para liderar y coordinar, eliminar bloqueos, y generar reportes ejecutivos transparentes para la toma de decisiones. Contribución activa en procesos de digitalización y mejora continua.
          </li>
        </ul>
      </>
    ),
    href: "#gestion-agil-liderazgo-tecnico",
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
          // items-stretch: Clave para que todas las tarjetas en la misma fila tengan la misma altura.
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[60px] max-w-[90%] md:max-w-none mx-auto items-stretch"
        >
          {services.map((service, index) => {
            const isLastCard = index === services.length - 1;
            const isOddTotal = services.length % 2 !== 0;

            return (
              <div
                key={index}
                id={service.href.substring(1)}
                className={`
                  flex flex-col justify-between h-full // h-full es esencial para que la tarjeta llene el espacio del grid
                  p-4 sm:p-6 md:p-8 
                  bg-[#18181b] rounded-2xl shadow-lg 
                  group transition-all duration-500
                  ${
                    // Lógica para centrar la última tarjeta si el total es impar
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
                  {/* Se usa 'a' en lugar de 'Link' y se reemplaza el componente de ícono por un carácter Unicode (&rarr; -> '→'), manteniendo la animación de rotación. */}
                  <a
                    href={service.href}
                    className="w-12 h-12 sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <span className="text-primary text-4xl leading-none font-extrabold rotate-45">
                      &rarr;
                    </span>
                  </a>
                </div>
                {/* title */}
                <h2 className="text-xl sm:text-2xl md:text-[32px] font-bold leading-tight text-white group-hover:text-accent transition-all duration-500 mb-2 text-center min-h-[60px] sm:min-h-[70px] md:min-h-[80px] flex items-center justify-center">
                  {service.title}
                </h2>
                {/* description */}
                {/* flex-1 asegura que este bloque tome todo el espacio vertical restante, empujando el borde al final */}
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
      
      {/* Se ha eliminado el componente Footer para resolver el error de dependencia. */}
      <div className="mt-8 text-center text-white/50">
        <Footer/>
      </div>
    </section>
  );
};

export default ServicesPage;
