import React from 'react'

//Import Components
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Services from './components/Services'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'

function Home() {
  return (
   <>
    <Navbar />
    <Profile />
    <Services />
    <Skills />
    <Portfolio />
   </>

  )
}

export default Home