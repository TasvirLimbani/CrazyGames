// src/app/game/[id]/page.tsx

'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
        const res = await fetch(
          '/api/games?page=1&num=100'
        )

        const games = await res.json()

        // Current Game
        const currentGame = games.find(
          (item: Game) =>
            String(item.id) === String(id)
        )

        setGame(currentGame)

        // Related Games
        if (currentGame) {
          const related = games
            .filter(
              (item: Game) =>
                item.category === currentGame.category &&
                item.id !== currentGame.id
            )
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
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-3xl">
        Loading...
      </div>
    )
  }

  if (!game) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-4xl font-bold">
        Game Not Found
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#070707] text-white">

      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-4 py-6">

        <Link
          href="/"
          className="text-gray-400 hover:text-white transition"
        >
          ← Back to Games
        </Link>

      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-4 pb-20">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2">

            {/* GAME PLAYER */}
            <div className="bg-black rounded-3xl overflow-hidden border border-white/10">

              {/* PLAYER TOP */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">

                <div>
                  <h2 className="text-xl font-semibold">
                    {game.title}
                  </h2>

                  <p className="text-sm text-gray-400">
                    {game.category}
                  </p>
                </div>

                {/* FULLSCREEN */}
                <button
                  onClick={handleFullscreen}
                  className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-xl text-sm transition"
                >
                  Full Screen
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

              <p className="text-gray-300 leading-8">
                {game.description}
              </p>

            </div>

            {/* INSTRUCTIONS */}
            <div className="mb-8">

              <h2 className="text-xl font-semibold mb-3">
                Instructions
              </h2>

              <p className="text-gray-300 leading-8">
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
{/* FOOTER */}
<footer className="border-t border-white/10 mt-20">

  <div className="max-w-7xl mx-auto px-4 py-10">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* LOGO / ABOUT */}
      <div>

        <h2 className="text-2xl font-bold mb-4">
          CrazyGames
        </h2>

        <p className="text-gray-400 leading-7">
          Play the best free online games instantly.
          Explore action, racing, shooting, puzzle,
          arcade and many more exciting games directly
          in your browser.
        </p>

      </div>

      {/* QUICK LINKS */}
      <div>

        <h3 className="text-lg font-semibold mb-4">
          Quick Links
        </h3>

        <div className="flex flex-col gap-3 text-gray-400">

          <Link
            href="/"
            className="hover:text-white transition"
          >
            Home
          </Link>

          <Link
            href="/"
            className="hover:text-white transition"
          >
            Trending Games
          </Link>

          <Link
            href="/"
            className="hover:text-white transition"
          >
            New Games
          </Link>

          <Link
            href="/"
            className="hover:text-white transition"
          >
            Categories
          </Link>

        </div>

      </div>

      {/* CATEGORIES */}
      <div>

        <h3 className="text-lg font-semibold mb-4">
          Popular Categories
        </h3>

        <div className="flex flex-wrap gap-3">

          <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
            Shooting
          </span>

          <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
            Racing
          </span>

          <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
            Puzzle
          </span>

          <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
            Action
          </span>

          <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
            Arcade
          </span>

        </div>

      </div>

    </div>

    {/* BOTTOM */}
    <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

      <p className="text-gray-500 text-sm">
        © 2025 CrazyGames. All rights reserved.
      </p>

      <div className="flex items-center gap-5 text-sm text-gray-400">

        <Link
          href="/"
          className="hover:text-white transition"
        >
          Privacy Policy
        </Link>

        <Link
          href="/"
          className="hover:text-white transition"
        >
          Terms
        </Link>

        <Link
          href="/"
          className="hover:text-white transition"
        >
          Contact
        </Link>

      </div>

    </div>

  </div>

</footer>
    </div>
  )
}