"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}
        className="relative flex justify-center items-center"
      >
        {/* ── Glow halo detrás de la foto ── */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] xl:w-[440px] h-[260px] xl:h-[440px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(34,211,238,0.18) 0%, rgba(34,211,238,0.06) 45%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.06, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ── Imagen circular ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" } }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden"
          style={{
            boxShadow: '0 0 0 2px rgba(34,211,238,0.1), 0 0 40px rgba(34,211,238,0.08)',
          }}
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            sizes="(max-width: 1280px) 298px, 498px"
            alt="Juan Carlos Gadea"
            className="object-cover"
          />
        </motion.div>

        {/* ── Círculo giratorio exterior (principal) ── */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] relative z-10"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#22D3EE"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.svg>

        {/* ── Círculo interior decorativo (más lento, dirección opuesta) ── */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-30"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="232"
            stroke="#22D3EE"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="6 18"
            animate={{ rotate: [-360, 0] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
