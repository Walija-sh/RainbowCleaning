import React from 'react'
import { Link } from 'react-router-dom'

const Cta = () => {
  return (
    <div className='bg-bg-gray pt-[100px] pb-[20px] relative'>
        <div className="cta-border"></div>
        <div className="max-w-[1170px] mx-auto w-[80%] flex gap-[30px] lg:gap-[24px] flex-col items-center justify-center lg:flex-row">
            <p className=" text-black text-[25px] lg:text-[30px] font-bold text-center lg:text-left uppercase">
                Need Cleaning advice? Ask our experts for free.
            </p>
            <Link to="#" className='inline-block w-fit mx-auto mt-[15px] text-white py-[15px] px-[50px] shadow-[18px_6px_18px_0px_rgba(0,0,0,0.3)] cta-btn uppercase rounded-[30px] transition-all duration-100 ease-in text-right '>
            Request a Quote</Link>
        </div>
    </div>
  )
}

export default Cta