'use client'

//Import Components
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Services from './components/Services'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Link from 'next/link'

function Home() {
  
  return (
   <>
    <Navbar />
    <Profile  />
    <div id="services">
    <Services />
    </div>
    <div id="skills">
    <Skills />
    </div>
    <div id="portfolio">
    <Portfolio />
    </div>
    <div id="contact">
    <Contact />
    </div>
    <Footer />
   </>

  )
}

export default Home