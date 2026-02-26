import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

async function fetchAll(endpoint: string) {
  const res = await fetch(`${BASE_URL}${endpoint}`)
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}: ${res.status}`)
  return res.json()
}

async function main() {
  console.log('Exporting content...')

  const [pages, media, header, footer] = await Promise.all([
    fetchAll('/api/pages?limit=200&depth=2&where[_status][equals]=published'),
    fetchAll('/api/media?limit=500&depth=0'),
    fetchAll('/api/globals/header?depth=2'),
    fetchAll('/api/globals/footer?depth=2'),
  ])

  const snapshot = {
    exportedAt: new Date().toISOString(),
    globals: { header, footer },
    collections: {
      pages: pages.docs,
      media: media.docs,
    },
  }

  const out = path.resolve(dirname, 'snapshot.json')
  fs.writeFileSync(out, JSON.stringify(snapshot, null, 2), 'utf-8')
  console.log(`Done. Pages: ${pages.docs.length}, Media: ${media.docs.length}`)
}

main().catch((err) => {
  console.error('Export failed:', err)
  process.exit(1)
})
