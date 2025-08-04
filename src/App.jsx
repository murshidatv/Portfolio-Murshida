import React from 'react'
import Header from './sections/Header'
import Skills from './sections/Skills'
import Projects from './sections/Projects'

import Footer from './sections/Footer'
import Home from './sections/Home'
import MiniProjects from './sections/MiniProjects'

import ContactForm from './sections/ContactForm'

const App = () => {
  return (
    <div>
      <Header/>
<section id="home"className="py-10">
  <Home />
</section>
<section id="projects" className="py-20">
  <Projects />
</section>
<section id="miniprojects" className="py-20">
  <MiniProjects />
</section>
<section id="skills" className="py-20">
  <Skills />
</section>
<section id="contactform" className="py-20">
<ContactForm />
 <Footer/>
</section>
 
    </div>
  )
}

export default App

