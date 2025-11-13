# ⚡ Inicio Rápido - Landing Page Piso Arrancapins

## 🚀 En 5 Minutos Tienes Tu Landing Funcionando

### Paso 1: Ver el Sitio en Desarrollo
```bash
# Ya está instalado, solo ejecuta:
npm run dev
```

Abre tu navegador en: **http://localhost:4321**

### Paso 2: Personalizar Datos Básicos

#### 📞 Cambiar Teléfono y Email
Edita `src/pages/index.astro`:
- Busca `+34600000000` → Reemplaza con tu teléfono (4 ocurrencias)
- Busca `contacto@pisoarrancapins.com` → Reemplaza con tu email

#### 💰 Cambiar Precio
Busca `Precio a consultar` → Reemplaza con tu precio

### Paso 3: Añadir Fotos Reales

Copia tus fotos a la carpeta `/public/`:
- `hero-image.jpg` (foto principal, 1200x1200px)
- `gallery-1.jpg` a `gallery-6.jpg` (fotos galería, 800x800px)
- `og-image.jpg` (redes sociales, 1200x630px)

Luego busca y reemplaza en `src/pages/index.astro`:
- `.svg` → `.jpg` (en todas las rutas de imágenes)

### Paso 4: Deploy Gratis

#### Opción A: Vercel (Recomendado)
1. Crea cuenta en [vercel.com](https://vercel.com)
2. Conecta tu GitHub
3. Push tu código
4. ¡Listo! URL: `tu-proyecto.vercel.app`

#### Opción B: Netlify
```bash
npm run build
```
Arrastra la carpeta `dist/` a [netlify.com](https://app.netlify.com/drop)

### Paso 5: Configurar Google Ads

Lee **ESTRATEGIA-GOOGLE-ADS.md** para:
- Keywords exactas a usar
- Keywords negativas (IMPORTANTE)
- Presupuesto recomendado: 30-45€/día
- Textos de anuncios listos para copiar

---

## ✅ Checklist Mínimo Viable

- [ ] Ver sitio funcionando: `npm run dev`
- [ ] Cambiar teléfono y email
- [ ] Añadir al menos 1 foto real (hero-image.jpg)
- [ ] Deploy a Vercel/Netlify
- [ ] Publicar en Facebook Marketplace con link

**Con esto ya puedes empezar a recibir leads!**

---

## 📁 Estructura del Proyecto

```
piso-arrancapins/
│
├── src/
│   ├── layouts/
│   │   └── Layout.astro          ← Meta tags, SEO, Schema.org
│   └── pages/
│       ├── index.astro            ← Landing page principal ⭐
│       └── sitemap.xml.ts         ← Sitemap automático
│
├── public/
│   ├── *.svg                      ← Imágenes placeholder (reemplazar con .jpg)
│   ├── favicon.svg                ← Icono del sitio
│   └── robots.txt                 ← Para buscadores
│
├── README.md                      ← Documentación técnica
├── GUIA-PERSONALIZACION.md       ← Guía detallada de cambios
├── ESTRATEGIA-GOOGLE-ADS.md      ← Estrategia marketing completa
└── INICIO-RAPIDO.md              ← Estás aquí
```

---

## 🎯 Secciones de la Landing Page

La landing está dividida en:

1. **Header/Menú** - Navegación sticky (se queda arriba al scroll)
2. **Hero** - Presentación principal con foto grande
3. **Características** - Detalles del piso (4 hab, reformado, etc.)
4. **Ubicación** - Mapa de Google + ventajas del barrio
5. **Galería** - 6 fotos del piso
6. **Contacto** - Formulario + datos de contacto
7. **Footer** - Enlaces y información adicional

---

## 🛠️ Comandos Útiles

```bash
# Desarrollo (hot reload automático)
npm run dev

# Build para producción
npm run build

# Preview del build (prueba antes de subir)
npm run preview

# Ver en tu móvil (misma red WiFi)
npm run dev -- --host
# Luego abre: http://TU-IP-LOCAL:4321
```

---

## 📱 Probar en Móvil

1. Ejecuta: `npm run dev -- --host`
2. Mira la IP que aparece (ej: 192.168.1.100:4321)
3. Abre esa URL en tu móvil
4. Verifica que todo se vea bien

---

## 🎨 Cambios Rápidos de Diseño

### Cambiar Colores
Edita `tailwind.config.mjs`:
```js
colors: {
  primary: '#2563eb',    // Color principal
  secondary: '#1e40af',  // Color secundario
}
```

### Cambiar Fuente
Edita `src/layouts/Layout.astro`:
```html
<link href="https://fonts.googleapis.com/css2?family=TU-FUENTE&display=swap">
```

---

## 💡 Tips Pro

1. **Fotos profesionales son clave**: Invierte 50-100€ en un fotógrafo
2. **Responde rápido**: Los leads se enfrían en 2-4 horas
3. **Actualiza fotos semanalmente**: Google premia contenido fresco
4. **Usa WhatsApp Business**: Respuestas automáticas
5. **Graba video tour**: Súbelo a YouTube y embebe en la landing

---

## 🆘 Problemas Comunes

### "npm: command not found"
Instala Node.js desde [nodejs.org](https://nodejs.org)

### "Port 4321 already in use"
Otra app usa ese puerto. Ciérrala o usa: `npm run dev -- --port 3000`

### "Images not loading"
Verifica que las imágenes están en `/public/` con nombres exactos

### Sitio se ve sin estilos
Ejecuta: `npm install` y luego `npm run dev` de nuevo

---

## 📞 Siguiente Paso Recomendado

1. **Hoy**: Personaliza datos básicos y añade 1 foto
2. **Mañana**: Deploy a Vercel/Netlify
3. **Día 3**: Configura Google Ads con 15€/día
4. **Día 4-7**: Responde leads y programa visitas

---

## 🎯 Objetivo Final

**Vender el piso en 60-90 días** ahorrando ~10,000€ en comisiones de agencia.

**¡Éxito!** 🏠🔑

---

¿Dudas? Revisa:
- **GUIA-PERSONALIZACION.md** → Cambios detallados
- **ESTRATEGIA-GOOGLE-ADS.md** → Marketing digital completo
- **README.md** → Documentación técnica

