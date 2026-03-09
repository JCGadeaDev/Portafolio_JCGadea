'use client';

import { motion } from 'framer-motion';

const PortfolioBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-primary overflow-hidden">

      {/* ── Dot grid texture ── */}
      <div className="absolute inset-0 dot-grid opacity-100" />

      {/* ── Capa 1: Nebulosa Cyan (Arriba Izquierda) ── */}
      <motion.div
        className="absolute top-[-20%] left-[-20%] w-[120%] h-[120%] rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(34,211,238,0.12) 0%, rgba(6,182,212,0.05) 35%, transparent 70%)',
        }}
        initial={{ rotate: 0, scale: 1 }}
        animate={{ rotate: 360, scale: [1, 1.04, 1] }}
        transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
      />

      {/* ── Capa 2: Profundidad Azul (Abajo Derecha) ── */}
      <motion.div
        className="absolute bottom-[-20%] right-[-20%] w-[130%] h-[130%] rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.1) 0%, rgba(30,58,138,0.06) 40%, transparent 70%)',
        }}
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
      />

      {/* ── Capa 3: Glow central sutil ── */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(34,211,238,0.04) 0%, transparent 65%)',
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Decoración esquina superior derecha ── */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] pointer-events-none">
        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-10">
          <path d="M 300 0 L 300 120 M 300 0 L 180 0" stroke="#22D3EE" strokeWidth="1" />
          <path d="M 300 0 L 300 80 M 300 0 L 220 0" stroke="#22D3EE" strokeWidth="0.5" strokeDasharray="4 6" />
          <circle cx="300" cy="0" r="3" fill="#22D3EE" />
        </svg>
      </div>

      {/* ── Decoración esquina inferior izquierda ── */}
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-8">
          <path d="M 0 200 L 0 80 M 0 200 L 120 200" stroke="#22D3EE" strokeWidth="1" />
          <circle cx="0" cy="200" r="2.5" fill="#22D3EE" />
        </svg>
      </div>

      {/* ── Overlay unificador ── */}
      <div className="absolute inset-0 bg-primary/30" />

    </div>
  );
};

export default PortfolioBackground;
