# Galería de Fotos con Firebase

Una galería web interactiva de fotos con sistema de comentarios compartidos usando Firebase.

## 🎯 Características

- ✅ Galería responsiva con todas tus fotos 
- ✅ Vista ampliada al hacer click
- ✅ Sistema de comentarios compartido (Firebase Firestore)
- ✅ Navegación entre fotos (flechas, botones, teclado)
- ✅ Compatible con GitHub Pages
- ✅ Diseño moderno con animaciones suaves

## 📁 Archivos

- `index.html` - Página principal
- `style.css` - Estilos y diseño
- `script.js` - Funcionalidad (con integración de Firebase)
- `images/` - Carpeta con todas las fotos
- `README.md` - Este archivo
- `FIREBASE_SETUP.md` - **Guía de configuración Firebase** ←  LEE ESTO PRIMERO

## 🚀 Cómo empezar

### Paso 1: Configurar Firebase
1. Lee el archivo **`FIREBASE_SETUP.md`** (está en esta carpeta)
2. Sigue los pasos para crear un proyecto en Firebase
3. Copia tus credenciales en `script.js`

### Paso 2: Probar localmente
```bash
# Simplemente abre el archivo en tu navegador
open index.html
# O arrastra el archivo a tu navegador
```

### Paso 3: Subir a GitHub Pages
1. Crea un repositorio en GitHub
2. Sube estos archivos:
   - `index.html`
   - `style.css`
   - `script.js`
   - Carpeta `images/`
3. En Settings → Pages, selecciona "main branch"
4. ¡Tu galería estará en línea! 🎉

## 🔧 Configuración

Los comentarios se guardan automáticamente en Firebase Firestore. Necesitas:

1. ✅ Una cuenta Firebase (gratuita)
2. ✅ Un proyecto Firebase configurado
3. ✅ La colección "comments" en Firestore
4. ✅ Tus credenciales copiadas en `script.js`

**Ver instrucciones completas en `FIREBASE_SETUP.md`**

## ⌨️ Atajos de teclado

- `← →` - Navegar entre fotos
- `ESC` - Cerrar la foto ampliada
- `Ctrl+Enter` - Enviar comentario (cuando escribes)

## 📝 Comentarios

- Todos los visitantes ven los mismos comentarios
- Se guardan en Firebase (máximo 500 caracteres cada uno)
- Puedes ver los comentarios en Discord Firebase Console → Firestore → Colección "comments"

## 🛠️ Desarrollado con

- HTML5, CSS3, JavaScript (vanilla)
- Firebase Firestore para la base de datos
- GitHub Pages para hosting

## 📄 Licencia

Libre para usar y modificar

---


