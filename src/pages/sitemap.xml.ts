import type { APIRoute } from 'astro';

// Generar sitemap dinámico con todas las páginas del sitio
const getSitemap = (): string => {
  const baseUrl = 'https://www.pisocuenca13.es';
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Lista de todas las páginas del sitio
  const pages = [
    {
      url: '/',
      changefreq: 'weekly',
      priority: '1.0',
      lastmod: currentDate,
    },
    // Si en el futuro se añaden más páginas, se pueden agregar aquí
    // Ejemplo:
    // {
    //   url: '/sobre',
    //   changefreq: 'monthly',
    //   priority: '0.8',
    //   lastmod: currentDate,
    // },
  ];

  const urls = pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls}
</urlset>`.trim();
};

export const GET: APIRoute = () => {
  const sitemap = getSitemap();
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600', // Cache por 1 hora
    },
  });
};

