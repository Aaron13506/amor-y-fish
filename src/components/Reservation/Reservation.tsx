// next-intl
import { useTranslations } from 'next-intl';

// react-icons
import { FaShoppingBag } from 'react-icons/fa';

// components
import Reveal from '@/components/common/Reveal';

// phone number
import phone from '@/data/phone.json';

// links
import links from '@/data/links.json';

const Reservation = () => {
  const t = useTranslations('Reservation');
  return (
    <section
      id="reservation"
      className="flex flex-col items-center justify-center gap-[48px] py-[48px] md:py-[96px]"
    >
      <h2 className="text-[clamp(40px,20px_+_3vw,60px)] text-accent">
        {t('title')}
      </h2>
      <Reveal
        effect="fadeBTTS"
        className="flex w-[1296px] max-w-[95%] flex-col items-center justify-center gap-[32px] rounded-[32px] border-[1px] border-borderGray bg-bgDarkGray px-[16px] py-[48px] md:px-[48px] lg:py-[64px]"
      >
        <p className="max-w-[820px] text-center text-[clamp(18px,6px_+_1vw,22px)] leading-[1.65]">
          {t('description')}
        </p>
        <a
          href={links.onlineOrder}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 rounded-[32px] bg-accent px-[32px] py-[10px] text-[clamp(24px,2px_+_3vw,42px)] transition-all duration-300 hover:bg-white hover:text-black"
        >
          <FaShoppingBag aria-hidden="true" className="text-[0.8em]" />
          {t('buttonText')}
        </a>
        <div className="flex flex-col items-center justify-center gap-1 leading-[1]">
          <p className="text-[clamp(18px,4px_+_1.5vw,22px)] text-white/70">
            {t('phoneTitle')}
          </p>
          <p className="text-[clamp(28px,16px_+_2vw,42px)]">
            {phone.phoneNumber}
          </p>
        </div>
      </Reveal>
    </section>
  );
};

export default Reservation;
