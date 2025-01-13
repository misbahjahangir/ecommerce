import React from 'react';
import phone from '../../public/phone.png'
import arrow from '../../public/arrow (2).png'
import mail from '../../public/mail.png'
import user from '../../public/user.png'
import heart from '../../public/heart.png'
import cart from '../../public/cart.png'
import Link from 'next/link';


import Image from 'next/image';

const Header = () => {
  return (
    <div>
    <div className="w-full h-[44px] bg-purple-600 flex items-center justify-center text-white ">
      <ul className="flex gap-4 text-sm">
        <Image src={mail} alt='mail-pic' />
        <li>misbahjahangir@gmail.com</li>
        <Image src={phone} alt='phone-pic'/>
        <li className="flex items-center gap-20"></li><li>(12345)67890</li>
          
          
        
        <li className='gap-10 pl-60'>English</li>
        <Image src={phone} alt='phone-pic'/>

        <li>USD</li>
        <Image src={arrow} alt='arrow-pic' />


        <Link href="/login">login</Link>
        <Image src={user} alt='user-pic' />

        {/* <li>Wishlist</li> */}
        <Link href="/shop-left">Wishlist</Link>
        <Image src={heart} alt='heart-pic' />

        <Link href="/shopping-cart">
        <Image src={cart} alt='cart-pic' />
        </Link>
        
        
      
      </ul>

    </div>
    
      {/* Lower White Section */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-black-600">Hekto</h1>

          {/* Navigation Links */}
          <ul className="flex gap-8 text-sm text-purple-600">
            <li className="hover:text-pink-500">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-pink-500">
               <a href="/">Pages</a>
              <a href="/hekto-demo"></a>
            </li>
            
            <li className="hover:text-pink-500">
              <a href="/">Products</a>
            </li>
            <li className="hover:text-pink-500">
              <a href="/blog-page">Blog</a>
            </li>
            <li className='hover:text-pink-500'>
              <a href="/about-us">About us</a>
            </li>
            <li className="hover:text-pink-500">
              <a href="/shoplist
              ">Shop</a>
              
              
            </li>
            <li className="hover:text-pink-500">
              <a href="/contact">Contact</a>
          
            </li>
            <li className="hover:text-pink-500">
            <a href="/shop-grid"> Shop grid</a>
            

              
              

            </li>
          </ul>
          

          {/* Search Bar */}
          <div className="flex items-center border-2 border-pink-500 rounded-md overflow-hidden">
            <input
              type="text"
              className="px-2 py-1 outline-none"
              placeholder="Search..."
            />
            <button className="bg-pink-500 px-4 py-1 text-white">Search</button>
          </div>
        </div>
      </div>
    
  


   
        </div>
    
  );
};

export default Header;
