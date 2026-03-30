'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { heroEntryHidden, heroEntryVisible, sectionReveal, type AnimValue } from '@/lib/animations'

const principles = [
  {
    number: '01',
    title: 'Publisher before platform.',
    body: 'Every design decision should feel like it came from a print publisher, not a SaaS company. Think release notes, not product listings.',
  },
  {
    number: '02',
    title: 'The print is the hero.',
    body: 'Product photography formats: (a) print flat on paper, studio white background, (b) print framed in context — editorial quality, (c) detail/texture shot. Three formats. No stock lifestyle.',
  },
  {
    number: '03',
    title: 'Typography carries the editorial voice.',
    body: 'Headline copy should be long-form, considered, literary — not taglines. "A study in constraint: twelve prints, one palette, one AI." Not "Shop our new collection."',
  },
  {
    number: '04',
    title: 'Edition logic everywhere.',
    body: 'Every print has an edition size, a number, a date, a medium. This language signals seriousness. It separates publishing from printing.',
  },
  {
    number: '05',
    title: 'No interruptions.',
    body: 'No popups. No SALE badges. No countdown timers. Scarcity is communicated through edition numbers, not urgency copy.',
  },
  {
    number: '06',
    title: 'Neutral technology.',
    body: "The AI origin of the work should be stated clearly, not celebrated loudly. It's the process, not the point. Like how a printer's colophon doesn't compete with the book's cover.",
  },
]

export default function AboutClient() {
  const shouldReduce = useReducedMotion()

  const hi: AnimValue = shouldReduce ? { opacity: 0 } : heroEntryHidden
  function an(delay: number): AnimValue {
    return shouldReduce
      ? { opacity: 1, transition: { duration: 0.4 } }
      : heroEntryVisible(delay)
  }

  const sv = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : sectionReveal

  return (
    <div style={{ paddingTop: '56px' }}>
      {/* ── Opening ─────────────────────────────────────────── */}
      <section
        className="mx-auto px-6 md:px-10 lg:px-16"
        style={{ maxWidth: '1920px', paddingTop: '96px', paddingBottom: '80px' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8 lg:col-start-2">
            <motion.p
              className="font-mono uppercase tracking-widest opacity-40 mb-6"
              style={{ fontSize: '0.6875rem' }}
              initial={hi}
              animate={an(0)}
            >
              About
            </motion.p>

            <motion.h1
              className="font-display leading-tight mb-12"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', letterSpacing: '-0.03em' }}
              initial={hi}
              animate={an(0.1)}
            >
              The first AI-only
              <br />
              print publisher.
            </motion.h1>

            <motion.p
              className="font-sans opacity-60 leading-relaxed"
              style={{ fontSize: '1.125rem', maxWidth: '38em' }}
              initial={hi}
              animate={an(0.2)}
            >
              Printhaus publishes limited-edition archival prints authored by AI,
              curated and produced by humans. We operate with editorial standards,
              release cadences, and a curatorial point of view. The AI is the author.
              The craft is human. The colophon is honest about both.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Manifesto section ───────────────────────────────── */}
      <section
        id="manifesto"
        style={{
          borderTop: '1px solid var(--color-warm-gray)',
          paddingTop: '96px',
          paddingBottom: '96px',
        }}
      >
        <div
          className="mx-auto px-6 md:px-10 lg:px-16"
          style={{ maxWidth: '1920px' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <motion.p
                className="font-mono uppercase tracking-widest opacity-40"
                style={{ fontSize: '0.6875rem' }}
                variants={sv}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                Manifesto
              </motion.p>
            </div>

            <div className="lg:col-span-7 lg:col-start-4">
              <motion.blockquote
                className="font-display leading-tight mb-12"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', letterSpacing: '-0.02em' }}
                variants={sv}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                "Not a marketplace. Not a store. A publisher — with editorial standards,
                release cadences, and a curatorial point of view."
              </motion.blockquote>

              <motion.p
                className="font-sans opacity-60 leading-relaxed"
                style={{ fontSize: '1rem', maxWidth: '38em' }}
                variants={sv}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                The distinction between selling art and publishing it must be visible
                in every design decision — from the grid to the typography to the copy tone.
                We don&apos;t sell. We publish. Each release is considered, constrained, and documented.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Principles ──────────────────────────────────────── */}
      <section
        style={{
          borderTop: '1px solid var(--color-warm-gray)',
          paddingTop: '96px',
          paddingBottom: '96px',
        }}
      >
        <div
          className="mx-auto px-6 md:px-10 lg:px-16"
          style={{ maxWidth: '1920px' }}
        >
          <motion.p
            className="font-mono uppercase tracking-widest opacity-40 mb-16"
            style={{ fontSize: '0.6875rem' }}
            variants={sv}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Six principles
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {principles.map((p) => (
              <motion.div
                key={p.number}
                variants={sv}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="flex gap-6 items-start">
                  <span
                    className="font-mono opacity-30 shrink-0 mt-1"
                    style={{ fontSize: '0.6875rem' }}
                  >
                    {p.number}
                  </span>
                  <div>
                    <h3
                      className="font-display mb-2"
                      style={{ fontSize: '1.25rem', letterSpacing: '-0.01em' }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="font-sans opacity-60 leading-relaxed"
                      style={{ fontSize: '0.9375rem' }}
                    >
                      {p.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ─────────────────────────────────────────── */}
      <section
        style={{
          borderTop: '1px solid var(--color-warm-gray)',
          paddingTop: '96px',
          paddingBottom: '120px',
        }}
      >
        <div
          className="mx-auto px-6 md:px-10 lg:px-16"
          style={{ maxWidth: '1920px' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <motion.p
                className="font-mono uppercase tracking-widest opacity-40"
                style={{ fontSize: '0.6875rem' }}
                variants={sv}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                Process
              </motion.p>
            </div>

            <div className="lg:col-span-7 lg:col-start-4 space-y-6">
              {[
                ['Generation', 'Works are generated through constrained creative processes — specific prompts, restricted palettes, defined formats. The AI operates within rules. The rules are the craft.'],
                ['Curation', "Not every generated work becomes a Printhaus edition. Works are evaluated against editorial criteria: coherence, originality, technical quality, and alignment with the release's thesis."],
                ['Production', 'Selected works are prepared for print by specialists. Colour profiles verified, papers selected, test prints evaluated. Editions are numbered, signed, and accompanied by a certificate.'],
                ['Publication', 'Each release is announced, documented, and archived. The process is part of the work. The colophon includes generation parameters.'],
              ].map(([title, body]) => (
                <motion.div
                  key={title}
                  style={{ borderBottom: '1px solid var(--color-warm-gray)', paddingBottom: '24px' }}
                  variants={sv}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <p
                    className="font-mono uppercase tracking-widest opacity-40 mb-3"
                    style={{ fontSize: '0.6875rem' }}
                  >
                    {title}
                  </p>
                  <p
                    className="font-sans opacity-60 leading-relaxed"
                    style={{ fontSize: '0.9375rem' }}
                  >
                    {body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
