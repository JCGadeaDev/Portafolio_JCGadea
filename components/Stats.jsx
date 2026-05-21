"use client";

import CountUp from "react-countup";
import { useTranslations } from 'next-intl';

const Stats = () => {
  const t = useTranslations('stats');

  const stats = [
    { num: 40, suffix: "%", text: t('performance'), isPercentage: true },
    { num: 50, suffix: "+", text: t('automation'),  isPercentage: false },
    { num: 15, suffix: "+", text: t('clients'),     isPercentage: false },
    { num: 5,  suffix: "+", text: t('experience'),  isPercentage: false },
  ];

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col gap-2 items-center xl:items-start justify-center px-6 py-7 xl:py-8 rounded-xl overflow-hidden group transition-all duration-500 bg-secondary/40 border border-white/5 hover:border-accent/30 hover:bg-secondary/60 backdrop-blur-sm"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/70 transition-all duration-700" />

              <div className="absolute -right-1 -bottom-3 font-black text-[72px] leading-none text-white/[0.028] select-none pointer-events-none tabular-nums group-hover:text-accent/[0.045] transition-colors duration-500">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="flex items-baseline gap-0.5 relative z-10">
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-5xl font-black text-white tabular-nums leading-none"
                />
                <span className="text-xl xl:text-2xl font-black text-accent leading-none pb-0.5">
                  {item.isPercentage ? "%" : "+"}
                </span>
              </div>

              <p className="text-[10px] xl:text-xs uppercase tracking-widest text-text-muted font-medium leading-snug max-w-[110px] xl:max-w-none text-center xl:text-left relative z-10">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
