import projectsDatabase from './projectsDatabase.js'

const projectsContainer = document.getElementById('projects-container')

const projectCards = projectsDatabase.map((project) => {
  return `
      <div class="project-card">
      <div class="project-thumb">
      <img src="images/${project.img}" alt="${project.name}" loading="lazy">
      </div>
        <div class="project-info">
        <h3 class="project-name">${project.name}</h3>
        <p class="project-p">${project.description}</p>
        <a class="project-link" href="${project.gitlink}" target="_blank">[ View on GitHub ]</a>
        </div>
        
      </div>
    `
})

projectsContainer.innerHTML = projectCards.join('')
