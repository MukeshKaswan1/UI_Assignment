import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div class="footer_main px-24">
            <div>
                <div class="footer_tag">
                <span className='text-[#e75b58] text-[30px]'>Foodle</span>
                    <p class="end"> © 2024 all right reserved</p>
                </div>
                <div class="footer_tag  items-center ">
                <div className='text-[#e75b58] text-[30px] mb-5'>Follows</div>
                    <i class="fab fa-facebook-f text-2xl text-blue-600"></i>
                    <i class="fab fa-twitter text-2xl text-blue-400"></i>
                    <i class="fab fa-instagram text-2xl text-pink-600"></i>
                    <i class="fab fa-linkedin-in text-2xl text-blue-700"></i>
                </div>

            </div>

            <div class="footer_tag">
            <span className='text-[#e75b58] text-[30px]'>Menu</span>
                <p>Home</p>
                <p>Offer</p>
                <p>Services</p>
                <p>About Us</p>
            </div>

            <div className='footer_tag'>
            <span className='text-[#e75b58] text-[30px]'>Information</span>
                <p>Menu</p>
                <p>Quality</p>
                <p>Make a Choice</p>
                <p>Salad with Vegetable</p>
                <p>Fast Delivery</p>
                <p>Subscribe</p>
            </div>

            <div class="footer_tag">
                <span className='text-[#e75b58] text-[30px]'>Contact</span>
                <p>+91 12 3456 789</p>
                <p>Explore</p>
                <p>abc@gmail.com</p>
                <p>Noida, UttarPradesh</p>
            </div>

        </div>

        

    </footer>
  )
}

export default Footer