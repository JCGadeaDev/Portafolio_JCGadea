"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef } from "react";
import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import Footer from "@/components/Footer";

const pad = (n) => String(n).padStart(2, '0');

const Work = () => {
  const t = useTranslations('work');
  const projects = t.raw('projects');

  const [project, setProject] = useState(projects[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: "easeIn" } }}
        className="min-h-[80vh] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[40px] 2xl:gap-[50px]">

            {/* Panel izquierdo — info del proyecto */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="w-full xl:w-[40%] flex flex-col xl:justify-between order-2 xl:order-none mb-8 xl:mb-0 relative"
              >
                <div className="flex flex-col gap-5 h-full relative z-10">

                  <div className="w-fit px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                    <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
                    {project.title}
                  </h2>

                  <div className="absolute -top-10 -left-6 -z-10 opacity-10 select-none pointer-events-none">
                    <span className="text-[120px] xl:text-[150px] font-extrabold text-transparent text-outline leading-none">
                      {project.num}
                    </span>
                  </div>

                  <p className="text-white/70 text-base md:text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((name, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors cursor-default"
                      >
                        {name}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-5 mt-auto">
                    <div className="flex items-center gap-4">
                      {project.live && (
                        <Link href={project.live} target="_blank" rel="noopener noreferrer">
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-[56px] h-[56px] rounded-full bg-white/5 border border-white/10 flex justify-center items-center group hover:bg-accent hover:border-accent transition-all duration-300">
                                <BsArrowUpRight className="text-white text-xl group-hover:text-primary transition-colors duration-300" />
                              </TooltipTrigger>
                              <TooltipContent><p>{t('liveTooltip')}</p></TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Link>
                      )}

                      {project.github && (
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-[56px] h-[56px] rounded-full bg-white/5 border border-white/10 flex justify-center items-center group hover:bg-accent hover:border-accent transition-all duration-300">
                                <BsGithub className="text-white text-xl group-hover:text-primary transition-colors duration-300" />
                              </TooltipTrigger>
                              <TooltipContent><p>{t('githubTooltip')}</p></TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Panel derecho — slider de imágenes */}
            <div className="w-full xl:w-[60%]">
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                className="mb-4 rounded-xl overflow-hidden"
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={handleSlideChange}
              >
                {projects.map((proj, index) => (
                  <SwiperSlide key={index}>
                    {/* Marco tipo browser */}
                    <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                      {/* Barra del browser */}
                      <div className="flex items-center gap-3 px-4 py-2.5 bg-[#1a2332] border-b border-white/10">
                        <div className="flex gap-1.5 flex-shrink-0">
                          <span className="w-3 h-3 rounded-full bg-red-500/70" />
                          <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                          <span className="w-3 h-3 rounded-full bg-green-500/70" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="bg-white/5 border border-white/8 rounded-md px-3 py-1 text-[11px] text-white/30 font-mono truncate">
                            {proj.live || 'portafolio-jc-gadea.vercel.app'}
                          </div>
                        </div>
                      </div>

                      {/* Imagen */}
                      <div className="h-[260px] sm:h-[370px] md:h-[460px] xl:h-[500px] relative group bg-[#0f172a]">
                        <Image
                          src={proj.image}
                          fill
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                          alt={`Preview de ${proj.title}`}
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 900px"
                          quality={90}
                          priority={index === 0}
                        />

                        {/* Overlay hover */}
                        <div className="absolute inset-0 bg-primary/75 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                          {proj.live && (
                            <Link href={proj.live} target="_blank" rel="noopener noreferrer">
                              <span className="flex items-center gap-2 px-5 py-2.5 bg-accent text-primary font-bold rounded-full text-sm hover:bg-accent/85 transition-colors shadow-lg shadow-accent/30">
                                <BsArrowUpRight className="text-base" />
                                {t('liveTooltip')}
                              </span>
                            </Link>
                          )}
                          {proj.github && (
                            <Link href={proj.github} target="_blank" rel="noopener noreferrer">
                              <span className="flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 text-white font-semibold rounded-full text-sm hover:bg-white/20 transition-colors backdrop-blur-sm">
                                <BsGithub className="text-base" />
                                GitHub
                              </span>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Contador + dots + navegación */}
              <div className="flex items-center justify-between px-1 mt-3">
                {/* Contador */}
                <div className="flex items-center gap-1 font-mono select-none">
                  <span className="text-accent text-xl font-bold">{pad(activeIndex + 1)}</span>
                  <span className="text-white/20 text-sm mx-1">/</span>
                  <span className="text-white/30 text-sm">{pad(projects.length)}</span>
                </div>

                {/* Dots */}
                <div className="flex gap-1.5 items-center">
                  {projects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => swiperRef.current?.slideTo(i)}
                      aria-label={`Proyecto ${i + 1}`}
                      className={`rounded-full transition-all duration-300 ${
                        i === activeIndex
                          ? 'w-6 h-2 bg-accent shadow-[0_0_8px_rgba(34,211,238,0.5)]'
                          : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>

                {/* Botones nav */}
                <div className="flex gap-3">
                  <button
                    className="border border-accent/40 text-accent hover:bg-accent hover:text-primary w-[44px] h-[44px] flex justify-center items-center transition-all duration-300 rounded-full hover:border-accent hover:shadow-[0_0_14px_rgba(34,211,238,0.3)]"
                    onClick={() => swiperRef.current?.slidePrev()}
                    aria-label={t('prevProject')}
                  >
                    <MdNavigateBefore className="text-2xl" />
                  </button>
                  <button
                    className="border border-accent/40 text-accent hover:bg-accent hover:text-primary w-[44px] h-[44px] flex justify-center items-center transition-all duration-300 rounded-full hover:border-accent hover:shadow-[0_0_14px_rgba(34,211,238,0.3)]"
                    onClick={() => swiperRef.current?.slideNext()}
                    aria-label={t('nextProject')}
                  >
                    <MdNavigateNext className="text-2xl" />
                  </button>
                </div>
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
