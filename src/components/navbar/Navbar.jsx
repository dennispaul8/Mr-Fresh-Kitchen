import './Navbar.css'
import logo from '../../../public/mr-fresh-logo.jpeg'

export const Navbar = ()=>{

  return(
    <>
      {/* <nav className="nav-cont">
          <div className="nav-img">
              <img src={logo} alt="" />
          </div>
          <div className="nav-txt">
                <a href="/">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="#menu">Menu</a>
          </div>
      </nav> */}

<nav class="navbar navbar-expand-lg " style={{backgroundColor:"#fbefe27a"}}>
  <div class="container-fluid">
    <a class="navbar-brand nav-img" href="#"><img src={logo} alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav nav-txt">
        <a class="nav-link" aria-current="page" href="/">Home</a>
        <a class="nav-link" href="#about">About</a>
        <a class="nav-link" href="#contact">Contact</a>
        <a class="nav-link" href="#menu">Menu</a>
      </div>
    </div>
  </div>
</nav>

    </>
  )
}