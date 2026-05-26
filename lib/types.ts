export type BadgeType = 'top' | 'hot' | 'updated' | 'originals'

export interface Game {
  id: string
  title: string
  description: string
  thumbnail: string
  images: string[]
  rating: number
  players: number
  category: string[]
  tags: string[]
  badge?: BadgeType
  releaseDate: Date
  playCount: number
}

export interface Category {
  id: string
  name: string
  icon: string
  description: string
}
