'use client'

import { useEffect, useState } from 'react'
import { HorizontalGameScroll } from './HorizontalGameScroll'
import { Game, Category } from '@/lib/types'
import { categories } from '@/lib/mock-data'

interface CategoryWithGames extends Category {
  games: Game[]
  loading: boolean
  page: number
}

export function GamesCategorySection() {
  const [gamesByCategory, setGamesByCategory] = useState<CategoryWithGames[]>(
    categories.map(cat => ({
      ...cat,
      games: [],
      loading: true,
      page: 1,
    }))
  )

  // Fetch initial games
  useEffect(() => {
    const fetchAllCategories = async () => {
      const updated = [...gamesByCategory]

      for (let i = 0; i < categories.length; i++) {
        const category = categories[i]

        try {
          const response = await fetch(
            `/api/games?categoryId=${category.id}&page=1&num=8`
          )

          const games = await response.json()

          updated[i] = {
            ...category,
            games,
            loading: false,
            page: 1,
          }

          setGamesByCategory([...updated])
        } catch (error) {
          console.error(`Error fetching games for ${category.id}:`, error)

          updated[i] = {
            ...category,
            games: [],
            loading: false,
            page: 1,
          }

          setGamesByCategory([...updated])
        }
      }
    }

    fetchAllCategories()
  }, [])

  // Load more games
  const handleLoadMore = async (categoryId: string) => {
    try {
      const category = gamesByCategory.find(cat => cat.id === categoryId)

      if (!category) return

      const nextPage = category.page + 1

      const response = await fetch(
        `/api/games?categoryId=${categoryId}&page=${nextPage}&num=8`
      )

      const newGames = await response.json()

      setGamesByCategory(prev =>
        prev.map(cat =>
          cat.id === categoryId
            ? {
                ...cat,
                games: [...cat.games, ...newGames],
                page: nextPage,
              }
            : cat
        )
      )
    } catch (error) {
      console.error(`Error loading more games for ${categoryId}:`, error)
    }
  }

  return (
    <div className="space-y-4">
      {gamesByCategory
        .filter(cat => cat.games.length > 0 || cat.loading)
        .map(category => (
          <div key={category.id} className="max-w-full">
            <HorizontalGameScroll
              title={category.name}
              games={category.games}
              categoryId={category.id}
              isLoading={category.loading}
              onLoadMore={() => handleLoadMore(category.id)}
            />
          </div>
        ))}
    </div>
  )
}