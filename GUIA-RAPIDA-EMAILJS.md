# 🚀 Guía Rápida: Configurar Formulario para Gmail

## 📋 Resumen de lo que necesitas hacer:

1. ✅ Crear cuenta en EmailJS (2 minutos)
2. ✅ Conectar tu Gmail (1 minuto)
3. ✅ Crear plantilla de email (2 minutos)
4. ✅ Copiar 3 códigos (Public Key, Service ID, Template ID)
5. ✅ Pegar esos 3 códigos en el archivo `src/pages/index.astro`

---

## 🎯 Paso a Paso Visual

### PASO 1: Crear cuenta
👉 Ve a: https://www.emailjs.com/
👉 Clic en "Sign Up"
👉 Usa tu Gmail para registrarte

### PASO 2: Conectar Gmail
1. En EmailJS, menú izquierdo → **"Email Services"**
2. Clic en **"Add New Service"**
3. Selecciona **"Gmail"**
4. Clic en **"Connect Account"** → Autoriza
5. **¡IMPORTANTE!** Copia el **Service ID** que aparece (ejemplo: `service_abc123`)

### PASO 3: Crear plantilla
1. Menú izquierdo → **"Email Templates"**
2. Clic en **"Create New Template"**
3. **Asunto:** `Nueva consulta desde el sitio web - {{from_name}}`
4. **Contenido:**
```
Has recibido una nueva consulta desde el formulario de contacto:

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{phone}}

Mensaje:
{{message}}

---
Este email fue enviado desde el formulario de contacto del sitio web.
```
5. Clic en **"Save"**
6. **¡IMPORTANTE!** Copia el **Template ID** (ejemplo: `template_xyz789`)

### PASO 4: Obtener Public Key
1. Menú izquierdo → **"Account"**
2. Busca **"API Keys"**
3. **¡IMPORTANTE!** Copia tu **Public Key** (ejemplo: `abcdefghijklmnop`)

---

## ⚙️ PASO 5: Actualizar el código

Abre el archivo: **`src/pages/index.astro`**

### Cambio 1: Línea ~748
**Busca esto:**
```javascript
(window as any).emailjs?.init('YOUR_PUBLIC_KEY');
```

**Reemplázalo con tu Public Key:**
```javascript
(window as any).emailjs?.init('abcdefghijklmnop'); // ← Pega tu Public Key aquí
```

### Cambio 2: Línea ~776
**Busca esto:**
```javascript
await (window as any).emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
```

**Reemplázalo con tus IDs:**
```javascript
await (window as any).emailjs.send(
  'service_abc123',    // ← Pega tu Service ID aquí
  'template_xyz789',   // ← Pega tu Template ID aquí
```

### Cambio 3: Línea ~783 (opcional)
Si tu email de Gmail es diferente a `pisocuenca13@gmail.com`, cámbialo:
```javascript
to_email: 'tu-email@gmail.com' // ← Cambia si es necesario
```

---

## ✅ PASO 6: Probar

1. Guarda el archivo `src/pages/index.astro`
2. Ejecuta en la terminal:
   ```bash
   npm run dev
   ```
3. Ve a tu sitio web → Sección "Contacto"
4. Llena el formulario y envíalo
5. **¡Revisa tu Gmail!** Deberías recibir el email

---

## 📝 Resumen de los 3 códigos que necesitas:

| Código | Dónde encontrarlo | Dónde pegarlo |
|--------|-------------------|---------------|
| **Public Key** | Account → API Keys | Línea ~748 |
| **Service ID** | Email Services → Gmail | Línea ~776 |
| **Template ID** | Email Templates → Tu template | Línea ~777 |

---

## 🆘 Si algo no funciona:

1. **Revisa la consola del navegador** (F12 → Console)
2. **Verifica que copiaste bien los 3 códigos** (sin espacios extra)
3. **Asegúrate de que Gmail esté conectado** en EmailJS
4. **Revisa tu carpeta de spam** en Gmail

---

## 💡 Tip importante:

El plan gratuito de EmailJS te da **200 emails por mes**, que es más que suficiente para empezar.

---

¡Listo! En menos de 10 minutos tendrás tu formulario enviando emails a Gmail. 🎉





