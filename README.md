# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


## PortfolioTadeo

## Introducción
Este proyecto es un portafolio personal desarrollado con React y TypeScript, utilizando Vite como herramienta de construcción. El objetivo es mostrar la experiencia, educación, habilidades y proyectos de Tadeo Parmigiani de manera profesional y moderna.

## Dependencias principales
Las dependencias utilizadas en este proyecto se encuentran en el archivo `package.json`. Algunas de las más relevantes son:

- **React**: Biblioteca principal para la construcción de interfaces de usuario.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **Vite**: Herramienta de desarrollo y bundler rápido para proyectos modernos.
- **ESLint**: Linter para mantener la calidad y consistencia del código.

Puedes ver todas las dependencias en el archivo `package.json`.

## Estructura de carpetas
La estructura principal del proyecto es la siguiente:

```
PortfolioTadeo/
│
├── public/
│   ├── FOTOCV.jpg
│   ├── TadeoParmigianiCV.pdf
│   ├── vite.svg
│   └── projectImg/
│       ├── image.png
│       ├── orbitpage.png
│       └── stockorbit.png
│
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── About/
│   │   ├── Education/
│   │   ├── Experience/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── Navbar/
│   │   ├── Projects/
│   │   ├── Skills/
│   │   └── TypingEffect/
│   │
│   │   (Cada carpeta contiene sus archivos `.tsx` y `.module.css`)
│   ├── contexts/
│   │   ├── LanguageContext.tsx
│   │   └── ThemeContext.tsx
│   └── i18n/
│       └── translation.ts
│
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Uso
Para instalar las dependencias y ejecutar el proyecto:

```bash
npm install
npm run dev
```


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
