export default function GameCard({ game, isFavorite, onToggleFavorite }) {
  return (
    <div className="card">
      <button
        className={`fav-btn ${isFavorite ? 'active' : ''}`}
        onClick={(e) => {
          e.preventDefault()
          onToggleFavorite(game.id)
        }}
        aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        title={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      >
        {isFavorite ? '★' : '☆'}
      </button>

      <a className="card-link" href={game.path} target="_blank" rel="noopener noreferrer">
        <div className="thumb">{game.emoji}</div>
        <div className="info">
          <h3>{game.title}</h3>
          <p>{game.description}</p>
          <span className="tag">{game.category}</span>
        </div>
      </a>
    </div>
  )
}
