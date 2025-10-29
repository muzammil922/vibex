# AI Agency Landing Page

A modern, responsive AI Agency landing page built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Dark UI with gradient effects and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Components**: 
  - Tubelight navigation bar with smooth transitions
  - Rainbow button with animated gradient
  - Scroll-triggered animations using Framer Motion
- **Sections**:
  - Hero section with animated scroll effects
  - Services showcase with hover animations
  - Project portfolio with image galleries
  - Contact CTA with multiple contact methods

## Tech Stack

- **React 18+** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **Lucide React** for icons

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Project Structure

```
src/
├── components/
│   └── ui/
│       ├── container-scroll-animation.tsx
│       ├── rainbow-button.tsx
│       └── tubelight-navbar.tsx
├── sections/
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Showcase.tsx
│   └── ContactCTA.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Customization

The project uses CSS custom properties for easy color customization. You can modify the color scheme by updating the variables in `src/index.css`:

```css
:root {
  --color-1: 0 100% 63%;    /* Red */
  --color-2: 270 100% 63%;  /* Purple */
  --color-3: 210 100% 63%;  /* Blue */
  --color-4: 195 100% 63%;  /* Cyan */
  --color-5: 90 100% 63%;   /* Green */
}
```

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.