export const personal = {
  name: 'Andrew Cummins',
  role: 'SDET & Automation Engineer',
  location: 'Kilkenny, Ireland',
  commute: 'Available in Dublin & surrounding counties',
  email: 'andrewpaulcummins@gmail.com',
  github: 'https://github.com/andrewpaulcummins',
  linkedin: 'https://www.linkedin.com/in/andrew-cummins-a65125152/',
}

export const stats = [
  { num: 3,   suffix: '+',  label: 'Production frameworks shipped' },
  { num: 100, suffix: '%',  label: 'Coverage: UI · API · Load' },
  { num: 7,   suffix: 'y',  label: 'Years in QA engineering' },
  { num: 247, suffix: '',   label: 'Green builds last 30 days' },
]

export const skills = [
  { icon: '{T}', name: 'Test automation',   desc: 'End-to-end framework design from the ground up - not just writing tests, but building the infrastructure that scales.', tags: [['Selenium 4','orange'],['Playwright','orange'],['TestNG','orange'],['JUnit 5','orange']] },
  { icon: '{B}', name: 'BDD & test design', desc: 'Behaviour-driven dev with Cucumber & Gherkin - bridging product requirements and executable test specs.', tags: [['Cucumber 7','orange'],['Gherkin','orange'],['PicoContainer','orange'],['Page Object Model','blue']] },
  { icon: '{C}', name: 'CI/CD & pipelines', desc: 'Automated pipelines that run on every commit, with Allure reporting and GitHub Actions feedback loops.', tags: [['GitHub Actions','green'],['Allure Reports','green'],['Maven','orange'],['Jenkins','orange']] },
  { icon: '{J}', name: 'Java & OOP',        desc: 'Strong Java fundamentals with design patterns applied to real framework architecture.', tags: [['Java 17','orange'],['OOP','orange'],['Design patterns','orange'],['DI','purple']] },
  { icon: '{W}', name: 'Web & frontend',    desc: 'Enough frontend knowledge to be dangerous. This portfolio, built from scratch, is proof.', tags: [['React','blue'],['Vite','blue'],['JavaScript','blue'],['Node.js','green']] },
  { icon: '{A}', name: 'API & performance', desc: 'REST API validation and performance benchmarking - catch issues before UI tests even run.', tags: [['REST Assured','purple'],['Postman','purple'],['JMeter','orange'],['Swagger','orange']] },
]

export const projects = [
  {
    id: 'selenium-bdd', featured: true,
    title: 'Selenium BDD Framework',
    badge: 'live', badgeLabel: 'Live · passing',
    desc: 'An enterprise-grade BDD test automation framework built from scratch. Selenium 4, Cucumber 7, TestNG, PicoContainer DI. Fully integrated with GitHub Actions CI and Allure for rich test reporting.',
    stack: [['Java 17','orange'],['Selenium 4','orange'],['Cucumber 7','orange'],['TestNG','orange'],['PicoContainer','orange'],['GitHub Actions','green'],['Allure','green'],['Maven','orange']],
    links: [
      { label: 'View on GitHub', url: 'https://github.com/andrewpaulcummins/selenium-bdd-framework' },
      { label: 'Allure report',  url: 'https://andrewpaulcummins.github.io/selenium-bdd-framework/', green: true },
    ],
    pipeline: [
      { label: 'Checkout · setup JDK 17', time: '3s' },
      { label: 'Maven dependency cache',  time: '8s' },
      { label: 'Run Cucumber test suite', time: '42s' },
      { label: 'Generate Allure report',  time: '6s' },
      { label: 'Deploy to GitHub Pages',  time: '11s' },
    ],
  },
  {
    id: 'playwright', featured: false,
    title: 'Playwright Framework',
    badge: 'live', badgeLabel: 'Live · passing',
    desc: 'A Playwright (Java) framework with parallel execution, network interception, and visual regression testing. Targets the second most requested skill set in SDET roles.',
    stack: [['Playwright','orange'],['Java','orange'],['Parallel exec','blue'],['Visual regression','blue'],['PicoContainer','orange'],['GitHub Actions','green']],
    links: [
      { label: 'View on GitHub', url: 'https://github.com/andrewpaulcummins/playwright-framework' },
      { label: 'Allure report',  url: 'https://andrewpaulcummins.github.io/playwright-bdd-framework/', green: true },
    ],
  },
  {
    id: 'warzone', featured: false,
    title: 'Warzone Ranked SR Tracker',
    badge: 'wip', badgeLabel: 'In progress',
    desc: 'A real-time Skill Rating overlay for Call of Duty: Warzone streamers. Tracks SR gains/losses, maps to ranked tiers, pushes live updates over WebSockets. License-gated via MongoDB.',
    stack: [['Node.js','green'],['Express','green'],['WebSockets','blue'],['MongoDB','green'],['HTML/CSS/JS','blue']],
    links: [
      { label: 'View on GitHub', url: 'https://github.com/andrewpaulcummins/warzoneSRTracker' },
      { label: 'Live overlay',   url: 'https://warzonesrtracker.onrender.com/', green: true },
    ],
  },
  {
    id: 'portfolio', featured: false,
    title: 'This portfolio (v2)',
    badge: 'live', badgeLabel: 'Live',
    desc: "Built with React and Vite. Having working knowledge of how frontend and backend fit together makes me a sharper tester, I know what I'm testing, not just how to test it.",
    stack: [['React','blue'],['Vite','blue'],['CSS3','blue'],['IntersectionObserver','purple']],
    links: [],
  },
]

export const facts = [
  ['location',     'Kilkenny, Ireland'],
  ['speciality',   'SDET & Test Automation'],
  ['primary_lang', 'Java (17 Temurin)'],
  ['frameworks',   'Selenium · Playwright · Cucumber'],
  ['ci_platforms', 'GitHub Actions · Jenkins'],
  ['availability', 'Open to opportunities', 'hl'],
  ['github',       'andrewpaulcummins', 'link'],
]

export const marqueeItems = [
  'SELENIUM', 'PLAYWRIGHT', 'CUCUMBER', 'TESTNG', 'JUNIT 5', 'JAVA 17',
  'ALLURE', 'GITHUB ACTIONS', 'JENKINS', 'REST ASSURED', 'JMETER',
  'POSTMAN', 'MAVEN', 'PICOCONTAINER', 'BDD · GHERKIN',
]
