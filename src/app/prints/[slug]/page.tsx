import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPrint, prints } from '@/content/prints'
import PrintDetailClient from './PrintDetailClient'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return prints.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const print = getPrint(slug)
  if (!print) return {}

  return {
    title: print.title,
    description: print.description,
    openGraph: {
      images: [{ url: print.imageSrc, width: 1200, height: 900 }],
    },
  }
}

export default async function PrintDetailPage({ params }: PageProps) {
  const { slug } = await params
  const print = getPrint(slug)
  if (!print) notFound()

  const relatedPrints = prints
    .filter(p => p.id !== print.id && p.series === print.series)
    .slice(0, 3)

  return (
    <div style={{ paddingTop: '56px' }}>
      <PrintDetailClient print={print} relatedPrints={relatedPrints} />
    </div>
  )
}
