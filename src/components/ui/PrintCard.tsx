'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { printReveal, printCardHover } from '@/lib/animations'
import type { Print } from '@/content/prints'

interface PrintCardProps {
  print: Print
  size?: 'default' | 'large' | 'small'
  showSeries?: boolean
}

export default function PrintCard({ print, size = 'default', showSeries = true }: PrintCardProps) {
  const shouldReduce = useReducedMotion()

  const cardVariants = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : printReveal

  const hoverVariants = shouldReduce ? {} : printCardHover

  const aspectRatio =
    size === 'large' ? 'aspect-[3/4]'
    : size === 'small' ? 'aspect-[4/5]'
    : 'aspect-[4/5]'

  return (
    <motion.article
      className="print-card group"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <Link href={`/prints/${print.slug}`} className="block">
        {/* Image */}
        <motion.div
          className={`${aspectRatio} relative bg-[var(--color-surface)] overflow-visible mb-4`}
          variants={hoverVariants}
          initial="rest"
          whileHover="hover"
        >
          <Image
            src={print.imageSrc}
            alt={print.imageAlt}
            fill
            className="object-cover"
            sizes={
              size === 'large'
                ? '(max-width: 768px) 100vw, 50vw'
                : '(max-width: 768px) 50vw, 33vw'
            }
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/OBDPQAIhwMnHMnFdgAAAABJRU5ErkJggg=="
          />

          {/* Sold out overlay */}
          {!print.available && (
            <div
              className="absolute inset-0 flex items-end p-4"
              style={{ backgroundColor: 'rgba(247,244,239,0.7)' }}
            >
              <span
                className="font-mono uppercase tracking-widest"
                style={{ fontSize: '0.6875rem', color: 'var(--color-ink)' }}
              >
                Sold out
              </span>
            </div>
          )}
        </motion.div>

        {/* Metadata */}
        <div className="space-y-1">
          {showSeries && (
            <p
              className="font-mono uppercase tracking-widest opacity-50"
              style={{ fontSize: '0.6875rem' }}
            >
              {print.series}
            </p>
          )}
          <h3
            className="font-display leading-tight"
            style={{ fontSize: '1.0625rem' }}
          >
            {print.title}
          </h3>
          <div className="flex items-center justify-between">
            <span
              className="font-mono opacity-50"
              style={{ fontSize: '0.6875rem' }}
            >
              {print.edition} · {print.dimensions}
            </span>
            <span
              className="font-sans"
              style={{ fontSize: '0.875rem' }}
            >
              {print.available ? `€${print.price}` : '—'}
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
