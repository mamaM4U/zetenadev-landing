# ZetenaDev Landing

Astro landing page for **zetenadev.com**.

## Stack

- Astro static output
- React island for Void/Prime theme switch
- Tailwind CSS
- English root (`/`) and Indonesian version (`/id/`)

## Development

```bash
npm install
npm run dev
npm run build
```

## Deployment

Deployment image: `registry.zetena.my.id/zetenadev-landing:latest`

Compose project name is explicitly set to `zetenadev-landing` to avoid Docker Compose project-name collisions.

Required Docker network: `zetena-network`.
