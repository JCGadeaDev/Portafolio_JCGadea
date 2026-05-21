"use client";

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import { Link } from "@/i18n/navigation";
import { BsArrowUpRight } from "react-icons/bs";
import Footer from "@/components/Footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Services = () => {
  const t = useTranslations('services');
  const items = t.raw('items');

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-10 xl:mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10 bg-accent/40" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-accent/70 font-medium">
              {t('sectionLabel')}
            </span>
          </div>
          <h1 className="text-3xl xl:text-4xl font-bold text-white leading-tight">
            {t('heading')}{" "}
            <span className="text-accent">{t('headingAccent')}</span>
          </h1>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-10"
        >
          {items.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col gap-5 group glass-card rounded-2xl p-6 xl:p-8 hover:glass-card-accent transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer rounded-2xl pointer-events-none" />

              <div className="flex justify-between items-start">
                <span className="text-5xl font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all duration-500 leading-none">
                  {service.num}
                </span>
                <Link
                  href={service.href}
                  className="w-11 h-11 rounded-full border border-white/15 flex justify-center items-center text-text-muted group-hover:border-accent group-hover:text-accent group-hover:bg-accent/10 group-hover:shadow-[0_0_16px_rgba(34,211,238,0.25)] transition-all duration-500 hover:rotate-45"
                >
                  <BsArrowUpRight className="text-base" />
                </Link>
              </div>

              <h2 className="text-xl xl:text-2xl font-bold leading-snug text-white group-hover:text-accent transition-colors duration-500">
                {service.title}
              </h2>

              <div className="w-full h-px bg-white/8 group-hover:bg-accent/20 transition-colors duration-500" />

              <div className="flex-1">
                <p className="mb-4 text-text-muted leading-relaxed">{service.intro}</p>
                <ul className="space-y-3 text-sm">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-accent mt-0.5 shrink-0">▸</span>
                      <span className="text-text-muted">
                        <strong className="text-white font-medium">{bullet.label}</strong>{" "}
                        {bullet.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </section>
  );
};

export default Services;
