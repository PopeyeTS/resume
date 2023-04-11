// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  address: 'Kiev region',
  position: 'Junior Fullstack JS Developer',
  salary: '600$ per month',
}
var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:ivanov@mail.com',
    },
    phone: {
      text: '+380672002778',
      href: 'tel:+380672002778',
    },
    linkedin: {
      text: 'LINKEDiN',
      href: 'https://ua.linkedin.com',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume  Summary',
    },
    header,
    main: {
      summary: {
        title: 'Summary',
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
      },
      experience: {
        title: 'Other experience',
        text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics ( tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
      },
    },
    footer,
  })
})
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume  Skills',
    },
    header,
    main: {
      hobbies: [
        {
          name: 'Serfing',
          isMain: true,
        },
        {
          name: 'Footbal',
          isMain: false,
        },
        {
          name: 'Tennis',
          isMain: false,
        },
      ],
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'HB',
          point: 9,
          isTop: true,
        },
        {
          name: 'VS COde',
          point: 8,
          isTop: false,
        },
        {
          name: 'git',
          point: 7,
          isTop: false,
        },
        {
          name: 'terminal',
          point: null,
        },
        {
          name: 'NPM',
          point: 0,
        },
      ],
    },
    footer,
  })
})
router.get('/edu', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('edu', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume  Education',
    },
    header,
    main: {
      cert: [
        {
          name: 'English A1',
          id: 1,
        },
        {
          name: 'English A2',
          id: 2,
        },
        {
          name: 'English B1',
          id: 3,
        },
      ],
      edu: [
        {
          name: '11111',
          isEnd: true,
        },
        {
          name: '22222',
          isEnd: false,
        },
        {
          name: '33333',
          isEnd: true,
        },
        {
          name: '44444',
          isEnd: false,
        },
        {
          name: '55555',
          isEnd: true,
        },
        {
          name: '66666',
          isEnd: false,
        },
      ],
    },
    footer,
  })
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',
    page: {
      title: 'Resume  Work',
    },
    header,
    main: {
      works: [
        {
          pos: 'J F D',
          company: {
            name: 'IT B',
            url: null,
          },
          duration: {
            from: '10/10/2022',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua',
              about: 'About resume',
              stacksAmount: 5,
              stacks: [
                {
                  name: 'React.JS',
                },
                {
                  name: 'HTML - CSS',
                },
                {
                  name: 'NodeJS',
                },
              ],
              awardsAmount: 4,
              awards: [
                {
                  name: 'first award',
                },
                {
                  name: 'second award',
                },
              ],
            },
          ],
        },
      ],
    },
    footer,
  })
})
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //           git  ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: 'person',
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================
// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
