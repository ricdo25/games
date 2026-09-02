# Mi Galería de Juegos (React + Vite)

Galería con buscador, filtro por categoría y favoritos (guardados en el navegador).
Los juegos en sí siguen siendo HTML/JS puro — React solo organiza la página que los muestra.

## Requisitos
- Tener Node.js instalado (https://nodejs.org, versión 18 o más nueva)

## Probarlo en tu compu
```
npm install
npm run dev
```
Abre el link que te muestra la terminal (normalmente http://localhost:5173)

## Agregar un juego nuevo
1. Poné el archivo `.html` del juego dentro de `public/games/`
2. Abrí `src/data/games.js` y agregá un objeto nuevo a la lista, por ejemplo:
```js
{
  id: 'mi-juego-3',
  title: 'Mi Juego 3',
  description: 'De qué se trata en una frase.',
  emoji: '🕹️',
  category: 'Puzzle',
  path: '/games/mi-juego-3.html',
}
```
Listo — la tarjeta aparece sola, con buscador y filtros incluidos.

## Generar la versión final para publicar
```
npm run build
```
Esto crea una carpeta `dist/` con HTML/CSS/JS ya compilados y optimizados.

## Publicar en GitHub Pages (automático)
1. Antes que nada, en `vite.config.js` cambiá `base: '/NOMBRE-DE-TU-REPO/'` por el nombre
   exacto que le vas a poner a tu repositorio en GitHub.
2. Creá un repositorio nuevo (público) en GitHub, sin agregarle README.
3. En esta carpeta, corré:
   ```
   git init
   git add .
   git commit -m "Primera version de la galeria"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/NOMBRE-DE-TU-REPO.git
   git push -u origin main
   ```
4. En GitHub, andá a tu repo → Settings → Pages → en "Source" elegí **GitHub Actions**.
5. Andá a la pestaña "Actions" del repo: vas a ver el workflow corriendo (tarda 1-2 minutos).
6. Cuando termine, tu sitio queda en: `https://TU-USUARIO.github.io/NOMBRE-DE-TU-REPO/`

De ahí en más, cada vez que agregues un juego nuevo (en `public/games/` + `src/data/games.js`)
solo hacés `git add .`, `git commit -m "..."`, `git push` y GitHub compila y publica solo,
gracias al archivo `.github/workflows/deploy.yml` que ya está incluido.
