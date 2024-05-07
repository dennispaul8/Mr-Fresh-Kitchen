import { useState } from 'react'
import './App.css'
import {Navbar} from './components/navbar/Navbar'
import { Hero } from './components/hero/Hero'
import { About } from './components/about/About'
import { Menu } from './components/menu/Menu'
import { Chef } from './components/chef/Chef'
import { Socials } from './components/socials/Socials'
import { Footer } from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import { MenuList } from './pages/menulist/MenuList.jsx'
import { LandingPage } from './pages/landingpage/LandingPage.jsx'

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element= {<LandingPage/>}/>
          <Route path="/menulist" element= {<MenuList/>}/>
        </Routes> 
 
    </>
  )
}

export default App
