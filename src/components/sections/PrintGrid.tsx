'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { printGrid } from '@/lib/animations'
import PrintCard from '@/components/ui/PrintCard'
import type { Print } from '@/content/prints'

interface PrintGridProps {
  prints: Print[]
  columns?: 2 | 3 | 4
  className?: string
}

export default function PrintGrid({ prints, columns = 3, className = '' }: PrintGridProps) {
  const shouldReduce = useReducedMotion()

  const containerVariants = shouldReduce
    ? { hidden: {}, visible: {} }
    : printGrid

  const colClass =
    columns === 4 ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
    : columns === 3 ? 'grid-cols-2 md:grid-cols-2 lg:grid-cols-3'
    : 'grid-cols-1 md:grid-cols-2'

  return (
    <motion.div
      className={`grid ${colClass} gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-14 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      {prints.map(print => (
        <PrintCard key={print.id} print={print} />
      ))}
    </motion.div>
  )
}
