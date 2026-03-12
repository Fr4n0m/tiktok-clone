![tiktok_2](https://github.com/user-attachments/assets/623473e0-da7c-4ba5-b222-0daaa6104739)
![tiktok_1](https://github.com/user-attachments/assets/414c6a16-fe03-4c96-ae89-604ba72dff4a)

# TikTok Clone

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-Configured-3ECF8E?logo=supabase&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

**Quick Navigation:** [Español](#-español) | [English](#-english)

## 🇪🇸 Español

### 📱 Descripción
Clon de TikTok construido con React + Vite, orientado a una demo visual con datos mockeados.
La integración de Supabase está preparada en código, pero la demo pública está desacoplada de conexión real.

### 🚀 Demo
https://tiktok-clone-five-phi.vercel.app/

### 🧩 Tecnologías
- React 18
- TypeScript 5
- Vite 5
- Wouter
- Supabase (`@supabase/supabase-js`)

### ✨ Funcionalidades principales
- Feed vertical con autoplay por intersección (scroll-snap estilo móvil).
- Tabs `Following` y `For You` con indicador activo y transición lateral animada.
- Acciones de vídeo mockeadas:
  - Like y bookmark con toggle visual y contador `+1 / -1`.
  - Panel de comentarios con entrada animada y datos mock.
  - Panel de share con acciones visuales mock.
  - Botón de usuario que navega al perfil.
- Páginas sociales completas con datos mock:
  - Friends
  - Inbox
  - Profile (incluye `Recent videos` con proyectos del portfolio).
- Upload mock funcional:
  - Selección por drag & drop.
  - Publicación en el feed.
  - Persistencia en `localStorage` (sin backend real).
  - Aviso de privacidad: los datos no salen del navegador.

### 🧠 Arquitectura de datos
- `mock` por defecto para demo y entorno local.
- `supabase` disponible para integración real cuando se habilite.
- Servicios desacoplados por fuente de datos en `src/services/videos`.

### ⚙️ Requisitos
- Node.js 18 o superior
- npm 9 o superior

### 🛠️ Instalación y ejecución
```bash
git clone https://github.com/Fr4n0m/tiktok-clone.git
cd tiktok-clone
npm install
npm run dev
```

### 📦 Scripts
```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run test
```

### 🔧 Variables de entorno
`VITE_DATA_SOURCE=mock` (default) o `VITE_DATA_SOURCE=supabase`

Si se activa Supabase:
`VITE_SUPABASE_URL=...`
`VITE_SUPABASE_KEY=...`

### 🤝 Contribuciones
¿Quieres mejorar el proyecto? Las PRs son muy bienvenidas.

1. Haz fork del repositorio.
2. Crea una rama de feature/fix.
3. Realiza cambios pequeños y atómicos.
4. Abre una Pull Request con contexto claro y capturas si aplica.

También puedes revisar PRs abiertas aquí:
https://github.com/Fr4n0m/tiktok-clone/pulls

### 📄 Licencia
Este proyecto está bajo licencia MIT. Consulta [LICENSE](LICENSE).

---

## 🇬🇧 English

### 📱 Overview
A TikTok-style clone built with React + Vite, focused on a visual demo using mocked data.
Supabase integration is configured in code, while the public demo runs without a live backend connection.

### 🚀 Live Demo
https://tiktok-clone-five-phi.vercel.app/

### 🧩 Tech Stack
- React 18
- TypeScript 5
- Vite 5
- Wouter
- Supabase (`@supabase/supabase-js`)

### ✨ Key Features
- Vertical mobile-style feed with intersection-based autoplay (scroll-snap).
- `Following` and `For You` tabs with active indicator and directional slide transitions.
- Mocked video actions:
  - Like and bookmark visual toggles with `+1 / -1` counters.
  - Comments sheet with animated entrance and mock content.
  - Share sheet with visual-only mock actions.
  - User action button routing to profile.
- Fully mocked social pages:
  - Friends
  - Inbox
  - Profile (including `Recent videos` using portfolio project covers).
- Functional mock upload flow:
  - Drag & drop upload area.
  - Publish to feed.
  - `localStorage` persistence (no real backend required).
  - Privacy notice: data stays in the browser.

### 🧠 Data Architecture
- `mock` is the default source for demo and local development.
- `supabase` is supported for real backend integration.
- Data-source-driven services are split under `src/services/videos`.

### ⚙️ Requirements
- Node.js 18+
- npm 9+

### 🛠️ Install and run
```bash
git clone https://github.com/Fr4n0m/tiktok-clone.git
cd tiktok-clone
npm install
npm run dev
```

### 📦 Scripts
```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run test
```

### 🔧 Environment Variables
`VITE_DATA_SOURCE=mock` (default) or `VITE_DATA_SOURCE=supabase`

When using Supabase:
`VITE_SUPABASE_URL=...`
`VITE_SUPABASE_KEY=...`

### 🤝 Contributing
Want to improve the project? PRs are strongly encouraged.

1. Fork the repository.
2. Create a feature/fix branch.
3. Keep changes focused and atomic.
4. Open a Pull Request with clear context and screenshots when relevant.

Open PRs are available at:
https://github.com/Fr4n0m/tiktok-clone/pulls

### 📄 License
This project is licensed under MIT. See [LICENSE](LICENSE).

---

### 👨‍💻 Portfolio
Fr4n0m: https://codebyfran.es
