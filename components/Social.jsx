import Link from "next/link";
// Importamos un icono más específico para el transcript
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { TbDatabase } from 'react-icons/tb';
import { LuGraduationCap } from "react-icons/lu"; // Ejemplo de un icono alternativo

// Array actualizado: más descriptivo y estratégico
const socials = [
  { 
    icon: <FaGithub />, 
    path: "https://github.com/JCGadeaDev", 
    name: "GitHub" 
  },
  { 
    icon: <FaLinkedin />, 
    path: "https://www.linkedin.com/in/jcgadeadev/", 
    name: "LinkedIn" 
  },
  { 
    icon: <LuGraduationCap />, // Usamos un icono más claro
    path: "https://learn.microsoft.com/en-us/users/juancarlosgadeabrenes-1265/transcript/763egb11l18o6rp?WT.mc_id=ilt_partner_webpage_wwl&ocid=996468&source=learn&redeem=6ZV32N", 
    name: "Microsoft Learn Transcript" 
  },
  { 
    icon: <TbDatabase />, 
    path: "https://www.datascienceportfol.io/jcgambeta89", 
    name: "Portafolio de Data Science" 
  },
  { 
    icon: <FaWhatsapp />, // Icono de WhatsApp
    path: "https://wa.me/50585785399", // CAMBIO IMPORTANTE: Enlace directo a WhatsApp
    name: "WhatsApp" 
  },
  // El enlace a Google Drive se ha eliminado. Su contenido ahora debería vivir
  // en una sección dedicada de "Certificaciones" o "Formación" en tu web.
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link 
            key={index} 
            href={item.path} 
            className={iconStyles} 
            target="_blank"
            rel="noopener noreferrer" // Buena práctica para seguridad y SEO
            title={item.name} // <-- ¡Aquí está la magia del tooltip!
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  )
}

export default Social;