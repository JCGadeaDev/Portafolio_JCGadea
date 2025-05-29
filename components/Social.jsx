import Link from "next/link";
import { FaGithub, FaLinkedin  } from "react-icons/fa";

const socials = [
  {icon: <FaGithub/>, path: "https://github.com/JCGadeaDev"},
  {icon: <FaLinkedin/>, path: "https://www.linkedin.com/in/juan-carlos-gadea-brenes-53b75411a/"},
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