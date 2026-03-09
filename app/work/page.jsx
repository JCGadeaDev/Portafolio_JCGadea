"use client";

import { motion } from "framer-motion";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import Footer from "@/components/Footer";

// PEGA AQUÍ EL ARRAY 'projects' ACTUALIZADO (EL QUE TE DI ARRIBA)
const projects = [
  // ... copia el array projects de arriba ...
  {
    num: "01",
    category: "PaaS Platform & Architecture",
    title: "MiBoletoni & Boletería Digital",
    description:
      "Plataforma PaaS completa para la gestión y venta de boletos digitales. Diseñé una arquitectura escalable que maneja picos de tráfico en tiempo real. Incluye generación de códigos QR dinámicos, impresión de boletos para ventas en puntos físicos, Auth y roles de usuarios, integración con pasarelas de pago (Fygaro) y un panel administrativo financiero.",
    stack: [
      { name: "Next.js 16" },
      { name: "React" },
      { name: "Typescript" },
      { name: "API Resend" },
      { name: "Firebase" },
      { name: "Nodejs" },
      { name: "Fygaro API" },
      { name: "Tailwind CSS" },
      { name: "Shadcn/UI" },
      { name: "Cloudflare" },
      { name: "Framer Motion" },
      { name: "Docker" },
      { name: "GCP" },
    ],
    image: "/assets/work/MiBoleto.webp",
    live: "https://miboletoni.com/",
    github: "https://github.com/JCGadeaDev/MiBoletoNi",
  },
  {
    num: "02",
    category: "Real Estate Platform",
    title: "Propiedades & Analytics",
    description:
      "Aplicación web progresiva (PWA) para el sector inmobiliario. Permite a los agentes gestionar inventario y a los usuarios filtrar propiedades con algoritmos de búsqueda avanzada. Integré mapas interactivos y un módulo de análisis de precios por metro cuadrado.",
    stack: [
      { name: "React" },
      { name: "React Router" },
      { name: "Redux Toolkit" },
      { name: "Vite" },
      { name: "Recharts" },
      { name: "Tailwindcss" },
      { name: "Vercel" },
    ],
    image: "/assets/work/Realstate.webp",
    live: "https://real-state-website-beige.vercel.app/",
    github: "https://github.com/JCGadeaDev/RealStateWebsite",
  },
  {
    num: "03",
    category: "Corporate & SEO Strategy",
    title: "TechServices & Soluciones TI", 
    description:
      "Sitio corporativo de alto rendimiento para una agencia de servicios tecnológicos. Diseñé una experiencia de usuario (UX) centrada en la conversión y la velocidad. Implementé prácticas avanzadas de SEO Semántico y optimización de imágenes, logrando tiempos de carga inferiores a 1.5s. La arquitectura modular permite escalar nuevas secciones de servicios sin deuda técnica.",
    stack: [
      { name: "Next.js 16" },
      { name: "React" },
      { name: "React Icons" },
      { name: "API Fetch" },
      { name: "Resend" },
      { name: "Framer Motion" },
      { name: "SEO Técnico" },
    ],
    image: "/assets/work/TechServices.webp", 
    live: "https://techservicesweb.vercel.app/",
    github: "https://github.com/JCGadeaDev/TechServicesWeb", 
},
  {
    num: "04",
    category: "Fintech & Data Analytics",
    title: "Nexus Banking Dashboard",
    description:
      "Solución de Business Intelligence para el sector bancario. Desarrollé un sistema de visualización de datos que procesa transacciones financieras en tiempo real para detectar fraudes y analizar tendencias de crédito. Implementé pipelines de datos con Python y visualizaciones interactivas de alto rendimiento.",
    stack: [
      { name: "Python" },
      { name: "Power BI" },
      { name: "SQL Server" },
      { name: "Azure Cloud" },
      { name: "React" },
    ],
    image: "/assets/work/TechServices.webp",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "Real Estate Platform",
    title: "Propiedades & Analytics",
    description:
      "Aplicación web progresiva (PWA) para el sector inmobiliario. Permite a los agentes gestionar inventario y a los usuarios filtrar propiedades con algoritmos de búsqueda avanzada. Integré mapas interactivos y un módulo de análisis de precios por metro cuadrado.",
    stack: [
      { name: "React" },
      { name: "Redux Toolkit" },
      { name: "Vite" },
      { name: "Recharts" },
      { name: "Tailwind" },
    ],
    image: "/assets/work/Realstate.webp",
    live: "https://real-state-website-beige.vercel.app/",
    github: "https://github.com/JCGadeaDev/RealStateWebsite",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[40px] 2xl:gap-[50px]">
            {/* === SECCIÓN IZQUIERDA: INFORMACIÓN === */}
            <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none mb-8 xl:mb-0 relative">
              <div className="flex flex-col gap-[20px] h-full relative z-10">
                {/* Categoría (Badge) */}
                <div className="w-fit px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                  <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Título */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white group-hover:text-accent transition-colors">
                  {project.title}
                </h2>

                {/* Número Grande de Fondo (Efecto Diseño) */}
                <div className="absolute -top-10 -left-6 -z-10 opacity-10 select-none">
                  <span className="text-[120px] xl:text-[150px] font-extrabold text-transparent text-outline leading-none">
                    {project.num}
                  </span>
                </div>

                {/* Descripción */}
                <p className="text-white/70 text-base md:text-lg text-justify leading-relaxed">
                  {project.description}
                </p>

                {/* Stack Technologies (Estilo Chips) */}
                <div className="flex flex-wrap gap-2 my-4">
                  {project.stack.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors cursor-default"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-6 mt-auto">
                  {/* Botones de Acción */}
                  <div className="flex items-center gap-4">
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 border border-white/10 flex justify-center items-center group hover:bg-accent hover:border-accent transition-all duration-300">
                              <BsArrowUpRight className="text-white text-2xl group-hover:text-primary transition-colors duration-300" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Ver proyecto en vivo</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    )}

                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 border border-white/10 flex justify-center items-center group hover:bg-accent hover:border-accent transition-all duration-300">
                              <BsGithub className="text-white text-2xl group-hover:text-primary transition-colors duration-300" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Ver código en GitHub</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* === SECCIÓN DERECHA: CARRUSEL === */}
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                className="xl:h-[520px] mb-6 rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/5"
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index} className="w-full">
                    {/* Contenedor del Slide */}
                    <div className="h-[300px] sm:h-[400px] md:h-[480px] lg:h-[520px] relative group flex justify-center items-center bg-[#0f172a] rounded-xl overflow-hidden border border-white/5">
                      {/* Fondo decorativo (opcional, le da un toque 'glow' detrás de la imagen) */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent/5 opacity-50"></div>

                      {/* Contenedor de la Imagen Relativo */}
                      <div className="relative w-full h-full p-4 sm:p-8 md:p-10 flex items-center justify-center">
                        <Image
                          src={project.image}
                          fill
                          // CAMBIO CLAVE: 'object-contain' muestra la imagen ENTERA sin recortar nada.
                          className="object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                          alt={`Preview de ${project.title}`}
                          // Tamaños optimizados
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 800px"
                          quality={90}
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Controles de Navegación Mejorados */}
              <div className="flex gap-4 w-full justify-end">
                <button
                  className="group bg-transparent border border-accent text-accent hover:bg-accent hover:text-primary w-[50px] h-[50px] flex justify-center items-center transition-all duration-300 rounded-full"
                  onClick={() => swiperRef.current?.slidePrev()}
                  aria-label="Proyecto anterior"
                >
                  <MdNavigateBefore className="text-3xl" />
                </button>
                <button
                  className="group bg-transparent border border-accent text-accent hover:bg-accent hover:text-primary w-[50px] h-[50px] flex justify-center items-center transition-all duration-300 rounded-full"
                  onClick={() => swiperRef.current?.slideNext()}
                  aria-label="Siguiente proyecto"
                >
                  <MdNavigateNext className="text-3xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <Footer />
    </>
  );
};

export default Work;
