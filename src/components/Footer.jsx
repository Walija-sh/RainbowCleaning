import React from 'react'
import { Link } from 'react-router-dom'
import assets from '../assets/assets'
import { SlLocationPin } from "react-icons/sl";
import { FiChevronsRight } from "react-icons/fi";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="grid">

 <div className="grid lg:grid-cols-[33%_1fr]  lg:bg-green-1">
     <div className='grid '>
        <div className="footer-top mb-[-100px] z-1000  ">
          <img src={assets.footerbg} className='w-full  h-[100px] lg:h-[40px]' alt="" />
        </div>
      <div className={`pt-10 pr-[50px] pl-[10%] lg:pl-[30%] grid  bg-green-1`}>
        <Link to="/" className='inline-block w-full max-w-[150px] mb-5'>
      <img src={assets.logo} className='w-full h-full filter brightness-[0] contrast-[100] invert'  />
      </Link>
      <p className="text-black text-[13px] font-bold mb-[15px] ">
        Elite carpet cleaning of SAN DIEGO  is a family-owned and operated carpet cleaning company.  We value our community and regularly look for opportunities to make it better. 
      </p>
      <div className="bg-black-1 pt-2.5 px-5 text-[14px] rounded-[10px] leading-[40px] shadow-[0px_2px_18px_0px_rgba(0,0,0,0.3)] flex gap-[15px]">
        <SlLocationPin  className='text-[32px] shrink-0 text-green-1'/>
        <div className="grid gap-2.5">
          <h5 className="uppercase roboto font-bold leading-normal text-[16px] text-green-1">
            Service Areas
          </h5>
          <p className="text-[14px] text-white font-bold">
            West Texas and Eastern New Mexico
          </p>
        </div>
      </div>
      </div>
    </div>
    <div className="bg-black-1 pt-5 pr-[15%] pl-[5%]  lg:items-start  lg:flex lg:gap-[45px]  ">
      <div className="grid ">
      <h3 className="roboto font-bold text-[20px] text-white relative uppercase cursor-pointer pb-[10px] group mb-5">
        Popular <span className='text-green-1'>Services</span>

        <span className='h-[3px] bg-white w-[50px] inline-block absolute left-0 bottom-0 transition-all duration-150 ease-in group-hover:w-[50%] max-w-[400px]'></span>
      </h3>
        <div className=" roboto uppercase font-bold text-white">
        <ul className='grid gap-[15px] text-[13px]'>
          <li className='flex gap-[15px] items-center'>
            <FiChevronsRight className='text-green-1 text-[15px]' />
            <p>CARPET CLEANING </p>
          </li>
          <li className='flex gap-[15px] items-center'>
            <FiChevronsRight className='text-green-1 text-[15px]' />
            <p>RUG CLEANING 
 </p>
          </li>
          <li className='flex gap-[15px] items-center'>
            <FiChevronsRight className='text-green-1 text-[15px]' />
            <p>CARPET DYEING 
</p>
          </li>
          <li className='flex gap-[15px] items-center'>
            <FiChevronsRight className='text-green-1 text-[15px]' />
            <p>SPOT DYEING 
 </p>
          </li>
          <li className='flex gap-[15px] items-center'>
            <FiChevronsRight className='text-green-1 text-[15px]' />
            <p>Upholstery Cleaning </p>
          </li>
          <li className='flex gap-[15px] items-center'>
            <FiChevronsRight className='text-green-1 text-[15px]' />
            <p>DEODORIZING </p>
          </li>
        </ul>
      </div>
      </div>
      <div className="flex gap-[15px] p-5 pt-8">
                <FaPhone className='text-[20px] text-green-1 shrink-0' />
                <div className="uppercase grid gap-2.5">
                  <p className='text-green-1 font-bold roboto text-[16px]'>Get Free Estimates</p>
                  <a href="tel:+858-487-7262" target='_blank' className='text-white text-[20px] leading-[40px] font-bold lg:text-[30px]'>
                    (858) 487-7262
                  </a>
                </div>
              </div>
    </div>
 </div>
 {/* bottom */}
 <div className="py-[15px] px-[50px] bg-green-1 text-white text-center text-[14px] uppercase font-medium">
  Designed by Ease Web Dev  © 2022 All Rights Reserved
 </div>
    </div>
  )
}

export default Footer