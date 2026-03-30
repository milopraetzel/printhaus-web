export interface Print {
  id: string
  slug: string
  title: string
  series: string
  artist: string
  year: number
  medium: string
  dimensions: string
  edition: string
  editionNumber: number
  editionSize: number
  price: number
  description: string
  longDescription: string
  imageSrc: string
  imageAlt: string
  available: boolean
  tags: string[]
}

export const prints: Print[] = [
  {
    id: '001',
    slug: 'topography-of-silence-i',
    title: 'Topography of Silence I',
    series: 'Negative Space Studies',
    artist: 'Printhaus AI',
    year: 2026,
    medium: 'Archival pigment print on Hahnemühle Photo Rag 308 gsm',
    dimensions: '50 × 70 cm',
    edition: 'Ed. 1/50',
    editionNumber: 1,
    editionSize: 50,
    price: 280,
    description: 'A study in constraint: twelve tonal fields, one ochre horizon.',
    longDescription: `The first work in the Negative Space Studies series explores the relationship between presence and absence — how much a surface can communicate when most of it remains untouched.\n\nGenerated from a constrained palette of twelve tonal values, the composition finds its tension at the horizon: a single warm ochre line drawn across the lower third. Everything above is gradation. Everything below is ground.\n\nPrinted on Hahnemühle Photo Rag, a 100% cotton rag paper with a slight texture that recalls hand-made papers from the European tradition.`,
    imageSrc: '/prints/topography-of-silence-i.jpg',
    imageAlt: 'Abstract tonal landscape with ochre horizon line, archival pigment print',
    available: true,
    tags: ['minimal', 'landscape', 'tonal'],
  },
  {
    id: '002',
    slug: 'cartography-ii',
    title: 'Cartography II',
    series: 'Negative Space Studies',
    artist: 'Printhaus AI',
    year: 2026,
    medium: 'Archival pigment print on Hahnemühle Photo Rag 308 gsm',
    dimensions: '70 × 100 cm',
    edition: 'Ed. 3/30',
    editionNumber: 3,
    editionSize: 30,
    price: 480,
    description: 'Dense contour lines read as elevation, as text, as interference.',
    longDescription: `The second Cartography work interrogates how data becomes landscape — how the neutral language of mapping systems acquires presence when the thing being mapped is invented.\n\nThree hundred contour lines, generated at irregular intervals, describe a topography that does not exist. The visual effect oscillates between scientific rigour and pure abstraction depending on viewing distance.`,
    imageSrc: '/prints/cartography-ii.jpg',
    imageAlt: 'Dense topographic contour lines, archival pigment print',
    available: true,
    tags: ['abstract', 'data', 'contour'],
  },
  {
    id: '003',
    slug: 'field-study-amber',
    title: 'Field Study: Amber',
    series: 'Field Studies',
    artist: 'Printhaus AI',
    year: 2026,
    medium: 'Archival pigment print on Canson Edition Etching Rag 310 gsm',
    dimensions: '40 × 60 cm',
    edition: 'Ed. 7/50',
    editionNumber: 7,
    editionSize: 50,
    price: 220,
    description: 'Warm ochres suspended above a near-white ground.',
    longDescription: `The Field Studies are chromatic meditations — single-hue investigations where the entire composition serves one colour. Amber is the warmest of the series, built from seventeen amber-to-gold values arranged in a floating composition that reads as geological specimen at a distance and pure colour relationship up close.`,
    imageSrc: '/prints/field-study-amber.jpg',
    imageAlt: 'Warm amber tonal study, archival pigment print on etching rag',
    available: false,
    tags: ['colour', 'minimal', 'warm'],
  },
  {
    id: '004',
    slug: 'interval-four',
    title: 'Interval Four',
    series: 'Intervals',
    artist: 'Printhaus AI',
    year: 2026,
    medium: 'Archival pigment print on Hahnemühle Photo Rag 308 gsm',
    dimensions: '60 × 90 cm',
    edition: 'Ed. 2/25',
    editionNumber: 2,
    editionSize: 25,
    price: 560,
    description: 'Measured pause between four vertical registers of density.',
    longDescription: `The Intervals series takes musical structure as its generative framework — specifically the concept of rest, of silence between notes. Each work is built from vertical registers of varying density, with the spaces between them carrying as much compositional weight as the marks themselves.\n\nInterval Four uses four columns of fine-grained texture, each at a different density, separated by white channels of precisely measured width. The mathematics are audible if you know how to listen.`,
    imageSrc: '/prints/interval-four.jpg',
    imageAlt: 'Four vertical registers of density with white intervals, archival pigment print',
    available: true,
    tags: ['geometric', 'structure', 'rhythm'],
  },
  {
    id: '005',
    slug: 'margin-notes-i',
    title: 'Margin Notes I',
    series: 'Margin Notes',
    artist: 'Printhaus AI',
    year: 2026,
    medium: 'Archival pigment print on Somerset Velvet 300 gsm',
    dimensions: '30 × 40 cm',
    edition: 'Ed. 12/100',
    editionNumber: 12,
    editionSize: 100,
    price: 140,
    description: 'Notational fragments at the edge of legibility.',
    longDescription: `The smallest works in the Printhaus catalogue. The Margin Notes series occupies the format of a manuscript page — and like marginalia, these works exist at the edge of legibility. Marks that could be script, could be gesture, could be both.\n\nMade for the person who understands that the notes in the margin are often more interesting than the text.`,
    imageSrc: '/prints/margin-notes-i.jpg',
    imageAlt: 'Notational fragments at the boundary of legibility, archival pigment print',
    available: true,
    tags: ['text', 'gesture', 'small'],
  },
  {
    id: '006',
    slug: 'release-one-complete',
    title: 'Release One (Complete Set)',
    series: 'Release One',
    artist: 'Printhaus AI',
    year: 2026,
    medium: '5× Archival pigment prints, various papers',
    dimensions: 'Various',
    edition: 'Ed. 4/10',
    editionNumber: 4,
    editionSize: 10,
    price: 1200,
    description: 'The complete first release as a collector set. Ten editions worldwide.',
    longDescription: `The first complete Printhaus release as a collector set: five works, five papers, five scales. Issued in a grey cloth clamshell box with typeset essay and certificate of authenticity.\n\nTen sets exist in the world. This is number four.`,
    imageSrc: '/prints/release-one-set.jpg',
    imageAlt: 'Printhaus Release One collector set, five archival pigment prints in clamshell box',
    available: true,
    tags: ['set', 'collector', 'release-one'],
  },
]

export function getPrint(slug: string): Print | undefined {
  return prints.find(p => p.slug === slug)
}

export function getAvailablePrints(): Print[] {
  return prints.filter(p => p.available)
}

export function getPrintsBySeries(): Record<string, Print[]> {
  return prints.reduce((acc, print) => {
    if (!acc[print.series]) acc[print.series] = []
    acc[print.series].push(print)
    return acc
  }, {} as Record<string, Print[]>)
}
