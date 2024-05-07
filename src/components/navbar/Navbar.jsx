import './Navbar.css'
import logo from '../../../public/mr-fresh-logo.jpeg'

export const Navbar = ()=>{

  return(
    <>
      <nav className="nav-cont">
          <div className="nav-img">
              <img src={logo} alt="" />
          </div>
          <div className="nav-txt">
                <a href="/">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="#menu">Menu</a>
          </div>
      </nav>
    </>
  )
}