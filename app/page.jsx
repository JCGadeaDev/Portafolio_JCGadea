import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "../components/Social";
import Photo from "../components/Photo";
import Stats from "../components/Stats";
import Footer from "components/Footer";

const Home = () => {
  return (
    <section className="h-full">
      {/* CAMBIO PRINCIPAL:
        - Añadimos 'px-4' para un padding consistente en móviles.
        - Añadimos 'lg:px-8' para un padding mayor en pantallas grandes.
        - Eliminamos el 'container mx-auto' que limita el ancho.
      */}
      <div className="h-full px-4 lg:px-8">
        {/*
          CAMBIO 2:
          - Envolvemos el contenido principal en un nuevo div.
          - 'container mx-auto' se aplica aquí para centrar el contenido.
          - 'max-w-7xl' es la clave: le da un ancho máximo mucho mayor, ideal para 1920px.
        */}
        <div className="container mx-auto max-w-7xl h-full flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          
          {/* text */}
          {/*
            CAMBIO 3:
            - Añadimos 'lg:max-w-xl' para darle al texto un poco más de espacio para respirar en pantallas más grandes.
          */}
          <div className="text-center xl:text-left order-2 xl:order-none lg:max-w-xl">
            {/*
              CAMBIO 4:
              - Aumentamos el tamaño de la fuente para pantallas grandes con 'lg:text-2xl'.
            */}
            <span className="text-xl lg:text-2xl">
              Full-Stack Developer | Data Analyst | SEO Specialist | Project Manager
            </span>
            <h1 className="h1">
              Hola, Soy
              <br /> <span className="text-accent">Juan Carlos Gadea</span>
            </h1>
            {/*
              CAMBIO 5:
              - Aumentamos el ancho máximo y el tamaño de la fuente del párrafo.
            */}
            <p className="max-w-[550px] lg:max-w-[600px] mb-9 text-white/80 text-justify xl:text-left lg:text-lg">
              Convierto datos en interfaces interactivas y estrategias de negocio en soluciones digitales. Me especializo en crear aplicaciones web eficientes y posicionadas, transformando problemas complejos en experiencias de usuario intuitivas y rentables.
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
      <Footer />
    </section>
  );
};

export default Home;