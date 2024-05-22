import { useState } from 'react';
import './Menu.css'
import { Link } from 'react-router-dom'


export const Menu = () => {


    const list = [
        {
            image: "../../../public/Jollof-Rice.jpg",
            heading: "Jollof Rice",
            paragraph: "Spicy West African rice dish with tomatoes, peppers, and various seasonings, a crowd-pleaser.",
            
        },
        {
            image: "../../../public/noodles.jpg",
            heading: "Noodles",
            paragraph: "Versatile quick-cook meal, often stir-fried or in soups, popular in many cultures.",
            
        },
        {
            image: "../../../public/egusi-soup.webp",
            heading: "Egusi",
            paragraph: "Nigerian soup made from ground melon seeds, rich and hearty with vegetables and meat.",
    
        },
        {
            image: "../../../public/pizza.jpg",
            heading: "Pizza",
            paragraph: "Italian classic with dough, sauce, cheese, and assorted toppings, beloved worldwide for its flavor.",
    
        },
        {
            image: "../../../public/pancake.jpg",
            heading: "Pancake",
            paragraph: "Fluffy breakfast favorite made from batter, often topped with syrup, fruits, or other delights.",
        }, {
            image: "../../../public/chapman.jpg",
            heading: "Chapman",
            paragraph: "SNigerian mocktail with a vibrant mix of fruity flavors, perfect for social gatherings.",
        }, {
            image: "../../../public/chicken-kebab.jpg",
            heading: "Chicken Kebab",
            paragraph: "Nigerian hibiscus drink infused with spices, refreshing and packed with health benefits.",
        }, {
            image: "../../../public/zobo.jpg",
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