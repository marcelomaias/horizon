import type { Payload, PayloadRequest } from 'payload'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const MEDIA_DIR = path.resolve(dirname, 'media')
const SNAPSHOT_PATH = path.resolve(dirname, 'snapshot.json')

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getFile(fileName: string, mimeType: string) {
  const filePath = path.resolve(MEDIA_DIR, fileName)
  const data = fs.readFileSync(filePath)
  return { name: fileName, data, mimetype: mimeType, size: data.byteLength }
}

function remapIds(value: unknown, idMap: Map<number, number | string>): unknown {
  if (Array.isArray(value)) return value.map((v) => remapIds(v, idMap))
  if (value !== null && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([k, v]) => [k, remapIds(v, idMap)]),
    )
  }
  if (typeof value === 'number' && idMap.has(value)) return idMap.get(value)
  return value
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  if (!fs.existsSync(SNAPSHOT_PATH)) {
    throw new Error(`snapshot.json not found at ${SNAPSHOT_PATH}`)
  }

  const snapshot = JSON.parse(fs.readFileSync(SNAPSHOT_PATH, 'utf-8'))

  // ── 1. Clear ──────────────────────────────────────────────────────────────
  payload.logger.info('— Clearing existing pages and media...')

  await payload.updateGlobal({
    slug: 'header',
    data: { navItems: [] },
    context: { disableRevalidate: true },
  })
  await payload.updateGlobal({
    slug: 'footer',
    data: { navItems: [] },
    context: { disableRevalidate: true },
  })

  await payload.db.deleteVersions({ collection: 'pages', req, where: {} })
  await payload.db.deleteMany({ collection: 'pages', req, where: {} })
  await payload.db.deleteMany({ collection: 'media', req, where: {} })

  // ── 2. Media ──────────────────────────────────────────────────────────────
  payload.logger.info('— Seeding media...')

  const idMap = new Map<number, number | string>()

  for (const m of snapshot.collections.media) {
    const file = getFile(m.filename, m.mimeType)
    const created = await payload.create({
      collection: 'media',
      data: { alt: m.alt ?? '', caption: m.caption ?? null },
      file,
      req,
    })
    idMap.set(m.id, created.id)
    payload.logger.info(`  ✓ ${m.filename}`)
  }

  // ── 3. Pages ──────────────────────────────────────────────────────────────
  payload.logger.info('— Seeding pages...')

  for (const page of snapshot.collections.pages) {
    const { id: _id, ...pageData } = page
    const remapped = remapIds(pageData, idMap) as Record<string, unknown>

    await payload.create({
      collection: 'pages',
      depth: 0,
      data: remapped as any,
      draft: false,
      req,
      context: { disableRevalidate: true },
    })
    payload.logger.info(`  ✓ ${page.slug}`)
  }

  // ── 4. Globals ────────────────────────────────────────────────────────────
  payload.logger.info('— Seeding globals...')

  await payload.updateGlobal({
    slug: 'header',
    data: remapIds(snapshot.globals.header, idMap) as any,
    req,
  })

  await payload.updateGlobal({
    slug: 'footer',
    data: remapIds(snapshot.globals.footer, idMap) as any,
    req,
  })

  payload.logger.info('✅ Seeded successfully!')
}
