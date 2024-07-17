import React from "react";
import './BestItem.css'
import { FiArrowRight } from 'react-icons/fi';
import burger from '../Image/burger.png';
import pizza from '../Image/pizza.png';
import fries from '../Image/French.png';



const BestItem = () => {
  return (
    <>
      <div className="flex flex-wrap justify-around items-center w-full ">
        <div className="category-item text-center mb-8">
          <img
            className="w-72 h-92 mx-auto mb-4"
            src={burger}
            alt="Chicken Burger"
          />
          <h3 className="text-xl font-semibold mb-2">Chicken Burger</h3>
          <div className="flex flex-row justify-center">
          <button className=" text-[#e75b58] font-medium py-2 ounded flex flex-row items-center justify-center">
            Order Now
            <FiArrowRight className="ml-2" />
          </button>
          </div>
        </div>

        <div className="category-item text-center mb-8">
          <img
            className="w-72 h-92 mx-auto mb-4"
            src={burger}
            alt="Chicken Pizza"
          />
          <h3 className="text-xl font-semibold mb-2">Chicken Pizza</h3>
          <div className="flex flex-row justify-center">
          <button className=" text-[#e75b58] font-medium py-2 ounded flex flex-row items-center justify-center">
            Order Now
            <FiArrowRight className="ml-2" />
          </button>
          </div>
         
        </div>

        <div className="category-item text-center mb-8">
          <img
            className="w-72 h-92 mx-auto mb-4"
            src={burger}
            alt="French Fries"
          />
          <h3 className="text-xl font-semibold mb-2">French Fries</h3>
          <div className="flex flex-row justify-center">
          <button className=" text-[#e75b58] font-medium py-2 ounded flex flex-row items-center justify-center">
            Order Now
            <FiArrowRight className="ml-2" />
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestItem;