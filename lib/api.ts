// GameMonetize API Service

const API_BASE_URL = 'https://gamemonetize.com/feed.php'

// Rate limiting
let lastRequestTime = 0
const MIN_REQUEST_INTERVAL = 500 // 500ms between requests

export interface GameMonetizeResponse {
  id: string
  title: string
  description: string
  instructions: string
  url: string
  category: string
  tags: string
  thumb: string
  width: string
  height: string
}

// Mapping of category names to GameMonetize category IDs
export const categoryMapping: Record<string, number> = {
  'io': 53,
  '2player': 2,
  '3d': 3,
  'action': 4,
  'adventure': 5,
  'arcade': 1,
  'babyhazel': 6,
  'bejeweled': 7,
  'boys': 8,
  'clicker': 9,
  'cooking': 10,
  'girls': 11,
  'hypercasual': 12,
  'multiplayer': 2,
  'puzzle': 13,
  'racing': 14,
  'shooting': 15,
  'soccer': 16,
  'sports': 17,
  'stickman': 18,
}

/**
 * Wait for rate limit
 */
async function waitForRateLimit(): Promise<void> {
  const now = Date.now()
  const timeSinceLastRequest = now - lastRequestTime
  
  if (timeSinceLastRequest < MIN_REQUEST_INTERVAL) {
    await new Promise(resolve => 
      setTimeout(resolve, MIN_REQUEST_INTERVAL - timeSinceLastRequest)
    )
  }
  
  lastRequestTime = Date.now()
}

/**
 * Retry logic for failed requests
 */
async function fetchWithRetry(
  url: string,
  maxRetries: number = 2
): Promise<Response> {
  let lastError: Error | null = null
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      await waitForRateLimit()
      const response = await fetch(url, { timeout: 10000 })
      
      // If rate limited, wait and retry
      if (response.status === 429) {
        const retryAfter = response.headers.get('Retry-After')
        const waitTime = retryAfter ? parseInt(retryAfter) * 1000 : 2000
        
        if (attempt < maxRetries) {
          console.warn(`Rate limited. Waiting ${waitTime}ms before retry...`)
          await new Promise(resolve => setTimeout(resolve, waitTime))
          continue
        }
      }
      
      return response
    } catch (error) {
      lastError = error as Error
      if (attempt < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, 1000))
        continue
      }
    }
  }
  
  throw lastError || new Error('Failed to fetch after retries')
}

/**
 * Fetch games from GameMonetize API
 * @param categoryId - Category ID (optional)
 * @param page - Page number (default 1)
 * @param num - Number of games per page (default 50)
 */
export async function fetchGamesFromAPI(
  categoryId?: number,
  page: number = 1,
  num: number = 100
): Promise<GameMonetizeResponse[]> {
  try {
    const params = new URLSearchParams({
      format: '0',
      num: num.toString(),
      page: page.toString(),
    })

    if (categoryId) {
      params.append('category', categoryId.toString())
    }

    const url = `${API_BASE_URL}?${params.toString()}`
    const response = await fetchWithRetry(url)

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`)
    }

    const data = await response.json()
    return Array.isArray(data) ? data : [data]
  } catch (error) {
    console.error('Error fetching games from API:', error)
    return []
  }
}

/**
 * Fetch games by category
 */
export async function fetchGamesByCategory(
  categoryId: string,
  page: number = 1,
  num: number = 100
): Promise<GameMonetizeResponse[]> {
  const gmCategoryId = categoryMapping[categoryId]
  if (!gmCategoryId) {
    console.warn(`Category ${categoryId} not found in mapping`)
    return []
  }

  return fetchGamesFromAPI(gmCategoryId, page, num)
}

/**
 * Fetch all games
 */
export async function fetchAllGames(
  page: number = 1,
  num: number = 100
): Promise<GameMonetizeResponse[]> {
  return fetchGamesFromAPI(undefined, page, num)
}
