import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 py-5 xl:py-7 text-white glass-header border-b border-accent/10">
      {/* Línea de acento inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-1">
          <span className="text-accent/50 font-mono text-lg font-light select-none transition-colors duration-300 group-hover:text-accent/80">
            &lt;
          </span>
          <h1 className="text-2xl xl:text-3xl font-semibold tracking-tight transition-colors duration-300">
            JCGadeaDev
          </h1>
          <span className="text-accent text-3xl xl:text-4xl font-bold leading-none transition-all duration-300 group-hover:glow-text">
            .
          </span>
          <span className="text-accent/50 font-mono text-lg font-light select-none transition-colors duration-300 group-hover:text-accent/80">
            /&gt;
          </span>
        </Link>

        {/* Desktop Nav & Hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <a href="mailto:jcgambeta89@gmail.com?subject=Propuesta%20de%20Trabajo%20desde%20tu%20Portafolio">
            <Button className="glow-accent-sm hover:glow-accent transition-all duration-300">
              Contáctame
            </Button>
          </a>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
