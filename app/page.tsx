// Header moved to root layout
import { SidebarNav } from '@/components/layout/SidebarNav'
import { CategoryChips } from '@/components/common/CategoryChips'
import { GamesCategorySection } from '@/components/games/GamesCategorySection'

interface HomePageProps {
  searchParams: Promise<{
    filter?: string
  }>
}

const filterLabels: Record<string, string> = {
  hot: 'Hot',
  top: 'Top Picks',
  new: 'New Games',
}

export default async function Home({ searchParams }: HomePageProps) {
  const { filter = '' } = await searchParams
  const activeFilterLabel = filterLabels[filter]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex flex-1">
        <SidebarNav />

        <main className="flex-1 overflow-auto">
          {/* Category Chips Section */}
          <section className="bg-card/50 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 py-3">
              <h2 className="text-lg font-semibold text-foreground mb-2 lg:hidden">Browse Categories</h2>
              <CategoryChips />
            </div>
          </section>

          {/* Main Content - Category Games */}
          <div className="max-w-full px-4 py-3 space-y-3">
            {activeFilterLabel && (
              <div className="rounded-2xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
                Showing {activeFilterLabel} games
              </div>
            )}
            <GamesCategorySection />

          </div>
        </main>

      </div>

    </div>
  )
}
