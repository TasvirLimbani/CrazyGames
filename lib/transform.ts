import { Game } from './types'
import { GameMonetizeResponse } from './api'

/**
 * Transform GameMonetize API response to our Game interface
 */
export function transformGameMonetizeData(data: GameMonetizeResponse): Game {
  return {
    id: data.id,
    title: data.title,
    description: data.description.replace(/&mdash;/g, '—').replace(/&nbsp;/g, ' '),
    thumbnail: data.thumb,
    images: [data.thumb],
    rating: 4.5, // Default rating since API doesn't provide it
    players: 1000, // Default players count
    category: [data.category.toLowerCase().replace(/\s+/g, '')],
    tags: data.tags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0),
    releaseDate: new Date(),
    playCount: 10000,
  }
}

/**
 * Transform array of GameMonetize responses
 */
export function transformGamesData(data: GameMonetizeResponse[]): Game[] {
  return data.map(transformGameMonetizeData)
}
