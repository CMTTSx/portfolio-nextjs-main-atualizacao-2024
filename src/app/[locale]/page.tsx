import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

//Import Components
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


function Home() {
  return (
   <>
   <SpeedInsights/>
    <Navbar />
    <Profile />
    <Services />
    <Skills />
    <Portfolio />
    <Contact />
    <Footer />
   </>

  )
}

export default Home