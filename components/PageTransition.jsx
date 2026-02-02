"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        {/* Capa de transición simple
           Añadido 'z-50' para cubrir el Header durante la carga inicial 
           o cambio de ruta.
        */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none z-50"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;