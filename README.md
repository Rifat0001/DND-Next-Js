# DND Construction Technicals — Home Page

Next.js rebuild of the [dndcs.co.uk](https://dndcs.co.uk) home page.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · lucide-react

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run lint
npm run format   # prettier, also sorts tailwind classes
```

## Structure

```
public/images/           images used on the page

src/
├── app/
│   ├── layout.tsx       html shell, fonts, header/footer, metadata
│   ├── page.tsx         home page, lists the sections in order
│   └── globals.css      tailwind import, brand colours, fonts, keyframes
├── components/
│   ├── layout/          Header, MobileMenu, Footer, Logo
│   ├── sections/        one component per section
│   │   └── journey/     interactive rain-to-drain section
│   ├── ui/              small reusable pieces
│   └── OrganizationSchema.tsx
├── data/                all page content (text, links, image paths)
├── types/               TypeScript types for the data
└── lib/utils.ts         small helpers
```
