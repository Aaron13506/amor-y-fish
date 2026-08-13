// next-intl
import { useTranslations } from 'next-intl';

// react-icons
import { FaStar } from 'react-icons/fa';

// components
import Reveal from '@/components/common/Reveal';

// testimonials data
import testimonials from '@/data/testimonials.json';

// iniciales del nombre, p. ej. "Luz Marina Luna" -> "LM"
const initials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();

const Testimonials = () => {
  const t = useTranslations('Testimonials');
  return (
    <section className="mx-auto flex max-w-[95%] flex-col items-center gap-[32px] py-[48px]">
      <h2 className="sr-only">{t('title')}</h2>
      <div className="flex w-full flex-col items-center justify-evenly gap-[48px] md:flex-row md:items-start md:gap-[16px] xl:justify-center xl:gap-[48px]">
        {testimonials.map((testimonial, i) => (
          <Reveal
            key={i}
            effect={i === 0 ? 'fadeRTL' : i === 1 ? 'fadeIn' : 'fadeLTR'}
            delay={i === 1 ? 0 : 0.5}
          >
            <article className="mt-[-76px] flex max-w-full flex-col items-center justify-center md:max-w-[400px]">
              {/* monograma en vez de foto: son resenas de clientes reales y no
                tenemos su retrato, asi que no ponemos la cara de otra persona */}
              <div
                aria-hidden="true"
                className="relative z-[1] flex h-[150px] w-[150px] translate-y-1/2 select-none items-center justify-center rounded-full border-[1px] border-borderGray bg-bgGray text-[52px] leading-none text-accent"
              >
                {initials(t(`${testimonial.id}Name`))}
              </div>
              <div className="flex flex-col items-center justify-center gap-[28px] rounded-[32px] border-[1px] border-borderGray bg-bgDarkGray px-[42px] pb-[54px] pt-[96px]">
                <div className="flex flex-col items-center justify-center gap-[3px]">
                  <h3 className="text-[20px]">{t(`${testimonial.id}Name`)}</h3>
                  {/* la calificacion sale del dato de cada resena, no es fija */}
                  <div
                    role="img"
                    aria-label={t('rating', { rating: testimonial.rating })}
                    className="flex gap-[4px] text-[18px] text-[#e0b34d]"
                  >
                    {[...Array(testimonial.rating)].map((_, s) => (
                      <FaStar key={s} />
                    ))}
                  </div>
                </div>
                <p className="text-center text-[clamp(16px,4px_+_2vw,18px)] leading-[1.65]">
                  {t(`${testimonial.id}Testimonial`)}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="text-center text-[14px] text-white/50">{t('source')}</p>
    </section>
  );
};

export default Testimonials;
