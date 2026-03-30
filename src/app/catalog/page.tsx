import type { Metadata } from 'next'
import SectionHeader from '@/components/sections/SectionHeader'
import PrintGrid from '@/components/sections/PrintGrid'
import { prints, getPrintsBySeries } from '@/content/prints'

export const metadata: Metadata = {
  title: 'Catalogue',
  description:
    'All Printhaus limited-edition archival prints. Browse by series, medium, and availability.',
}

export default function CatalogPage() {
  const seriesMap = getPrintsBySeries()
  const seriesNames = Object.keys(seriesMap)

  return (
    <div style={{ paddingTop: '56px' }}>
      {/* ── Header ──────────────────────────────────────────── */}
      <div
        className="mx-auto px-6 md:px-10 lg:px-16"
        style={{ maxWidth: '1920px', paddingTop: '64px', paddingBottom: '48px' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p
              className="font-mono uppercase tracking-widest opacity-40 mb-4"
              style={{ fontSize: '0.6875rem' }}
            >
              Catalogue
            </p>
            <h1
              className="font-display leading-tight"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                letterSpacing: '-0.03em',
              }}
            >
              {prints.length} works.
              <br />
              All limited. All archival.
            </h1>
          </div>
        </div>
      </div>

      {/* ── All prints ──────────────────────────────────────── */}
      <div
        style={{
          borderTop: '1px solid var(--color-warm-gray)',
          paddingTop: '64px',
        }}
      >
        <div
          className="mx-auto px-6 md:px-10 lg:px-16"
          style={{ maxWidth: '1920px', paddingBottom: '120px' }}
        >
          {/* Series groups */}
          {seriesNames.map((series, i) => (
            <div
              key={series}
              style={{ marginBottom: i < seriesNames.length - 1 ? '96px' : 0 }}
            >
              <SectionHeader
                title={series}
                className="mb-10"
              />
              <PrintGrid prints={seriesMap[series]} columns={3} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
