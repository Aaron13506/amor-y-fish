// next
import type { MetadataRoute } from 'next';

// mismo host canonico que robots.ts: www, no el apex
const BASE_URL = 'https://www.amoryfish.com';

// Se sirve en /sitemap.xml. Mismo motivo que robots.ts para vivir fuera
// de [locale]: si no, el segmento dinamico devuelve HTML en vez de XML y
// Search Console rechaza el envio.
//
// El sitio es de una sola pagina: las secciones (#atmosphere, #reservation,
// #access) son anclas dentro de la home, no URLs propias, y los fragmentos no
// van en un sitemap. Tampoco se incluye /es, que redirige a / con un 307
// porque next-intl no prefija el locale por defecto.
//
// lastModified se evalua en build, asi que refleja la fecha del ultimo deploy,
// que es justo cuando pudo cambiar el contenido.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
