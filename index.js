document.querySelector('.current-year').textContent = new Date().getFullYear()

fetch('header.html')
  .then((res) => res.text())
  .then((data) => {
    document.querySelector('.header').innerHTML = data
  })

const canvas = document.getElementById('matrix')
const ctx = canvas.getContext('2d')
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('')
let width = (canvas.width = window.innerWidth)
let height = (canvas.height = window.innerHeight)
const fontSize = 18
const columns = Math.floor(width / fontSize)

function draw() {
  ctx.fillStyle = 'rgba(1, 23, 26, 0.1)'
  ctx.fillRect(0, 0, width, height)
  ctx.fillStyle = '#4cc3ff'
  ctx.font = `${fontSize}px Lucida Console`
  for (let i = 0; i < columns; i++) {
    const char = letters[Math.floor(Math.random() * letters.length)]
    ctx.fillText(char, i * fontSize, Math.random() * height)
  }
  requestAnimationFrame(draw)
}

draw()
