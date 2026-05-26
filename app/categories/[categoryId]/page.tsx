import { Header } from '@/components/layout/Header'
import { SidebarNav } from '@/components/layout/SidebarNav'
import { GameGrid } from '@/components/games/GameGrid'
import { getGamesByCategory, getCategoryById, categories } from '@/lib/mock-data'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface CategoryPageProps {
  params: Promise<{
    categoryId: string
  }>
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = await params
  const category = getCategoryById(categoryId)
  
  if (!category) {
    notFound()
  }

  const games = getGamesByCategory(categoryId)

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <div className="flex flex-1">
        <SidebarNav />

        <main className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-8">
              <Link href="/" className="text-primary hover:text-accent mb-4 inline-flex items-center gap-1">
                ← Back
              </Link>
              <div className="flex items-center gap-4 mb-2">
                <span className="text-5xl">{category.icon}</span>
                <h1 className="text-4xl font-bold text-foreground">{category.name}</h1>
              </div>
              <p className="text-muted-foreground max-w-2xl">{category.description}</p>
            </div>

            {/* Stats */}
            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <div className="flex gap-8">
                <div>
                  <p className="text-sm text-muted-foreground">Total Games</p>
                  <p className="text-2xl font-bold text-primary">{games.length}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Plays</p>
                  <p className="text-2xl font-bold text-accent">
                    {(games.reduce((acc, g) => acc + g.playCount, 0) / 1000000).toFixed(1)}M
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Rating</p>
                  <p className="text-2xl font-bold text-yellow-500">
                    {(games.reduce((acc, g) => acc + g.rating, 0) / games.length).toFixed(1)}
                  </p>
                </div>
              </div>
            </div>

            {/* Games Grid */}
            {games.length > 0 ? (
              <GameGrid games={games} columns={4} />
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No games in this category yet</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return categories.map(category => ({
    categoryId: category.id,
  }))
}
