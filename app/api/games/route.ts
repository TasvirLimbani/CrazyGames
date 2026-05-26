import { fetchGamesFromAPI, fetchGamesByCategory } from '@/lib/api'
import { transformGamesData } from '@/lib/transform'

// In-memory cache for API responses
const cache = new Map<string, { data: any; timestamp: number }>()
const CACHE_DURATION = 30 * 60 * 1000 // 30 minutes

function getCacheKey(categoryId?: string, page?: number): string {
  return `games:${categoryId || 'all'}:${page || 1}`
}

function getFromCache(key: string): any | null {
  const cached = cache.get(key)
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data
  }
  
  if (cached) {
    cache.delete(key)
  }
  
  return null
}

function setCache(key: string, data: any): void {
  cache.set(key, { data, timestamp: Date.now() })
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const categoryId = searchParams.get('categoryId') || undefined
  const page = parseInt(searchParams.get('page') || '1', 10)
  const num = parseInt(searchParams.get('num') || '50', 10)

  const cacheKey = getCacheKey(categoryId, page)
  
  // Check cache first
  const cachedData = getFromCache(cacheKey)
  if (cachedData) {
    return Response.json(cachedData)
  }

  try {
    let games
    if (categoryId) {
      games = await fetchGamesByCategory(categoryId, page, num)
    } else {
      games = await fetchGamesFromAPI(undefined, page, num)
    }

    const transformedGames = transformGamesData(games)
    
    // Cache the response
    setCache(cacheKey, transformedGames)
    
    return Response.json(transformedGames)
  } catch (error) {
    console.error('Error in games API route:', error)
    return Response.json(
      { error: 'Failed to fetch games' },
      { status: 500 }
    )
  }
}
