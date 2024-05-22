import './About.css'
import wine_glass from '../../../public/wine-glass.jpg'
import kitchen_dish from '../../../public/kitchen-dish.jpg'
import { Link } from 'react-router-dom'
// import { Animator, Fade, Move, MoveOut, ScrollContainer, ScrollPage, Sticky, batch } from 'react-scroll-motion'

export const About = () => {

    return (
        <>

            {/* <ScrollContainer >
                <ScrollPage>
                    <Animator animation={batch(Fade(), Move())}> */}
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
                    <div className="about-btn--cont">
                        {/* <button className='about-btn'>Explore Our Story</button> */}
                        <Link to='/our-story'>
                            <button className='about-btn'>Explore Our Story</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* </Animator>
                </ScrollPage>
            </ScrollContainer> */}
        </>
    )
}