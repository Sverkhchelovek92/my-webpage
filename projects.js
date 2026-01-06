import projectsDatabase from './projectsDatabase.js'

const projectsContainer = document.getElementById('projects-container')

function renderProjects(lang) {
  if (!projectsContainer) return

  projectsContainer.innerHTML = ''
  projectsDatabase.forEach((project) => {
    const data = project.i18n[lang] || project.i18n.en

    const card = document.createElement('div')
    card.className = 'project-card'

    card.innerHTML = `
      <div class="project-thumb">
        <img 
          src="images/${project.img}" 
          alt="${data.name}" 
          loading="lazy"
        >
      </div>

      <div class="project-info">
        <h3 class="project-name">${data.name}</h3>
        <p class="project-p">${data.description}</p>
        <a 
          class="project-link" 
          href="${project.gitlink}" 
          target="_blank"
        >
          [ View on GitHub ]
        </a>
      </div>
    `

    projectsContainer.appendChild(card)
  })
}

window.renderProjects = renderProjects

document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('lang') || 'en'
  renderProjects(lang)
})
