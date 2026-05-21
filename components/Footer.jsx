"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Social from "./Social";

const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-accent/10 mt-6 py-6 w-full">
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent -translate-y-6" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <span className="text-accent/50 font-mono text-xs">&lt;/&gt;</span>
            <span>
              © 2026{" "}
              <Link href="/" className="text-text-primary font-semibold hover:text-accent transition-colors duration-300">
                JCGadeaDev
              </Link>
              {" "}— {t('rights')}
            </span>
          </div>

          <Social
            containerStyles="flex gap-4"
            iconStyles="w-8 h-8 border border-white/10 rounded-lg flex justify-center items-center text-text-muted text-sm hover:border-accent/50 hover:text-accent hover:bg-accent/5 transition-all duration-300"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
