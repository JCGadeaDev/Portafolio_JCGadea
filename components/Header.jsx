import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = async () => {
  const t = await getTranslations('nav');

  return (
    <header className="sticky top-0 z-40 py-5 xl:py-7 text-white glass-header border-b border-accent/10">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="group flex items-center gap-1">
          <span className="text-accent/50 font-mono text-lg font-light select-none transition-colors duration-300 group-hover:text-accent/80">
            &lt;
          </span>
          <h1 className="text-xl xl:text-2xl font-semibold tracking-tight transition-colors duration-300">
            JCGadeaDev
          </h1>
          <span className="text-accent text-2xl xl:text-3xl font-bold leading-none transition-all duration-300 group-hover:glow-text">
            .
          </span>
          <span className="text-accent/50 font-mono text-lg font-light select-none transition-colors duration-300 group-hover:text-accent/80">
            /&gt;
          </span>
        </Link>

        <div className="hidden xl:flex items-center gap-6">
          <Nav />
          <LanguageSwitcher />
          <a href="mailto:jcgambeta89@gmail.com?subject=Propuesta%20de%20Trabajo%20desde%20tu%20Portafolio">
            <Button className="glow-accent-sm hover:glow-accent transition-all duration-300">
              {t('hire')}
            </Button>
          </a>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
