# Clavos y Alambres Rosario

Sitio web institucional y catálogo de productos para distribuidora de clavos y alambres en Rosario, Argentina. Venta mayorista y minorista con envíos a todo el país.

## Stack

- **[Astro 5](https://astro.build)** — generador de sitio estático
- **[React 19](https://react.dev)** — componentes interactivos (islands)
- **[Tailwind CSS 4](https://tailwindcss.com)** — estilos utilitarios
- **[Framer Motion 12](https://www.framer.com/motion/)** — animaciones
- **[Cloudflare Workers](https://workers.cloudflare.com)** — hosting + endpoint de contacto
- **[Resend](https://resend.com)** — envío de emails desde el formulario

## Desarrollo local

```bash
bun install
bun run dev
```

## Build y deploy

El deploy es automático al pushear a `master` vía GitHub → Cloudflare Workers.

```bash
bun run build        # genera /dist
npx wrangler deploy  # deploy manual (si es necesario)
```

## Variables de entorno

Configuradas como **Secret** en el dashboard de Cloudflare Workers:

| Variable         | Descripción                                                       |
| ---------------- | ----------------------------------------------------------------- |
| `RESEND_API_KEY` | API key de Resend para envío de emails del formulario de contacto |

## Arquitectura

```
GET /*              → archivos estáticos desde /dist (Cloudflare Assets)
POST /api/contact   → worker.ts → Resend API → clavosyalambres_rosario@hotmail.com
```

El archivo `worker.ts` maneja las requests:

- Rutas que no son `/api/contact` → sirve el sitio estático vía binding `env.ASSETS`
- `POST /api/contact` → valida campos, envía email con Resend

## Estructura del proyecto

```
src/
├── pages/
│   └── index.astro          # página única
├── components/
│   ├── Nav.astro
│   ├── Hero.astro
│   ├── HeroInteractive.tsx  # headline animado (React island)
│   ├── Productos.astro      # catálogo con modal de imágenes
│   ├── PorQueNosotros.astro
│   ├── HighlightsGrid.tsx   # grilla de ventajas (React island)
│   ├── Contacto.astro       # formulario de contacto
│   ├── Footer.astro
│   ├── WhatsAppFloat.astro
│   └── ui/                  # componentes reutilizables (FlipWords, CardHoverEffect, etc.)
├── data/
│   └── productos.ts         # catálogo tipado de productos
├── layouts/
│   └── Layout.astro         # head, SEO, fuentes
└── styles/
    └── global.css

public/
├── Productos/               # imágenes WebP de productos
├── favicon/
├── Hero.webp
├── OG.webp                  # imagen Open Graph para redes sociales
└── robots.txt

worker.ts                    # Cloudflare Worker
wrangler.toml                # configuración de Cloudflare
```

## Catálogo de productos

Definido en `src/data/productos.ts`. Cada producto tiene:

```ts
{
  slug: string        // nombre del archivo en public/Productos/
  nombre: string      // texto en la card
  detalle?: string    // línea secundaria opcional
  categoria: Categoria
  imagenes: string[]  // uno o dos archivos WebP
  whatsapp: string    // texto pre-cargado para WhatsApp
}
```

**Categorías:** Alambres Rurales · Alambre de Púas · Alambres de Construcción · Clavos · Tejidos · Accesorios · Postes y Varillas

## Agregar un producto

1. Copiar la imagen a `public/Productos/` con nombre en formato slug (ej: `alambre-nuevo-x100m.webp`)
2. Agregar la entrada en `src/data/productos.ts`
3. Pushear — el deploy es automático

## SEO

- Sitemap en `/sitemap-index.xml` (generado por `@astrojs/sitemap`)
- Open Graph y Twitter Card configurados en `Layout.astro`
- Google Search Console verificado
- `robots.txt` incluido
