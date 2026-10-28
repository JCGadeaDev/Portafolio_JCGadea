"use client";

import CountUp from "react-countup";
import { useTranslations } from "next-intl";

const Stats = () => {
  const t = useTranslations("stats");

  const stats = [
    { num: 5,  suffix: "+", label: t("experience"), detail: t("experienceDetail") },
    { num: 12, suffix: "+",  label: t("projects"),   detail: t("projectsDetail") },
    { num: 40, suffix: "+", label: t("learning"),   detail: t("learningDetail") },
    { num: 3,  suffix: "",  label: t("languages"),  detail: t("languagesDetail") },
  ];

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        {/* gap-px sobre fondo translúcido = divisores finos entre celdas */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-px max-w-[80vw] mx-auto xl:max-w-none rounded-2xl overflow-hidden border border-white/10 bg-white/10">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col gap-3 px-5 py-5 xl:px-8 xl:py-7 bg-secondary hover:bg-secondary/80 transition-colors duration-300"
            >
              <span className="text-[10px] xl:text-xs uppercase tracking-[0.2em] text-accent/80 font-medium">
                {item.label}
              </span>

              <div className="flex items-baseline gap-1">
                <CountUp
                  end={item.num}
                  duration={2}
                  enableScrollSpy
                  scrollSpyOnce
                  className="text-4xl xl:text-5xl font-bold text-white tabular-nums leading-none"
                />
                {item.suffix && (
                  <span className="text-2xl xl:text-3xl font-bold text-accent leading-none">
                    {item.suffix}
                  </span>
                )}
              </div>

              <p className="text-xs xl:text-[13px] text-text-muted leading-snug">
                {item.detail}
              </p>

              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;