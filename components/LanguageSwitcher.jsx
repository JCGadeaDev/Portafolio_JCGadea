"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useTransition } from 'react';

const locales = [
  { code: 'es', countryCode: 'es', label: 'ES' },
  { code: 'en', countryCode: 'gb', label: 'EN' },
  { code: 'it', countryCode: 'it', label: 'IT' },
];

const LanguageSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (nextLocale) => {
    if (nextLocale === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div
      role="group"
      aria-label="Language selector"
      className="flex items-center p-0.5 rounded-xl border border-white/[0.07] bg-primary/80 backdrop-blur-md gap-0.5"
      style={{ opacity: isPending ? 0.5 : 1, transition: 'opacity 300ms ease' }}
    >
      {locales.map(({ code, countryCode, label }) => {
        const isActive = locale === code;
        return (
          <button
            key={code}
            onClick={() => switchLocale(code)}
            disabled={isPending}
            aria-label={`Switch to ${label}`}
            aria-pressed={isActive}
            className={`
              relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg
              text-[11px] font-bold tracking-wider font-mono
              transition-all duration-200 select-none cursor-pointer
              ${isActive
                ? 'text-accent bg-accent/10 border border-accent/25 shadow-[0_0_10px_rgba(34,211,238,0.12)]'
                : 'text-text-muted hover:text-white border border-transparent hover:bg-white/5'
              }
            `}
          >
            <span
              className={`fi fi-${countryCode} fis rounded-sm`}
              style={{ width: '1.1em', height: '1.1em', fontSize: '14px' }}
            />
            <span>{label}</span>
            {isActive && (
              <span className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-4 h-px bg-accent/50 rounded-full" />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
