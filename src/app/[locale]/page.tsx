'use client';

// next
import dynamic from 'next/dynamic';

// loading component
import Loading from '@/components/common/Loading';
const loading = () => <Loading />;

// components / sections
import Header from '@/components/Header/Header';
const ScrollToTop = dynamic(() => import('@/components/common/ScrollToTop'));
const SushiTypes = dynamic(() => import('@/components/SushiTypes/SushiTypes'), {
  loading,
});
const Preparation = dynamic(
  () => import('@/components/Preparation/Preparation'),
  {
    loading,
  },
);
// OCULTO TEMPORALMENTE: la carta se muestra de nuevo cuando se corrijan los
// precios duplicados en OlaClick. Para reactivarla, descomentar esto y el
// <Menu /> de abajo, y la entrada "menu" en DesktopMenu/MobileMenu.
// const Menu = dynamic(() => import('@/components/Menu/Menu'), {
//   loading,
// });
const Testimonials = dynamic(
  () => import('@/components/Testimonials/Testimonials'),
  {
    loading,
  },
);
const Atmosphere = dynamic(() => import('@/components/Atmosphere/Atmosphere'), {
  loading,
});
const Reservation = dynamic(
  () => import('@/components/Reservation/Reservation'),
  {
    loading,
  },
);
const Access = dynamic(() => import('@/components/Access/Access'), {
  loading,
});
const Footer = dynamic(() => import('@/components/Footer/Footer'), {
  loading,
});

export default function Home() {
  return (
    <>
      <Header />
      {/* clip: las animaciones de entrada (Reveal) desplazan los bloques ±50px
          y en movil eso desbordaria el ancho de la pagina */}
      <main className="overflow-x-clip">
        <SushiTypes />
        <Preparation />
        {/* OCULTO TEMPORALMENTE - ver comentario del import arriba */}
        {/* <Menu /> */}
        <Testimonials />
        <Atmosphere />
        <Reservation />
        <Access />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
