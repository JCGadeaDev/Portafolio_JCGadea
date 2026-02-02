"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          {/* CAMBIO IMPORTANTE: 'z-50' 
             Esto asegura que las escaleras (Stairs) pasen por encima 
             de tu Navbar y del contenido.
          */}
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-50 flex">
            <Stairs />
          </div>

          {/* Fondo de transición (Fade out)
             Usa 'bg-primary' para mantener la coherencia con el tema oscuro.
             También le damos un z-index alto para limpiar la vista.
          */}
          <motion.div
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none z-40"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
            }}
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;