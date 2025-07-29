import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "../components/Social";
import Photo from "../components/Photo";
import Stats from "../components/Stats";
import Footer from "components/Footer";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none  ">
            <span className="text-xl">
              Desarrollador Frontend · Analista de Datos · Gestor de Proyectos ·
              Redacción de Contenidos
            </span>
            <h1 className="h1">
              Hola, Soy
              <br /> <span className="text-accent">Juan Carlos Gadea</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 text-justify">
              Soy un profesional multidisciplinario en tecnología, especializado
              en desarrollo frontend, análisis de datos, gestión ágil de
              proyectos y creación de contenido estratégico. Combino diseño,
              tecnología y comunicación para construir soluciones digitales con
              impacto real, centradas en el usuario y alineadas con los
              objetivos del negocio. Trabajo con herramientas como React, Angular,
              Next.js, Tailwind, Node.js y Oracle APEX para crear interfaces
              modernas y escalables. También aplico Python, SQL y Power BI para
              automatizar procesos, analizar datos y generar insights clave.
              Desde la planificación ágil hasta la redacción de contenido
              persuasivo, aporto una visión integral que conecta estrategia,
              experiencia de usuario y resultados.
            </p>
            {/* btns and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/CV.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Descargar CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default Home;
