import { getTranslations, getLocale } from 'next-intl/server';
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

// Los PDF viven en /public con estos nombres.
const cvByLocale = {
  es: '/CV_Juan_Carlos_Gadea_ES.pdf',
  en: '/CV_Juan_Carlos_Gadea_EN.pdf',
  it: '/CV_Juan_Carlos_Gadea_IT.pdf',
};

const Home = async () => {
  const t = await getTranslations();
  const locale = await getLocale();
  const cvHref = cvByLocale[locale] ?? cvByLocale.en;
  const cvFileName = cvHref.replace('/', '');

  return (
    <section className="h-full">
      <div className="h-full px-4 lg:px-8">
        <div className="container mx-auto max-w-7xl h-full flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 gap-8 xl:gap-0">

          <div className="text-center xl:text-left order-2 xl:order-none lg:max-w-xl">

            {/* Disponibilidad: una línea, sin caja */}
            <div className="flex items-center justify-center xl:justify-start gap-2.5 mb-5 text-xs lg:text-[13px] uppercase tracking-widest text-text-muted">
              <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span>{t('home.availability')}</span>
            </div>

            {/* Posicionamiento: Data Engineer primero */}
            <div className="mb-6">
              <p className="text-xl lg:text-2xl text-text-muted font-medium tracking-wide">
                {t('home.specializations')}
              </p>
              <p className="mt-1 text-sm lg:text-base text-text-muted/80 tracking-wide">
                {t('home.secondaryRoles')}
              </p>
            </div>

            <h1 className="h1 text-text-primary mt-2 mb-6">
              {t('home.greeting')}
              <br />
              <span className="text-accent glow-text">
                Juan Carlos
                <br />
                Gadea
              </span>
            </h1>

            <p className="max-w-[550px] lg:max-w-[580px] mb-9 text-text-muted xl:text-left lg:text-lg leading-relaxed">
              {t.rich('home.description', {
                b: (chunks) => <span className="text-white font-medium">{chunks}</span>,
                c: (chunks) => <span className="text-white font-medium">{chunks}</span>,
                a: (chunks) => <span className="text-accent font-medium">{chunks}</span>,
              })}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-6">
              <a href={cvHref} download={cvFileName} aria-label={t('home.downloadCV')}>
                <Button variant="outline" size="lg" className="flex items-center gap-2">
                  <span>{t('home.downloadCV')}</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <div className="flex items-center gap-4">
                <div className="hidden sm:block w-px h-8 bg-white/10" />
                <Social
                  containerStyles="flex gap-4"
                  iconStyles="w-10 h-10 border border-accent/25 rounded-full flex justify-center items-center text-accent/80 text-base hover:bg-accent hover:text-primary hover:border-accent hover:shadow-[0_0_18px_rgba(34,211,238,0.45)] transition-all duration-400"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-4 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
      <Footer />
    </section>
  );
};

export default Home;