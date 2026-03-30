import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-start justify-center min-h-screen mx-auto px-6 md:px-10 lg:px-16"
      style={{ maxWidth: '1920px', paddingTop: '56px' }}
    >
      <p
        className="font-mono uppercase tracking-widest opacity-40 mb-4"
        style={{ fontSize: '0.6875rem' }}
      >
        404
      </p>
      <h1
        className="font-display mb-6"
        style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
      >
        Not found.
      </h1>
      <Link
        href="/"
        className="nav-link font-sans opacity-60 hover:opacity-100 transition-opacity"
        style={{ fontSize: '0.9375rem' }}
      >
        ← Return to Printhaus
      </Link>
    </div>
  )
}
