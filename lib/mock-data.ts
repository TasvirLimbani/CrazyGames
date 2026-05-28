import { Game, Category } from './types'

export const categories: Category[] = [
  // {
  //   id: 'io',
  //   name: '.IO',
  //   icon: '🌐',
  //   description: 'IO multiplayer games',
  // },
  {
    id: '2player',
    name: '2 Player',
    icon: '👥',
    description: 'Two player games',
  },
  {
    id: '3d',
    name: '3D',
    icon: '🎮',
    description: '3D games and experiences',
  },
  {
    id: 'action',
    name: 'Action',
    icon: '⚡',
    description: 'Action-packed games',
  },
  {
    id: 'adventure',
    name: 'Adventure',
    icon: '🗺️',
    description: 'Adventure games',
  },
  {
    id: 'arcade',
    name: 'Arcade',
    icon: '👾',
    description: 'Classic arcade games',
  },
  {
    id: 'babyhazel',
    name: 'Baby Hazel',
    icon: '👶',
    description: 'Baby Hazel games',
  },
  {
    id: 'bejeweled',
    name: 'Bejeweled',
    icon: '💎',
    description: 'Bejeweled puzzle games',
  },
  {
    id: 'boys',
    name: 'Boys',
    icon: '👦',
    description: 'Games for boys',
  },
  {
    id: 'clicker',
    name: 'Clicker',
    icon: '🖱️',
    description: 'Clicker games',
  },
  {
    id: 'cooking',
    name: 'Cooking',
    icon: '👨‍🍳',
    description: 'Cooking games',
  },
  {
    id: 'girls',
    name: 'Girls',
    icon: '👧',
    description: 'Games for girls',
  },
  {
    id: 'hypercasual',
    name: 'Hypercasual',
    icon: '🎯',
    description: 'Hypercasual games',
  },
  {
    id: 'multiplayer',
    name: 'Multiplayer',
    icon: '👫',
    description: 'Multiplayer games',
  },
  {
    id: 'puzzle',
    name: 'Puzzle',
    icon: '🧩',
    description: 'Puzzle games',
  },
  {
    id: 'racing',
    name: 'Racing',
    icon: '🏎️',
    description: 'Racing games',
  },
  {
    id: 'shooting',
    name: 'Shooting',
    icon: '🎯',
    description: 'Shooting games',
  },
  {
    id: 'soccer',
    name: 'Soccer',
    icon: '⚽',
    description: 'Soccer games',
  },
  {
    id: 'sports',
    name: 'Sports',
    icon: '🏆',
    description: 'Sports games',
  },
  {
    id: 'stickman',
    name: 'Stickman',
    icon: '🚶',
    description: 'Stickman games',
  },
]

export const games: Game[] = [
  {
    id: '1',
    title: 'Minecraft',
    description: 'Build, explore, and survive in an infinite world',
    thumbnail: 'https://images.unsplash.com/photo-1633887897972-e2b92e1a33e1?w=400&h=300&fit=crop',
    images: ['https://images.unsplash.com/photo-1633887897972-e2b92e1a33e1?w=800&h=600&fit=crop'],
    rating: 4.8,
    players: 50000,
    category: ['brain', 'creative'],
    tags: ['sandbox', 'building', 'adventure'],
    badge: 'top',
    releaseDate: new Date('2023-01-15'),
    playCount: 5000000,
  },
  {
    id: '2',
    title: 'Tetris',
    description: 'Classic puzzle game with falling blocks',
    thumbnail: 'https://images.unsplash.com/photo-1512317049220-ea264e488675?w=400&h=300&fit=crop',
    images: ['https://images.unsplash.com/photo-1512317049220-ea264e488675?w=800&h=600&fit=crop'],
    rating: 4.7,
    players: 32000,
    category: ['brain', 'quick'],
    tags: ['puzzle', 'classic', 'retro'],
    badge: 'top',
    releaseDate: new Date('2023-02-10'),
    playCount: 3500000,
  },
  {
    id: '3',
    title: 'Chess Master',
    description: 'Strategic board game against AI and players',
    thumbnail: 'https://images.unsplash.com/photo-1579033100235-033de6461f23?w=400&h=300&fit=crop',
    images: ['https://images.unsplash.com/photo-1579033100235-033de6461f23?w=800&h=600&fit=crop'],
    rating: 4.9,
    players: 25000,
    category: ['brain', 'strategy'],
    tags: ['strategy', 'board', 'competitive'],
    releaseDate: new Date('2023-03-05'),
    playCount: 2800000,
  },
  {
    id: '4',
    title: 'Racing Rush',
    description: 'High-speed racing game with multiple tracks',
    thumbnail: 'https://images.unsplash.com/photo-1559333086-b0a56225a93c?w=400&h=300&fit=crop',
    images: ['https://images.unsplash.com/photo-1559333086-b0a56225a93c?w=800&h=600&fit=crop'],
    rating: 4.6,
    players: 45000,
    category: ['adrenaline', 'sports'],
    tags: ['racing', 'action', 'speed'],
    badge: 'hot',
    releaseDate: new Date('2023-04-20'),
    playCount: 4200000,
  },
  {
    id: '5',
    title: 'Bubble Pop',
    description: 'Pop bubbles and clear the board',
    thumbnail: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=300&fit=crop',
    images: ['https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=600&fit=crop'],
    rating: 4.5,
    players: 28000,
    category: ['quick', 'casual'],
    tags: ['puzzle', 'casual', 'fun'],
    badge: 'updated',
    releaseDate: new Date('2023-05-12'),
    playCount: 2300000,
  },
  {
    id: '6',
    title: 'Snake Game',
    description: 'Classic snake game - eat and grow',
    thumbnail: 'https://images.unsplash.com/photo-1611532736fa81b2dbaf0dd49fa93fdc4d7fa24c3?w=400&h=300&fit=crop',
    images: ['https://images.unsplash.com/photo-1611532736fa81b2dbaf0dd49fa93fdc4d7fa24c3?w=800&h=600&fit=crop'],
    rating: 4.4,
    players: 18000,
    category: ['quick', 'brain'],
    tags: ['retro', 'classic', 'snake'],
    releaseDate: new Date('2023-06-08'),
    playCount: 1900000,
  },
  {
    id: '7',
    title: 'Multiplayer Battle',
    description: 'Epic multiplayer battle royale experience',
    thumbnail: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop',
    images: ['https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=800&h=600&fit=crop'],
    rating: 4.7,
    players: 55000,
    category: ['friends', 'adrenaline'],
    tags: ['multiplayer', 'action', 'pvp'],
    badge: 'originals',
    releaseDate: new Date('2023-07-14'),
    playCount: 6100000,
  },
  {
    id: '8',
    title: 'Word Game',
    description: 'Find words and complete puzzles',
    thumbnail: 'https://images.unsplash.com/photo-1606810596510-43a4460eb5c9?w=400&h=300&fit=crop',
    images: ['https://images.unsplash.com/photo-1606810596510-43a4460eb5c9?w=800&h=600&fit=crop'],
    rating: 4.6,
    players: 22000,
    category: ['brain', 'quick'],
    tags: ['word', 'puzzle', 'educational'],
    releaseDate: new Date('2023-08-03'),
    playCount: 1800000,
  },
  {
    id: '9',
    title: 'Jump Quest',
    description: 'Platform game with challenging levels',
    thumbnail: 'https://images.unsplash.com/photo-1585399081825-a47fcc228952?w=400&h=300&fit=crop',
    images: ['https://images.unsplash.com/photo-1585399081825-a47fcc228952?w=800&h=600&fit=crop'],
    rating: 4.5,
    players: 30000,
    category: ['adrenaline', 'classic'],
    tags: ['platform', 'action', 'adventure'],
    badge: 'hot',
    releaseDate: new Date('2023-09-11'),
    playCount: 3400000,
  },
  {
    id: '10',
    title: 'Mahjong Master',
    description: 'Traditional mahjong tile matching game',
    thumbnail: 'https://images.unsplash.com/photo-1570303008390-6e6ee6dcfa20?w=400&h=300&fit=crop',
    images: ['https://images.unsplash.com/photo-1570303008390-6e6ee6dcfa20?w=800&h=600&fit=crop'],
    rating: 4.8,
    players: 19000,
    category: ['brain', 'quick'],
    tags: ['puzzle', 'classic', 'relaxing'],
    badge: 'top',
    releaseDate: new Date('2023-10-22'),
    playCount: 2100000,
  },
  {
    id: '11',
    title: 'Tower Defense',
    description: 'Build towers and defend against waves',
    thumbnail: 'https://images.unsplash.com/photo-1600728157022-cf6b9d0e6bfc?w=400&h=300&fit=crop',
    images: ['https://images.unsplash.com/photo-1600728157022-cf6b9d0e6bfc?w=800&h=600&fit=crop'],
    rating: 4.7,
    players: 35000,
    category: ['strategy', 'brain'],
    tags: ['tower', 'strategy', 'defense'],
    badge: 'updated',
    releaseDate: new Date('2023-11-05'),
    playCount: 3900000,
  },
  {
    id: '12',
    title: 'Parkour Runner',
    description: 'Run and parkour through obstacle courses',
    thumbnail: 'https://images.unsplash.com/photo-1489599849228-13e3185e6d60?w=400&h=300&fit=crop',
    images: ['https://images.unsplash.com/photo-1489599849228-13e3185e6d60?w=800&h=600&fit=crop'],
    rating: 4.6,
    players: 38000,
    category: ['adrenaline', 'quick'],
    tags: ['parkour', 'action', 'endless'],
    badge: 'hot',
    releaseDate: new Date('2023-12-10'),
    playCount: 4500000,
  },
  {
    id: '13',
    title: 'Fishing Tycoon',
    description: 'Build your fishing empire and catch rare fish',
    thumbnail: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
    images: ['https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop'],
    rating: 4.5,
    players: 16000,
    category: ['casual', 'simulation'],
    tags: ['tycoon', 'relaxing', 'simulation'],
    badge: 'originals',
    releaseDate: new Date('2024-01-15'),
    playCount: 1600000,
  },
  {
    id: '14',
    title: 'Quiz Master',
    description: 'Test your knowledge with challenging quizzes',
    thumbnail: 'https://images.unsplash.com/photo-1606810596510-43a4460eb5c9?w=400&h=300&fit=crop',
    images: ['https://images.unsplash.com/photo-1606810596510-43a4460eb5c9?w=800&h=600&fit=crop'],
    rating: 4.6,
    players: 21000,
    category: ['brain', 'educational'],
    tags: ['quiz', 'educational', 'trivia'],
    releaseDate: new Date('2024-02-20'),
    playCount: 2200000,
  },
  {
    id: '15',
    title: 'Space Invaders',
    description: 'Defend against alien invaders',
    thumbnail: 'https://images.unsplash.com/photo-1538481072238-4e0a90aed640?w=400&h=300&fit=crop',
    images: ['https://images.unsplash.com/photo-1538481072238-4e0a90aed640?w=800&h=600&fit=crop'],
    rating: 4.7,
    players: 27000,
    category: ['adrenaline', 'classic'],
    tags: ['shooter', 'arcade', 'classic'],
    badge: 'top',
    releaseDate: new Date('2024-03-08'),
    playCount: 3200000,
  },
]

export function getGamesByCategory(categoryId: string): Game[] {
  return games.filter(game => game.category.includes(categoryId))
}

export function searchGames(query: string): Game[] {
  const lowerQuery = query.toLowerCase()
  return games.filter(game =>
    game.title.toLowerCase().includes(lowerQuery) ||
    game.description.toLowerCase().includes(lowerQuery) ||
    game.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  )
}

export function getGameById(id: string): Game | undefined {
  return games.find(game => game.id === id)
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find(cat => cat.id === id)
}

export function getTopGames(): Game[] {
  return games
    .filter(game => game.badge === 'top')
    .slice(0, 6)
}

export function getFeaturedGames(): Game[] {
  return games.filter(game => game.badge === 'hot').slice(0, 6)
}

export function getNewGames(): Game[] {
  return [...games]
    .sort((a, b) => b.releaseDate.getTime() - a.releaseDate.getTime())
    .slice(0, 6)
}
