// src/app/game/[id]/page.tsx

'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Maximize, ArrowLeft } from 'lucide-react'

interface Game {
  id: string
  title: string
  description: string
  instructions: string
  url: string
  category: string
  tags: string
  thumb: string
}

interface Props {
  params: Promise<{
    id: string
  }>
}

export default function GameDetailsPage({
  params,
}: Props) {
  const [game, setGame] = useState<Game | null>(null)
  const [relatedGames, setRelatedGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadGame = async () => {
      const { id } = await params

      try {
        // Try to find the game by searching multiple pages from the feed
        let found: Game | null = null
        let allGames: Game[] = []

        // Search up to 10 pages (configurable)
        for (let page = 1; page <= 10 && !found; page++) {
          const res = await fetch(`/api/games?page=${page}&num=100`)
          if (!res.ok) continue
          const games = await res.json()

          if (Array.isArray(games)) {
            allGames = allGames.concat(games)
            found = games.find((item: Game) => String(item.id) === String(id)) || null
          }
        }

        setGame(found)

        if (found) {
          const related = allGames
            .filter((item: Game) => item.category === found!.category && item.id !== found!.id)
            .slice(0, 5)

          setRelatedGames(related)
        }
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadGame()
  }, [params])

  // Fullscreen
  const handleFullscreen = () => {
    const iframe = document.getElementById(
      'gameFrame'
    ) as HTMLIFrameElement

    if (iframe?.requestFullscreen) {
      iframe.requestFullscreen()
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center text-3xl">
        Loading...
      </div>
    )
  }

  if (!game) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center text-4xl font-bold">
        Game Not Found
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-4 mt-10 pb-20">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2">

            {/* GAME PLAYER */}
            <div className="bg-black rounded-3xl overflow-hidden border border-white/10">

              {/* PLAYER TOP */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">

                <div className="flex items-center gap-4">
                  <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
                    <ArrowLeft className="w-5 h-5" />
                  </Link>

                  <div className="rounded-lg overflow-hidden relative">
                    <h2 className="text-xl font-semibold">
                      {game.title}
                    </h2>

                    <p className="text-sm text-muted-foreground">
                      {game.category}
                    </p>
                  </div>
                </div>

                {/* FULLSCREEN (icon-only) */}
                <button
                  onClick={handleFullscreen}
                  aria-label="Enter fullscreen"
                  className="bg-purple-600 hover:bg-purple-700 p-2 rounded-xl text-sm transition flex items-center justify-center"
                >
                  <Maximize className="w-5 h-5 text-white" />
                </button>

              </div>

              {/* GAME */}
              <iframe
                id="gameFrame"
                src={game.url}
                width="100%"
                height="750"
                allowFullScreen
                className="w-full bg-black"
              />

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            {/* TITLE */}
            <h1 className="text-4xl font-bold mb-4">
              {game.title}
            </h1>

            {/* CATEGORY */}
            <div className="mb-6">
              <span className="bg-purple-600 text-sm px-4 py-2 rounded-full">
                {game.category}
              </span>
            </div>

            {/* DESCRIPTION */}
            <div className="mb-8">

              <h2 className="text-xl font-semibold mb-3">
                Description
              </h2>

              <p className="text-muted-foreground leading-8">
                {game.description}
              </p>

            </div>

            {/* INSTRUCTIONS */}
            <div className="mb-8">

              <h2 className="text-xl font-semibold mb-3">
                Instructions
              </h2>

              <p className="text-muted-foreground leading-8">
                {game.instructions}
              </p>

            </div>

            {/* TAGS */}
            <div>

              <h2 className="text-xl font-semibold mb-3">
                Tags
              </h2>

              <div className="flex flex-wrap gap-3">

                {game.tags
                  ?.split(',')
                  .map((tag, index) => (
                    <span
                      key={index}
                      className="bg-white/10 px-4 py-2 rounded-full text-sm"
                    >
                      {tag.trim()}
                    </span>
                  ))}

              </div>

            </div>

          </div>

        </div>

        {/* RELATED GAMES */}
        <div className="mt-20">

          <h2 className="text-3xl font-bold mb-8">
            Similar {game.category} Games
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">

            {relatedGames.map((item) => (

              <Link
                key={item.id}
                href={`/game/${item.id}`}
                className="group"
              >

                <div className="relative h-[150px] rounded-2xl overflow-hidden border border-white/10">

                  <Image
                    src={item.thumb}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />

                  <div className="absolute bottom-0 left-0 right-0 p-3">

                    <h3 className="text-sm font-semibold line-clamp-2">
                      {item.title}
                    </h3>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </div>

    </div>
  )
}