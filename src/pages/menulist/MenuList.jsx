import './MenuList.css'
import { Link } from 'react-router-dom'
import bg from '../../../public/svg-bg.png'


export const MenuList =()=>{
    

return(
    <>
        <div className="menulist-cont">
            <div className="menulist-cont--heading">
                <h2>Our Delicious Menu</h2>
            </div>
            <div className="menulist-top">
               <div className="breakfast-cont">
               <h2>Breakfast</h2>
                <ul>
                <li><i class="bi bi-egg-fried"></i><span>Moi-Moi</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Akara</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Custard</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Noodles</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Pancake</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>French toast</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Sandwich</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Bread and butter pudding</span></li>
                </ul>
               </div>

               <div className="soups-cont">
               <h2>Soups</h2>
                <ul>
                <li><i class="bi bi-egg-fried"></i><span>Egusi</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Efo riro</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Seafood okro</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Okro</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Ogbono</span></li>
                </ul>
               </div>

               <div className="jnd-cont">
               <h2>Juice and Drinks</h2>
                <ul>
                    <li><i class="bi bi-egg-fried"></i><span>Orange and cranberry cocktail</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Sunrise mocktail</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Zobo</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Tigernut drink</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Chapman</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Watermelon cream</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Coconut milk juice</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Apple carrot juice</span></li>
                </ul>
               </div>
            </div>
            

            <div className="menulist-bottom">
            <div className="main-meal-cont">
               <h2>Main Meal</h2>
                <ul>
                <li><i class="bi bi-egg-fried"></i><span>Egg fried rice</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Cheesy yam ball</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Chinese fried rice</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Fried rice</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Jollof rice</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Spaghetti meatball</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Vegetable Rice</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Seafood sausage paella</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Bolognese pasta</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Yamarita and sauce</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Yam pottage</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Beans pottage</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Yam and egg</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Ewa agoyin</span></li>
                </ul>
               </div>
     
               <div className="snacks-cont">
               <h2>Snacks</h2>
                <ul>
                <li><i class="bi bi-egg-fried"></i><span>Beef & chicken burger</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Beef& chicken shawarma</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Plain & veg spring rolls</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Plain and veg samosa</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Sausage bread</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Pizza</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Meatpie</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Fish in batter</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Mozz cheese corndog</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Fish croquette</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Churros</span></li>
                </ul>
               </div>

               <div className="others-cont">
               <h2>Others</h2>
                <ul>
                    <li><i class="bi bi-egg-fried"></i><span>Gizzard dodo</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Chicken kebab</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Beef kebab</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Pepper soup (different protein)</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Spicy gizzard</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Spicy fish</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Spicy beef</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Spicy chicken</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Spicy goatmeat</span></li>
                    <li><i class="bi bi-egg-fried"></i><span>Spicy snail</span></li>
                </ul>
               </div>
              
            </div>
             
             <div className='back-home-btn--cont' >
                 <Link to='/'>
                      <button className='back-home-btn'>Back to Home</button>
                </Link>
             </div>
            
        </div>
    </>
)
}