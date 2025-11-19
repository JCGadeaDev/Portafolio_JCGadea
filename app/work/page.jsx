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
    image: "/assets/work/thumb-portfolio.png", // Reemplazar con la imagen de tu proyecto
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
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>
                {/* CAMBIO: Título más dinámico y traducido */}
                <h2 className="text-[42px] font-bold leading-none text-white capitalize">
                  {project.category}
                </h2>
                <p className="text-white/60 text-justify">{project.description}</p>
                <ul className="flex gap-4 flex-wrap">
                  {project.stack.map((item, index) => (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>
                <div className="border border-white/20"></div>
                <div className="flex items-center gap-4">
                  {/* CAMBIO: Lógica para ocultar el botón si no hay link en vivo */}
                  {project.live && (
                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ver proyecto</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}
                  {/* CAMBIO: Tooltip traducido */}
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
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

            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-4"
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt={`Imagen del proyecto ${project.title}`}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="flex xl:gap-4 mt-2 xl:mt-4 w-full justify-between xl:w-max xl:justify-end">
                <button
                  className="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <MdNavigateBefore className="text-primary text-xl" />
                </button>
                <button
                  className="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <MdNavigateNext className="text-primary text-xl" />
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
