import React from 'react'
import Nav      from './components/Nav'
import Hero     from './components/Hero'
import Stats    from './components/Stats'
import Skills   from './components/Skills'
import Projects from './components/Projects'
import About    from './components/About'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
