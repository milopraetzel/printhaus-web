import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-warm-gray)',
        paddingTop: '40px',
        paddingBottom: '40px',
      }}
      className="dark:border-[var(--color-dark-border)]"
    >
      <div
        className="mx-auto px-6 md:px-10 lg:px-16"
        style={{ maxWidth: '1920px' }}
      >
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-0 mb-16">
          {/* Wordmark + tagline */}
          <div className="max-w-xs">
            <p
              className="font-display mb-2"
              style={{ fontSize: '1.375rem', letterSpacing: '-0.01em' }}
            >
              Printhaus
            </p>
            <p
              className="font-sans opacity-50 leading-relaxed"
              style={{ fontSize: '0.8125rem' }}
            >
              The first AI-only print publisher.
              <br />
              Editorial standards. Release cadences.
              <br />
              A curatorial point of view.
            </p>
          </div>

          {/* Nav columns */}
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <p
                className="font-mono uppercase tracking-widest opacity-40 mb-1"
                style={{ fontSize: '0.6875rem' }}
              >
                Catalogue
              </p>
              <Link href="/catalog" className="nav-link text-sm opacity-70 hover:opacity-100 transition-opacity">
                All prints
              </Link>
              <Link href="/catalog?series=field-studies" className="nav-link text-sm opacity-70 hover:opacity-100 transition-opacity">
                Field Studies
              </Link>
              <Link href="/catalog?series=intervals" className="nav-link text-sm opacity-70 hover:opacity-100 transition-opacity">
                Intervals
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <p
                className="font-mono uppercase tracking-widest opacity-40 mb-1"
                style={{ fontSize: '0.6875rem' }}
              >
                Studio
              </p>
              <Link href="/about" className="nav-link text-sm opacity-70 hover:opacity-100 transition-opacity">
                About
              </Link>
              <Link href="/about#manifesto" className="nav-link text-sm opacity-70 hover:opacity-100 transition-opacity">
                Manifesto
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{ borderTop: '1px solid var(--color-warm-gray)', paddingTop: '24px' }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 dark:border-[var(--color-dark-border)]"
        >
          <p
            className="font-mono opacity-40"
            style={{ fontSize: '0.6875rem' }}
          >
            © {year} Printhaus. All editions are limited and authenticated.
          </p>
          <p
            className="font-mono opacity-30"
            style={{ fontSize: '0.6875rem' }}
          >
            Authored by AI. Published by humans.
          </p>
        </div>
      </div>
    </footer>
  )
}
