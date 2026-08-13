# Amor y Fish

## Resumen

Sitio web para **Amor y Fish**, un restaurante de mariscos y sushi fusion, construido con React.js/Next.js y Tailwind CSS.

## Contenido

Todo el contenido (menú, redes sociales, teléfono, testimonios) se mantiene en archivos `.json` dentro de `src/data` y `src/messages/es.json` para poder modificarse fácilmente sin tocar el código.

- `src/messages/es.json` — todos los textos del sitio (títulos, descripciones, menú, testimonios, etc.)
- `src/data/phone.json` — número de teléfono
- `src/data/social-media.json` — enlaces a redes sociales
- `src/data/menu.json`, `src/data/sushi-types.json`, `src/data/testimonials.json` — datos e imágenes de cada sección

## Tech Stack

- TypeScript
- React.js
- Next.js v14
- Tailwind CSS
- Swiper
- Framer Motion

## Desarrollo

```bash
npm install
npm run dev
```

## Créditos

Este sitio parte de la plantilla de código abierto [sushi-restaurant](https://github.com/rashidshamloo/sushi-restaurant)
de [Rashid Shamloo](https://github.com/rashidshamloo), adaptada para Amor y Fish:
contenido, imágenes, diseño de secciones, integración con OlaClick y localización al español.

## Licencia

Distribuido bajo la [GNU General Public License v3.0](LICENSE), igual que el proyecto original.
