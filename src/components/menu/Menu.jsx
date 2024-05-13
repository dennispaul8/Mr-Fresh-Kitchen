import { useState } from 'react';
import './Menu.css'
import { Link } from 'react-router-dom'


export const Menu = () => {


    const list = [
        {
            image: "../../../public/mr-fresh-logo.jpeg",
            heading: "Jollof Rice",
            paragraph: "Say goodbye to the hassle of coordinating Say goodbye to the hassle of coordinati",
            
        },
        {
            image: "../../../public/mr-fresh-logo.jpeg",
            heading: "Noodles",
            paragraph: "Create your unique profile as a Say goodbye to the hassle of coordinati",
            
        },
        {
            image: "../../../public/mr-fresh-logo.jpeg",
            heading: "Egusi",
            paragraph: "Say goodbye to the hassle of coordinati Say goodbye to the hassle of coordinati",
    
        },
        {
            image: "../../../public/mr-fresh-logo.jpeg",
            heading: "Pizza",
            paragraph: "Say goodbye to the hassle of coordinati Say goodbye to the hassle of coordinati",
    
        },
        {
            image: "../../../public/mr-fresh-logo.jpeg",
            heading: "Pancake",
            paragraph: "Say goodbye to the hassle of coordinati Say goodbye to the hassle of coordinati",
            price: "03",
        }, {
            image: "../../../public/mr-fresh-logo.jpeg",
            heading: "Chapman",
            paragraph: "Say goodbye to the hassle of coordinati Say goodbye to the hassle of coordinati",
            price: "03",
        }, {
            image: "../../../public/mr-fresh-logo.jpeg",
            heading: "Chicken Kebab",
            paragraph: "Say goodbye to the hassle of coordinati Say goodbye to the hassle of coordinati",
            price: "03",
        }, {
            image: "../../../public/mr-fresh-logo.jpeg",
            heading: "Zobo",
            paragraph: "Say goodbye to the hassle of coordinati Say goodbye to the hassle of coordinati",
    
        },
    ]

    return (
        <>
            <div id='menu' className="menu-sec">
                <h2>Our Menu</h2>

                <div className="menu-list">
                    {list.map((info, index) =>

                        <div key={index} className='menu-card'>
                            <img className='menu-img' src={info.image} alt="" />
                            <h3>{info.heading}</h3>
                            <p>{info.paragraph}</p>
                            <p>{info.price}</p>
                        </div>

                    )}
                </div>

                
                <button className='seemore-btn' onClick={() => {
                    setTimeout(() => {
                        navigation.navigate('/menulist');
                    }, 2000);
                }}>See More</button>


            </div>
        </>
    )
}