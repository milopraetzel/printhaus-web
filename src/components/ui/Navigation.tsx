'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { filterPanel } from '@/lib/animations'
import clsx from 'clsx'

const navLinks = [
  { href: '/catalog', label: 'Catalogue' },
  { href: '/about', label: 'About' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-normal">
      <div
        style={{
          borderBottom: '1px solid var(--color-warm-gray)',
          backgroundColor: 'var(--color-parchment)',
        }}
        className="dark:bg-[var(--color-dark-bg)] dark:border-[var(--color-dark-border)]"
      >
        <nav
          className="mx-auto flex items-center justify-between px-6 md:px-10 lg:px-16"
          style={{ height: '56px', maxWidth: '1920px' }}
        >
          {/* Wordmark */}
          <Link
            href="/"
            className="font-display tracking-tight select-none"
            style={{ fontSize: '1.0625rem', letterSpacing: '-0.01em' }}
          >
            Printhaus
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={clsx(
                  'nav-link font-sans text-sm tracking-wide',
                  pathname === href && 'opacity-40'
                )}
                style={{ fontSize: '0.8125rem' }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className="block w-5 h-px bg-current transition-all duration-200"
              style={{ transform: menuOpen ? 'rotate(45deg) translateY(5px)' : 'none' }}
            />
            <span
              className="block w-5 h-px bg-current transition-all duration-200"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-px bg-current transition-all duration-200"
              style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-5px)' : 'none' }}
            />
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            variants={filterPanel}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              backgroundColor: 'var(--color-parchment)',
              borderBottom: '1px solid var(--color-warm-gray)',
            }}
            className="md:hidden dark:bg-[var(--color-dark-bg)]"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="font-sans text-base"
                  style={{ fontSize: '1.0625rem' }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
