'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { sectionReveal } from '@/lib/animations'

interface SectionHeaderProps {
  title: string
  viewAllHref?: string
  viewAllLabel?: string
  className?: string
}

export default function SectionHeader({
  title,
  viewAllHref,
  viewAllLabel = 'View all',
  className = '',
}: SectionHeaderProps) {
  const shouldReduce = useReducedMotion()

  const variants = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : sectionReveal

  return (
    <motion.div
      className={`flex items-baseline justify-between ${className}`}
      style={{ borderBottom: '1px solid var(--color-warm-gray)', paddingBottom: '16px' }}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2
        className="font-display"
        style={{ fontSize: 'clamp(1.25rem, 2vw, 1.875rem)', letterSpacing: '-0.01em' }}
      >
        {title}
      </h2>

      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="nav-link font-mono uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity"
          style={{ fontSize: '0.6875rem' }}
        >
          {viewAllLabel} →
        </Link>
      )}
    </motion.div>
  )
}
