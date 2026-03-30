'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { heroEntryHidden, heroEntryVisible, type AnimValue } from '@/lib/animations'
import type { Print } from '@/content/prints'

interface HeroProps {
  print: Print
}

export default function Hero({ print }: HeroProps) {
  const shouldReduce = useReducedMotion()

  const hi: AnimValue = shouldReduce ? { opacity: 0 } : heroEntryHidden
  function an(delay: number): AnimValue {
    return shouldReduce
      ? { opacity: 1, transition: { duration: 0.4 } }
      : heroEntryVisible(delay)
  }

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ paddingTop: '56px' }}
    >
      <div
        className="mx-auto px-6 md:px-10 lg:px-16"
        style={{ maxWidth: '1920px' }}
      >
        <div className="flex flex-col lg:flex-row lg:gap-0 lg:items-end min-h-[calc(100vh-56px)]">

          {/* Left: editorial text */}
          <div className="lg:w-[45%] flex flex-col justify-end pb-12 lg:pb-20 pt-16 lg:pt-0">

            <motion.p
              className="font-mono uppercase tracking-widest mb-6"
              style={{ fontSize: '0.6875rem', color: 'var(--color-terracotta)' }}
              initial={hi}
              animate={an(0)}
            >
              {print.series} · Release One
            </motion.p>

            <motion.h1
              className="font-display leading-[0.9] mb-8"
              style={{ fontSize: 'clamp(3rem, 6.5vw, 6.5rem)', letterSpacing: '-0.03em' }}
              initial={hi}
              animate={an(0.12)}
            >
              {print.title}
            </motion.h1>

            <motion.p
              className="font-sans opacity-60 max-w-sm leading-relaxed mb-10"
              style={{ fontSize: '1rem' }}
              initial={hi}
              animate={an(0.24)}
            >
              {print.description}
            </motion.p>

            <motion.div
              className="flex items-center gap-8"
              initial={hi}
              animate={an(0.36)}
            >
              <Link
                href={`/prints/${print.slug}`}
                className="nav-link font-sans"
                style={{ fontSize: '0.9375rem' }}
              >
                View edition →
              </Link>
              <span
                className="font-mono opacity-40"
                style={{ fontSize: '0.6875rem' }}
              >
                {print.edition} · {print.dimensions}
              </span>
            </motion.div>
          </div>

          {/* Right: print image */}
          <motion.div
            className="lg:w-[55%] relative"
            style={{ height: 'clamp(400px, 80vh, 900px)' }}
            initial={hi}
            animate={an(0)}
          >
            <Image
              src={print.imageSrc}
              alt={print.imageAlt}
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/OBDPQAIhwMnHMnFdgAAAABJRU5ErkJggg=="
            />
          </motion.div>
        </div>

        {/* Edition metadata bar */}
        <div
          style={{
            borderTop: '1px solid var(--color-warm-gray)',
            paddingTop: '16px',
            paddingBottom: '16px',
          }}
        >
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {[
              ['Medium', print.medium],
              ['Dimensions', print.dimensions],
              ['Edition', `${print.edition} of ${print.editionSize}`],
              ['Year', String(print.year)],
              ['Price', print.available ? `€${print.price}` : 'Sold out'],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-2 items-baseline">
                <span
                  className="font-mono uppercase tracking-widest opacity-40"
                  style={{ fontSize: '0.6875rem' }}
                >
                  {label}
                </span>
                <span className="font-mono" style={{ fontSize: '0.6875rem' }}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
