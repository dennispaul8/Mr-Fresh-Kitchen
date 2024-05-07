
import { About } from "../../components/about/About"
import { Hero } from "../../components/hero/Hero"
import { Navbar } from "../../components/navbar/Navbar"
import { Chef } from "../../components/chef/Chef"
import { Socials } from "../../components/socials/Socials"
import { Footer } from "../../components/footer/Footer"
import { Menu } from "../../components/menu/Menu"


export const LandingPage = ()=>{

    return(
        <>
        <Navbar/>

      <Hero/>

      <About/>

      <Menu/>

      <Chef/>

      <Socials/>

      <Footer/>
        </>
    )
}