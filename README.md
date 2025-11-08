# SDD Adopters

A modern Next.js boilerplate with the latest features including app router, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- ⚡ **Next.js 16** - Latest version with app router
- 🎨 **Tailwind CSS v4** - Utility-first CSS framework
- 🧩 **shadcn/ui** - Beautiful, accessible component library
- 📘 **TypeScript** - Type safety and better developer experience
- 🔍 **ESLint** - Code linting and quality checks
- 🎯 **Import Aliases** - Clean imports with `@/` prefix
- 📁 **Organized Folder Structure** - Clean and scalable architecture

## Folder Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   └── card.tsx
│   └── example-card.tsx    # Example component
├── lib/                    # Utility functions
│   └── utils.ts            # Common utilities (cn helper)
└── hooks/                  # Custom React hooks
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

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

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
