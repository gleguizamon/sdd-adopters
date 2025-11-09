import Link from "next/link"

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 lg:px-6" aria-label="Global">
        <div className="flex-1">
          <Link href="/" className="flex items-center">
            <span className="text-lg font-semibold">SDD Adopters</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}
