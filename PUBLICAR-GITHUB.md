# 📤 Guía para Publicar en GitHub

## ✅ Paso 1: Crear el Repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre del repositorio: `piso-arrancapins` (o el que prefieras)
3. Descripción: "Sitio web del piso en venta en Calle de Conca 13, Arrancapins, Valencia"
4. Elige **Público** o **Privado**
5. **NO marques** "Initialize this repository with a README"
6. Haz clic en **"Create repository"**

## ✅ Paso 2: Conectar y Subir el Código

Después de crear el repositorio, GitHub te mostrará comandos. Ejecuta estos en tu terminal:

```bash
# Navega al directorio del proyecto
cd "c:\Users\carlo\Desktop\webs\piso arrancapins"

# Agrega el repositorio remoto (reemplaza TU_USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/piso-arrancapins.git

# Cambia el nombre de la rama a 'main' (si GitHub usa 'main' en lugar de 'master')
git branch -M main

# Sube el código a GitHub
git push -u origin main
```

## 🔐 Si te pide autenticación

Si GitHub te pide usuario y contraseña, usa un **Personal Access Token**:

1. Ve a: https://github.com/settings/tokens
2. Click en "Generate new token (classic)"
3. Selecciona el scope `repo`
4. Copia el token generado
5. Úsalo como contraseña cuando git te lo pida

## 🚀 Alternativa: Usar GitHub CLI

Si tienes GitHub CLI instalado:

```bash
gh repo create piso-arrancapins --public --source=. --remote=origin --push
```

## ✅ Verificar

Después del push, ve a tu repositorio en GitHub y deberías ver todos los archivos.

---

**Nota**: El commit inicial ya está hecho. Solo necesitas conectar el repositorio remoto y hacer push.

