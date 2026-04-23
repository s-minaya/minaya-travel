# 旅 Minaya Travel

Proyecto de aprendizaje de **Tailwind CSS v4** basado en el curso de Platzi, Curso Básico de Tailwind 2 y 3 —  actualizado al 2026 con ayuda de la documentación oficial y Claude.

---

## 🗾 Sobre el proyecto

Minaya Travel es una web de viajes temática sobre Japón, con lugares poco conocidos para visitar y alojamientos. Incluye versión móvil y desktop, dark mode y un carrusel de destinos recomendados.

El proyecto nació como ejercicio para seguir un curso de Tailwind, pero el curso tenía 4 años de antigüedad y usaba **PostCSS** como herramienta de integración. Como ya tenía experiencia con **Vite** y me siento más cómoda con él, decidí hacer la configuración con Vite en vez de seguir el curso al pie de la letra. Ese fue el primer momento en que me di cuenta de que empiezo a tener criterio propio a la hora de elegir herramientas.

---

## 🚀 Stack

- **React** + **Vite**
- **Tailwind CSS v4**
- **prettier-plugin-tailwindcss** para ordenar clases automáticamente

---

## ⚙️ Instalación

```bash
npm create vite@latest .
npm install
npm install tailwindcss @tailwindcss/vite
npm install -D prettier prettier-plugin-tailwindcss
```

Configura el plugin en `vite.config.js`:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

Importa Tailwind en `src/index.css`:

```css
@import "tailwindcss";
```

---

## 📚 Lo que he aprendido

### Tailwind v4 vs v3 — lo que ha cambiado

El curso estaba basado en Tailwind v3 y muchas cosas ya no funcionan igual. Gracias a la documentación oficial y a Claude pude adaptarlo sin problema. Los cambios más importantes:

| Antes (v3) | Ahora (v4) |
|---|---|
| `npm install tailwindcss postcss autoprefixer` | `npm install tailwindcss @tailwindcss/vite` |
| `tailwind.config.js` obligatorio | No existe, todo va en el CSS |
| `@tailwind base/components/utilities` | `@import "tailwindcss"` |
| `content: [...]` para purge manual | Detección automática |
| PostCSS como intermediario | Plugin nativo de Vite |

### Configuración en `index.css`

En v4 toda la personalización (colores, fuentes, imágenes de fondo) se define directamente en el CSS con `@theme`:

```css
@theme {
  --font-potta-one: "Potta One", sans-serif;
  --color-primary: #c1272d;
  --color-secondary: #f5f0e8;
  --color-tertiary: #1a1a2e;
  --bg-image-shibuya: url("/img/shibuya.jpg");
}
```

### Medidas

Tailwind usa una escala numérica donde **número × 4 = px**. Una vez memorizas que `p-4` = 16px y `p-8` = 32px, el resto sale solo. Para valores que no existen en la escala, se usan corchetes: `w-[350px]`.

### Flexbox y Grid

Flex para layouts de una dimensión (navbars, carruseles), Grid para dos dimensiones (bentos, layouts de página). La combinación de `overflow-x-auto` con `scroll-hidden` y `snap-x snap-mandatory` para el carrusel fue especialmente útil.

### Responsive

Mobile First — se diseña para móvil primero y se añaden breakpoints para pantallas más grandes con prefijos como `lg:`. También se pueden ocultar elementos según el tamaño: `lg:hidden` o `hidden lg:flex`.

### Dark Mode

Primera vez que implemento un dark mode y ha sido más sencillo de lo esperado. En v4 se activa con una línea en el CSS:

```css
@variant dark (&:where(.dark, .dark *));
```

Y se aplica clase a clase con el prefijo `dark:`. El estado se gestiona desde `App.jsx` añadiendo/quitando la clase `dark` al elemento `<html>`.

### SVG Sprite

En vez de importar iconos como archivos o instalar librerías, aprendí a crear un sprite SVG con todos los iconos y llamarlos por id. La ventaja: un solo archivo de red, y el color se controla desde fuera con `currentColor`. Técnicamente es "robar" los paths SVG de las páginas... pero es lo que hay, que me detengan. 🐱‍👤

```jsx
function Icon({ id, size = 24, className = "", type = "fill" }) {
  return (
    <svg width={size} height={size}
      fill={type === "fill" ? "currentColor" : "none"}
      stroke={type === "stroke" ? "currentColor" : "none"}
      className={className}
    >
      <use href={`/assets/sprite.svg#icon-${id}`} />
    </svg>
  );
}
```

### Purge CSS

En v4 es automático. Cuando ejecutas `npm run build`, Vite + Tailwind generan un CSS optimizado que solo incluye las clases que has usado. No hay que configurar nada.

---

## 🧠 Reflexiones personales

### Lo que más me ha gustado de Tailwind

Es **muy consistente**. Una vez aprendes la lógica de la escala numérica y los prefijos, todo sigue el mismo patrón. El desarrollo es rápido porque no tienes que saltar entre archivos.

### Lo que menos me ha convencido

A medida que el proyecto crece, los `className` se vuelven largos y difíciles de leer. Soy muy fan del HTML semántico y me chirría un poco la "dividitis" — esa tendencia a envolver todo en `<div>` sin pensar en la semántica. Es el precio de utility-first.

### Sobre `@apply`

Tailwind permite extraer clases repetidas a estilos personalizados con `@apply`. Lo usé para `.Card` , `.FAQItem`y `.CardTitle` simplemente para conocer la utilidad, pero en un proyecto con React **no era necesario en absoluto** — el propio componente ya es la forma natural de reutilizar estilos. Si una card se repite, creas `<Card />` y listo. El `@apply` tiene más sentido en proyectos sin framework de componentes, como HTML puro.

Pero como dato gracioso, al propio creador de Tailwind, Adam Wathan, no le gusta el `@apply`. Tiene un tweet en el que dice:
> “Confesión: la función apply de Tailwind básicamente solo existe para engañar a las personas que se desaniman ante las largas listas de clases para que prueben el framework. Casi nunca deberías usarlo."

— Adam Wathan  
Fuente: https://x.com/adamwathan/status/1226511611592085504

### Sobre seguir cursos desactualizados

El curso tenía 4 años y Tailwind ha cambiado bastante. En vez de frustarme, lo tomé como una oportunidad para aprender a buscar en la documentación oficial y a tomar mis propias decisiones. Por ejemplo, todo lo de `tailwind.config.js`, `postcss.config.js` y `npx tailwindcss init -p` que pide el curso, en v4 simplemente no existe.

### Crecimiento como desarrolladora

Me hace ilusión ver que cada vez tomo más decisiones propias en vez de copiar el curso. Algunos ejemplos de este proyecto:

- Usar Vite en vez de PostCSS porque me siento más cómoda
- Hacer los componentes `Recommended`, `FAQSection` y `FeaturedStays` dinámicos con un array de datos, en vez de hardcodear cada tarjeta como hace el curso.
- Extraer datos a archivos separados (`places.js`, `stays.js`, `faqs.js`)
- Implementar medidas relativas en lugar de píxeles para que la página se adapte bien en cualquier dispositivo.
- Usar un sprite SVG para los iconos en vez de importar imágenes

---

## 🗂️ Estructura del proyecto

```
minaya-travel/
├── public/
│   ├── assets/
│   │   └── sprite.svg
│   ├── img/
│   │   ├── akihabara.jpg
│   │   ├── aokigahara-forest.jpg
│   │   └── ... (más imágenes)
│   └── favicon.png
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Icon.jsx
│   │   ├── Navbar.jsx
│   │   ├── StayCard.jsx
│   │   └── TabBar.jsx
│   ├── data/
│   │   ├── faqs.js
│   │   ├── places.js
│   │   └── stays.js
│   ├── sections/
│   │   ├── FAQSection.jsx
│   │   ├── FeaturedStays.jsx
│   │   ├── Home.jsx
│   │   └── Recommended.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
└── .prettierrc
```

---

*Hecho con 🍵 y mucho Japón.*