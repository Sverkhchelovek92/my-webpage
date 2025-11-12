const translations = {
  ru: {
    name: 'Мирослав Гурняк',
    subtitle: 'JavaScript разработчик',
    about_title: 'Обо мне',
    about_text: 'Привет, меня зовут Мирослав, я фронтенд-разработчик.',
    links_title: 'Ссылки',
    projects_title: 'Мои проекты',

    about_link: 'Обо мне',
    projects_link: 'Проекты',
  },
  en: {
    name: 'Miroslav Gurnyak',
    subtitle: 'JavaScript Developer',
    about_title: 'About Me',
    about_text:
      'Hello, my name is Miroslav and I am front-end javascript developer.',
    links_title: 'Links',
    projects_title: 'My projects',
    about_link: 'About',
    projects_link: 'Projects',
  },
}

function setLanguage(lang) {
  localStorage.setItem('lang', lang)

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n')
    if (translations[lang][key]) {
      el.textContent = translations[lang][key]
    }
  })
}

function initLang() {
  const savedLang = localStorage.getItem('lang') || 'en'
  setLanguage(savedLang)

  const flags = document.querySelectorAll('.languages img')
  flags.forEach((img) => {
    img.addEventListener('click', () => {
      setLanguage(img.dataset.lang)
    })
  })
}

window.initLang = initLang
