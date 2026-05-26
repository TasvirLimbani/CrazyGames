import { Header } from '@/components/layout/Header'
import { SidebarNav } from '@/components/layout/SidebarNav'
import { GameGrid } from '@/components/games/GameGrid'
import { games } from '@/lib/mock-data'
import Link from 'next/link'

export default function WishlistPage() {
  // Show a selection of games as if they were wishlisted
  const wishlistedGames = games.slice(0, 8)

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <div className="flex flex-1">
        <SidebarNav />

        <main className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="mb-8">
              <Link href="/" className="text-primary hover:text-accent mb-6 inline-flex items-center gap-1">
                ← Back
              </Link>
              <h1 className="text-3xl font-bold text-foreground mb-2">My Wishlist</h1>
              <p className="text-muted-foreground">
                {wishlistedGames.length} games saved for later
              </p>
            </div>

            {/* Wishlist Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="text-sm text-muted-foreground">Total Saved</p>
                <p className="text-3xl font-bold text-primary">{wishlistedGames.length}</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="text-sm text-muted-foreground">Total Playtime (est.)</p>
                <p className="text-3xl font-bold text-accent">
                  {(wishlistedGames.reduce((acc, g) => acc + g.playCount, 0) / 1000000).toFixed(1)}M hours
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="text-sm text-muted-foreground">Avg. Rating</p>
                <p className="text-3xl font-bold text-yellow-500">
                  {(wishlistedGames.reduce((acc, g) => acc + g.rating, 0) / wishlistedGames.length).toFixed(1)}
                </p>
              </div>
            </div>

            {/* Games */}
            {wishlistedGames.length > 0 ? (
              <GameGrid games={wishlistedGames} columns={4} />
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">Your wishlist is empty</p>
                <Link href="/" className="text-primary hover:text-accent">
                  Browse games and add them to your wishlist
                </Link>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
