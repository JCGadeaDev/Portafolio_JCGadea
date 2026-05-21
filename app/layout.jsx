import { JetBrains_Mono } from "next/font/google";
import { getLocale } from 'next-intl/server';
import "./globals.css";

import StairTransition from '@/components/StairTransition';
import PortfolioBackground from '@/components/PortfolioBackground';
import { SpeedInsights } from '@vercel/speed-insights/next';

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

export const metadata = {
  title: 'Juan Carlos Gadea | Full Stack Developer & Data Analyst',
  description: 'Professional portfolio of Juan Carlos Gadea, specialist in web development (React, Next.js), data analytics, SEO and project management.',
};

export default async function RootLayout({ children }) {
  let locale = 'es';
  try { locale = await getLocale(); } catch {}
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={jetbrainsMono.variable} suppressHydrationWarning>
        <PortfolioBackground />
        <StairTransition />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
