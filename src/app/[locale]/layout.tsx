// next
import type { Metadata } from 'next';

// next-intl
import { NextIntlClientProvider } from 'next-intl';

// clsx
import clsx from 'clsx';

// tailwind styles
import '@/styles/globals.css';

// fonts
import { bitter } from '@/ui/fonts';

// olaclick
import { withOlaClickPrices, PRICE_REVALIDATE } from '@/utility/olaclick';

// metadata
export const metadata: Metadata = {
  title: 'Amor & Fish',
  description:
    'Amor & Fish - Restaurante de cocina nikkei (japonesa-peruana) con toque venezolano en Caracas. Sushi, ceviches y mariscos frescos.',
  keywords: [
    'sushi',
    'mariscos',
    'restaurante',
    'restaurante de mariscos',
    'restaurante de sushi',
    'amor y fish',
  ],
  icons: { icon: '/images/favicon.png' },
  metadataBase: new URL('https://amoryfish.com'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: '/',
    title: 'Amor & Fish',
    siteName: 'Amor & Fish',
    description:
      'Amor & Fish - Restaurante de cocina nikkei (japonesa-peruana) con toque venezolano en Caracas. Sushi, ceviches y mariscos frescos.',
    images: {
      url: '/images/screenshots/home.webp',
      alt: 'Amor & Fish',
      width: 1200,
      height: 654,
      type: 'image/webp',
      secureUrl: '/images/screenshots/home.webp',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amor & Fish',
    description:
      'Amor & Fish - Restaurante de cocina nikkei (japonesa-peruana) con toque venezolano en Caracas. Sushi, ceviches y mariscos frescos.',
    images: '/images/screenshots/home.webp',
  },
};

export function generateStaticParams() {
  return [{ locale: 'es' }];
}

// la pagina se regenera cada hora para recoger los precios de OlaClick
export const revalidate = PRICE_REVALIDATE;

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
    messages = await withOlaClickPrices(messages);
  } catch (error) {}
  return (
    <html lang={locale} className="scroll-smooth">
      <body className={clsx('bg-bgGray text-white', bitter.className)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
