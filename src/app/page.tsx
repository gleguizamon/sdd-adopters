import { ExampleCard } from "@/components/example-card"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <main className="flex flex-col items-center gap-8 p-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            SDD Adopters
          </h1>
          <p className="text-muted-foreground max-w-md">
            Next.js 16 boilerplate with app router, TypeScript, Tailwind CSS, and shadcn/ui
          </p>
        </div>
        <ExampleCard />
      </main>
    </div>
  )
}
