/**
 * rate-limit.ts
 * Purpose: Basic rate limiting for /api/contact
 */
const storage = new Map<string, { count: number; lastReset: number }>()
const LIMIT = 5
const WINDOW = 60 * 60 * 1000 // 1 hour

export default defineEventHandler((event) => {
  if (!event.path.startsWith('/api/contact')) return

  const ip = getRequestHeader(event, 'x-forwarded-for') || 'unknown'
  const now = Date.now()
  const record = storage.get(ip) || { count: 0, lastReset: now }

  if (now - record.lastReset > WINDOW) {
    record.count = 0
    record.lastReset = now
  }

  if (record.count >= LIMIT) {
    throw createError({
      statusCode: 429,
      statusMessage: 'Too Many Requests. Please try again later.'
    })
  }

  record.count++
  storage.set(ip, record)
})
