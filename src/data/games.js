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
    path: 'games/atrapa-estrellas.html',
  },
  {
    id: 'mini-aventura',
    title: 'Mini Aventura',
    description: 'Plataformas: corré, saltá, vencé enemigos y llegá a la bandera.',
    emoji: '🍄',
    category: 'Plataformas',
    path: 'games/mini-aventura.html',
  },
  {
  id: 'memoria',
  title: 'Juego de Memoria',
  description: 'Encontrá las parejas de cartas. Se mezclan al azar en cada partida.',
  emoji: '🧠',
  category: 'Memoria',
  path: 'games/memoria.html',
},
{
  id: 'espacial',
  title: 'Defensor Espacial',
  description: 'Lucha por la supervivencia del espacio.',
  emoji: '🔫',
  category: 'Arcade',
  path: 'games/defensorespacial.html',
},
{
  id: 'monstruos',
  title: 'Caza Monstruos',
  description: 'Extermina a los monstruos.',
  emoji: '👾',
  category: 'Arcade',
  path: 'games/cazamonstruos.html',
},
{
  id: 'revienta',
  title: 'Revienta Bloques',
  description: 'Revienta y gana puntos de bloques.',
  emoji: '🔨',
  category: 'Puzzle',
  path: 'games/revientabloques.html',
},
{
  id: 'puzzle',
  title: 'Rompe Cabezas',
  description: 'Organiza imagenes y gana puntos.',
  emoji: '🧩',
  category: 'Puzzle',
  path: 'games/revientabloques.html',
},
]
