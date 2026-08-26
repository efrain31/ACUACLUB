# ACUACLUB - Gimnasio y Centro de Bienestar Deportivo

Sitio web moderno de ACUACLUB, un gimnasio y centro de bienestar deportivo, desarrollado con React, Vite y TypeScript.

## 📋 Características

- **Diseño Responsivo**: Optimizado para iPhone 15 Pro, iPhone 12, tablets y desktop
- **React 19.2.7**: Framework moderno con componentes reutilizables
- **Vite 8.1.1**: Bundler rápido y eficiente
- **TypeScript**: Type safety completo
- **Navegación Flotante**: Bottom nav en móvil con solo iconos
- **Carruseles Automáticos**: Imágenes y productos con rotación automática
- **Secciones Dinámicas**:
  - Hero con WhatsApp integrado
  - Descubre nuestro enfoque
  - Conocimiento y tendencias
  - Planes nutricionales
  - Instalaciones con carrusel
  - Fisioterapia con galería de imágenes
  - Productos filtrados por categoría
  - FAQ interactivo
  - Planes de membresía
  - Footer con mapa y ubicación

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Preview de producción
npm run preview
```

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── common/           # Componentes reutilizables
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Button.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── BottomNav.tsx
│   └── sections/         # Componentes de secciones
│       ├── Hero.tsx
│       ├── Facilities.tsx
│       ├── Physiotherapy.tsx
│       └── Products.tsx
├── hooks/               # Custom React hooks
│   ├── useAccordion.ts
│   ├── useCarousel.ts
│   └── useScrollSection.ts
├── constants/           # Datos constantes
│   ├── pricingPlans.ts
│   ├── products.ts
│   └── testimonials.ts
├── styles/              # Estilos CSS
│   ├── global.css
│   ├── variables.css
│   └── original-styles.css
├── types/               # Tipos TypeScript
│   └── index.ts
└── App.tsx             # Componente principal
```

## 🎨 Diseño y Estilos

- **Sistema de Variables CSS**: Colores, tipografía y espaciado centralizados
- **Responsive Design**: Media queries para iPhone (390px), móvil (480px), tablet (768px) y desktop
- **Componentes Modales**: Tarjetas, botones y secciones reutilizables
- **Animaciones Suaves**: Transiciones y efectos hover elegantes

## 📱 Dispositivos Soportados

- iPhone 15 Pro (393 x 852 px)
- iPhone 12 (390 x 844 px)
- Tablets (768px+)
- Desktop (1024px+)

## 🔧 Tecnologías

- React 19.2.7
- Vite 8.1.1
- TypeScript 5.9.3
- CSS3 con variables
- Font Awesome 6.4.0
- Google Maps Embed

## 📄 Licencia

© 2024 ACUACLUB. Todos los derechos reservados.
