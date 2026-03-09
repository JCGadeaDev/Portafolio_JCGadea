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
        <div className="container mx-auto max-w-7xl h-full flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 gap-8 xl:gap-0">

          {/* ── Text side ── */}
          <div className="text-center xl:text-left order-2 xl:order-none lg:max-w-xl">

            {/* Specializations */}
            <div className="mb-6">
              <span className="text-justify text-xl lg:text-2xl text-text-muted font-medium tracking-wide">
                Full Stack Developer • Project Manager • DevOps Cloud • Data Analytics • SEO Strategy
              </span>
            </div>

            <h1 className="h1 text-text-primary mt-2 mb-6">
              Hola, Soy
              <br />
              <span className="text-accent glow-text">
                Juan Carlos
                <br />
                Gadea
              </span>
            </h1>

            <p className="max-w-[550px] lg:max-w-[580px] mb-9 text-text-muted xl:text-left lg:text-lg leading-relaxed">
              Ingeniero de Software y Consultor Técnico. Especializado en construir{" "}
              <span className="text-white font-medium">arquitecturas escalables</span>,
              optimizar{" "}
              <span className="text-white font-medium">infraestructura Cloud</span>{" "}
              y liderar la{" "}
              <span className="text-accent font-medium">transformación digital</span>.
              Fusiono desarrollo, datos y estrategia para crear soluciones de alto impacto.
            </p>

            {/* Buttons & Socials */}
            <div className="flex flex-col xl:flex-row items-center xl:items-start gap-6 xl:gap-8">
              <a href="/CV.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2"
                >
                  <span>Descargar CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <div className="flex items-center gap-4">
                {/* Divisor vertical */}
                <div className="hidden xl:block w-px h-8 bg-white/10" />
                <Social
                  containerStyles="flex gap-4"
                  iconStyles="w-10 h-10 border border-accent/25 rounded-full flex justify-center items-center text-accent/80 text-base hover:bg-accent hover:text-primary hover:border-accent hover:shadow-[0_0_18px_rgba(34,211,238,0.45)] transition-all duration-400"
                />
              </div>
            </div>
          </div>

          {/* ── Photo side ── */}
          <div className="order-1 xl:order-none mb-4 xl:mb-0">
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
