import { Header } from '@/components/layout/Header'
import { SidebarNav } from '@/components/layout/SidebarNav'
import { GameGrid } from '@/components/games/GameGrid'
import { searchGames } from '@/lib/mock-data'
import Link from 'next/link'

interface SearchPageProps {
  searchParams: Promise<{
    q?: string
  }>
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = '' } = await searchParams
  const results = q ? searchGames(q) : []

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
              <h1 className="text-3xl font-bold text-foreground mb-2">Search Results</h1>
              {q && (
                <p className="text-muted-foreground">
                  Found <span className="text-accent font-semibold">{results.length}</span> games for &quot;
                  <span className="font-semibold">{q}</span>&quot;
                </p>
              )}
            </div>

            {/* Results */}
            {results.length > 0 ? (
              <GameGrid games={results} columns={4} />
            ) : q ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No games found for &quot;{q}&quot;</p>
                <Link href="/" className="text-primary hover:text-accent">
                  Browse all games
                </Link>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Enter a search query to find games</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
