"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 40,
    text: "Mejora en Perfomance Web (%)",
    isPercentage: true,
  },
  {
    num: 50,
    text: "Procesos automatizados",
    isPercentage: false,
  },
  {
    num: 15,
    text: "Clientes Impulsados",
    isPercentage: false,
  },
  {
    num: 5,
    text: "Años de Experiencia",
    isPercentage: false,
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <div className="flex items-end">
                  <CountUp
                    end={item.num}
                    duration={5}
                    delay={2}
                    className="text-4xl xl:text-6xl font-extrabold text-text-primary"
                  />
                  {/* Símbolo en Cyan */}
                  <span className="text-4xl xl:text-6xl font-extrabold text-accent">
                    {item.isPercentage ? "%" : "+"}
                  </span>
                </div>
                {/* Texto descriptivo en Slate Gray */}
                <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-text-muted`}>
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;