import { Header } from '@/components/layout/Header'
import { SidebarNav } from '@/components/layout/SidebarNav'
import { GameGrid } from '@/components/games/GameGrid'
import { getGameById, games, getGamesByCategory } from '@/lib/mock-data'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Play, Share2, Heart, Download, Users } from 'lucide-react'
import { notFound } from 'next/navigation'

interface GameDetailsPageProps {
  params: Promise<{
    gameId: string
  }>
}

export default async function GameDetailsPage({ params }: GameDetailsPageProps) {
  const { gameId } = await params
  const game = getGameById(gameId)

  if (!game) {
    notFound()
  }

  // Get related games from same category
  const relatedGames = getGamesByCategory(game.category[0]).filter(g => g.id !== game.id).slice(0, 4)

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <div className="flex flex-1">
        <SidebarNav />

        <main className="flex-1 overflow-auto">
          <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Back Button */}
            <Link href="/" className="text-primary hover:text-accent mb-6 inline-flex items-center gap-1">
              ← Back to Games
            </Link>

            {/* Game Header */}
            <div className="mb-8">
              <div className="relative w-full h-96 rounded-lg overflow-hidden mb-6 bg-muted">
                <Image
                  src={game.thumbnail}
                  alt={game.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex-1">
                  <h1 className="text-4xl font-bold text-foreground mb-2">{game.title}</h1>
                  <p className="text-muted-foreground mb-4">{game.description}</p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-6 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                      <span className="text-foreground font-semibold">{game.rating.toFixed(1)}</span>
                      <span className="text-muted-foreground">Rating</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-semibold">{(game.playCount / 1000).toFixed(0)}K</span>
                      <span className="text-muted-foreground">Plays</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Download className="w-5 h-5 text-accent" />
                      <span className="text-foreground font-semibold">{game.players}</span>
                      <span className="text-muted-foreground">Players</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {game.tags.map(tag => (
                      <span
                        key={tag}
                        className="bg-secondary text-muted-foreground px-3 py-1 rounded text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 w-full sm:w-auto">
                  <Button size="lg" className="bg-primary hover:bg-purple-600 text-primary-foreground w-full sm:w-56 gap-2">
                    <Play className="w-5 h-5" />
                    Play Now
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-56 border-primary text-primary hover:bg-primary/10 gap-2"
                  >
                    <Heart className="w-5 h-5" />
                    Add to Wishlist
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-56 border-border text-muted-foreground hover:bg-secondary gap-2"
                  >
                    <Share2 className="w-5 h-5" />
                    Share
                  </Button>
                </div>
              </div>
            </div>

            {/* Game Details Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Main Info */}
              <div className="lg:col-span-2 space-y-6">
                {/* About */}
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h2 className="text-xl font-bold text-foreground mb-3">About this game</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {game.description} This game is rated {game.rating} out of 5 by {(game.playCount / 1000).toFixed(0)}K players.
                    Join thousands of players and experience the fun today!
                  </p>
                </div>

                {/* Screenshots */}
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h2 className="text-xl font-bold text-foreground mb-4">Screenshots</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {game.images.map((image, idx) => (
                      <div key={idx} className="relative h-40 rounded overflow-hidden bg-muted">
                        <Image
                          src={image}
                          alt={`Screenshot ${idx + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-4">
                {/* Game Info Card */}
                <div className="bg-card rounded-lg p-4 border border-border">
                  <h3 className="font-bold text-foreground mb-3">Game Info</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Released:</span>
                      <div className="text-foreground">{game.releaseDate.toLocaleDateString()}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Category:</span>
                      <div className="text-foreground capitalize">{game.category.join(', ')}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Rating:</span>
                      <div className="text-foreground flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        {game.rating.toFixed(1)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Games */}
            {relatedGames.length > 0 && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Related games</h2>
                <GameGrid games={relatedGames} columns={4} />
              </section>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return games.map(game => ({
    gameId: game.id,
  }))
}
