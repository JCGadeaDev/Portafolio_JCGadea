"use client";

import { motion } from "framer-motion";
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

const Work = () => {
  const t = useTranslations('work');
  const projects = t.raw('projects');

  const [project, setProject] = useState(projects[0]);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
        className="min-h-[80vh] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[40px] 2xl:gap-[50px]">
            <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none mb-8 xl:mb-0 relative">
              <div className="flex flex-col gap-[20px] h-full relative z-10">
                <div className="w-fit px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                  <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white group-hover:text-accent transition-colors">
                  {project.title}
                </h2>

                <div className="absolute -top-10 -left-6 -z-10 opacity-10 select-none">
                  <span className="text-[120px] xl:text-[150px] font-extrabold text-transparent text-outline leading-none">
                    {project.num}
                  </span>
                </div>

                <p className="text-white/70 text-base md:text-lg text-justify leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 my-4">
                  {project.stack.map((name, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors cursor-default"
                    >
                      {name}
                    </span>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-6 mt-auto">
                  <div className="flex items-center gap-4">
                    {project.live && (
                      <Link href={project.live} target="_blank" rel="noopener noreferrer">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 border border-white/10 flex justify-center items-center group hover:bg-accent hover:border-accent transition-all duration-300">
                              <BsArrowUpRight className="text-white text-2xl group-hover:text-primary transition-colors duration-300" />
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
                            <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 border border-white/10 flex justify-center items-center group hover:bg-accent hover:border-accent transition-all duration-300">
                              <BsGithub className="text-white text-2xl group-hover:text-primary transition-colors duration-300" />
                            </TooltipTrigger>
                            <TooltipContent><p>{t('githubTooltip')}</p></TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                className="xl:h-[520px] mb-6 rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/5"
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={handleSlideChange}
              >
                {projects.map((proj, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[300px] sm:h-[400px] md:h-[480px] lg:h-[520px] relative group flex justify-center items-center bg-[#0f172a] rounded-xl overflow-hidden border border-white/5">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent/5 opacity-50"></div>
                      <div className="relative w-full h-full p-4 sm:p-8 md:p-10 flex items-center justify-center">
                        <Image
                          src={proj.image}
                          fill
                          className="object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                          alt={`Preview de ${proj.title}`}
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 800px"
                          quality={90}
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="flex gap-4 w-full justify-end">
                <button
                  className="group bg-transparent border border-accent text-accent hover:bg-accent hover:text-primary w-[50px] h-[50px] flex justify-center items-center transition-all duration-300 rounded-full"
                  onClick={() => swiperRef.current?.slidePrev()}
                  aria-label={t('prevProject')}
                >
                  <MdNavigateBefore className="text-3xl" />
                </button>
                <button
                  className="group bg-transparent border border-accent text-accent hover:bg-accent hover:text-primary w-[50px] h-[50px] flex justify-center items-center transition-all duration-300 rounded-full"
                  onClick={() => swiperRef.current?.slideNext()}
                  aria-label={t('nextProject')}
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
