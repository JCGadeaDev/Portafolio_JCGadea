"use client";

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';

const Nav = () => {
  const t = useTranslations('nav');
  const pathname = usePathname();

  const links = [
    { name: t('home'),     path: "/" },
    { name: t('services'), path: "/services" },
    { name: t('resume'),   path: "/resume" },
    { name: t('work'),     path: "/work" },
    { name: t('contact'),  path: "/contact" },
  ];

  return (
    <nav className="hidden md:flex gap-5 text-xs font-semibold uppercase tracking-wide">
      {links.map((link, index) => {
        const isActive = pathname === link.path;
        return (
          <Link
            href={link.path}
            key={index}
            className={`relative pb-1.5 whitespace-nowrap transition-all duration-300 ${
              isActive ? "text-accent glow-text-sm" : "text-text-muted hover:text-white"
            }`}
          >
            <span className={`text-[10px] font-light mr-1 transition-opacity duration-300 ${
              isActive ? "text-accent/70 opacity-100" : "opacity-0"
            }`}>
              {String(index + 1).padStart(2, "0")}
            </span>

            {link.name}

            <span
              className={`absolute left-0 bottom-0 h-px bg-gradient-to-r from-accent to-accent/40 transform transition-all duration-400 origin-left ${
                isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100"
              }`}
              style={{ width: "100%" }}
            />

            {isActive && (
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent animate-pulse-glow" />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
