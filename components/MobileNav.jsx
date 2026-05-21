"use client";

import { useState } from "react";
import { useTranslations } from 'next-intl';
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Link, usePathname } from '@/i18n/navigation';
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";
import LanguageSwitcher from "./LanguageSwitcher";

const MobileNav = () => {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { name: t('home'),     path: "/" },
    { name: t('services'), path: "/services" },
    { name: t('resume'),   path: "/resume" },
    { name: t('work'),     path: "/work" },
    { name: t('contact'),  path: "/contact" },
  ];

  const handleLinkClick = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center p-1 rounded-lg hover:bg-accent/10 transition-colors duration-200">
        <CiMenuFries className="text-[28px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col bg-primary border-l border-accent/10">
        <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />
        <div className="absolute inset-0 bg-primary/60 pointer-events-none" />

        <VisuallyHidden>
          <DialogTitle>Mobile navigation menu</DialogTitle>
          <DialogDescription>Navigation links for mobile users.</DialogDescription>
        </VisuallyHidden>

        <div className="relative mt-24 mb-16 text-center">
          <Link href="/" onClick={handleLinkClick} className="group inline-flex items-center justify-center gap-1">
            <span className="text-accent/50 font-mono text-sm select-none">&lt;</span>
            <h1 className="text-3xl font-semibold text-text-primary">JCGadeaDev</h1>
            <span className="text-accent text-4xl font-bold leading-none">.</span>
            <span className="text-accent/50 font-mono text-sm select-none">/&gt;</span>
          </Link>
          <div className="mt-6 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />
        </div>

        <nav className="relative flex flex-col items-center gap-2 px-6">
          {links.map((link, index) => {
            const isActive = link.path === pathname;
            return (
              <Link
                href={link.path}
                key={index}
                onClick={handleLinkClick}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium uppercase tracking-widest transition-all duration-300 ${
                  isActive
                    ? "text-accent bg-accent/8 border border-accent/20"
                    : "text-text-muted hover:text-white hover:bg-white/4 border border-transparent"
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="relative mt-6 px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent mb-4" />
          <div className="flex justify-center">
            <LanguageSwitcher />
          </div>
        </div>

        <div className="relative mt-auto mb-8 px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent mb-6" />
          <a
            href="mailto:jcgambeta89@gmail.com?subject=Propuesta%20de%20Trabajo%20desde%20tu%20Portafolio"
            onClick={handleLinkClick}
            className="block"
          >
            <Button className="w-full glow-accent-sm">{t('hire')}</Button>
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
