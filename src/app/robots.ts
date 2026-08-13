// next
import type { MetadataRoute } from 'next';

// El host canonico es www. El apex (amoryfish.com) resuelve a Cloudflare pero
// no completa el handshake TLS, asi que no debe anunciarse a los buscadores.
const BASE_URL = 'https://www.amoryfish.com';

// Se sirve en /robots.txt.
//
// Este archivo vive fuera de [locale] a proposito: las rutas literales tienen
// prioridad sobre el segmento dinamico. Sin el, /robots.txt caia en
// [locale]/page.tsx (el middleware ignora los paths con punto) y devolvia la
// home entera con <html lang="robots.txt"> y un 200.
//
// No se bloquea /_next/: Google necesita el CSS y el JS para renderizar la
// pagina al indexarla, y bloquearlos empeora el resultado.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
