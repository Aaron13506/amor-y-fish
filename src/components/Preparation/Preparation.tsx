// next
import Image from 'next/image';

// next-intl
import { useTranslations } from 'next-intl';

// components
import Reveal from '../common/Reveal';

const Preparation = () => {
  const t = useTranslations('Preparation');
  return (
    <section className="relative flex h-[360px] w-full items-center justify-center overflow-hidden sm:h-[420px] md:h-screen">
      <h2 className="sr-only">{t('title')}</h2>
      <Image
        src="/images/preparation/bg.jpg"
        alt="Background"
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover object-left"
      />
      {/* movil: la foto no deja hueco libre, asi que va velo parejo y texto centrado */}
      <div aria-hidden="true" className="absolute inset-0 bg-black/60 md:hidden" />
      {/* escritorio: solo se oscurece la derecha, donde cae el texto */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-gradient-to-l from-black/80 via-black/40 to-transparent md:block"
      />
      <div className="relative h-full w-[1296px] max-w-[95%]">
        <Reveal className="absolute inset-x-0 top-1/2 -translate-y-1/2 rounded-[32px] p-2 md:inset-x-auto md:right-[5%] md:max-w-[46%] md:bg-black/10 md:p-[48px] lg:right-0">
          <p className="text-center text-[clamp(17px,2px_+_3vw,50px)] leading-[1.5] drop-shadow-md md:leading-normal">
            {t('preparation')}
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Preparation;
