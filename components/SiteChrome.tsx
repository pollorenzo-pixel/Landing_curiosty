import Link from "next/link";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/[0.06] bg-black/35 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="text-sm font-semibold tracking-[0.28em] text-vexis-stone">
          VEXIS
        </Link>
        <div className="flex items-center gap-5 text-xs uppercase tracking-[0.2em] text-white/45">
          <Link href="/#framework" className="transition hover:text-white">
            Framework
          </Link>
          <Link href="/whitepaper" className="transition hover:text-white">
            Thesis
          </Link>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] px-5 py-10 text-xs text-white/35 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} VEXIS. Mental performance thesis.</p>
        <p>Awareness → Intuition → Execution</p>
      </div>
    </footer>
  );
}
