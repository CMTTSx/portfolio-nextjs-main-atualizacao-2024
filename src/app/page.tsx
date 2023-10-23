import React from 'react'

//Import Components
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Services from './components/Services'
import Skills from './components/Skills'

function Home() {
  return (
   <>
    <Navbar />
    <Profile />
    <Services />
    <Skills />
   </>

  )
}

export default Home