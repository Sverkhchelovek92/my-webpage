const projectsDatabase = [
  {
    id: 1,
    img: '01_MS.png',
    gitlink: 'https://github.com/Sverkhchelovek92/Minesweeper',
    i18n: {
      ru: {
        name: 'Сапёр',
        description: 'Классическая игра сапёр',
      },
      en: {
        name: 'Minesweeper',
        description: 'Minesweeper game',
      },
    },
  },
  {
    id: 2,
    img: '02_F.png',
    gitlink: 'https://github.com/Sverkhchelovek92/Filament-Web',
    i18n: {
      ru: {
        name: 'Filament',
        description: 'Веб-сайт для видеопродакшена',
      },
      en: {
        name: 'Filament',
        description: 'Website for a video production company',
      },
    },
  },
  {
    id: 3,
    img: '03_CB.png',
    gitlink: 'https://github.com/Sverkhchelovek92/Filament-Web',
    i18n: {
      ru: {
        name: 'Cool-Buy',
        description: 'Тестовый интернет магазин',
      },
      en: {
        name: 'Cool-Buy',
        description: 'Test online store',
      },
    },
  },
  {
    id: 4,
    img: '04_TD.png',
    gitlink: 'https://github.com/Sverkhchelovek92/To-Do-To-Do-List',
    i18n: {
      ru: {
        name: 'To-Do-To-Do List',
        description: 'Список задач с возможностью создавать подзадачи',
      },
      en: {
        name: 'To-Do-To-Do List',
        description: 'A task list with an option to create subtasks',
      },
    },
  },
  {
    id: 5,
    img: '05_SW.png',
    gitlink: 'https://github.com/Sverkhchelovek92/Savewatch',
    i18n: {
      ru: {
        name: 'Savewatch',
        description: 'Секундомер с возможностью сохранять время',
      },
      en: {
        name: 'Savewatch',
        description: 'Stopwatch with the ability to save times',
      },
    },
  },
  {
    id: 6,
    img: '06_RN.png',
    gitlink: 'https://github.com/Sverkhchelovek92/random-number',
    i18n: {
      ru: {
        name: 'Генератор случайных чисел',
        description: 'Простой генератор случайных чисел',
      },
      en: {
        name: 'Random Number Generator',
        description: 'Simple random number generator',
      },
    },
  },
  {
    id: 7,
    img: '07_C.png',
    gitlink: 'https://github.com/Sverkhchelovek92/Conway-s-Game-of-Life',
    i18n: {
      ru: {
        name: "Conway's Game of Life",
        description: `Простой симулятор игры "Жизнь"`,
      },
      en: {
        name: "Conway's Game of Life",
        description: `Simple simulator of the Conway's Game of Life`,
      },
    },
  },
  {
    id: 8,
    img: '08_W.png',
    gitlink: 'https://github.com/Sverkhchelovek92/Wordborne',
    i18n: {
      ru: {
        name: 'Wordborne',
        description: 'Генератор слов',
      },
      en: {
        name: 'Wordborne',
        description: 'Word generator',
      },
    },
  },
  {
    id: 9,
    img: '09_W.png',
    gitlink: 'https://github.com/Sverkhchelovek92/Weather-App',
    i18n: {
      ru: {
        name: 'Weather App',
        description: 'Прогноз погоды',
      },
      en: {
        name: 'Weather App',
        description: 'Simple weather app',
      },
    },
  },
  {
    id: 10,
    img: '10_M.png',
    gitlink: 'https://github.com/Sverkhchelovek92/Monty-Hall',
    i18n: {
      ru: {
        name: 'Monty Hall',
        description: 'Простая игра основанная на проблеме Монти Холла',
      },
      en: {
        name: 'Monty Hall',
        description: 'A simple game based on the Monty Hall problem',
      },
    },
  },
  {
    id: 11,
    img: '11_C.png',
    gitlink: 'https://github.com/Sverkhchelovek92/Rotating-Cube',
    i18n: {
      ru: {
        name: 'Rotating Cube',
        description: '3D Куб, у которого можно менять цвет и скорость вращения',
      },
      en: {
        name: 'Rotating Cube',
        description:
          '3D Cube with the option to change color and rotation speed',
      },
    },
  },
  {
    id: 12,
    img: '12_DV.png',
    gitlink: 'https://github.com/Sverkhchelovek92/Charts',
    i18n: {
      ru: {
        name: 'Data Visualizer',
        description: 'Приложение, которое строит графики',
      },
      en: {
        name: 'Data Visualizer',
        description: 'An APP that creates graphs',
      },
    },
  },
  {
    id: 13,
    img: '13_CR.png',
    gitlink: 'https://github.com/Sverkhchelovek92/Coderain',
    i18n: {
      ru: {
        name: 'Code Rain',
        description: `Дождь из символов, как в фильме "Матрица"`,
      },
      en: {
        name: 'Code Rain',
        description: '"The Matrix" movie style code rain',
      },
    },
  },
  {
    id: 14,
    img: '14_C.png',
    gitlink: 'https://github.com/Sverkhchelovek92/Cards',
    i18n: {
      ru: {
        name: 'Cards',
        description:
          'Простое приложение, которое предсказывает будущее по картам',
      },
      en: {
        name: 'Cards',
        description:
          'Simple app that tries to predict the future using Taro Cards.',
      },
    },
  },
  {
    id: 15,
    img: '15_C.png',
    gitlink: 'https://github.com/Sverkhchelovek92/Currency-Converter',
    i18n: {
      ru: {
        name: 'Currency Converter',
        description: 'Простой конвертер валют, написанный на TypeScript',
      },
      en: {
        name: 'Currency Converter',
        description: 'A simple currency converter written in TypeScript',
      },
    },
  },
  {
    id: 16,
    img: '16_R.png',
    gitlink: 'https://github.com/Sverkhchelovek92/Raytracer',
    i18n: {
      ru: {
        name: 'Raytracer',
        description: '2D симулятор трассировки лучей',
      },
      en: {
        name: 'Raytracer',
        description: '2D raytracing simulator',
      },
    },
  },
  {
    id: 17,
    img: '17_S.png',
    gitlink: 'https://github.com/Sverkhchelovek92/Falling-sand',
    i18n: {
      ru: {
        name: 'Falling Sand',
        description: 'Симулятор падающего песка',
      },
      en: {
        name: 'Falling Sand',
        description: 'Falling sand simulator',
      },
    },
  },
]

export default projectsDatabase
