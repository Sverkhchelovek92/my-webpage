document.querySelector('.current-year').textContent = new Date().getFullYear()

fetch('header.html')
  .then((res) => res.text())
  .then((data) => {
    document.querySelector('.header').innerHTML = data
  })

const canvas = document.getElementById('matrix')
const ctx = canvas.getContext('2d')

function resizeCanvas() {
  canvas.width = canvas.clientWidth
  canvas.height = canvas.clientHeight
}
resizeCanvas()
window.addEventListener('resize', () => {
  resizeCanvas()
  initMatrix()
})

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&?'.split('')
const fontSize = 16
let columns, rows
let matrix = []

function randomChar() {
  return letters[Math.floor(Math.random() * letters.length)]
}

function initMatrix() {
  columns = Math.floor(canvas.width / fontSize)
  rows = Math.floor(canvas.height / fontSize)
  matrix = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => randomChar())
  )
}

function updateMatrix() {
  const updates = Math.floor(columns * rows * 0.05)
  for (let i = 0; i < updates; i++) {
    const r = Math.floor(Math.random() * rows)
    const c = Math.floor(Math.random() * columns)
    matrix[r][c] = randomChar()
  }
}

function drawMatrix() {
  ctx.fillStyle = 'rgba(1, 23, 26, 0.3)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.fillStyle = '#4cc3ff'
  ctx.font = `${fontSize}px "PerfectDOS"`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'top'

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      const xpos = (x + 0.75) * fontSize
      const ypos = (y + 0.5) * fontSize
      ctx.fillText(matrix[y][x], xpos, ypos)
    }
  }

  updateMatrix()
  requestAnimationFrame(drawMatrix)
}

document.fonts.load('16px "PerfectDOS"').then(() => {
  initMatrix()
  drawMatrix()
})
