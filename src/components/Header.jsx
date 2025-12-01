import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import assets from '../assets/assets.js'
import { IoMenu ,IoClose} from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({
    services: false,
    locations: false
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close all dropdowns when closing menu
    if (isMenuOpen) {
      setOpenDropdowns({
        services: false,
        locations: false
      });
    }
  };

  const toggleDropdown = (dropdownName) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [dropdownName]: !prev[dropdownName]
    }));
  };

  return (
    <div className="">
      {/* banner */}
      <div className='lg:bg-black-1 bg-green-1 overflow-hidden '>
      <div className=" flex items-center justify-center  lg:grid lg:grid-cols-[33%_1fr] lg:px-[5%] max-w-[1170px] mx-auto lg:items-start">
       <Link to="/" >
        <p className='text-[16px] font-semibold tracking-[1px] text-white text-center px-4 my-[3px] uppercase w-fit transition-all duration-100 ease-in hover:bg-green-hover lg:hover:bg-gray-2'>40+ years experience</p>
        </Link>
        <div className="header-banner  hidden lg:grid lg:grid-cols-[40%_1fr] py-[3px] ">
          <div className="bg"></div>
          <Link to="#" className='relative z-30' >
        <p className='text-[16px] font-semibold text-white tracking-[1px] text-left   uppercase w-fit transition-all duration-100 ease-in hover:bg-green-hover'>HAVE QUESTIONS OR SPECIFIC REQUESTS 
</p>
        </Link>
          <Link to="#" className='text-[20px] text-white justify-self-end relative z-30' >
          <FaFacebookF />
        </Link>
        </div>
      </div>
    </div>
    {/* menu sm */}
    <div className="pt-[20px] pl-[30px] pb-[5px] md:py-2.5 md:px-0   bg-black-1 flex items-center justify-between relative lg:hidden shadow-nav">
      <Link to="/" className='inline-block w-full max-w-[120px] md:max-w-[50px]'>
      <img src={assets.logo} className='w-full h-full filter brightness-[0] contrast-[100] invert'  />
      </Link>
      <div className="grow flex items-center justify-center">
        <button 
          onClick={toggleMenu}
          className="focus:outline-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <IoClose className='text-[50px] md:text-[32px] text-green-1 cursor-pointer' />
          ) : (
            <IoMenu className='text-[50px] md:text-[32px] text-green-1 cursor-pointer' />
          )}
        </button>
      </div>
      {/* nav menu links */}
      <div className={`absolute top-full right-0 left-[30px] ${isMenuOpen ? 'max-h-[1000px] py-[26.851px]' : 'max-h-0'} overflow-hidden md:left-0 z-[10000]  bg-white text-[18px] text-gray-3 px-[26.851px]  uppercase leading-[45px] tracking-[1px] nav-text-shad font-extrabold shadow-[0_2px_5px_rgba(0,0,0,.1)] transition-all duration-300 ease-in-out`}>
        <div>
          <button 
            onClick={() => toggleDropdown('services')}
            className='w-full py-2.5 px-[24px] cursor-pointer flex items-center justify-between transition-all duration-100 ease-in hover:text-gray-1 focus:outline-none'
          >
            Services
            {openDropdowns.services ? (
              <IoClose className='text-[14px] text-green-1' />
            ) : (
              <FaChevronDown className='text-[14px] text-green-1' />
            )}
          </button>
          <ul className={`pl-5 leading-normal ${openDropdowns.services ? 'max-h-[1000px]' : 'max-h-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
             <li className='py-3 px-5 cursor-pointer transition-all duration-100 ease-in hover:text-gray-1 '>
           <Link to="#">
            CARPET DYEING 
            </Link>
           
          </li>
             <li className='py-3 px-5 cursor-pointer transition-all duration-100 ease-in hover:text-gray-1 '>
           <Link to="#">
           SPOT DYEING 
            </Link>
           
          </li>
             <li className='py-3 px-5 cursor-pointer transition-all duration-100 ease-in hover:text-gray-1 '>
           <Link to="#">
          DEODORIZING 
            </Link>
           
          </li>
             <li className='py-3 px-5 cursor-pointer transition-all duration-100 ease-in hover:text-gray-1 '>
           <Link to="#">
         MOTOR HOMES 
            </Link>
           
          </li>
             <li className='py-3 px-5 cursor-pointer transition-all duration-100 ease-in hover:text-gray-1 '>
           <Link to="#">
          ORIENTAL RUSS 
            </Link>
           
          </li>
          </ul>
        </div>
        <div>
          <button 
            onClick={() => toggleDropdown('locations')}
            className='w-full py-2.5 px-[24px] cursor-pointer flex items-center justify-between transition-all duration-100 ease-in hover:text-gray-1 focus:outline-none'
          >
            Locations
            {openDropdowns.locations ? (
              <IoClose className='text-[14px] text-green-1' />
            ) : (
              <FaChevronDown className='text-[14px] text-green-1' />
            )}
          </button>
          <ul className={`pl-5 leading-normal ${openDropdowns.locations ? 'max-h-[1000px]' : 'max-h-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
             <li className='py-3 px-5 cursor-pointer transition-all duration-100 ease-in hover:text-gray-1 '>
           <Link to="#">
           GREATER SAN DIEGO COUNTRY
            </Link>
           
          </li>
          </ul>
        </div>
        <Link 
          to="#" 
          className='block py-2.5 px-[24px] cursor-pointer transition-all duration-100 ease-in hover:text-gray-1'
          onClick={() => setIsMenuOpen(false)}
        >
          Free Quote
        </Link>
      </div>
    </div>
    {/* menu-lg */}
    <div className="bg-white shadow-nav hidden lg:block min-h-[100px] shadow-[0px_2px_18px_0px_rgba(0,0,0,0.3)]">
      <div className="max-w-[1170px] px-[5%] mx-auto pt-[25px] pb-[15px] grid grid-cols-2 gap-[26px]">
<Link to="/" className='inline-block w-full max-w-[180px]'>
      <img src={assets.logo} className='w-full h-auto'  />
      </Link>
      <div className="grid grid-cols-2 gap-[26px]">
        <div className="flex gap-[15px]">
          <FaPhone className='text-[32px] text-green-1 shrink-0' />
          <div className="uppercase">
            <p className='text-black font-bold roboto text-[19px]'>Phone</p>
            <a href="tel:+858-487-7262" target='_blank' className='text-blue-highlight font-bold text-[16px]'>
              (858) 487-7262
            </a>
          </div>
        </div>
        <div className="flex gap-[15px]">
          <TfiEmail className='text-[32px] text-green-1 shrink-0' />
          <div className="uppercase">
            <p className='text-black font-bold roboto text-[19px]'>Email us</p>
            <a href="mailto:rainbowcarpetdyeingandcleaning@gmail.com" target='_blank' className='text-gray-4 font-bold text-[16px] break-all'>
              RAINBOWCARPETDYEINGANDCLEANING@GMAIL.COM 
            </a>
          </div>
        </div>
      </div>
      </div>
      {/* menu links */}
     <div className="px-[5%] min-h-[100px] relative z-[10000] mt-[-50px] ">
       <div className=" bg-green-1 text-[18px] text-black p-2 pl-[30px] rounded-[32px]  uppercase leading-[45px] tracking-[1px] font-extrabold shadow-[0_2px_5px_rgba(0,0,0,.1)] flex items-center gap-5 max-w-[1170px] mx-auto  absolute w-[90%] left-[5%] right-[5%] top-[50%] ">
        <div className="grow flex items-center justify-center  gap-[20px]">
          <div className=' cursor-pointer  w-fit relative group '>
          <p className="flex items-center justify-between gap-1 transition-all duration-100 ease-in hover:text-gray-1">
              Services
            <FaChevronDown className='text-[14px]' />
          </p>
 <ul className=' leading-normal absolute w-[240px] top-full left-0 bg-white transition-all duration-100 ease-in hidden group-hover:block z-[10000]'>
             <li className='py-3 px-5 cursor-pointer transition-all duration-100 ease-in hover:text-white hover:bg-green-1 '>
           <Link to="#">
            CARPET DYEING 
            </Link>
           
          </li>
             <li className='py-3 px-5 cursor-pointer transition-all duration-100 ease-in hover:text-white hover:bg-green-1'>
           <Link to="#">
           SPOT DYEING 
            </Link>
           
          </li>
             <li className='py-3 px-5 cursor-pointer transition-all duration-100 ease-in hover:text-white hover:bg-green-1 '>
           <Link to="#">
          DEODORIZING 
            </Link>
           
          </li>
             <li className='py-3 px-5 cursor-pointer transition-all duration-100 ease-in hover:text-white hover:bg-green-1 '>
           <Link to="#">
         MOTOR HOMES 
            </Link>
           
          </li>
             <li className='py-3 px-5 cursor-pointer transition-all duration-100 ease-in hover:text-white hover:bg-green-1 '>
           <Link to="#">
          ORIENTAL RUSS 
            </Link>
           
          </li>
          </ul>
          </div>
          <div className='  cursor-pointer  w-fit relative  group'>
          <p className="flex items-center justify-between gap-1 transition-all duration-100 ease-in hover:text-gray-1">
              Locations
            <FaChevronDown className='text-[14px]' />
          </p>
 <ul className=' leading-normal hidden group-hover:block absolute w-[240px] top-full left-0 bg-white transition-all duration-100 ease-in z-[10000]'>
             <li className='py-3 px-5 cursor-pointer transition-all duration-100 ease-in hover:text-white hover:bg-green-1 '>
           <Link to="#">
            GREATER SAN DIEGO COUNTRY
            </Link>
           
          </li>
           

          </ul>
          </div>

        <Link 
          to="#" 
          className=' cursor-pointer transition-all duration-100 ease-in hover:text-gray-1 '
        >
          Free Quote
        </Link>
        </div>
        {/* button */}
        <Link to="#" className='inline-block text-center text-[18px] text-white rounded-[30px] font-bold uppercase btn-grad py-[17px] px-5 text-shadow-[0em_0.1em_0.18em_#000000] shadow-[0px_2px_18px_0px_rgba(0,0,0,0.13)]'>
        Book Your Cleaning
        </Link>
      </div>
     </div>

    </div>
    </div>
  )
}

export default Header