import './About.css'
import logo from '../../../public/mr-fresh-logo.jpeg'

export const About =()=>{

    return(
        <>
            <div className="about-sec">
                <div className="about-img-cont">
                     <img className='about-first-img' src={logo} alt="" />
                     <img className='about-second-img' src={logo} alt="" />
                </div>

                <div className="about-text">
                        <h2>Simple Way of <br />
                            Eating Delicious</h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                            Magnam sed est animi voluptatum impedit necessitatibus<br /> quidem doloribus ducimus vitae quod? 
                            Tempore ducimus <br />
                            consectetur est unde officiis optio natus alias nam?
                        </p>
                    <button className='about-btn'>Get Started</button>
                </div>
            </div>
        </>
    )
}