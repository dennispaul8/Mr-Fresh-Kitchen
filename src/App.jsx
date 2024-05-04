import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { Hero } from './components/hero/Hero'
import { About } from './components/about/About'
import { Menu } from './components/menu/Menu'
import { Chef } from './components/chef/Chef'

function App() {

  return (
    <>
     {/* <Navbar/> */}

      <Hero/>

      <About/>

      <Menu/>

      <Chef/>
 
    </>
  )
}

export default App
