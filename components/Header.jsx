import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-6 xl:py-10 text-[#00e187] backdrop-blur-md bg-[#1C1C22]/90">
      <div className="container mx-auto flex justify-between items-center">
        {/*logo*/}
        <Link href="/">
          <h1 className="text-4xl font-semibold ">
            JCGadeaDev <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Nav & Hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          {/* CAMBIO AQUÍ: Se usa <a> con mailto: en lugar de <Link> */}
          <a href="mailto:jcgambeta89@gmail.com?subject=Propuesta%20de%20Trabajo%20desde%20tu%20Portafolio">
            <Button>Contáctame</Button>
          </a>
        </div>

        {/*Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
