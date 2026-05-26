'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Search, Bell, Heart, User, LogIn, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border">
      <div className="px-4 py-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
              CG
            </div>
            <span className="font-bold text-foreground hidden sm:inline">
              Crazy Games
            </span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xs">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search games and categories"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pr-10 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Mobile Search Toggle */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors text-foreground"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-secondary text-foreground"
                title="Notifications"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-secondary text-foreground"
                title="Wishlist"
              >
                <Heart className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-secondary text-foreground"
                title="Profile"
              >
                <User className="w-5 h-5" />
              </Button>
            </div>

            {/* Login Button */}
            <Button
              asChild
              className="bg-primary hover:bg-purple-600 text-primary-foreground hidden sm:flex"
            >
              <Link href="/auth/login" className="gap-2">
                <LogIn className="w-4 h-4" />
                <span className="hidden sm:inline">Log in</span>
              </Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden p-2 hover:bg-secondary rounded-lg transition-colors text-foreground"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <form onSubmit={handleSearch} className="mt-4 md:hidden">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full pr-10 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden mt-4 flex flex-col gap-2 border-t border-border pt-4">
            <Link
              href="/profile"
              className="px-4 py-2 hover:bg-secondary rounded-lg transition-colors text-foreground flex items-center gap-2"
            >
              <User className="w-4 h-4" /> Profile
            </Link>
            <Link
              href="/wishlist"
              className="px-4 py-2 hover:bg-secondary rounded-lg transition-colors text-foreground flex items-center gap-2"
            >
              <Heart className="w-4 h-4" /> Wishlist
            </Link>
            <Button
              asChild
              className="w-full bg-primary hover:bg-purple-600 text-primary-foreground"
            >
              <Link href="/auth/login">Log in</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
