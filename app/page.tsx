import { Header } from '@/components/layout/Header'
import { SidebarNav } from '@/components/layout/SidebarNav'
import { CategoryChips } from '@/components/common/CategoryChips'
import { GamesCategorySection } from '@/components/games/GamesCategorySection'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

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
            <GamesCategorySection />

            {/* Call to Action */}
            <section className="max-w-7xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-2">Play thousands of games</h2>
              <p className="text-muted-foreground mb-6">No downloads required. Start playing instantly.</p>
              <Button className="bg-primary hover:bg-purple-600 text-primary-foreground">
                Explore All Games
              </Button>
            </section>
          </div>
        </main>
        
      </div>
      
    </div>
  )
}
