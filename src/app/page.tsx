import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import SectionHeader from '@/components/sections/SectionHeader'
import PrintGrid from '@/components/sections/PrintGrid'
import EditorialText from '@/components/sections/EditorialText'
import { prints } from '@/content/prints'

export const metadata: Metadata = {
  title: 'Printhaus — The first AI-only print publisher',
}

export default function HomePage() {
  const featuredPrint = prints[0]
  const cataloguePrints = prints.slice(1, 4)
  const availablePrints = prints.filter(p => p.available).slice(0, 3)

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <Hero print={featuredPrint} />

      {/* ── Release One grid ─────────────────────────────────── */}
      <section
        className="mx-auto px-6 md:px-10 lg:px-16"
        style={{ maxWidth: '1920px', paddingTop: '80px', paddingBottom: '80px' }}
      >
        <SectionHeader
          title="Release One"
          viewAllHref="/catalog"
          viewAllLabel="View catalogue"
          className="mb-10"
        />
        <PrintGrid prints={cataloguePrints} columns={3} />
      </section>

      {/* ── Manifesto / Editorial ─────────────────────────────── */}
      <section
        style={{
          borderTop: '1px solid var(--color-warm-gray)',
          borderBottom: '1px solid var(--color-warm-gray)',
          paddingTop: '96px',
          paddingBottom: '96px',
        }}
      >
        <div
          className="mx-auto px-6 md:px-10 lg:px-16"
          style={{ maxWidth: '1920px' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Label column */}
            <div className="lg:col-span-3">
              <p
                className="font-mono uppercase tracking-widest opacity-40"
                style={{ fontSize: '0.6875rem' }}
              >
                Position
              </p>
            </div>

            {/* Text column */}
            <div className="lg:col-span-7 lg:col-start-4">
              <EditorialText
                className="font-display leading-tight mb-8"
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.75rem)',
                  letterSpacing: '-0.02em',
                } as React.CSSProperties}
              >
                {`Printhaus is the first AI-only print publisher.
Not a marketplace. Not a store.
A publisher — with editorial standards, release cadences,
and a curatorial point of view.`}
              </EditorialText>

              <EditorialText
                className="font-sans opacity-60 leading-relaxed"
                style={{ fontSize: '1rem', maxWidth: '38em' } as React.CSSProperties}
              >
                {`The AI is the author, but the craft is human.
Every print is limited, authenticated, and printed on archival paper
by specialists who have been doing this for thirty years.`}
              </EditorialText>
            </div>
          </div>
        </div>
      </section>

      {/* ── Available now ─────────────────────────────────────── */}
      <section
        className="mx-auto px-6 md:px-10 lg:px-16"
        style={{ maxWidth: '1920px', paddingTop: '80px', paddingBottom: '120px' }}
      >
        <SectionHeader
          title="Available"
          viewAllHref="/catalog"
          className="mb-10"
        />
        <PrintGrid prints={availablePrints} columns={3} />
      </section>

      {/* ── Colophon ─────────────────────────────────────────── */}
      <section
        style={{
          borderTop: '1px solid var(--color-warm-gray)',
          paddingTop: '64px',
          paddingBottom: '64px',
        }}
      >
        <div
          className="mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          style={{ maxWidth: '1920px' }}
        >
          <div>
            <p
              className="font-mono uppercase tracking-widest opacity-40 mb-2"
              style={{ fontSize: '0.6875rem' }}
            >
              On process
            </p>
            <p
              className="font-sans opacity-60 max-w-md leading-relaxed"
              style={{ fontSize: '0.875rem' }}
            >
              Every Printhaus work is generated through a constrained
              creative process — specific prompts, restricted palettes,
              defined formats. Then printed on paper, in limited editions.
              The AI is the author. The colophon is honest about it.
            </p>
          </div>

          <a
            href="/about"
            className="nav-link font-mono uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
            style={{ fontSize: '0.6875rem', whiteSpace: 'nowrap' }}
          >
            Read the manifesto →
          </a>
        </div>
      </section>
    </>
  )
}
