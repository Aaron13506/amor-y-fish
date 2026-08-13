// next
import Image from 'next/image';

// next-intl
import { useTranslations } from 'next-intl';

const MenuHeader = ({
  dataId,
  headerImage,
}: {
  dataId: string;
  headerImage: string;
}) => {
  const t = useTranslations('Menu');
  return (
    <div className="relative flex h-[150px] items-center justify-center overflow-hidden rounded-[32px] border-[1px] border-borderGray px-[20px] text-[clamp(42px,18px_+_2.2vw,56px)] md:h-[240px]">
      <Image
        src={headerImage}
        alt={t(`${dataId}Title`)}
        fill
        sizes="(max-width: 480px) 100vw,(max-width: 768px) 50vw, 20vw"
        className="h-full w-full object-cover"
      />
      {/* mas oscuro en el centro, donde va el titulo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/65 to-black/45" />
      <h3 className="relative text-center drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
        {t(`${dataId}Title`)}
      </h3>
    </div>
  );
};

export default MenuHeader;
