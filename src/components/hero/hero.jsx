import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css'
import { RiWhatsappFill, RiInstagramFill } from 'react-icons/ri';
import logo from '../../assets/logo.jpeg'







const HeroSection = () => {
 
  return (
    <section>
        <section>
    <div className="hero-section" >
      
        <div className='image'></div>
        <div className='button'>
      <Link to="/optical-glasses" className="shop-now-button">
        Shop Now
      </Link>  
      </div>
      </div>
    </section>
      
<section class="text-gray-600 body-font">
<div class="container px-5 py-24 mx-auto">
  <div class="flex flex-wrap justify-center justify-around -m-4">
    <div class="p-4 lg:w-1/3">
      <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">ABOUT US</h2>
        
        <p class="leading-relaxed mb-3">Step into the world of Voguish Eyewear and Accessories, your ultimate destination for affordable, chic, and quality eyewear. Our aim is to offer you a collection of affordable and voguish eyewear without compromising on quality. join us as we embark on this journey together and discover the perfect look that won't break your bank.</p>
        
      </div>
      </div>
     <div class="p-4 lg:w-1/3">
      <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">DELIVERY OPTIONS</h2>
        
        <p class="leading-relaxed mb-3">We are delighted to inform you about our convenient delivery options. At Voguish, we understand how important it is to receive your eyewear and accessories promptly and efficiently.
We offer nationwide delivery services through various courier services.We offer free deliveries to the pickup point in Nairobi town and Thika town.
At Voguish, we believe that our delivery options will give you the best experience possible. We aim to provide you with efficient and reliable service, so you can have peace of mind knowing that your order will arrive on time.
</p>
        
    
    </div>
    </div>
  </div>
</div>
</section>

<footer class="text-gray-600 body-font">
  <div class=" w-100 bg-gray-300 container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img src={logo} fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-20 h-20 text-white p-2  rounded-full" viewBox="0 0 24 24"/>
          
        
        <span class="ml-3 text-xl">Voguish Eyewear and Accessories</span>
      </a>
      <p class="mt-2 text-sm text-gray-500">Your home for Chic and Affordable Eyewear</p>
    </div>
    <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">PRODUCTS</h2>
        <nav class="list-none mb-10">
          <li>
            <Link to={"/optical-glasses"} class="text-gray-600 hover:text-gray-800">Optical Glasses</Link>
          </li>
          <li>
            <Link to={"/sunglasses"} class="text-gray-600 hover:text-gray-800">Sunglasses</Link>
          </li>
          <li>
            <Link to={"/contact-lenses"} class="text-gray-600 hover:text-gray-800">Contact Lenses</Link>
          </li>
          <li>
            <Link to={"/masquarade-masks"} class="text-gray-600 hover:text-gray-800">Masquerade Masks</Link>
          </li>
        </nav>
      </div>
      
      
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left">© 2024 Voguish Eyewear and Accessories
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
      <a href="https://wa.me/+25440582851" class="ml-3 text-gray-500">
                <RiWhatsappFill class="w-5 h-5" viewBox="0 0 24 24"/>
              </a>
      <a href="https://www.instagram.com/voguish_eyewearandaccesories" class="ml-3 text-gray-500">
                <RiInstagramFill  class="w-5 h-5" viewBox="0 0 24 24" />
              </a> 
      </span>
    </div>
  </div>
</footer>
</section>
  );
};

export default HeroSection;

