# SPA con React Router

Esta es una aplicación web simple construida con **React** y **React Router**, que demuestra una **Single Page Application (SPA)** con navegación entre distintas rutas sin recarga del navegador.

## Tecnologías utilizadas

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- Vite / Create React App

## Características

- Navegación SPA sin recarga de página.
- Cuatro rutas principales:
  - `/` → Home
  - `/acerca` → Acerca
  - `/contacto` → Contacto
  - `/servicios` → Servicios
- Estilo básico con CSS personalizado.
- Destacado del enlace activo con `NavLink`.

## Estructura de archivos

```plaintext
src/
│
├── components/
│   ├── Header.tsx
│   └── Content.tsx
│
├── pages/
│   ├── Home.tsx
│   ├── Acerca.tsx
│   ├── Contacto.tsx
│   └── Servicios.tsx
│
├── styles/
│   ├── Header.css
│   └── index.css
│
├── App.tsx
├── main.tsx
```
