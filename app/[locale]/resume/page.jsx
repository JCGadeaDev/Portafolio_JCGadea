"use client";

import React, { useState } from "react";
import { useTranslations } from 'next-intl';
import {
  FaHtml5, FaCss3, FaBootstrap, FaJs, FaReact, FaAngular, FaPython,
  FaJira, FaTrello, FaNode, FaGitAlt, FaGithub, FaAws, FaMicrosoft,
  FaWordpress, FaUser, FaGraduationCap, FaBriefcase, FaCode,
  FaSearchPlus, FaTimes, FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss, SiTypescript, SiAstro, SiNotion, SiNextdotjs, SiMysql,
  SiAsana, SiExpress, SiPostgresql, SiSupabase, SiOracle, SiPrisma,
  SiPandas, SiNumpy, SiJupyter, SiPostman, SiSwagger, SiVite, SiWebpack,
  SiGithubactions, SiGooglecolab, SiNetlify, SiWix, SiLooker,
  SiGoogleanalytics, SiFirebase, SiGooglecloud, SiShadcnui, SiDotnet, SiBlazor, SiMongodb, SiScikitlearn, SiStreamlit, SiGoogletagmanager,
  SiMeta,  SiSemrush, SiGooglesearchconsole,  SiTerraform, SiNginx, SiCloudflare, SiConfluence, SiMiro, SiLucid,
  SiAnthropic, SiOpenai, SiGooglegemini, SlCursor, SiClaude, SiLangchain, SiHuggingface, SiN8N,
} from "react-icons/si";
import { TbSql, TbBrain, TbSparkles  } from "react-icons/tb";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { VscAzure, VscMcp  } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";

const skillCategories = [
  {
    nameKey: "Frontend",
    skills: [
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <FaReact />, name: "React" },
      { icon: <FaAngular />, name: "Angular" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiAstro />, name: "Astro" },
      { icon: <SiWebpack />, name: "Webpack" },
      { icon: <SiVite />, name: "Vite" },   
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3 />, name: "CSS3" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <FaBootstrap />, name: "Bootstrap" },
      { icon: <SiShadcnui />, name: "Shadcn UI" }, 
    ],
  },
  {
    nameKey: "Backend & Databases",
    skills: [
      { icon: <FaNode />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express" },
      { icon: <SiDotnet />, name: ".NET 8 / C#" },
      { icon: <SiBlazor />, name: "Blazor" },        
      { icon: <SiSwagger />, name: "Swagger" },
      { icon: <TbSql />, name: "SQL Server" },      
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiSupabase />, name: "Supabase" },
      { icon: <SiFirebase />, name: "Firebase" },
      { icon: <SiOracle />, name: "Oracle PL/SQL" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiPrisma />, name: "Prisma ORM" },
      { icon: <SiMongodb />, name: "MongoDB" },      
    ],
  },
  {
    nameKey: "Data Engineering & Analytics",  
    skills: [
      { icon: <FaPython />, name: "Python" },
      { icon: <SiPandas />, name: "Pandas" },
      { icon: <SiNumpy />, name: "NumPy" },
      { icon: <SiScikitlearn />, name: "Scikit-learn" }, 
      { icon: <SiStreamlit />, name: "Streamlit" },      
      { icon: <SiJupyter />, name: "Jupyter" },
      { icon: <SiGooglecolab />, name: "Google Colab" },
      { icon: <FaMicrosoft />, name: "Power BI" },      
      { icon: <PiMicrosoftExcelLogo />, name: "Excel" },     
      { icon: <SiLooker />, name: "Looker Studio" },
      { icon: <SiGoogleanalytics />, name: "Google Analytics" },
      { icon: <SiGoogletagmanager />, name: "Google Tag Manager" },
    ],
  },
  {
    nameKey: "AI, LLMs & Automation",                          
    skills: [
      { icon: <SiAnthropic />, name: "Claude (Anthropic)" },
      { icon: <SiOpenai />, name: "Codex (OpenAI)" },
      { icon: <SiGooglegemini />, name: "Gemini (Google)" },
      { icon: <SlCursor />, name: "Cursor" },
      { icon: <SiClaude />, name: "Claude Code" },
      { icon: <VscMcp />, name: "MCP Servers" },
      { icon: <TbBrain />, name: "Agent Skills" },
      { icon: <SiLangchain />, name: "LangChain" },
      { icon: <TbRobot />, name: "Prompt Engineering" },
      { icon: <SiHuggingface />, name: "Hugging Face" },
      { icon: <TbSparkles />, name: "AI Pipelines" },
      { icon: <SiN8N />, name: "n8n Automation" },
    ],
  },
  {
    nameKey: "CMS & Marketing Tech",          
    skills: [
      { icon: <FaWordpress />, name: "WordPress" },
      { icon: <SiWix />, name: "Wix Studio" },
      { icon: <SiGooglesearchconsole />, name: "Search Console" }, 
      { icon: <SiMeta />, name: "Meta Pixel" },                    
      { icon: <SiSemrush />, name: "SEO Técnico" },   
      ],             
  },
  {
    nameKey: "DevOps, Cloud & Infrastructure",
    skills: [
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaGithub />, name: "GitHub" },
      { icon: <SiGithubactions />, name: "GitHub Actions" },
      { icon: <FaDocker />, name: "Docker" },
      { icon: <SiTerraform />, name: "Terraform" },  
      { icon: <SiNginx />, name: "Nginx" },          
      { icon: <IoLogoVercel />, name: "Vercel" },
      { icon: <SiNetlify />, name: "Netlify" },
      { icon: <VscAzure />, name: "Azure" },
      { icon: <FaAws />, name: "AWS" },
      { icon: <SiGooglecloud />, name: "Google Cloud" },
      { icon: <SiCloudflare />, name: "Cloudflare" }, 
    ],
  },
  {
    nameKey: "Agile & Project Management",
    skills: [
      { icon: <FaJira />, name: "Jira" },
      { icon: <FaTrello />, name: "Trello" },
      { icon: <SiNotion />, name: "Notion" },
      { icon: <SiAsana />, name: "Asana" },
      { icon: <SiConfluence />, name: "Confluence" }, 
      { icon: <SiMiro />, name: "Miro" },       
      { icon: <SiLucid />, name: "Lucidchart" },      
    ],
  },
];

const Resume = () => {
  const t = useTranslations('resume');
  const [selectedImage, setSelectedImage] = useState(null);

  const experienceItems = t.raw('experience.items');
  const formalItems = t.raw('education.formal.items');
  const certificationItems = t.raw('education.certifications.items');
  const aboutInfo = t.raw('about.info');

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto px-4 sm:px-0">
          <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">

            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">
                <FaBriefcase className="mr-2 text-xl" /> {t('tabs.experience')}
              </TabsTrigger>
              <TabsTrigger value="education">
                <FaGraduationCap className="mr-2 text-xl" /> {t('tabs.education')}
              </TabsTrigger>
              <TabsTrigger value="skills">
                <FaCode className="mr-2 text-xl" /> {t('tabs.skills')}
              </TabsTrigger>
              <TabsTrigger value="about">
                <FaUser className="mr-2 text-xl" /> {t('tabs.about')}
              </TabsTrigger>
            </TabsList>

            <div className="min-h-[70vh] w-full">

              {/* EXPERIENCIA */}
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{t('experience.title')}</h3>
                  <p className="max-w-[600px] text-text-muted mx-auto xl:mx-0 text-justify">
                    {t('experience.description')}
                  </p>
                  <ScrollArea className="h-[480px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 pr-4">
                      {experienceItems.map((item, index) => (
                        <li key={index} className="bg-[#1E293B] border border-transparent hover:border-accent/40 rounded-xl p-6 flex flex-col gap-2 transition-all duration-300 shadow-md hover:shadow-cyan-500/5 group">
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-accent text-sm font-semibold uppercase tracking-wider">{item.duration}</span>
                          </div>
                          <h3 className="text-xl font-bold leading-tight text-white group-hover:text-accent transition-colors">{item.position}</h3>
                          <div className="flex items-center gap-2 mb-4">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/80 font-medium">{item.company}</p>
                          </div>
                          <ul className="text-text-muted text-sm list-disc list-inside space-y-2 text-left">
                            {item.highlights.map((highlight, i) => (
                              <li key={i} className="leading-relaxed">{highlight}</li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* EDUCACIÓN */}
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{t('education.title')}</h3>
                  <p className="max-w-[600px] text-text-muted mx-auto xl:mx-0 text-justify">
                    {t('education.description')}
                  </p>
                  <ScrollArea className="h-[520px] pr-4">
                    <div className="space-y-10">
                      <div>
                        <h4 className="text-xl font-semibold mb-6 text-accent border-b border-accent/20 pb-2 inline-block">
                          {t('education.formal.title')}
                        </h4>
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          {formalItems.map((item, index) => (
                            <li key={index} className="bg-[#1E293B] border border-slate-800 hover:border-accent/40 p-6 rounded-xl flex flex-col justify-center gap-2 group relative transition-all duration-300">
                              {item.image && (
                                <div onClick={() => setSelectedImage(item.image)} className="absolute top-4 right-4 text-text-muted group-hover:text-accent transition-all cursor-pointer p-2 hover:bg-white/5 rounded-full">
                                  <FaSearchPlus size={18} />
                                </div>
                              )}
                              <span className="text-accent text-sm font-semibold uppercase">{item.duration}</span>
                              <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors pr-8">{item.degree}</h3>
                              <p className="text-text-muted text-sm">{item.institution}</p>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold mb-6 text-accent border-b border-accent/20 pb-2 inline-block">
                          {t('education.certifications.title')}
                        </h4>
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          {certificationItems.map((item, index) => (
                            <li key={index} onClick={() => setSelectedImage(item.image)} className="bg-[#1E293B] border border-slate-800 hover:border-accent/40 p-6 rounded-xl flex flex-col justify-center gap-2 group relative cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5">
                              <div className="absolute top-4 right-4 text-text-muted group-hover:text-accent transition-all">
                                <FaSearchPlus size={16} />
                              </div>
                              <span className="text-accent text-xs font-semibold uppercase">{item.duration}</span>
                              <h3 className="text-base font-bold text-white group-hover:text-accent transition-colors pr-6 leading-tight">{item.degree}</h3>
                              <p className="text-text-muted text-xs">{item.institution}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* SKILLS */}
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{t('skills.title')}</h3>
                  <p className="max-w-[800px] text-text-muted mx-auto xl:mx-0 text-justify">
                    {t('skills.description')}
                  </p>
                  <ScrollArea className="h-[480px] pr-4">
                    <div className="flex flex-col gap-10">
                      {skillCategories.map((category, idx) => (
                        <div key={idx}>
                          <h4 className="text-2xl font-semibold mb-6 text-white border-l-4 border-accent pl-4">
                            {category.nameKey}
                          </h4>
                          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            {category.skills.map((skill, index) => (
                              <li key={index}>
                                <TooltipProvider delayDuration={100}>
                                  <Tooltip>
                                    <TooltipTrigger className="w-full h-[120px] bg-[#1E293B] border border-transparent hover:border-accent rounded-xl flex flex-col justify-center items-center gap-4 group transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                                      <div className="text-5xl text-white group-hover:text-accent transition-all duration-300 group-hover:scale-110">
                                        {skill.icon}
                                      </div>
                                      <span className="text-text-muted group-hover:text-white text-sm font-medium transition-colors">
                                        {skill.name}
                                      </span>
                                    </TooltipTrigger>
                                    <TooltipContent className="bg-white text-primary border-none">
                                      <p className="font-semibold">{skill.name}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* ACERCA DE MÍ */}
              <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-4xl font-bold text-white">{t('about.title')}</h3>
                    <p className="max-w-[700px] text-text-muted mx-auto xl:mx-0 text-justify leading-relaxed text-base lg:text-lg">
                      {t('about.description')}
                    </p>
                  </div>

                  <div className="bg-[#1E293B] p-8 rounded-xl border border-slate-800 shadow-lg">
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-12">
                      {aboutInfo.map((item, index) => (
                        <li key={index} className="flex flex-col sm:flex-row items-center xl:items-start gap-2 sm:gap-4">
                          <span className="text-accent text-sm font-bold uppercase tracking-widest min-w-[100px] text-center sm:text-left xl:text-right">
                            {item.fieldName}
                          </span>
                          <span className="hidden sm:block text-white/20">|</span>
                          <span className="text-white text-base font-medium break-words text-center sm:text-left">
                            {item.fieldValue}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>

            </div>
          </Tabs>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
              className="relative flex justify-center items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Certificado"
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl border border-white/10"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 bg-white/10 hover:bg-accent text-white hover:text-primary rounded-full p-3 transition-all backdrop-blur-md"
              >
                <FaTimes size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default Resume;
