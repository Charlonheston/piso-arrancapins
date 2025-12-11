# 📧 Configuración de EmailJS para Envío de Formulario a Gmail

Este documento te guiará paso a paso para configurar el envío del formulario de contacto a tu Gmail usando EmailJS.

---

## 🚀 Paso 1: Crear cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en **"Sign Up"** (Registrarse)
3. Crea una cuenta gratuita (puedes usar tu Gmail)
4. Confirma tu email

---

## 📝 Paso 2: Configurar Gmail como Servicio de Email

1. Una vez dentro de tu cuenta de EmailJS, ve a **"Email Services"** en el menú lateral
2. Haz clic en **"Add New Service"**
3. Selecciona **"Gmail"**
4. Haz clic en **"Connect Account"**
5. Autoriza a EmailJS a acceder a tu cuenta de Gmail
6. Una vez conectado, verás tu **Service ID** (guárdalo, lo necesitarás)

---

## 📋 Paso 3: Crear una Plantilla de Email

1. Ve a **"Email Templates"** en el menú lateral
2. Haz clic en **"Create New Template"**
3. Usa esta configuración:

   **Nombre del template:** `contact_form` (o el que prefieras)

   **Asunto del email:**
   ```
   Nueva consulta desde el sitio web - {{from_name}}
   ```

   **Contenido del email:**
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

4. Haz clic en **"Save"**
5. Copia el **Template ID** (lo necesitarás)

---

## 🔑 Paso 4: Obtener tu Public Key

1. Ve a **"Account"** en el menú lateral
2. En la sección **"API Keys"**, encontrarás tu **Public Key**
3. Cópiala (la necesitarás)

---

## ⚙️ Paso 5: Configurar el Código

Ahora necesitas actualizar el archivo `src/pages/index.astro` con tus credenciales:

1. Abre el archivo `src/pages/index.astro`
2. Busca estas líneas (alrededor de la línea 740):

```javascript
// Inicializar EmailJS (reemplaza 'YOUR_PUBLIC_KEY' con tu clave pública de EmailJS)
(window as any).emailjs?.init('YOUR_PUBLIC_KEY');
```

3. Reemplaza `'YOUR_PUBLIC_KEY'` con tu Public Key de EmailJS

4. Busca estas líneas (alrededor de la línea 760):

```javascript
await (window as any).emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  {
    from_name: data.nombre,
    from_email: data.email,
    phone: data.telefono,
    message: data.mensaje,
    to_email: 'pisocuenca13@gmail.com' // Tu email de destino
  }
);
```

5. Reemplaza:
   - `'YOUR_SERVICE_ID'` con tu Service ID de Gmail
   - `'YOUR_TEMPLATE_ID'` con tu Template ID
   - `'pisocuenca13@gmail.com'` con tu email de Gmail (si es diferente)

---

## ✅ Paso 6: Probar el Formulario

1. Ejecuta tu proyecto:
   ```bash
   npm run dev
   ```

2. Ve a la sección de contacto en tu sitio web
3. Llena el formulario y envíalo
4. Revisa tu bandeja de entrada de Gmail
5. ¡Deberías recibir el email!

---

## 🎯 Resumen de Credenciales Necesarias

Necesitas estos 3 valores de EmailJS:

1. **Public Key** → Reemplaza `YOUR_PUBLIC_KEY`
2. **Service ID** → Reemplaza `YOUR_SERVICE_ID`
3. **Template ID** → Reemplaza `YOUR_TEMPLATE_ID`

---

## 🔒 Límites del Plan Gratuito

El plan gratuito de EmailJS incluye:
- ✅ 200 emails por mes
- ✅ Soporte para Gmail
- ✅ Plantillas personalizables

Si necesitas más, puedes actualizar a un plan de pago.

---

## 🆘 Solución de Problemas

### El formulario no envía emails
- Verifica que hayas reemplazado todas las credenciales correctamente
- Asegúrate de que el Service ID y Template ID sean correctos
- Revisa la consola del navegador (F12) para ver errores

### Error: "Invalid Public Key"
- Verifica que copiaste correctamente tu Public Key
- Asegúrate de que no hay espacios extra

### No recibes los emails
- Revisa tu carpeta de spam
- Verifica que el email de destino sea correcto
- Asegúrate de que Gmail esté correctamente conectado en EmailJS

---

## 📞 ¿Necesitas Ayuda?

Si tienes problemas, consulta la documentación oficial de EmailJS:
- [Documentación EmailJS](https://www.emailjs.com/docs/)
- [Guía de Integración](https://www.emailjs.com/docs/examples/reactjs/)

---

¡Listo! Tu formulario ahora enviará emails directamente a tu Gmail. 🎉





