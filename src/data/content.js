export const personal = {
  name: 'Andrew Cummins',
  role: 'SDET & Automation Engineer',
  location: 'Kilkenny, Ireland',
  commute: 'Available to commute to Dublin and surrounding counties',
  email: 'andrewpaulcummins@gmail.com',  
  github: 'https://github.com/andrewpaulcummins',
  linkedin: 'https://www.linkedin.com/in/andrew-cummins-a65125152/',
  available: true,
}

export const stats = [
  { num: '3+',   label: 'Production frameworks built' },
  { num: '100%', label: 'Test coverage across UI, API & load' },
  { num: 'BDD',  label: 'Selenium · Playwright' },
  { num: '7',   label: 'Years in QA engineering' },
]

export const skills = [
  {
    icon: '🧪',
    name: 'Test automation',
    desc: 'End-to-end framework design and implementation from the ground up, not just writing tests, but building the infrastructure that scales.',
    tags: [
      { label: 'Selenium 4', colour: 'orange' },
      { label: 'Playwright', colour: 'orange' },
      { label: 'TestNG',     colour: 'orange' },
      { label: 'JUnit 5',    colour: 'orange' },
    ],
  },
  {
    icon: '🥒',
    name: 'BDD & test design',
    desc: 'Behaviour-driven development with Cucumber and Gherkin, bridging the gap between product requirements and executable test specs.',
    tags: [
      { label: 'Cucumber 7',      colour: 'orange' },
      { label: 'Gherkin',         colour: 'orange' },
      { label: 'PicoContainer',   colour: 'orange' },
      { label: 'Page Object Model', colour: 'blue' },
    ],
  },
  {
    icon: '⚙️',
    name: 'CI/CD & pipelines',
    desc: 'Automated pipelines that run tests on every commit, providing fast feedback loops with Allure reporting and GitHub Actions integration.',
    tags: [
      { label: 'GitHub Actions', colour: 'green' },
      { label: 'Allure Reports', colour: 'green' },
      { label: 'Maven',          colour: 'orange' },
      { label: 'Jenkins',        colour: 'orange' },
    ],
  },
  {
    icon: '☕',
    name: 'Java & OOP',
    desc: 'Strong Java fundamentals with design patterns applied to real-world framework architecture: dependency injection, factory patterns, and clean code.',
    tags: [
      { label: 'Java 17',             colour: 'orange' },
      { label: 'OOP',                 colour: 'orange' },
      { label: 'Design patterns',     colour: 'orange' },
      { label: 'Dependency injection', colour: 'purple' },
    ],
  },
  {
    icon: '🌐',
    name: 'Web & frontend',
    desc: 'Enough frontend knowledge to be dangerous. This portfolio site, built from scratch in React + Vite, is proof of that.',
    tags: [
      { label: 'React',       colour: 'blue' },
      { label: 'Vite',        colour: 'blue' },
      { label: 'JavaScript',  colour: 'blue' },
      { label: 'HTML5/CSS3',  colour: 'blue' },
      { label: 'Node.js',     colour: 'green' },
      { label: 'Express.js',  colour: 'green' },
    ],
  },
  {
    icon: '🖥️',
    name: 'Backend & real-time',
    desc: 'Server-side development with Node.js and Express, including real-time data broadcasting via WebSockets and persistent storage with MongoDB.',
    tags: [
      { label: 'Node.js',    colour: 'green' },
      { label: 'Express.js', colour: 'green' },
      { label: 'WebSockets', colour: 'blue' },
      { label: 'MongoDB',    colour: 'green' },
      { label: 'REST APIs',  colour: 'purple' },
      { label: 'dotenv',     colour: 'orange' },
    ],
  },
  {
    icon: '🔍',
    name: 'API & performance testing',
    desc: 'REST API validation and performance benchmarking to catch issues before they reach production, because UI tests are just one layer.',
    tags: [
      { label: 'REST Assured', colour: 'purple' },
      { label: 'Postman',      colour: 'purple' },
      { label: 'JMeter',       colour: 'orange' },
      { label: 'Swagger',      colour: 'orange' },
    ],
  },
]

export const projects = [
  {
    id: 'selenium-bdd',
    featured: true,
    title: 'Selenium BDD Framework',
    badge: 'live',
    badgeLabel: 'Live & passing',
    desc: 'An enterprise-grade BDD test automation framework built from scratch. Combines Selenium 4, Cucumber 7, TestNG, and PicoContainer dependency injection, following industry patterns for scalable, maintainable test suites. Fully integrated with GitHub Actions CI and Allure for rich test reporting.',
    stack: [
      { label: 'Java 17',       colour: 'orange' },
      { label: 'Selenium 4',    colour: 'orange' },
      { label: 'Cucumber 7',    colour: 'orange' },
      { label: 'TestNG',        colour: 'orange' },
      { label: 'PicoContainer', colour: 'orange' },
      { label: 'GitHub Actions', colour: 'green' },
      { label: 'Allure',        colour: 'green' },
      { label: 'Maven',         colour: 'orange' },
    ],
    links: [
      { label: '↗ View on GitHub', url: 'https://github.com/andrewpaulcummins/selenium-bdd-framework' },
      { label: '● Allure report',  url: 'https://andrewpaulcummins.github.io/selenium-bdd-framework/', colour: 'green' },
    ],
    pipeline: [
      { label: 'Checkout & setup JDK 17',   time: '3s' },
      { label: 'Maven dependency cache',    time: '8s' },
      { label: 'Run Cucumber test suite',   time: '42s' },
      { label: 'Generate Allure report',    time: '6s' },
      { label: 'Deploy to GitHub Pages',    time: '11s' },
    ],
  },
  {
    id: 'playwright',
    featured: false,
    title: 'Playwright Framework',
    badge: 'live',
    badgeLabel: 'Live & passing',
    desc: 'A Playwright (Java) framework with parallel execution, network interception, and visual regression testing. Targeting the second most requested skill set in SDET job postings.',
    stack: [
      { label: 'Playwright',         colour: 'orange' },
      { label: 'Java',               colour: 'orange' },
      { label: 'Parallel execution', colour: 'blue' },
      { label: 'Visual regression',  colour: 'blue' },
      { label: 'PicoContainer',      colour: 'orange' },
      { label: 'GitHub Actions',     colour: 'green' },
    ],
    links: [
      { label: '↗ View on GitHub', url: 'https://github.com/andrewpaulcummins/playwright-framework' },
      { label: '● Allure report',  url: 'https://andrewpaulcummins.github.io/playwright-bdd-framework/', colour: 'green' },
    ],
  },
  {
    id: 'warzone-tracker',
    featured: false,
    title: 'Warzone Ranked SR Tracker',
    badge: 'wip',
    badgeLabel: 'In progress',
    desc: 'A real-time Skill Rating overlay tracker for Call of Duty: Warzone, built for streamers to display live rank progress on-screen. Tracks SR gains/losses, maps values to ranked tiers (Bronze to Iridescent), and pushes live updates to connected clients via WebSocket. Access is gated by a license key system backed by MongoDB.',
    stack: [
      { label: 'Node.js',     colour: 'green' },
      { label: 'Express.js',  colour: 'green' },
      { label: 'WebSockets',  colour: 'blue' },
      { label: 'MongoDB',     colour: 'green' },
      { label: 'HTML/CSS/JS', colour: 'blue' },
      { label: 'dotenv',      colour: 'orange' },
    ],
    links: [
      { label: '↗ View on GitHub', url: 'https://github.com/andrewpaulcummins/warzoneSRTracker' },
    ],
  },
  {
    id: 'portfolio',
    featured: false,
    title: 'This portfolio site',
    badge: 'live',
    badgeLabel: 'Live',
    desc: 'Built with React and Vite. Having working knowledge of how frontend and backend fit together makes me a sharper tester, I know what I\'m testing, not just how to test it.',
    stack: [
      { label: 'React',    colour: 'blue' },
      { label: 'Vite',     colour: 'blue' },
      { label: 'CSS3',     colour: 'blue' },
      { label: 'IntersectionObserver', colour: 'purple' },
    ],
    links: [],
  },
]
