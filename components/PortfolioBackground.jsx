'use client';

import { motion } from 'framer-motion';

const PortfolioBackground = () => {
  return (
    // Cambiamos bg-[#1C1C22] por bg-primary
    <div className="fixed inset-0 w-full h-full -z-10 bg-primary overflow-hidden">
      
      {/* Capa 1: Nebulosa Cyan (Arriba Izquierda) */}
      <motion.div
        className="absolute top-[-30%] left-[-30%] w-[160%] h-[160%] rounded-full bg-gradient-to-tr from-accent/20 via-blue-900/10 to-transparent"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />

      {/* Capa 2: Profundidad Azul Oscuro (Abajo Derecha) */}
      <motion.div
        className="absolute bottom-[-30%] right-[-30%] w-[180%] h-[180%] rounded-full bg-gradient-to-bl from-blue-600/10 via-primary to-transparent"
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
      />

      {/* Overlay para unificar y reducir ruido visual */}
      <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
    </div>
  );
};

export default PortfolioBackground;