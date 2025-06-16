import projectsDatabase from './projectsDatabase.js'

const projectsContainer = document.getElementById('projects-container')

const projectCards = projectsDatabase.map((project) => {
  return `
      <div class="project-card">
        <img src="images/${project.img}" alt="${project.name}">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
      </div>
    `
})

projectsContainer.innerHTML = projectCards.join('')
