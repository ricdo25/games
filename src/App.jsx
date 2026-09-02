import { useState, useMemo, useEffect } from 'react'
import { games } from './data/games.js'
import GameCard from './components/GameCard.jsx'

const FAVORITES_KEY = 'mi-galeria-favoritos'

export default function App() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Todos')
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false)

  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
  }, [favorites])

  const categories = useMemo(() => {
    const unique = Array.from(new Set(games.map((g) => g.category)))
    return ['Todos', ...unique]
  }, [])

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    )
  }

  const filteredGames = games.filter((g) => {
    const q = search.toLowerCase()
    const matchesSearch =
      g.title.toLowerCase().includes(q) || g.description.toLowerCase().includes(q)
    const matchesCategory = category === 'Todos' || g.category === category
    const matchesFavorite = !showOnlyFavorites || favorites.includes(g.id)
    return matchesSearch && matchesCategory && matchesFavorite
  })

  return (
    <div className="app">
      <header>
        <h1>Mi Galería de Juegos</h1>
        <p>Elegí un juego y dale clic para jugar</p>
      </header>

      <div className="controls">
        <input
          type="text"
          placeholder="Buscar juego..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="category-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={category === cat ? 'active' : ''}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <button
          className={`fav-filter ${showOnlyFavorites ? 'active' : ''}`}
          onClick={() => setShowOnlyFavorites((v) => !v)}
        >
          {showOnlyFavorites ? '★ Solo favoritos' : '☆ Ver favoritos'}
        </button>
      </div>

      <div className="grid">
        {filteredGames.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            isFavorite={favorites.includes(game.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
        {filteredGames.length === 0 && (
          <p className="empty">No se encontraron juegos con esos filtros.</p>
        )}
      </div>

      <footer>Hecho a mano — mi propia colección de jueguitos</footer>
    </div>
  )
}
