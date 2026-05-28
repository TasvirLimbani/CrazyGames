'use client'

import Link from 'next/link'
import { GameCard } from './GameCard'
import { Game } from '@/lib/types'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

interface HorizontalGameScrollProps {
    title: string
    games: Game[]
    categoryId?: string
    isLoading?: boolean
    onLoadMore?: () => void
}

export function HorizontalGameScroll({ title, games, categoryId, isLoading = false, onLoadMore }: HorizontalGameScrollProps) {
    return (
        <section className="py-2">
            <div className="flex items-center justify-between mb-2 px-4">
                <h2 className="text-2xl font-bold text-foreground">{title}</h2>
                {categoryId && (
                    <Link href={`/categories/${categoryId}`}>
                    </Link>
                )}
            </div>

            {/* Horizontal Scroll Container */}
            <div className="overflow-x-auto pb-2 -mx-2 px-2 lg:mx-0 lg:px-0">
                <div className="flex gap-4 w-max">
                    {isLoading ? (
                        // Loading skeletons
                        Array.from({ length: 8 }).map((_, i) => (
                            <div key={`skeleton-${i}`} className="flex-shrink-0 w-48">
                                <Skeleton className="h-56 rounded-lg" />
                            </div>
                        ))
                    ) : (
                        // Actual games
                        games.map(game => (
                            <div key={game.id} className="flex-shrink-0 w-48">
                                <GameCard game={game} />
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Load More Button */}
            {onLoadMore && games.length > 0 && !isLoading && (
                <div className="flex justify-center mt-3 px-4">
                    <Button
                        variant="ghost"
                        className="text-primary hover:bg-primary/10"
                        onClick={onLoadMore}
                    >
                        Load More <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                </div>
            )}
        </section>
    )
}
