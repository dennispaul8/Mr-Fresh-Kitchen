import { Link } from 'lucide-react'
import './Socials.css'
import { SocialIcon } from 'react-social-icons'

export const Socials = () => {

    return (
        <>
            <div className="socials-cont">
                <h2>Contact Us</h2>
                <div className="social-icons--cont">
                    <SocialIcon className='social-icons' url="https://www.instagram.com/dennis_sinnd?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" />
                    <SocialIcon className='social-icons' url="https://www.whatsapp.com/" />
                    <SocialIcon className='social-icons' url="https://www.facebook.com/" />
                </div>
            </div>
        </>
    )
}