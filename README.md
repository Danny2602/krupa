# 📘 Manual de Usuario y Documentación Técnica - Krupa Client

Bienvenido a la documentación oficial de **Krupa Client (BioMotion)**. Este documento sirve como manual de usuario para administradores y guía técnica para desarrolladores.

---

## � Tabla de Contenidos

1. [Introducción](#-introducción)
2. [Guía Rápida de Inicio](#-guía-rápida-de-inicio)
3. [🎨 Manual de Personalización (Diseño)](#-manual-de-personalización-diseño)
    - [Cambiar Colores de la Marca](#cambiar-colores-de-la-marca)
    - [Cambiar Imágenes](#cambiar-imágenes)
    - [Cambiar Textos](#cambiar-textos)
4. [🛠️ Manual de Administración (Contenido)](#-manual-de-administración-contenido)
    - [Gestión de Servicios](#gestión-de-servicios)
    - [Gestión de Noticias](#gestión-de-noticias)
    - [Gestión de Ubicaciones](#gestión-de-ubicaciones)
5. [� Guía Técnica para Desarrolladores](#-guía-técnica-para-desarrolladores)
    - [Instalación](#instalación)
    - [Estructura del Proyecto](#estructura-del-proyecto)
    - [Comandos Disponibles](#comandos-disponibles)

---

## 🏥 Introducción

**Krupa Client** es la plataforma web pública y de gestión para BioMotion. Permite a los pacientes conocer servicios, agendar citas y a los administradores gestionar la clínica.

**Características Principales:**
- **Página Web Pública:** Información sobre prótesis, órtesis y servicios médicos.
- **Agendamiento de Citas:** Sistema interactivo para reservar citas con doctores.
- **Panel de Usuario:** Historial de citas y perfil de paciente.
- **Panel Administrativo:** Gestión interna de la clínica.

---

## 🚀 Guía Rápida de Inicio

Si ya tienes el proyecto instalado y solo quieres ejecutarlo:

1.  Abre la terminal en la carpeta del proyecto.
2.  Ejecuta el comando:
    ```bash
    npm run dev
    ```
3.  Abre tu navegador en la dirección que aparece (usualmente `http://localhost:5173`).

---

## 🎨 Manual de Personalización (Diseño)

Esta sección explica cómo modificar la apariencia de la página sin necesidad de conocimientos avanzados de programación.

### Cambiar Colores de la Marca

El sistema cuenta con un **Control Central de Colores**. No necesitas buscar en cientos de archivos para cambiar el color de un botón o del fondo.

1.  **Ubica el archivo:** Ve a la carpeta `src/assets/styles/` y abre el archivo `colors.jsx`.
2.  **Edita los códigos de color:** Verás una lista como esta:
    ```javascript
    const colors = {
      primary: "#f57922",      // Color Principal (Naranja actual)
      secondary: "#012558",    // Color Secundario (Azul actual)
      // ...
    };
    ```
3.  **Cambia el valor:** Reemplaza `#f57922` por el nuevo código de color de tu marca (ej. `#00ff00`).
4.  **Guarda:** Al guardar, **toda la aplicación se actualizará automáticamente**.

> � **Tip:** Puedes usar el archivo `DEMO_COLORES.html` (incluido en la raíz del proyecto) para probar combinaciones de colores antes de aplicarlos.

### Cambiar Imágenes

Las imágenes se encuentran en dos lugares principales:
1.  **Carpeta `public/`:** Para imágenes estáticas como logos o favicons.
2.  **Carpeta `src/assets/images/`:** Para imágenes usadas dentro de la interfaz.

**Para reemplazar una imagen:**
1.  Asegúrate de que la nueva imagen tenga el **mismo nombre y extensión** (ej. `.jpg`, `.png`) que la original.
2.  Sobreescribe el archivo en la carpeta correspondiente.

### Cambiar Textos

Los textos de las páginas públicas están en los archivos de la carpeta `src/pages/`.

**Ejemplo: Cambiar texto en la página de Inicio**
1.  Abre `src/pages/inicio.jsx`.
2.  Busca el texto que quieres cambiar (ej. "Investigación e Innovación").
3.  Edita el texto dentro de las comillas o etiquetas.
    ```jsx
    // Antes
    <Typography>Investigación e Innovación</Typography>
    
    // Después
    <Typography>Tecnología Médica Avanzada</Typography>
    ```
4.  Guarda el archivo para ver los cambios.

---

## 🛠️ Manual de Administración (Contenido)

### Gestión de Servicios

Los servicios que aparecen en la página de inicio y en la sección de servicios se gestionan desde el código (por ahora, hasta que se conecte con el backend).

**Para agregar o quitar un servicio en el Inicio:**
1.  Abre `src/pages/inicio.jsx`.
2.  Busca la lista `const servicios = [...]`.
3.  Agrega un nuevo bloque con los datos:
    ```javascript
    {
        title: 'Nuevo Servicio',
        description: 'Descripción corta del servicio',
        image: 'url-de-la-imagen',
        path: '/servicios/nuevo-servicio'
    },
    ```

### Gestión de Noticias

Las noticias en la página de inicio son actualmente ejemplos estáticos.
1.  Abre `src/pages/inicio.jsx`.
2.  Busca la sección de "News Section".
3.  Puedes modificar el contenido de las tarjetas (Cards) directamente en el código.

### Gestión de Ubicaciones

1.  Abre `src/pages/inicio.jsx` o la página específica de ubicaciones.
2.  Para cambiar el mapa, busca la etiqueta `<iframe>` y reemplaza el enlace `src` con el nuevo enlace de "Insertar mapa" de Google Maps.

---

## 💻 Guía Técnica para Desarrolladores

### Instalación

Requisitos: Node.js v18+

```bash
# 1. Clonar repositorio
git clone <url-repo>

# 2. Instalar dependencias
npm install

# 3. Iniciar entorno de desarrollo
npm run dev
```

### Estructura del Proyecto

```
src/
├── assets/          # Recursos estáticos (imágenes, estilos globales)
│   └── styles/
│       └── colors.jsx  <-- SISTEMA DE COLORES (Importante)
├── components/      # Componentes reutilizables (Botones, Inputs, Cards)
├── features/        # Módulos funcionales
│   ├── admin/       # Lógica del panel administrativo
│   ├── appointments/# Lógica del calendario y citas
│   ├── auth/        # Login y seguridad
│   └── user/        # Perfil de usuario
├── pages/           # Vistas principales (Rutas)
├── router/          # Configuración de navegación
└── lib/             # Configuraciones de librerías (Axios, etc.)
```

### Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor local de desarrollo con recarga rápida (HMR). |
| `npm run build` | Compila la aplicación para producción en la carpeta `dist/`. |
| `npm run preview` | Sirve la versión compilada localmente para probarla. |
| `npm run lint` | Analiza el código en busca de errores de sintaxis o estilo. |

### Tecnologías

- **Frontend:** React 19, Vite
- **Estilos:** TailwindCSS v4, Material UI v7
- **Animaciones:** Motion, GSAP
- **Rutas:** React Router DOM v7

---

> **Soporte:** Para dudas técnicas adicionales, contactar al equipo de desarrollo de Krupa/BioMotion.
