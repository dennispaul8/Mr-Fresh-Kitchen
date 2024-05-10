import { useState } from 'react';
import './Menu.css'
import { Link } from 'react-router-dom'


export const Menu = () => {


    const list = [
        {
            image: "../../../public/mr-fresh-logo.jpeg",
            heading: "French Fries",
            paragraph: "Say goodbye to the hassle of coordinating Say goodbye to the hassle of coordinati",
            price: "01",
        },
        {
            image: "../../../public/mr-fresh-logo.jpeg",
            heading: "Pasta",
            paragraph: "Create your unique profile as a Say goodbye to the hassle of coordinati",
            price: "02",
        },
        {
            image: "../../../public/mr-fresh-logo.jpeg",
            heading: "Burger",
            paragraph: "Say goodbye to the hassle of coordinati Say goodbye to the hassle of coordinati",
            price: "03",
        },
        {
            image: "../../../public/mr-fresh-logo.jpeg",
            heading: "Burger",
            paragraph: "Say goodbye to the hassle of coordinati Say goodbye to the hassle of coordinati",
            price: "03",
        },
        {
            image: "../../../public/mr-fresh-logo.jpeg",
            heading: "Burger",
            paragraph: "Say goodbye to the hassle of coordinati Say goodbye to the hassle of coordinati",
            price: "03",
        }, {
            image: "../../../public/mr-fresh-logo.jpeg",
            heading: "Burger",
            paragraph: "Say goodbye to the hassle of coordinati Say goodbye to the hassle of coordinati",
            price: "03",
        }, {
            image: "../../../public/mr-fresh-logo.jpeg",
            heading: "Burger",
            paragraph: "Say goodbye to the hassle of coordinati Say goodbye to the hassle of coordinati",
            price: "03",
        }, {
            image: "../../../public/mr-fresh-logo.jpeg",
            heading: "Burger",
            paragraph: "Say goodbye to the hassle of coordinati Say goodbye to the hassle of coordinati",
            price: "03",
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