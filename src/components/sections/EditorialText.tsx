'use client'

import type { CSSProperties } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { textLineReveal, textBlockReveal } from '@/lib/animations'

interface EditorialTextProps {
  children: string
  className?: string
  style?: CSSProperties
  variant?: 'p' | 'blockquote'
}

export default function EditorialText({
  children,
  className = '',
  style,
  variant = 'p',
}: EditorialTextProps) {
  const shouldReduce = useReducedMotion()

  const lines = children.split('\n').filter(Boolean)

  const containerVariants = shouldReduce ? { hidden: {}, visible: {} } : textBlockReveal
  const lineVariants = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : textLineReveal

  return (
    <motion.div
      className={className}
      style={style}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {lines.map((line, i) => (
        <motion.span
          key={i}
          variants={lineVariants}
          className="block"
          style={{ marginBottom: i < lines.length - 1 ? '0.5em' : 0 }}
        >
          {variant === 'blockquote' && i === 0 ? <em>{line}</em> : line}
        </motion.span>
      ))}
    </motion.div>
  )
}
