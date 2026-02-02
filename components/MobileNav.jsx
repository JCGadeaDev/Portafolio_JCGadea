"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";

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
        {/* El icono de hamburguesa toma el color Cyan */}
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      {/* IMPORTANTE: Agregamos 'bg-primary' para que el fondo del menú sea azul oscuro */}
      <SheetContent className="flex flex-col bg-primary border-r border-slate-800">
        <VisuallyHidden>
          <DialogTitle>Mobile navigation menu</DialogTitle>
          <DialogDescription>
            This dialog contains navigation links for mobile users.
          </DialogDescription>
        </VisuallyHidden>

        {/* Logo */}
        <div className="mt-32 mb-20 text-center text-2xl">
          <Link href="/" onClick={handleLinkClick}>
            <h1 className="text-4xl font-semibold text-text-primary">
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
                  : "text-text-primary hover:text-accent"
              } text-xl capitalize transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Botón Contratar */}
        <a
          href="mailto:jcgambeta89@gmail.com?subject=Propuesta%20de%20Trabajo%20desde%20tu%20Portafolio"
          className="mt-12 text-center"
          onClick={handleLinkClick}
        >
          {/* Asegúrate de que tu componente Button soporte variantes o tenga clases por defecto compatibles */}
          <Button className="bg-accent text-primary hover:bg-accent/80">Contáctame</Button>
        </a>

      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;