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

window.addEventListener('resize', resizeCanvas)

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('')
const fontSize = 16
let columns, rows
let matrix = []

// Создаём матрицу случайных символов
function initMatrix() {
  columns = Math.floor(canvas.width / fontSize)
  rows = Math.floor(canvas.height / fontSize)
  matrix = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => randomChar())
  )
}

function randomChar() {
  return letters[Math.floor(Math.random() * letters.length)]
}

// Обновляем случайные символы
function updateMatrix() {
  const updates = Math.floor(columns * rows * 0.05) // 5% символов на кадр
  for (let i = 0; i < updates; i++) {
    const r = Math.floor(Math.random() * rows)
    const c = Math.floor(Math.random() * columns)
    matrix[r][c] = randomChar()
  }
}

function drawMatrix() {
  ctx.fillStyle = 'rgba(1, 23, 26, 0.3)' // лёгкое затухание
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.fillStyle = '#4cc3ff'
  ctx.font = `${fontSize}px "PerfectDOS"`

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      ctx.fillText(matrix[y][x], x * fontSize, (y + 1) * fontSize)
    }
  }

  updateMatrix()
  requestAnimationFrame(drawMatrix)
}

// Ждём загрузки шрифта, чтобы текст не мигал системным
document.fonts.load('16px "PerfectDOS"').then(() => {
  initMatrix()
  drawMatrix()
})
