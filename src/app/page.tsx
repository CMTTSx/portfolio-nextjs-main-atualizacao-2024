import React from 'react'

//Import Components
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Services from './components/Services'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function Home() {
  return (
   <>
    <Navbar />
    <Profile />
    <Services />
    <Skills />
    <Portfolio />
    <Contact />
   </>

  )
}

export default Home