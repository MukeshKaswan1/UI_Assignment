import React from 'react';

const Header = () => {
  return (
    <header className="flex flex-wrap justify-between items-start  px-36 mb-8 relative mt-14">
      <div className >
        <h1 className="text-4xl pb-8 font-bold  text-[70px]">Our <span className="text-red-500 text-[70px]">Regular</span> Menu</h1>
        <p className='text-gray-400 ml-3'>These Are Our Regular Menus.<br /> You Can Order Anything You Like.</p>
      </div>

     

      <div className="absolute bottom-0 right-0 px-32">
        <button className="buy-now-button">See All</button>
      </div>
    </header>

  );
};

export default Header;
