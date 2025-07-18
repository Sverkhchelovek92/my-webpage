document.querySelector('.current-year').textContent = new Date().getFullYear()

fetch('header.html')
  .then((res) => res.text())
  .then((data) => {
    document.querySelector('.header').innerHTML = data
  })
