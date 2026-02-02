import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { TbDatabase } from 'react-icons/tb';
import { LuGraduationCap } from "react-icons/lu";

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
    icon: <LuGraduationCap />, 
    path: "https://learn.microsoft.com/en-us/users/juancarlosgadeabrenes-1265/transcript/763egb11l18o6rp?WT.mc_id=ilt_partner_webpage_wwl&ocid=996468&source=learn&redeem=6ZV32N", 
    name: "Microsoft Learn Transcript" 
  },
  { 
    icon: <TbDatabase />, 
    path: "https://www.datascienceportfol.io/jcgambeta89", 
    name: "Portafolio de Data Science" 
  },
  { 
    icon: <FaWhatsapp />, 
    path: "https://wa.me/50585785399", 
    name: "WhatsApp" 
  },
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
            rel="noopener noreferrer"
            title={item.name}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  )
}

export default Social;