// app/api/games/route.ts

// In-memory cache
const cache = new Map<string, { data: any; timestamp: number }>()

const CACHE_DURATION = 30 * 60 * 1000 // 30 mins

function getCache(key: string) {
  const cached = cache.get(key)

  if (!cached) return null

  const isExpired =
    Date.now() - cached.timestamp > CACHE_DURATION

  if (isExpired) {
    cache.delete(key)
    return null
  }

  return cached.data
}

function setCache(key: string, data: any) {
  cache.set(key, {
    data,
    timestamp: Date.now(),
  })
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    const page = searchParams.get('page') || '1'
    const num = searchParams.get('num') || '49'

    const cacheKey = `games-${page}-${num}`

    // Return cached data
    const cached = getCache(cacheKey)

    if (cached) {
      return Response.json(cached)
    }

    // GameMonetize API
    const apiUrl = `https://gamemonetize.com/feed.php?format=0&num=${num}&page=${page}`

    // Using AllOrigins to bypass CORS
    const response = await fetch(
      `https://api.allorigins.win/raw?url=${encodeURIComponent(apiUrl)}`,
      {
        next: {
          revalidate: 1800,
        },
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch games')
    }

    const data = await response.json()

    // Some responses return array directly
    const games = Array.isArray(data)
      ? data
      : data.data || []

    // Cache
    setCache(cacheKey, games)

    return Response.json(games)
  } catch (error) {
    console.error('Games API Error:', error)

    return Response.json(
      {
        error: 'Failed to fetch games',
      },
      {
        status: 500,
      }
    )
  }
}