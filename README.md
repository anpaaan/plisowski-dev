# plisowski.dev

Personal portfolio website for Pawel Lisowski - Senior Software Engineer.

**Live:** [plisowski.dev](https://plisowski.dev)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4
- **Runtime:** React 19
- **Deployment:** Coolify (self-hosted)

## Features

- Interactive dot grid background with mouse tracking
- Scroll-triggered reveal animations
- Animated gradient text effects
- Responsive design (mobile-first)
- Performance optimized (passive listeners, tab visibility pause)
- SEO optimized with meta tags and Open Graph

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── projects/          # Projects archive page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Header, SocialLinks
│   ├── sections/          # Hero, About, Experience, Projects, Contact
│   └── ui/                # DotGrid, Icons, ScrollReveal
├── data/
│   └── content.ts         # All portfolio content (easy to edit)
└── hooks/
    └── useScrollReveal.ts # Intersection Observer hook
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/anpaaan/plisowski-dev.git
cd plisowski-dev

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Customization

All content is centralized in `src/data/content.ts`:

- **personalInfo** - Name, title, location, social links, bio
- **skills** - Technical skills by category
- **experience** - Work history
- **projects** - Featured and other projects
- **navigation** - Nav menu items

To update content, simply edit this file - no need to touch components.

## Deployment

### Option 1: Coolify (Recommended for Self-Hosting)

#### 1. Connect GitHub to Coolify

1. Open Coolify dashboard
2. Go to **Sources** → **+ Add**
3. Create a new GitHub App (leave org name empty for personal account)
4. On GitHub, select **Only select repositories** → choose this repo
5. Click **Install**

#### 2. Create Application

1. **Projects** → **+ Add** (or use existing project)
2. **+ New** → **Application**
3. Select your GitHub App as source
4. Select repository: `anpaaan/plisowski-dev`
5. Select branch: `main`

#### 3. Configure Build Settings

| Setting | Value |
|---------|-------|
| Build Pack | `Nixpacks` |
| Port | `3000` |
| Install Command | `npm install` |
| Build Command | `npm run build` |
| Start Command | `npm run start` |

#### 4. Set Domain

1. In application settings, find **Domains**
2. Add your domain (e.g., `plisowski.dev`)
3. Coolify auto-generates SSL via Let's Encrypt

#### 5. DNS Configuration (Cloudflare)

1. Add A record: `@` → your VPS IP
2. Enable proxy (orange cloud) recommended
3. Set SSL mode to **Full (Strict)**

#### 6. Deploy

1. Click **Deploy** in Coolify
2. Auto-deploy is enabled by default for future pushes

### Option 2: Vercel

```bash
npm i -g vercel
vercel
```

### Option 3: Static Export

```bash
# Add to next.config.ts: output: 'export'
npm run build
# Deploy the 'out' folder to any static host
```

## Performance

- **Lighthouse Score:** 95+ across all metrics
- **Canvas animation** pauses when tab is hidden (saves CPU)
- **Passive event listeners** for scroll/mouse events
- **Blur placeholders** for images
- **Static pre-rendering** for all pages

## License

MIT

---

Built with Next.js and deployed on Coolify.
