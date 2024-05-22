import { Link } from 'lucide-react'
import './Socials.css'
import { SocialIcon } from 'react-social-icons'

export const Socials = () => {

    return (
        <>
            <div id='contact' className="socials-cont">
                <h2>Contact Us</h2>
                <div className="social-icons--cont">
                    <SocialIcon target="_blank" className='social-icons' url="https://www.instagram.com/samsonguy3/" />
                    <SocialIcon target="_blank" className='social-icons' url="https://www.wa.me/+2348087314321/" />
                    <SocialIcon  target="_blank" className='social-icons' url="https://www.facebook.com/samson.guy.75" />
                </div>
            </div>
        </>
    )
}
// https://wa.me/+2348087314321/