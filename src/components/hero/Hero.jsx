import { Link } from 'react-router-dom'
import logo from '../../../public/mr-fresh-logo.jpeg'
import './Hero.css'
// import { Button } from "../ui/button"


export const Hero = () => {

    return(
        <>
        <div className="hero-sec">
            <div className="hero-sec-txt">
                <h1>Get in the holiday
                    mood,donate <br /> 
                    some food</h1>
                <p>Our job is to fill your tummy with delicious food.</p>
                
                <div className="hero-button">
                    <Link to='/menulist'>
                    <button className='seemenu-btn'>See Menu</button>
                </Link>
                    </div>
            </div>
                <div className="hero-sec-img--cont">
                     <img className='hero-sec-img' src={logo} alt="" />
                </div>
            </div>
        
            
        </>
    )
}