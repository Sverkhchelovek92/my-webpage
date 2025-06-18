import projectsDatabase from './projectsDatabase.js'

const projectsContainer = document.getElementById('projects-container')

const projectCards = projectsDatabase.map((project) => {
  return `
      <div class="project-card">
        <img src="images/${project.img}" alt="${project.name}">
        <h3 class="project-name">${project.name}</h3>
        <p class="project-p">${project.description}</p>
      </div>
    `
})

projectsContainer.innerHTML = projectCards.join('')
