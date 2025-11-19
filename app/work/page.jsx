"use client";

import { easeIn, motion } from "framer-motion";
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

// --- PROYECTOS SELECCIONADOS DE TU GITHUB ---
const projects = [
  {
    num: "01",
    category: "Frontend y Backend",
    title: "NicCoders Web",
    description:
      "Desarrollo de landing page para NicCoders, startup tecnológica, enfocada en posicionar su marca y captar clientes. Se construyó un MVP de alto rendimiento con Next.js 14 para optimización y velocidad. La interfaz, responsiva y personalizable, fue creada con Tailwind CSS y Framer Motion. El formulario de contacto opera mediante una API con Node.js y Nodemailer, sentando las bases de una arquitectura robusta y escalable",
    stack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "NodeJs" },
      { name: "Nodemailer" },
      { name: "Express" },
    ],
    image: "/assets/work/NicCoders.webp", 
    live: "https://niccoders.com/",
    github: "https://github.com/JCGadeaDev/NicCoders_Site",
  },
  {
    num: "02",
    category: "Frontend y Análisis de Datos",
    title: "Real State Website",
    description:
      "Desarrollo de una aplicación web interactiva que permite agentes inmobiliarios y usuarios visualizar propiedades, filtrar opciones, ver análisis de datos y gestionar información de inmuebles de forma intuitiva. La plataforma está optimizada para rendimiento y accesibilidad.",
    stack: [
      { name: "React 19" },
      { name: "React Hook" },
      { name: "Redux" },
      { name: "Vite 7" },
      { name: "ESLint 9" },
      { name: "Tailwindcss" },
      { name: "Recharts" },
      { name: "Vercel" },
    ],
    image: "/assets/work/RealStateWeb.webp", 
    live: "https://real-state-website-beige.vercel.app/",
    github: "https://github.com/JCGadeaDev/RealStateWebsite",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Menú Digital Restaurante Tentaculo",
    description:
      "Desarrollo de un menú digital interactivo para el Restaurante Tentaculo, facilitando la visualización y selección de platos a través de una interfaz intuitiva y atractiva. La aplicación mejora la experiencia del cliente consultando el menú a través de un código QR y optimiza la gestión del restaurante.",
    stack: [
      { name: "React 19" },
      { name: "React Dom" },
      { name: "Framer-Motion" },
      { name: "Vite 7" },
      { name: "ESLint 9" },
      { name: "Tailwindcss" },
      { name: "Vercel" },
    ],
    image: "/assets/work/MenuDigital.webp", 
    live: "https://menu-digital-restaurante-tentaculo.vercel.app/",
    github: "https://github.com/JCGadeaDev/MenuDigital_RestauranteTentaculo",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Portafolio Personal",
    description:
      "Mi portafolio personal (el que estás viendo ahora), diseñado y construido con Next.js y Tailwind CSS, con un enfoque en diseño responsivo y animaciones suaves con Framer Motion.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
    image: "/assets/work/thumb-portfolio.png",
    live: "https://jc-gadea-dev-portfolio.vercel.app/",
    github: "https://github.com/JCGadeaDev/portfolio-v1",
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
          transition: { delay: 2.4, duration: 0.4, ease: easeIn },
        }}
        className="min-h-[80vh] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[40px] 2xl:gap-[50px]">
            {/* SECCIÓN IZQUIERDA - INFORMACIÓN */}
            <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none mb-8 xl:mb-0">
              <div className="flex flex-col gap-[20px] md:gap-[25px] xl:gap-[30px] h-full">
                {/* Número del Proyecto */}
                <div className="text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>

                {/* Categoría */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold leading-none text-white capitalize">
                  {project.category}
                </h2>

                {/* Descripción - Con scroll si es necesario */}
                <p className="text-sm sm:text-base md:text-base lg:text-base xl:text-base text-white/60 text-justify leading-relaxed max-h-[120px] xl:max-h-[140px] overflow-y-auto pr-2">
                  {project.description}
                </p>

                {/* Stack Technologies */}
                <ul className="flex gap-2 flex-wrap">
                  {project.stack.map((item, index) => (
                    <li key={index} className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-accent font-medium">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>

                <div className="border border-white/20"></div>

                {/* Botones de Acción - Fijos al final */}
                <div className="flex items-center gap-3 sm:gap-4 md:gap-4 mt-auto">
                  {project.live && (
                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent/10 transition-all">
                            <BsArrowUpRight className="text-white text-2xl sm:text-2xl md:text-3xl group-hover:text-accent transition-colors" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ver proyecto</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent/10 transition-all">
                          <BsGithub className="text-white text-2xl sm:text-2xl md:text-3xl group-hover:text-accent transition-colors" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Ver repositorio</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>

            {/* SECCIÓN DERECHA - CARRUSEL DE IMÁGENES */}
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                className="xl:h-[520px] mb-3 md:mb-4 lg:mb-4 rounded-lg overflow-hidden"
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[460px] xl:h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-lg overflow-hidden">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          alt={`Imagen del proyecto ${project.title}`}
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Botones de Navegación */}
              <div className="flex gap-2 sm:gap-3 md:gap-4 w-full justify-between xl:w-max xl:justify-end mt-3 md:mt-4">
                <button
                  className="bg-accent hover:bg-accent-hover text-primary text-lg sm:text-lg md:text-xl lg:text-2xl w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] md:w-[50px] md:h-[50px] flex justify-center items-center transition-all rounded-md hover:scale-110"
                  onClick={() => swiperRef.current?.slidePrev()}
                  aria-label="Proyecto anterior"
                >
                  <MdNavigateBefore className="text-primary text-lg sm:text-lg md:text-2xl" />
                </button>
                <button
                  className="bg-accent hover:bg-accent-hover text-primary text-lg sm:text-lg md:text-xl lg:text-2xl w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] md:w-[50px] md:h-[50px] flex justify-center items-center transition-all rounded-md hover:scale-110"
                  onClick={() => swiperRef.current?.slideNext()}
                  aria-label="Siguiente proyecto"
                >
                  <MdNavigateNext className="text-primary text-lg sm:text-lg md:text-2xl" />
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
