import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contacts from './components/Contacts'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default App