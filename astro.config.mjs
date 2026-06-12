// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Cámbialo por tu dominio real al desplegar (de aquí salen canónicas, sitemap y OG).
  site: 'https://datadave.dev',
  trailingSlash: 'never',

  // ES y EN, ambos con prefijo (/es/…, /en/…). La raíz redirige por idioma.
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: true,
    },
  },

  integrations: [
    sitemap({
      // La raíz solo redirige; fuera del sitemap.
      filter: (page) => page !== 'https://datadave.dev/',
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-MX',
          en: 'en-US',
        },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});
