import React from 'react'
import food from "../Image/main_img.png"
import Avtar from "../Image/chef3.png"
import { RiShoppingBagFill } from "react-icons/ri";
import { FaTruck, FaLeaf, FaShippingFast } from 'react-icons/fa';
import './Navbar.css'
import { MdOutlineShoppingBag } from "react-icons/md";

const Header1 = () => {
    return (
        <>
            <section id="Home" className='section1'>
                <nav>
                    <div className="logo">
                        <span>Foodle</span>
                    </div>

                    <ul>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#About">Offers</a></li>
                        <li><a href="#Menu">Service</a></li>
                        <li><a href="#Gallary">Menu</a></li>
                        <li><a href="#Review">About Us</a></li>
                    </ul>

                    <div className="icon">
                        <button className='login' >Login</button>
                        <button className='signup' >Sign Up</button>
                    </div>

                </nav >

                <div className="main ">

                    <div className="men_text">
                        <h1><span >All Fast Food is</span><br></br><span>Available at Foodle</span></h1>
                    </div>
                 
                    <div className="main_image mr-12">
                        <img src={food} />
                    </div>

                </div>
                <div className='mt-[90px]'>
                <div className='main_avtar' >
                    <div className='avtar' >
                        <img src={Avtar} />
                    </div>
                    <div>
                        <p className='text-gray-500 ml-3'>
                            We Are Just A Click Away When You  <br />Crave For Delicious Fast Food
                        </p>
                    </div>
                </div>
                </div>
                <div className="main_btn flex flex-row items-center">

                    <i className='shopping' > <MdOutlineShoppingBag />
                    </i>
                    <a href="#">Buy Now</a>

                </div>

            </section>

            <div className="features">
                <div className="feature-item">
                    <FaTruck className="feature-icon" />
                    <div>
                        <h3>Fast Delivery</h3>
                        <span>The Food Will Be Delivered To <br /> your Home Within 1-2 Hours of <br /> Your Ordering.</span>
                    </div>
                </div>
                <div className="feature-item">
                    <FaLeaf className="feature-icon" />
                    <div>
                        <h3>Fresh Food</h3>
                        <span>The Food Will Be Delivered To <br /> your Home Within 1-2 Hours of <br /> Your Ordering.</span>
                    </div>
                </div>
                <div className="feature-item">
                    <FaShippingFast className="feature-icon" />
                    <div>
                        <h3>Free Delivery</h3>
                        <span>The Food Will Be Delivered To <br /> your Home Within 1-2 Hours of <br /> Your Ordering.</span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header1


// import React from 'react'
// import food from "../Image/main_img.png"
// import Avtar from "../Image/chef3.png"
// import { RiShoppingBagFill } from "react-icons/ri";
// import { FaTruck, FaLeaf, FaShippingFast } from 'react-icons/fa';

// const Header1 = () => {
//   return (
//     <>
//       <section id="Home" className="w-full h-[110vh] bg-[#FFF0E9]">
//         <nav className="flex justify-around items-center z-1000">
//           <div className="w-[100px] cursor-pointer my-2.5 pt-2.5 pb-2.5 font-semibold text-2xl">
//             <span>Foodle</span>
//           </div>

//           <ul className="list-none">
//             <li className="inline-block mx-4">
//               <a href="#Home" className="text-black font-medium text-lg transition duration-100 hover:text-[#fac031]">
//                 Home
//               </a>
//             </li>
//             <li className="inline-block mx-4">
//               <a href="#About" className="text-black font-medium text-lg transition duration-100 hover:text-[#fac031]">
//                 Offers
//               </a>
//             </li>
//             <li className="inline-block mx-4">
//               <a href="#Menu" className="text-black font-medium text-lg transition duration-100 hover:text-[#fac031]">
//                 Service
//               </a>
//             </li>
//             <li className="inline-block mx-4">
//               <a href="#Gallary" className="text-black font-medium text-lg transition duration-100 hover:text-[#fac031]">
//                 Menu
//               </a>
//             </li>
//             <li className="inline-block mx-4">
//               <a href="#Review" className="text-black font-medium text-lg transition duration-100 hover:text-[#fac031]">
//                 About Us
//               </a>
//             </li>
//           </ul>

//           <div className="flex">
//             <button className="text-lg text-red-500 mx-1.5 cursor-pointer transition duration-300 bg-transparent border-none">
//               Login
//             </button>
//             <button className="text-base text-red-500 mx-1.5 cursor-pointer transition duration-300 bg-transparent px-2 py-2 border border-red-500 rounded-full">
//               Sign Up
//             </button>
//           </div>
//         </nav >

//         <div className="flex items-center justify-around relative top-[130px]">
//           <div className="relative top-[-90px] left-5">
//             <h1 className="text-5xl">
//               <span className="ml-4 text-red-500 font-[mv_boli] leading-[22px] text-[70px]">
//                 All Fast Food is <br /> Available at Foodle
//               </span>
//             </h1>
//           </div>

//           <div className="relative left-[70px] max-w-full overflow-hidden">
//             <img src={food} className="w-full max-w-[600px]" />
//             </div>

//         </div>

//         <div className="flex flex-row relative top-[-120px] left-[123px]">
//           <div className="w-10 rounded-full relative top-[-118px] left-[110px]">
//             <img src={Avtar} />
//           </div>
//           <div>
//             <p className="w-[650px] text-justify leading-[22px]">
//               We Are Just A Click Away When You <br />Crave For Delicious Fast Food
//             </p>
//           </div>
//         </div>

//         <div className="bg-red-500 relative left-[123px] top-[-30px] w-[130px] cursor-pointer py-3 px-2.5 rounded-full flex items-center">
//           <i className="shopping bg-[#fac031] pl-1.5 pt-2 pb-0.5 pr-1.5 rounded-full">
//             <RiShoppingBagFill className="text-white" />
//           </i>
//           <a href="#" className="text-white ml-2.5 no-underline">
//             Buy Now
//           </a>
//         </div>
//       </section>

//       <div className="flex justify-around py-10 px-5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] w-[85%] mx-auto rounded-[20px] relative top-[-70px]">
//         <div className="flex items-start gap-5">
//           <FaTruck className="feature-icon text-[50px] bg-[#fac031] rounded-full p-2.5" />
//           <div>
//             <h3 className="mb-2.5">Fast Delivery</h3>
//             <span className="text-sm">
//               The Food Will Be Delivered To <br /> your Home Within 1-2 Hours of <br /> Your Ordering.
//             </span>
//           </div>
//         </div>
//         <div className="flex items-start gap-5">
//           <FaLeaf className="feature-icon text-[50px] bg-[#fac031] rounded-full p-2.5" />
//           <div>
//             <h3 className="mb-2.5">Fresh Food</h3>
//             <span className="text-sm">
//               The Food Will Be Delivered To <br /> your Home Within 1-2 Hours of <br /> Your Ordering.
//             </span>
//           </div>
//         </div>
//         <div className="flex items-start gap-5">
//           <FaShippingFast className="feature-icon text-[50px] bg-[#fac031] rounded-full p-2.5" />
//           <div>
//             <h3 className="mb-2.5">Free Delivery</h3>
//             <span className="text-sm">
//               The Food Will Be Delivered To <br /> your Home Within 1-2 Hours of <br /> Your Ordering.
//             </span>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Header1
