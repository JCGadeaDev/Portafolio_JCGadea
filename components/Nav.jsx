"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "inicio",
    path: "/",
  },
  {
    name: "servicios",
    path: "/services",
  },
  {
    name: "sobre mí",
    path: "/resume",
  },
  {
    name: "proyectos",
    path: "/work",
  },
  {
    name: "contacto",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
   return (
        <nav className="hidden md:flex gap-10 text-lg font-semibold capitalize">
            {links.map((link, index) => (
                <Link
                    href={link.path}
                    key={index}
                    className={`relative pb-1 transition-all duration-300 ${
                        pathname === link.path
                            ? "text-accent"  // Usamos la variable accent
                            : "text-text-muted hover:text-white" // Usamos slate gray y blanco al hover
                    }`}
                >
                    {link.name}
                    {/* Underline effect */}
                    <span
                        className={`absolute left-0 bottom-0 h-0.5 w-full bg-accent transform transition-transform duration-300 ${
                            pathname === link.path ? "scale-x-100" : "scale-x-0"
                        } hover:scale-x-100 origin-left`}
                    />
                </Link>
            ))}
        </nav>
    );
};
export default Nav;