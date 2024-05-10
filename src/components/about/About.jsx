import './About.css'
import wine_glass from '../../../public/wine-glass.jpg'
import kitchen_dish from '../../../public/kitchen-dish.jpg'

export const About =()=>{

    return(
        <>
            <div id='about' className="about-sec">
                <div className="about-img-cont">
                     <img className='about-first-img' src={wine_glass} alt="" />
                     <img className='about-second-img' src={kitchen_dish} alt="" />
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
                    <button className='about-btn'>Explore Our Story</button>
                </div>
            </div>
        </>
    )
}