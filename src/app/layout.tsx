import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, Fragment_Mono } from 'next/font/google'
import '@/styles/globals.css'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/layout/Footer'
import PageTransition from './PageTransition'

// ─── Font Loading ──────────────────────────────────────────────
// NOTE: Replace with licensed Canela, Suisse Int'l, and iA Writer Mono
// when font files are available. Place them in /public/fonts/
// and update via next/font/local.

const displayFont = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display-loaded',
  display: 'swap',
  weight: ['400', '500'],
  style: ['normal', 'italic'],
})

const sansFont = Inter({
  subsets: ['latin'],
  variable: '--font-sans-loaded',
  display: 'swap',
  weight: ['300', '400', '500'],
})

const monoFont = Fragment_Mono({
  subsets: ['latin'],
  variable: '--font-mono-loaded',
  display: 'swap',
  weight: ['400'],
})

// ─── Metadata ─────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: 'Printhaus — The first AI-only print publisher',
    template: '%s — Printhaus',
  },
  description:
    'Printhaus publishes limited-edition archival prints authored by AI, curated by humans. Release cadences. Editorial standards. A point of view.',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://printhaus.com',
    siteName: 'Printhaus',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F7F4EF',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${sansFont.variable} ${monoFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect for font performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        style={{
          fontFamily: `var(--font-sans-loaded), var(--font-sans)`,
        }}
      >
        {/* Override CSS custom properties with loaded fonts */}
        <style>{`
          :root {
            --font-display: var(--font-display-loaded), 'Canela', 'Playfair Display', Georgia, serif;
            --font-sans: var(--font-sans-loaded), 'Suisse Int\\'l', 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            --font-mono: var(--font-mono-loaded), 'iA Writer Mono', 'Fragment Mono', 'Courier New', monospace;
          }
        `}</style>

        <Navigation />

        <PageTransition>
          <main>{children}</main>
        </PageTransition>

        <Footer />
      </body>
    </html>
  )
}
