// Cada juego es una entrada en esta lista. Para agregar uno nuevo:
// 1) Poné el archivo .html del juego dentro de public/games/
// 2) Agregá un objeto acá abajo con sus datos
// Nada más hace falta tocar — la galería se arma sola a partir de esta lista.

export const games = [
  {
    id: 'atrapa-estrellas',
    title: 'Atrapa Estrellas',
    description: 'Mové la canasta y atrapá estrellas, esquivá las bombas.',
    emoji: '⭐',
    category: 'Arcade',
    path: '/games/atrapa-estrellas.html',
  },
  {
    id: 'mini-aventura',
    title: 'Mini Aventura',
    description: 'Plataformas: corré, saltá, vencé enemigos y llegá a la bandera.',
    emoji: '🍄',
    category: 'Plataformas',
    path: '/games/mini-aventura.html',
  },
]
