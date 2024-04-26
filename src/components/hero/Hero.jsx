import logo from '../../../public/mr-fresh-logo.jpeg'
import './Hero.css'

export const Hero = () => {

    return(
        <>
        <div className="hero-sec">
            <div className="hero-sec-txt">
                <h1>This is Hero Section</h1>
                <p>This is Hero Section</p>
                <button>check menu</button>
            </div>
                <div className="hero-sec-img">
                     <img src={logo} alt="" />
                </div>
            </div>
        
            
        </>
    )
}