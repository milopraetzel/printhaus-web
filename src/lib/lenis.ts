'use client'

import { useEffect } from 'react'

let lenisInstance: unknown = null

export function useLenis() {
  useEffect(() => {
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null
    let rafId: number

    async function init() {
      // Dynamic import to avoid SSR issues
      const { default: Lenis } = await import('lenis')

      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      }) as unknown as { raf: (time: number) => void; destroy: () => void }

      lenisInstance = lenis

      function raf(time: number) {
        lenis!.raf(time)
        rafId = requestAnimationFrame(raf)
      }

      rafId = requestAnimationFrame(raf)
    }

    init()

    return () => {
      cancelAnimationFrame(rafId)
      if (lenis) lenis.destroy()
      lenisInstance = null
    }
  }, [])
}

export function getLenis() {
  return lenisInstance
}
