# SDD Adopters

AI-powered onboarding platform with gamification. Turn boring tasks into magical quests.

## Features

- ⚡ **Next.js 16** - Latest version with app router
- 🎨 **Tailwind CSS v4** - Utility-first CSS framework with Alcove-inspired warm beige palette
- 🎭 **Framer Motion** - Buttery smooth animations
- 📧 **Resend** - Email service for waitlist notifications
- 🤖 **Botpoison** - Bot protection for forms
- 📘 **TypeScript** - Type safety and better developer experience
- 🎯 **Import Aliases** - Clean imports with `@/` prefix

## Folder Structure

```
src/
├── app/                    # Next.js app router
│   ├── api/                # API routes
│   │   └── waitlist/       # Waitlist endpoint
│   ├── layout.tsx          # Root layout with SEO
│   ├── page.tsx            # Landing page
│   └── globals.css         # Global styles (Alcove colors)
├── components/             # React components
│   └── ui/                 # shadcn/ui components
│       └── button.tsx
└── lib/                    # Utility functions
    └── utils.ts            # Common utilities (cn helper)
public/
├── robots.txt              # SEO robots file
└── sitemap.xml             # SEO sitemap
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gleguizamon/sdd-adopters.git
cd sdd-adopters
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Then edit `.env.local` with your actual API keys:
- **RESEND_API_KEY**: Get from [Resend](https://resend.com/api-keys)
- **NEXT_PUBLIC_BOTPOISON_PUBLIC_KEY**: Get from [Botpoison](https://botpoison.com)
- **BOTPOISON_SECRET_KEY**: Get from [Botpoison](https://botpoison.com)
- **NOTIFICATION_EMAIL**: Your email to receive waitlist notifications

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Adding shadcn/ui Components

This boilerplate comes with Button and Card components pre-installed. To add more shadcn/ui components manually:

1. Browse the [shadcn/ui components](https://ui.shadcn.com/docs/components)
2. Copy the component code to `src/components/ui/`
3. Install any required dependencies

## ESLint Configuration

The project uses Next.js recommended ESLint configuration with TypeScript support. Configuration can be found in `eslint.config.mjs`.

## Tailwind CSS

Tailwind CSS v4 is configured with custom CSS variables for theming. The configuration supports:
- Dark mode
- Custom color scheme
- Responsive design
- Custom utilities

## TypeScript

TypeScript is configured with strict mode and Next.js optimizations. See `tsconfig.json` for full configuration.

## License

MIT
