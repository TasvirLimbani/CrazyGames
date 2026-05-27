'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Game } from '@/lib/types'

export function GamesCategorySection() {
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('/api/games?page=1&num=100')
        const data = await response.json()
        setGames(data)
      } catch (error) {
        console.error('Error fetching games:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchGames()
  }, [])

const getCardClass = (index: number, total: number) => {

  // FIX ugly last row
  if (index >= total - 4) {
    return 'row-span-2'
  }

  const patterns = [
    'row-span-2',
    'row-span-3',
    'col-span-2 row-span-2',
    'row-span-2',
    'row-span-4',
    'col-span-2 row-span-3',
    'row-span-2',
    'row-span-3',
  ]

  return patterns[index % patterns.length]
}

  if (loading) {
    return (
      <div className="px-4 py-10 text-center text-white">
        Loading games...
      </div>
    )
  }

  return (
    <div className="px-3 py-5">

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[70px] gap-3 grid-flow-dense">

        {games.map((game: any, index) => (
          <Link
            key={game.id || index}
            href={`/game/${game.id}`}
           className={`group block ${getCardClass(index, games.length)}`}
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#111]">

              {/* IMAGE */}
              <Image
                src={game.thumb || game.thumbnail}
                alt={game.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-300" />

              {/* TITLE */}
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <h3 className="text-white text-xs font-medium line-clamp-1">
                  {game.title}
                </h3>
              </div>

            </div>
          </Link>
        ))}

      </div>

    </div>
  )
}