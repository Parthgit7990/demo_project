## Test – Next.js Starter (WordPress-ready)

Starter for Next.js 15 + React 19 with Tailwind CSS and ESLint + Prettier. Optionally fetches content from a WordPress site via the REST API.

### Requirements

- Node V20+
- npm

### Setup

1. Install dependencies

```bash
npm install
```

2. Development server

```bash
npm run dev
```

Open http://localhost:3000.

3. Build and start

```bash
npm run build
npm start
```

### Optional: WordPress integration

If you plan to load images or content from WordPress, create `.env` in the project root add bellow ENV:

```bash
NEXT_PUBLIC_SITE_NAME=Tech 365
NEXT_PUBLIC_USERNAME=userName
NEXT_PUBLIC_PASSWORD=Password
NEXT_PUBLIC_WORDPRESS_API_URL=http://wp.com/wp-json
NEXT_PUBLIC_WORDPRESS_SITE_URL=http://wp.com
```

If you use Next Image for remote media, ensure your WordPress host is allowed in `next.config.mjs` under `images.remotePatterns`.

### Scripts

- `npm run dev`: Start Next.js in dev mode (Turbopack)
- `npm run build`: Production build (Turbopack)
- `npm start`: Start production server
- `npm run lint`: Run ESLint (flat config)
- `npm run format`: Prettier format

### Learn More

- Next.js Docs: https://nextjs.org/docs
- WordPress REST API: https://developer.wordpress.org/rest-api/
