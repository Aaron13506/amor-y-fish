// olaclick data

// Sincroniza los precios del menu con OlaClick (misma fuente que usa
// amor-fish.ola.click). Los precios del sitio dejan de editarse a mano:
// se cambian en OlaClick y aqui se recogen en la siguiente revalidacion.
//
// El mapeo vive en src/data/olaclick-map.json y va por UUID, no por nombre,
// porque hay platos duplicados en varias categorias con precios distintos.

import olaclickMap from '@/data/olaclick-map.json';

const COMPANY_ID = '6413210b-b15b-468a-a663-0a637ec9d917';

const ENDPOINT = `https://api.olaclick.app/ms-products/public/companies/${COMPANY_ID}/categories`;

// cada cuanto se refresca el precio (segundos)
export const PRICE_REVALIDATE = 3600;

// si OlaClick tarda mas que esto, se sirve el fallback y no se bloquea la pagina
const TIMEOUT_MS = 5000;

type OlaVariant = { price: number | null };
type OlaProduct = { id: string; product_variants: OlaVariant[] | null };
type OlaCategory = { products: OlaProduct[] | null };

type MenuItem = { title: string; price: string };
type MenuSection = Record<string, MenuItem>;

/** Descarga el catalogo y devuelve un indice UUID -> precio ya formateado. */
const fetchPriceIndex = async (): Promise<Map<string, string>> => {
  const res = await fetch(ENDPOINT, {
    next: { revalidate: PRICE_REVALIDATE },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`OlaClick respondio ${res.status}`);

  const body = (await res.json()) as { data?: OlaCategory[] };
  const categories = body?.data;
  if (!Array.isArray(categories)) throw new Error('OlaClick: "data" no es un array');

  const index = new Map<string, string>();
  for (const category of categories) {
    for (const product of category?.products ?? []) {
      // el precio que se muestra es el de la primera variante: en los platos
      // con tamanos ("Completo (10 Rolls)" / "Mediano") es el tamano completo
      const price = product?.product_variants?.[0]?.price;
      if (typeof price === 'number' && Number.isFinite(price))
        index.set(product.id, price.toFixed(2));
    }
  }
  if (index.size === 0) throw new Error('OlaClick: catalogo vacio');
  return index;
};

/**
 * Devuelve los mensajes de next-intl con los precios de Menu actualizados
 * desde OlaClick. Ante cualquier fallo (red, timeout, cambio de formato,
 * plato borrado) cae al ultimo precio conocido de olaclick-map.json, para que
 * la carta nunca aparezca vacia o con precios en blanco.
 */
export const withOlaClickPrices = async <T extends Record<string, any>>(
  messages: T,
): Promise<T> => {
  let index: Map<string, string> | null = null;
  try {
    index = await fetchPriceIndex();
  } catch (error) {
    console.error('[olaclick] usando precios de respaldo:', error);
  }

  // clon superficial por seccion: `messages` viene de un import cacheado entre
  // peticiones y mutarlo filtraria precios de un render a otro
  const menu: Record<string, unknown> = { ...messages.Menu };

  for (const [sectionId, items] of Object.entries(olaclickMap)) {
    const section = messages.Menu?.[sectionId] as MenuSection | undefined;
    if (!section) continue;

    const updated: MenuSection = {};
    for (const [itemId, item] of Object.entries(section)) {
      const entry = items[itemId as keyof typeof items] as
        | { olaclickId: string; fallbackPrice: string }
        | undefined;
      updated[itemId] = entry
        ? { ...item, price: index?.get(entry.olaclickId) ?? entry.fallbackPrice }
        : item;
    }
    menu[sectionId] = updated;
  }

  return { ...messages, Menu: menu };
};
