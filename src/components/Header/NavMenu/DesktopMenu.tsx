// next-intl
import { useTranslations } from 'next-intl';

// clsx
import clsx from 'clsx';

// components
import OrderButton from './OrderButton';

// hover style
import { navHover } from '@/styles/navHover';

// menu items data
import navigationMenu from '@/data/navigation-menu.json';

// OCULTO TEMPORALMENTE: se quita el enlace a la carta mientras la seccion esta
// comentada en page.tsx, si no el ancla #menu no lleva a ninguna parte.
// Para reactivar: borrar esta linea y volver a importar el json como `menu`.
const menu = navigationMenu.filter((item) => item !== 'menu');

const DesktopMenu = () => {
  const t = useTranslations('NavMenu');
  return (
    <nav className="hidden md:block">
      <h2 className="sr-only">{t('navigationMenu')}</h2>
      <ul className="flex gap-4">
        {menu.map((item, i) => (
          <li key={i} className="flex items-center justify-center gap-4">
            <a
              href={`#${item}`}
              className={clsx(
                'relative transition-all duration-300 will-change-transform hover:scale-110 hover:text-accent',
                navHover,
              )}
            >
              {t(item)}
            </a>
            <div className="aspect-square w-2 select-none rounded-full bg-accent" />
          </li>
        ))}
        <li>
          <OrderButton />
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
