import { motion } from "framer-motion";

//variants
const stairAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] },
};

const reverseIndex = (index) => {
  const totalSteps = 6; 
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            // OPCIÓN A: Estilo Tech Agresivo (Barrido Cyan) -> className="h-full w-full bg-accent relative"
            // OPCIÓN B: Estilo Sutil (Barrido semitransparente) -> className="h-full w-full bg-white/10 relative"
            // Vamos con la Opción B para no saturar, pero si quieres impacto, usa bg-accent
            className="h-full w-full bg-white/10 relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;