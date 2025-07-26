import Link from "next/link";
import { FaGithub, FaLinkedin, FaGoogleDrive, FaMicrosoft  } from "react-icons/fa";
import {TbDatabase} from 'react-icons/tb';


const socials = [
  {icon: <FaGithub/>, path: "https://github.com/JCGadeaDev"},
  {icon: <FaLinkedin/>, path: "https://www.linkedin.com/in/juan-carlos-gadea-brenes-53b75411a/"},
  { icon: <FaMicrosoft />, path: "https://learn.microsoft.com/en-us/users/juancarlosgadeabrenes-1265/transcript/763egb11l18o6rp" },
  { icon: <TbDatabase />, path: "https://www.datascienceportfol.io/jcgambeta89" },
  { icon: <FaGoogleDrive />, path: "https://drive.google.com/drive/folders/1hsui76meM2trs6x3N4vc829nTxyJZPLd" },
];

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index)=>{
        return (
          <Link key={index} href={item.path} className={iconStyles}  target="_blank">
          {item.icon}
        </Link>
        );
      })}
    </div>
  )
}

export default Social