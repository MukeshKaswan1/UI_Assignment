import React from 'react';
import MenuItem from './MenuItem';
import chicken_burger from "../Image/chicken_burger.png"
import chicken_pizza from '../Image/chicken_pizza.png'
import chicken_fry from '../Image/chicken_fry.png'
import sandwich from '../Image/chicken_sand.png'
import taco from '../Image/taco.png'
import ramen from '../Image/ramen.jpg'

function Menu() {
  const menuItems = [
    { name: 'Chicken Burger', price: '$4.20', image: chicken_burger, rating: "(140)" },
    { name: 'Chicken Pizza', price: '$4.20', image: chicken_pizza, rating: "(142)" },
    { name: 'Chicken Fry', price: '$5.00', image: chicken_fry, rating: "(125)" },
    { name: 'Sandwich', price: '$3.50', image: sandwich, rating: "(132)" },
    { name: 'Taco Traifi', price: '$3.63', image: taco, rating: "(153)" },
    { name: 'Noddle\'s Ramen', price: '$6.50', image: ramen, rating: "(135)" },
  ];
console.log(menuItems)
  return (
    <div className="menu">
      {/* {menuItems.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))} */}


      { menuItems.map((item , index)=>{
          console.log(index)
             return (
                <MenuItem key={index} item={item} />
             )
          })
      }
    </div>
  );
}

export default Menu;
