import React from 'react';

import Link from 'next/link';

import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
 return (
   <div>
    <Navbar />
    <Profile />
    <Services />
    <Skills />
    <Portfolio />
    <Contact />
    <Footer />
   </div>
 );
}