import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { Hero } from './components/hero/Hero'
import { About } from './components/about/About'
import { Menu } from './components/menu/Menu'
import { Chef } from './components/chef/Chef'
import { Socials } from './components/socials/Socials'
import { Footer } from './components/footer/Footer'

function App() {

  return (
    <>
     {/* <Navbar/> */}

      <Hero/>

      <About/>

      <Menu/>

      <Chef/>

      <Socials/>

      <Footer/>
 
    </>
  )
}

export default App
