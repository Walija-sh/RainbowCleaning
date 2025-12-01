import React from "react";
import assets from "../assets/assets";


const Certifications = () => {
  return (
    <section className="w-full bg-[#0c71c3] pt-[5px] pb-[20px] hidden lg:block" >
      <div className="max-w-[1080px] w-[80%] mx-auto grid  items-center  grid-cols-3 ">
        
        <img
          src={assets.cert1}
          alt="60 Day Satisfaction Guarantee"
          className="w-[120px] h-[120px] object-contain"
        />

        <img
          src={assets.cert2}
          alt="Google Guaranteed Badge"
          className="w-[120px] h-[120px] object-contain"
        />

        <img
          src={assets.cert3}
          alt="IICRC Certification Badge"
          className="w-[120px] h-[120px] object-contain"
        />

      </div>
    </section>
  );
};

export default Certifications;
