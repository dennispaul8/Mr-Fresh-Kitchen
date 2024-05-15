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
import AnimatedCursor from 'react-animated-cursor'

function App() {

  return (
    <>
    <AnimatedCursor
     innerSize={10}
     outerSize={35}
     innerScale={2}
     outerScale={1}
     outerAlpha={0}
     hasBlendMode={true}
     innerStyle={{
       backgroundColor: '#000000'
     }}
     outerStyle={{
       border: '3px solid #e79052'
     }}/>
      <Routes>
          <Route path="/" element= {<LandingPage/>}/>
          <Route path="/menulist" element= {<MenuList/>}/>
        </Routes> 
 
    </>
  )
}

export default App
