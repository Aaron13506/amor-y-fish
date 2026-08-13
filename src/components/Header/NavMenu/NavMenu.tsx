// react
import { useEffect, useState } from 'react';

// next-intl
import { useTranslations } from 'next-intl';

// framer-motion
import { AnimatePresence } from 'framer-motion';

// hamburger-react
import Hamburger from 'hamburger-react';

// components
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import OrderButton from './OrderButton';

const NavMenu = () => {
  const t = useTranslations('Header');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      window.scrollTo({ top: 0 });
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMobileMenuOpen]);
  return (
    <>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen} />
        )}
      </AnimatePresence>
      <div className="fixed top-0 z-40 flex min-h-[42px] w-full items-center justify-between bg-black/70 px-4 text-[clamp(1rem,2vw,1.5rem)] text-white backdrop-blur-sm md:min-h-[64px] md:justify-end md:px-8 2xl:px-12">
        <div className="z-10 md:hidden">
          <Hamburger
            onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            toggled={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            label={t('hamburgerMenu')}
          />
        </div>
        <OrderButton className="md:hidden" />
        <DesktopMenu />
      </div>
    </>
  );
};

export default NavMenu;
