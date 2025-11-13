# 📝 Guía de Personalización - Landing Page Piso Arrancapins

## 🎨 Personalización Rápida

### 1. Datos de Contacto

Edita `src/pages/index.astro` y busca estas líneas:

```astro
<!-- Línea ~351 - Teléfono -->
<a href="tel:+34600000000" class="text-blue-100 hover:text-white transition-colors">
  +34 600 000 000
</a>

<!-- Línea ~361 - Email -->
<a href="mailto:contacto@pisoarrancapins.com" class="text-blue-100 hover:text-white transition-colors">
  contacto@pisoarrancapins.com
</a>

<!-- Línea ~371 - WhatsApp -->
<a href="https://wa.me/34600000000" class="text-blue-100 hover:text-white transition-colors">
  Enviar mensaje
</a>

<!-- Línea ~76 - Botón llamar ahora -->
<a href="tel:+34600000000" ...>

<!-- Línea ~86 - Precio -->
<div class="text-3xl font-bold text-primary">Precio a consultar</div>
```

### 2. Imágenes del Piso

Reemplaza los archivos SVG placeholder en `/public/` con fotos reales:

#### Imágenes Necesarias:
- `hero-image.jpg` o `.png` (1200x1200px) - Imagen principal
- `og-image.jpg` o `.png` (1200x630px) - Para redes sociales
- `gallery-1.jpg` a `gallery-6.jpg` (800x800px) - Galería

#### Después de añadir las fotos:

Edita `src/pages/index.astro`:

**Cambiar línea ~83:**
```astro
<!-- De: -->
<img src="/hero-image.svg" alt="..." />

<!-- A: -->
<img src="/hero-image.jpg" alt="..." />
```

**Cambiar líneas ~306-322 (galería):**
```astro
<!-- De: -->
<img src="/gallery-1.svg" alt="..." />

<!-- A: -->
<img src="/gallery-1.jpg" alt="..." />
```

**Cambiar en `src/layouts/Layout.astro` líneas ~27 y ~34:**
```astro
<!-- De: -->
<meta property="og:image" content={new URL('/og-image.svg', Astro.site)}>
<meta property="twitter:image" content={new URL('/og-image.svg', Astro.site)}>

<!-- A: -->
<meta property="og:image" content={new URL('/og-image.jpg', Astro.site)}>
<meta property="twitter:image" content={new URL('/og-image.jpg', Astro.site)}>
```

### 3. Colores del Tema

Edita `tailwind.config.mjs`:

```js
theme: {
  extend: {
    colors: {
      primary: '#2563eb',    // Azul principal
      secondary: '#1e40af',  // Azul secundario
    },
  },
}
```

Colores recomendados alternativos:
- Verde: `primary: '#10b981'`
- Morado: `primary: '#8b5cf6'`
- Naranja: `primary: '#f59e0b'`

### 4. Información del Piso

Edita `src/pages/index.astro`:

**Características principales (línea ~64-72):**
```astro
<div class="text-2xl font-bold text-primary">4</div>
<div class="text-sm text-gray-600">Habitaciones</div>

<div class="text-2xl font-bold text-primary">105m²</div>
<div class="text-sm text-gray-600">Superficie</div>

<div class="text-2xl font-bold text-primary">4º</div>
<div class="text-sm text-gray-600">Planta</div>
```

**Sección de características (línea ~98-163):**
Modifica los textos de las 6 tarjetas principales.

**Detalles adicionales (línea ~166-206):**
```astro
<div class="font-semibold text-gray-900">Dirección: Calle Cuenca 13, 4º Puerta 8</div>
<div class="font-semibold text-gray-900">Superficie: 105 m²</div>
<div class="font-semibold text-gray-900">Planta: 4º con ascensor</div>
```

### 5. Ubicación y Mapa

**Coordenadas GPS (línea ~252):**
```html
<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.9247584857665!2d-0.3784863!3d39.4659!..."
```

Para generar tu propio mapa:
1. Ve a [Google Maps](https://www.google.com/maps)
2. Busca "Calle Cuenca 13, Valencia"
3. Haz clic en "Compartir" > "Insertar un mapa"
4. Copia el código iframe y reemplaza el `src`

### 6. SEO - Meta Tags

Edita `src/pages/index.astro` (líneas ~4-8):

```astro
const title = "Piso en Venta Calle Cuenca 13, Arrancapins Valencia | 4 Habitaciones Reformado";
const description = "Comprar piso en Arrancapins Valencia. Venta de piso reformado...";
const keywords = "piso en venta calle cuenca valencia, comprar piso arrancapins...";
```

Edita `src/layouts/Layout.astro` (líneas ~37-61):

```astro
"name": "Piso en Venta Calle Cuenca 13, Arrancapins, Valencia",
"description": "Piso reformado de 4 habitaciones...",
"address": {
  "streetAddress": "Calle Cuenca 13, 4º Puerta 8",
  ...
}
```

### 7. Dominio del Sitio

Edita `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://TU-DOMINIO.com',  // ⬅️ Cambia esto
  ...
});
```

También actualiza en `src/pages/sitemap.xml.ts` (línea ~4):

```js
<loc>https://TU-DOMINIO.com/</loc>
```

## 🚀 Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo (http://localhost:4321)
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📊 Optimización para Google Ads

### Configurar Google Analytics (Opcional)

Añade al final de `src/layouts/Layout.astro` antes de `</head>`:

```astro
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Configurar Google Tag Manager (Opcional)

Añade después del `<body>` en `src/layouts/Layout.astro`:

```astro
<!-- Google Tag Manager -->
<noscript>
  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
  height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
```

## 🌐 Deploy

### Opción 1: Vercel (Recomendado)
1. Crea cuenta en [vercel.com](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Vercel detectará Astro automáticamente
4. ¡Listo! URL: `tu-proyecto.vercel.app`

### Opción 2: Netlify
1. Crea cuenta en [netlify.com](https://netlify.com)
2. Arrastra la carpeta `dist/` después de `npm run build`
3. ¡Listo! URL: `tu-proyecto.netlify.app`

### Opción 3: Hosting Tradicional (cPanel, etc.)
```bash
npm run build
# Sube la carpeta dist/ por FTP a public_html/
```

## ✅ Checklist Pre-Launch

- [ ] Reemplazar todas las imágenes SVG con fotos reales
- [ ] Actualizar teléfono, email y WhatsApp
- [ ] Configurar precio del piso
- [ ] Actualizar coordenadas del mapa
- [ ] Cambiar URL del sitio en `astro.config.mjs`
- [ ] Verificar meta tags y descripción SEO
- [ ] Configurar Google Analytics / Tag Manager (opcional)
- [ ] Probar formulario de contacto
- [ ] Verificar responsive en móvil
- [ ] Build y preview: `npm run build && npm run preview`
- [ ] Deploy a producción

## 🆘 Soporte

Si necesitas ayuda con la personalización, revisa:
- [Documentación de Astro](https://docs.astro.build)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)

---

**¡Buena suerte con la venta del piso!** 🏠🔑

