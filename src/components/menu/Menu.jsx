import { useState } from 'react';
import './Menu.css'
import { Link } from 'react-router-dom'
import img1 from "../../../public/Jollof-Rice.jpg"
import img2 from "../../../public/noodles.jpg"
import img3 from "../../../public/egusi-soup.webp"
import img4 from "../../../public/pizza.jpg"
import img5 from "../../../public/pancake.jpg"
import img6 from "../../../public/chapman.jpg"
import img7 from "../../../public/chicken-kebab.jpg"
import img8 from "../../../public/zobo.jpg"


export const Menu = () => {


    const list = [
        {
            image: img1,
            heading: "Jollof Rice",
            paragraph: "Spicy West African rice dish with tomatoes, peppers, and various seasonings, a crowd-pleaser.",
            
        },
        {
            image: img2,
            heading: "Noodles",
            paragraph: "Versatile quick-cook meal, often stir-fried or in soups, popular in many cultures.",
            
        },
        {
            image: img3,
            heading: "Egusi",
            paragraph: "Nigerian soup made from ground melon seeds, rich and hearty with vegetables and meat.",
    
        },
        {
            image: img4,
            heading: "Pizza",
            paragraph: "Italian classic with dough, sauce, cheese, and assorted toppings, beloved worldwide for its flavor.",
    
        },
        {
            image: img5,
            heading: "Pancake",
            paragraph: "Fluffy breakfast favorite made from batter, often topped with syrup, fruits, or other delights.",
        }, {
            image: img6 ,
            heading: "Chapman",
            paragraph: "SNigerian mocktail with a vibrant mix of fruity flavors, perfect for social gatherings.",
        }, {
            image: img7,
            heading: "Chicken Kebab",
            paragraph: "Nigerian hibiscus drink infused with spices, refreshing and packed with health benefits.",
        }, {
            image: img8 ,
            heading: "Zobo",
            paragraph: "Skewered and grilled chicken marinated in spices, a savory and satisfying treat.",
    
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