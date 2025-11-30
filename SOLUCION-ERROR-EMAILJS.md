# 🔧 Solución: Error "Insufficient authentication scopes"

## ❌ Problema
Estás viendo este error:
```
412Gmail_API: Request had insufficient authentication scopes.
```

Esto significa que Gmail no tiene los permisos correctos para enviar emails.

---

## ✅ Solución: Reconectar Gmail

### Paso 1: Desconectar y volver a conectar
1. En EmailJS, ve a **"Email Services"**
2. Encuentra tu servicio **"Gmail"** (Service ID: `service_ucy4taj`)
3. Haz clic en **"Disconnect"** o **"Remove"**
4. Haz clic en **"Add New Service"** de nuevo
5. Selecciona **"Gmail"**
6. Haz clic en **"Connect Account"**

### Paso 2: Autorizar permisos correctamente
Cuando Google te pida permisos, asegúrate de:
- ✅ Marcar **"Allow"** en todos los permisos
- ✅ Especialmente el permiso **"Send email on your behalf"**
- ✅ No cancelar la autorización

### Paso 3: Verificar conexión
1. Deberías ver: **"Connected as pisocuenca13@gmail.com"**
2. Haz clic en **"Send test email"**
3. Ingresa tu email: `pisocuenca13@gmail.com`
4. Haz clic en **"Send Test Email"**
5. **¡Debería funcionar!** Revisa tu Gmail

---

## 📝 Si el error persiste

### Opción A: Usar Gmail SMTP en lugar de Gmail API
1. En EmailJS, ve a **"Email Services"**
2. En lugar de **"Gmail"**, selecciona **"Gmail SMTP"**
3. Necesitarás:
   - Tu email: `pisocuenca13@gmail.com`
   - Contraseña de aplicación de Gmail (no tu contraseña normal)

### Opción B: Generar contraseña de aplicación (para Gmail SMTP)
1. Ve a tu cuenta de Google: https://myaccount.google.com/
2. **Seguridad** → **Verificación en 2 pasos** (debe estar activada)
3. **Contraseñas de aplicaciones**
4. Genera una nueva contraseña para "Email"
5. Úsala en EmailJS cuando configures Gmail SMTP

---

## ✅ Una vez que funcione el test email

Ya tienes tu **Service ID**: `service_ucy4taj`

Ahora necesitas:
1. ✅ **Template ID** (crear plantilla)
2. ✅ **Public Key** (Account → API Keys)

Luego actualiza el código en `src/pages/index.astro`

---

## 🎯 Próximos pasos después de solucionar

1. ✅ Crear plantilla de email (Email Templates)
2. ✅ Obtener Public Key (Account → API Keys)
3. ✅ Actualizar código con tus 3 códigos:
   - Service ID: `service_ucy4taj` ✅ (ya lo tienes)
   - Template ID: (pendiente)
   - Public Key: (pendiente)

