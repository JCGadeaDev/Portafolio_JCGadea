import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "../components/Social";
import Photo from "../components/Photo";
import Stats from "../components/Stats";
import Footer from "components/Footer";

const Home = () => {
  return (
    <section className="h-full">
      <div className="h-full px-4 lg:px-8">
        <div className="container mx-auto max-w-7xl h-full flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none lg:max-w-xl">
            <span className="text-justify text-xl lg:text-2xl text-text-muted font-medium tracking-wide">
              {/*  */}
              Full Stack Developer • Project Manager • DevOps Cloud • Data Analytics •
              SEO Strategy
            </span>

            <h1 className="h1 text-text-primary mt-4 mb-6">
              Hola, Soy
              <br />
              <span className="text-accent drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]">
                Juan Carlos Gadea
              </span>
            </h1>

            {/* Descripción Optimizada */}
            <p className="text-justify max-w-[550px] lg:max-w-[600px] mb-9 text-text-muted text-justify xl:text-left lg:text-lg leading-relaxed">
              Ingeniero de Software y Consultor Técnico. Especializado en
              construir{" "}
              <span className="text-white font-medium">
                arquitecturas escalables
              </span>
              , optimizar{" "}
              <span className="text-white font-medium">
                infraestructura Cloud
              </span>{" "}
              y liderar la{" "}
              <span className="text-accent">transformación digital</span>.
              Fusiono desarrollo, datos y estrategia para crear soluciones de
              alto impacto.
            </p>
            {/* btns and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/CV.pdf" download>
                {/* Asegúrate de que tu componente Button use variants que soporten 'accent' u 'outline' con los nuevos colores */}
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300"
                >
                  <span>Descargar CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  // Actualizamos los estilos de los iconos para usar accent
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            {/* Pro-Tip: Si puedes, añade a tu componente Photo un efecto de "glow" 
               cyan detrás de la imagen para integrarla con el fondo oscuro.
            */}
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
      <Footer />
    </section>
  );
};

export default Home;
