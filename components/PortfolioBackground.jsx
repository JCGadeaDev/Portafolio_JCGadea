'use client';

import { motion } from 'framer-motion';

const NicCodersBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-[#1C1C22] overflow-hidden">
      {/* Capa 1: ondulación lime diagonal */}
      <motion.div
        className="absolute top-[-30%] left-[-30%] w-[160%] h-[160%] rounded-full bg-gradient-to-tr from-[#00e187]/30 via-transparent to-transparent"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />

      {/* Capa 2: ondulación amarilla suave al otro lado */}
      <motion.div
        className="absolute bottom-[-30%] right-[-30%] w-[180%] h-[180%] rounded-full bg-gradient-to-bl from-[#00ff99]/20 via-transparent to-transparent"
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
      />

      {/* Overlay glassmorphism para suavizar */}
      <div className="absolute inset-0 bg-[#1C1C22]/60 backdrop-blur-md" />
    </div>
  );
};

export default NicCodersBackground;