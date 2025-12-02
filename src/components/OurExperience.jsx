import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import assets from '../assets/assets'

const OurExperience = () => {

  const AnimatedNumber = ({ end, duration = 2.5 }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.3,
    });

    return (
      <p ref={ref} className="text-[70px] font-bold leading-[88px]">
        {inView ? <CountUp end={end} duration={duration} /> : 0}
      </p>
    );
  };

  return (
    <div className='pt-[100px] bg-[#f1eee9] relative overflow-hidden'>
        <div className="exp-top"></div>
        <div className="exp-bg">
            <span></span>
        </div>
        <div className="exp-bottom"></div>

        {/* content */}
        <div className="relative z-10 max-w-[1200px] mx-auto w-[90%] text-center text-white">
           <h6 className="mb-[10px] pb-[10px] uppercase text-[15px] roboto">OUR EXPERIENCE</h6>
           <h4 className="mb-[30px] pb-[22px] relative text-[30px] leading-[36px] roboto tracking-[1px] font-bold uppercase h-border">
            We have over 40 years experience
           </h4>
           <p className="text-white text-[16px] max-w-[614px] mx-auto">
            Rainbow Carpet Dyeing and Cleaning has 150+ 5-star ratings. We try our absolute best to please our clients. We would love the opportunity to serve you! Call today for a free quote
           </p>
        </div>

        {/* Stats */}
        <div className="relative z-10 pb-[93px] pt-[39px] w-[80%] max-w-[1080px] mx-auto text-white text-center grid sm:grid-cols-2 lg:grid-cols-4 items-start justify-center gap-[30px]">

            {/* 1 */}
            <div className="grid gap-1">
                <AnimatedNumber end={1200} duration={2.5} />
                <h3 className="roboto text-[18px] uppercase font-semibold pb-[10px]">SATISFIED CUSTOMERS</h3>
            </div>

            {/* 2 */}
            <div className="grid gap-1">
                <AnimatedNumber end={40} duration={2} />
                <h3 className="roboto text-[18px] uppercase font-semibold pb-[10px]">
                  YEARS OF EXPERIENCE
                </h3>
            </div>

            {/* 3 */}
            <div className="grid gap-1">
                <AnimatedNumber end={1230} duration={2.5} />
                <h3 className="roboto text-[18px] uppercase font-semibold pb-[10px]">RUGS CLEANED</h3>
            </div>

            {/* 4 */}
            <div className="grid gap-1">
                <AnimatedNumber end={4} duration={2} />
                <h3 className="roboto text-[18px] uppercase font-semibold pb-[10px]">
                  Million Square Feet Of Carpet Cleaned
                </h3>
            </div>

        </div>
        
    </div>
  )
}

export default OurExperience
