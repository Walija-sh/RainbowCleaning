import React from 'react'
import { Link } from 'react-router-dom'
import assets from '../assets/assets'

const Overview = () => {
  return (
    <div className='bg-white py-[50px]'>
        <div className="max-w-[1340px] mx-auto w-[90%] grid gap-[30px] lg:grid-cols-2 lg:items-center">
            <div className="grid">
                <h2 className="roboto text-[41px] font-medium text-gray-4 pb-[10px] mb-[30px] leading-[41px] text-center capitalize">
                   Professional Carpet Cleaning And Restoration Services In San Diego Country 

                </h2>
                <p className="pb-[21px] text-[21px] text-black leading-[21px] ">
                    At Rainbow Carpet Dyeing and Cleaning, we’re a family-owned business. With over 40 years of experience and <Link to="#" className="text-check font-bold">IICRC Certification</Link>, our expert team is equipped to handle your toughest cleaning challenges. We offer reliable, top-rated services that our customers trust. Our motto, “We take the stress out of your mess,” reflects our commitment to providing hassle-free, effective cleaning solutions.
                </p>
                <p className="pb-[21px] text-[21px] text-black leading-[21px] mb-[30px] ">
                    We use the latest technology for all of our services. Our deep-cleaning methods are designed to remove dirt, stains, and allergens, leaving your home or office looking and feeling fresh. We’re also proud to offer <span className='font-bold'>oriental rug cleaning</span> and specialized care for area rugs, using the most advanced cleaning techniques available.
                </p>
                <Link to="#" className='inline-block w-fit  justify-self-center md:justify-self-start  text-[20px]  text-white font-bold rounded-[30px] py-[6px] px-[20px]  bg-[#37d123] uppercase transition-all duration-100 ease-in  text-shadow-[0em_0.1em_0.1em_rgba(0,0,0,0.4)]  shadow-[0px_2px_18px_0px_rgba(12,113,195,0.63)] leading-[34px]'>
                            Request a Quote</Link>
            </div>
            <div className="">
                <img src={assets.beforeAndAfter} className='w-full' alt="" />
                <div className="bg-white flex items-center justify-center p-5">
                    <img src={assets.logo} className='w-full inline-block max-w-[60%]' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Overview