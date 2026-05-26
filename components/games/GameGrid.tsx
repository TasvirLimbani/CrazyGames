'use client'

import { Game } from '@/lib/types'
import { GameCard } from './GameCard'

interface GameGridProps {
  games: Game[]
  columns?: number
}

export function GameGrid({ games, columns = 4 }: GameGridProps) {
  const gridColsClass = {
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    5: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
    6: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
  }

  return (
    <div className={`grid ${gridColsClass[columns as keyof typeof gridColsClass]} gap-4`}>
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  )
}
