'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { heroEntryHidden, heroEntryVisible, sectionReveal, type AnimValue } from '@/lib/animations'
import SectionHeader from '@/components/sections/SectionHeader'
import PrintGrid from '@/components/sections/PrintGrid'
import type { Print } from '@/content/prints'

interface Props {
  print: Print
  relatedPrints: Print[]
}

export default function PrintDetailClient({ print, relatedPrints }: Props) {
  const shouldReduce = useReducedMotion()

  const hi: AnimValue = shouldReduce ? { opacity: 0 } : heroEntryHidden
  function an(delay: number): AnimValue {
    return shouldReduce
      ? { opacity: 1, transition: { duration: 0.4 } }
      : heroEntryVisible(delay)
  }

  return (
    <>
      {/* ── Main layout ─────────────────────────────────────── */}
      <div
        className="mx-auto px-6 md:px-10 lg:px-16"
        style={{ maxWidth: '1920px', paddingTop: '64px' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

          {/* Left: Image */}
          <motion.div
            className="lg:col-span-7 relative"
            style={{ aspectRatio: '4/5', minHeight: '400px' }}
            initial={hi}
            animate={an(0)}
          >
            <Image
              src={print.imageSrc}
              alt={print.imageAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/OBDPQAIhwMnHMnFdgAAAABJRU5ErkJggg=="
            />
          </motion.div>

          {/* Right: Info */}
          <div className="lg:col-span-5 flex flex-col justify-between py-0 lg:py-4">
            <div>
              {/* Breadcrumb */}
              <motion.div
                className="flex gap-2 items-center mb-8 opacity-40"
                initial={hi}
                animate={an(0)}
              >
                <Link
                  href="/catalog"
                  className="nav-link font-mono uppercase tracking-widest"
                  style={{ fontSize: '0.6875rem' }}
                >
                  Catalogue
                </Link>
                <span className="font-mono" style={{ fontSize: '0.6875rem' }}>·</span>
                <span className="font-mono uppercase tracking-widest" style={{ fontSize: '0.6875rem' }}>
                  {print.series}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                className="font-display leading-tight mb-4"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3.5rem)', letterSpacing: '-0.02em' }}
                initial={hi}
                animate={an(0.1)}
              >
                {print.title}
              </motion.h1>

              {/* Tagline */}
              <motion.p
                className="font-sans opacity-60 leading-relaxed mb-10"
                style={{ fontSize: '1rem' }}
                initial={hi}
                animate={an(0.2)}
              >
                {print.description}
              </motion.p>

              {/* Edition metadata table */}
              <motion.div
                style={{
                  borderTop: '1px solid var(--color-warm-gray)',
                  paddingTop: '24px',
                  marginBottom: '32px',
                }}
                initial={hi}
                animate={an(0.28)}
              >
                {[
                  ['Edition', print.edition],
                  ['Medium', print.medium],
                  ['Dimensions', print.dimensions],
                  ['Year', String(print.year)],
                  ['Author', print.artist],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between"
                    style={{
                      borderBottom: '1px solid var(--color-warm-gray)',
                      paddingTop: '12px',
                      paddingBottom: '12px',
                    }}
                  >
                    <span
                      className="font-mono uppercase tracking-widest opacity-40"
                      style={{ fontSize: '0.6875rem' }}
                    >
                      {label}
                    </span>
                    <span className="font-mono text-right" style={{ fontSize: '0.6875rem', maxWidth: '60%' }}>
                      {value}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Long description */}
              <motion.div
                className="font-sans opacity-60 leading-relaxed mb-12"
                style={{ fontSize: '0.9375rem' }}
                initial={hi}
                animate={an(0.34)}
              >
                {print.longDescription.split('\n\n').map((para, i) => (
                  <p key={i} style={{ marginBottom: i < print.longDescription.split('\n\n').length - 1 ? '1em' : 0 }}>
                    {para}
                  </p>
                ))}
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div initial={hi} animate={an(0.4)}>
              {print.available ? (
                <div className="flex items-center justify-between">
                  <span
                    className="font-display"
                    style={{ fontSize: '2rem', letterSpacing: '-0.02em' }}
                  >
                    €{print.price}
                  </span>
                  <button
                    className="font-sans px-8 py-3 transition-opacity hover:opacity-70"
                    style={{
                      backgroundColor: 'var(--color-ink)',
                      color: 'var(--color-parchment)',
                      fontSize: '0.875rem',
                    }}
                  >
                    Inquire about this edition
                  </button>
                </div>
              ) : (
                <div
                  style={{
                    borderTop: '1px solid var(--color-warm-gray)',
                    paddingTop: '24px',
                  }}
                >
                  <p className="font-mono uppercase tracking-widest opacity-40" style={{ fontSize: '0.6875rem' }}>
                    This edition is sold out. Join the list for future releases.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Related works ───────────────────────────────────── */}
      {relatedPrints.length > 0 && (
        <div
          className="mx-auto px-6 md:px-10 lg:px-16"
          style={{ maxWidth: '1920px', paddingTop: '96px', paddingBottom: '120px' }}
        >
          <SectionHeader
            title={`More from ${print.series}`}
            viewAllHref="/catalog"
            className="mb-10"
          />
          <PrintGrid prints={relatedPrints} columns={3} />
        </div>
      )}
    </>
  )
}
