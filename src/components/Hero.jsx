import React from 'react'
import HeroForm from './HeroForm'

const Hero = () => {
    return (
        <div className='hero py-[50px] '>
            <div className="w-[85%] mx-auto md:w-[95%] lg:w-[85%]  py-[30px] grid gap-[30px] lg:grid lg:grid-cols-2 lg:items-start">
                <div className="grid gap-[30px] text-white">
                    <h2 className="pb-[10px] text-[41px] leading-[41px] md:text-[65px] md:leading-[65px] font-medium roboto">Book Your  Cleaning Or Restoration Services Today.</h2>
                    <ul className='list-disc pl-[23px] pb-[23px] leading-[26px] text-[21px]'>
                        <li>
                            <p className='font-bold'> Free Quotes & Honest Pricing</p>
                            <p>Transparent estimates, no hidden fees.</p>
                        </li>
                        <li>
                            <p className='font-bold'>Fast & Professional</p>
                            <p> Cleaning and restoration for a healthier home.</p>
                        </li>
                        <li>
                            <p className='font-bold'> 40+ Years of Experience</p>
                            <p>
                                Proven results trusted across San Diego County.</p>
                        </li>
                        <li>
                            <p className='font-bold'>

                                Family-Owned & Local</p>
                            <p>
                                Professional service with a personal touch.</p>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center">
                    <HeroForm />
                </div>
            </div>
        </div>

    )
}

export default Hero