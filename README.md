# AI-Boost Pro

Plantilla premium para negocios de inteligencia artificial. Está pensada para agencias, estudios, consultores y productos de IA que necesitan una presencia visual sólida con herramientas interactivas listas para personalizar.

## Qué incluye

- Landing page premium responsive con estética editorial y tecnológica.
- Selector persistente de idiomas: español, inglés, francés, alemán, portugués e italiano.
- Chatbot IA de demostración.
- Resumidor de textos.
- Generador de contenido para blogs y FAQs.
- Generador de imágenes con modo simulado.
- Secciones de plataforma, herramientas, beneficios, precios y contacto.
- Favicon de marca y scrollbar personalizado.
- Integraciones API preparadas para OpenAI y Stability AI.
- Modo demo activo por defecto para probar la plantilla sin consumir créditos.

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- App Router

## Estructura

```text
src/app/
├── api/
│   ├── openai/route.ts
│   └── stability_ai/route.ts
├── components/
│   ├── AIChatbot.tsx
│   ├── AIContentGenerator.tsx
│   ├── AIImageGenerator.tsx
│   ├── AITextSummarizer.tsx
│   ├── CTAButton.tsx
│   ├── Footer.tsx
│   ├── LanguageProvider.tsx
│   └── Navbar.tsx
├── contact/page.tsx
├── services/page.tsx
├── globals.css
├── icon.svg
├── layout.tsx
└── page.tsx
```

Los recursos públicos se encuentran en `public/`. Las claves y la configuración de IA se gestionan desde `src/app/lib/` y nunca deben exponerse en componentes del cliente.

## Inicio rápido

Desde esta carpeta (`ai-boost-pro`):

```bash
npm install
npm run dev
```

Abre `http://localhost:3000` en el navegador. Si el puerto está ocupado, Next.js elegirá automáticamente otro puerto disponible.

Para generar una build de producción:

```bash
npm run build
npm run start
```

## Configuración de APIs

Crea un archivo `.env.local` en la raíz del proyecto y añade las claves necesarias según las rutas API que quieras activar. Sin claves, la plantilla continúa funcionando en modo demo.

Nunca publiques `.env.local` ni incluyas claves privadas en el frontend.

## Idiomas

El idioma elegido se guarda en `localStorage` con la clave `ai-boost-language`. Para añadir otro idioma, agrega su traducción al catálogo de `src/app/components/LanguageProvider.tsx` y una opción en `Navbar.tsx`.

## Licencias sugeridas

- Personal: **79 USD**
- Studio / agencia: **149 USD**

Estos precios son orientativos y pueden modificarse en `src/app/page.tsx`.

## Contacto

Para consultas o demos personalizadas: [info@aiboostpro.com](mailto:info@aiboostpro.com)
