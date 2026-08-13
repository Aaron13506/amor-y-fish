// next-intl
import { useTranslations } from 'next-intl';

// react-icons
import { FaShoppingBag } from 'react-icons/fa';

// clsx
import clsx from 'clsx';

// links
import links from '@/data/links.json';

const OrderButton = ({ className }: { className?: string }) => {
  const t = useTranslations('NavMenu');
  return (
    <a
      href={links.onlineOrder}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        'flex items-center justify-center gap-2 rounded-[32px] bg-accent px-4 py-[3px] transition-all duration-300 hover:bg-white hover:text-black md:px-6',
        className,
      )}
    >
      <FaShoppingBag aria-hidden="true" className="text-[0.85em]" />
      {t('order')}
    </a>
  );
};

export default OrderButton;
