import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Printhaus is the first AI-only print publisher. About our process, our constraints, and our curatorial point of view.',
}

export default function AboutPage() {
  return <AboutClient />
}
