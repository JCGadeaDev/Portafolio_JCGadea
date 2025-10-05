"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button"; // <-- 1. Importar el componente Button

const links = [
  { name: "inicio", path: "/" },
  { name: "servicios", path: "/services" },
  { name: "sobre mí", path: "/resume" },
  { name: "proyectos", path: "/work" },
  { name: "contacto", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        {/* Accessibility */}
        <VisuallyHidden>
          <DialogTitle>Mobile navigation menu</DialogTitle>
          <DialogDescription>
            This dialog contains navigation links for mobile users.
          </DialogDescription>
        </VisuallyHidden>

        {/* Logo */}
        <div className="mt-32 mb-20 text-center text-2xl"> {/* Reducido el margen inferior */}
          <Link href="/" onClick={handleLinkClick}>
            <h1 className="text-4xl font-semibold">
              JCGadeaDev <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              onClick={handleLinkClick}
              className={`${
                link.path === pathname
                  ? "text-accent border-b-2 border-accent"
                  : ""
              } text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* 2. Añadir el botón "Contratar" aquí abajo */}
        <a
          href="mailto:jcgambeta89@gmail.com?subject=Propuesta%20de%20Trabajo%20desde%20tu%20Portafolio"
          className="mt-12 text-center" // Añadido margen superior
          onClick={handleLinkClick} // Para cerrar el menú al hacer clic
        >
          <Button>Contáctame</Button>
        </a>

      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;