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

const siteUrl = 'https://portafolio.jcgadeadev.com';

const title = 'Juan Carlos Gadea | Data Engineer & Full Stack Developer';
const description =
  'Ingeniero de datos y desarrollador full stack. Diseño pipelines ETL/ELT y arquitecturas cloud, y construyo aplicaciones con .NET, Angular, React y Next.js sobre Azure y AWS. Python, SQL y Power BI para analítica. Roma, remoto e híbrido.';
export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
 keywords: [
  'Data Engineer',
  'Full Stack Developer',
  'Solutions Architect',
  'Cloud Architecture',
  'ETL',
  'Python',
  'SQL',
  'Power BI',
  '.NET',
  'Angular',
  'React',
  'Next.js',
  'Azure',
  'AWS',
],
  authors: [{ name: 'Juan Carlos Gadea Brenes', url: 'https://jcgadeadev.com' }],
  creator: 'Juan Carlos Gadea Brenes',
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Juan Carlos Gadea',
    title,
    description,
    locale: 'es_ES',
    alternateLocale: ['en_US', 'it_IT'],
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Juan Carlos Gadea – Data Engineer & Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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