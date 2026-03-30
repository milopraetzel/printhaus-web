import type { Variants, Transition } from 'framer-motion'

// Simple animation value type that avoids TS complexity with TargetAndTransition
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnimValue = Record<string, any>

// ─── Easing Curves ────────────────────────────────────────────
export const ease = {
  reveal:      [0.16, 1, 0.3, 1] as const,
  exit:        [0.4, 0, 1, 1] as const,
  interactive: [0.25, 0.46, 0.45, 0.94] as const,
  transition:  [0.65, 0, 0.35, 1] as const,
}

// ─── Duration Scale ───────────────────────────────────────────
export const duration = {
  instant:    0.1,
  fast:       0.2,
  base:       0.4,
  slow:       0.6,
  deliberate: 0.8,
}

// ─── Shared Transition Presets ────────────────────────────────
export const transitionReveal: Transition = {
  duration: duration.base,
  ease: ease.reveal,
}

export const transitionSlow: Transition = {
  duration: duration.slow,
  ease: ease.reveal,
}

export const transitionFast: Transition = {
  duration: duration.fast,
  ease: ease.interactive,
}

export const transitionPage: Transition = {
  duration: duration.slow,
  ease: ease.reveal,
}

// ─── Print Card Reveal ────────────────────────────────────────
export const printReveal: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionReveal,
  },
}

// ─── Print Grid (stagger container) ──────────────────────────
export const printGrid: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

// ─── Hero Entry ───────────────────────────────────────────────
export const heroEntryHidden: AnimValue = { opacity: 0, y: 20 }

export function heroEntryVisible(delay: number = 0): AnimValue {
  return {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.slow,
      ease: ease.reveal,
      delay,
    },
  }
}

// Legacy export for backward compat — use heroEntryHidden/heroEntryVisible instead
export const heroEntry: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: transitionSlow },
}

// ─── Section Title Reveal ─────────────────────────────────────
export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionReveal,
  },
}

// ─── Text Line Reveal ─────────────────────────────────────────
export const textLineReveal: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionFast,
  },
}

export const textBlockReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.05,
    },
  },
}

// ─── Print Card Hover ─────────────────────────────────────────
export const printCardHover: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.03,
    transition: transitionFast,
  },
}

// ─── Page Wrapper ─────────────────────────────────────────────
export const pageWrapper: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: transitionSlow },
  exit:    { opacity: 0, transition: { duration: duration.fast, ease: ease.exit } },
}

// ─── Filter Panel Slide ───────────────────────────────────────
export const filterPanel: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: ease.transition },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2, ease: ease.exit },
  },
}

// ─── Toast Notification ───────────────────────────────────────
export const toast: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: ease.reveal },
  },
  exit: {
    opacity: 0,
    y: 8,
    transition: { duration: 0.2, ease: ease.exit },
  },
}

// ─── Reduced Motion Fallback ──────────────────────────────────
export function fadeOnly(opacity: number = 1): AnimValue {
  return { opacity, transition: transitionFast }
}
