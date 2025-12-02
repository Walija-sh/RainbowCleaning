
import React, { useState, useRef } from 'react'
import { FaStar } from "react-icons/fa";
import assets from '../assets/assets';
import { RiInformation2Line } from "react-icons/ri";
import { PiSealCheckFill } from "react-icons/pi";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation,Pagination } from 'swiper/modules';
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5';

const Reviews = () => {
     // Review data
  const reviewsData = [
  {
    id: 1,
    name: "Barbara D",
    date: "2025-09-19",
    content: "I needed spot discolorations dyed back to match my carpet color. I was amazed at the new look. I could see the experience at work.",
    avatar: assets.review1,
    sourceIcon: assets.googleMark
  },
  {
    id: 2,
    name: "Vickie Storie",
    date: "2025-09-05",
    content: "My old carpet looks new. Very clean. They were professional, personable, knowledgeable and kind. Will use them again.",
    avatar: assets.review2,
    sourceIcon: assets.googleMark
  },
  {
    id: 3,
    name: "Cristal Gutierrez",
    date: "2025-09-02",
    content: "Rainbow carpet is the best company I've used for my carpet needs. Cleaned up beautifully and repaired bleach stains i created. I'd recommend to anyone",
    avatar:assets.review3,
    sourceIcon: assets.googleMark
  },
  {
    id: 4,
    name: "Kenzie M",
    date: "2025-08-29",
    content: "The guys did such an outstanding job! They were quick  and efficient. Will definitely use again in the future.",
    avatar: assets.review4,
    sourceIcon: assets.googleMark
  },
  {
    id: 5,
    name: "santiago aviles",
    date: "2025-07-19",
    content: "Craig at Rainbow Carpet Dyeing and Cleaning did an outstanding job! He was professional, punctual, and the pricing was very reasonable. His attention to detail really stood out. My carpets are looking new again' Thank You!",
    avatar: assets.review5,
    sourceIcon: assets.googleMark
  },
  {
    id: 6,
    name: "Takeah Joyner",
    date: "2025-07-17",
    content: "Rainbow Carpet did an amazing job dyeing my carpets. I'm so impressed to see my carpets with the fresh vibrant color again. I would highly recommend  using them.",
    avatar: assets.review6,
    sourceIcon: assets.googleMark
  },
  {
    id: 7,
    name: "steven chen",
    date: "2025-07-16",
    content: "Craig is an honest man and operates with integrity. We could use more like him. Plus he does great work.",
    avatar: assets.review7,
    sourceIcon: assets.googleMark
  },
  {
    id: 8,
    name: "John Banksy",
    date: "2025-07-09",
    content: "They did a super job on a very soiled carpet and upholstery. We needed the work done quickly and they were able to accomodate. A definite yes for Rainbow..",
    avatar: assets.review8,
    sourceIcon: assets.googleMark
  },
];
const shouldShowReadMore = (content, maxLength = 160) => {
  return content.length > maxLength;
};

  const [expandedReviews, setExpandedReviews] = useState({});

  // ⭐ Navigation visibility
  const [canSlidePrev, setCanSlidePrev] = useState(false);
  const [canSlideNext, setCanSlideNext] = useState(true);

  const swiperRef = useRef(null);
  const paginationRef = useRef(null);

  const updateNavButtons = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    setCanSlidePrev(!swiper.isBeginning);
    setCanSlideNext(!swiper.isEnd);
  };

  const toggleReadMore = (reviewId) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [reviewId]: !prev[reviewId]
    }));
  };

  return (
    <div className='py-[50px] bg-[#f7f7f7]'>
      <div className="max-w-[1080px] overflow-x-hidden w-[80%] mx-auto text-center py-[30px]">
        <h2 className="text-[31px] poppins pb-2.5 font-medium text-gray-4">
          Reviews From Our Happy Customers
        </h2>
      </div>

      <div className="max-w-[1700px] w-[80%] mx-auto md:flex md:items-start py-[30px] mb-[15px]">
        {/* LEFT STATIC INFO */}
        <div className="mt-[53px] mb-[30px] md:w-[245px] md:shrink-0 flex flex-col items-center justify-center text-center">
          <h4 className="text-[24px] poppins mb-[6px] uppercase text-black font-medium">EXCELLENT</h4>

          <div className="flex items-center gap-[2px] justify-center text-[30px] text-stars">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>

          <p className='poppins mb-[3px] text-[15px] text-black'>Based on <span className='font-semibold'>138 reviews</span></p>

          <div className="w-full max-w-[110px]">
            <img src={assets.google} className='w-full' alt="" />
          </div>
        </div>



        {/* RIGHT SWIPER CAROUSEL */}
        <div className="mb-[30px] flex-1 overflow-hidden relative">

          <Swiper
            modules={[Navigation,Pagination]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setTimeout(updateNavButtons, 50);
            }}
            onSlideChange={updateNavButtons}
            onResize={(swiper) => {
              swiper.update();
              updateNavButtons();
            }}
            spaceBetween={16}
            loop={'true'}
            slidesPerView={'auto'}
            navigation={{
              nextEl: '.cust-button-next',
              prevEl: '.cust-button-prev'
            }}
            pagination={{
              el: '.cust-pag',
              clickable: true,
              bulletClass: 'cust-pag-bullet',
              bulletActiveClass: 'cust-pag-bullet-active',
              renderBullet: function (index, className) {
                return `<span class="${className} "></span>`;
              },
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 'auto' },
            }}
            className="overflow-visible!"
          >


            {/* Slides */}
            {reviewsData.map((review) => (
              <SwiperSlide
                key={review.id}
                className="w-auto max-w-[350px]! h-auto!"
              >
                <div className="bg-[#f4f4f4] p-5 transition-all duration-150 ease-in hover:-translate-y-3 h-full">

                  <div className="flex gap-5">
                    <img src={review.avatar} className='w-10 h-10 shrink-0 rounded-full' alt="" />
                    <div className="grow flex items-start justify-between">
                      <div className="grid">
                        <p className='text-black text-[15px] font-semibold poppins'>{review.name}</p>
                        <p className="text-gray-5 text-[13px] poppins">{review.date}</p>
                      </div>
                      <img src={review.sourceIcon} className='w-5 h-5 shrink-0' alt="" />
                    </div>
                  </div>

                  <div className="flex gap-[7px] items-center my-[11px]">
                    <div className="flex items-center gap-[1px] text-[17px] text-stars">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <PiSealCheckFill className='text-[15px] text-check' />
                  </div>

                  <div className="grid gap-2">
                    <p
                      className={`transition-all duration-100 ease-in-out poppins text-black text-[15px] leading-[21.75px] ${
                        expandedReviews[review.id] ? '' : 'line-clamp-4'
                      }`}
                    >
                      {review.content}
                    </p>

                    {shouldShowReadMore(review.content) && (
  <button
    onClick={() => toggleReadMore(review.id)}
    className="poppins opacity-50 hover:opacity-100 hover:underline text-[13.5px] text-left cursor-pointer"
  >
    {expandedReviews[review.id] ? 'Hide' : 'Read more'}
  </button>
)}
                  </div>

                </div>
              </SwiperSlide>
            ))}


            {/* Custom Navigation Buttons */}
            <div className="hidden lg:flex justify-between absolute left-0 right-0 top-[50%] translate-y-[-50%] z-50">

              {/* LEFT */}
                <div className={`cust-button-prev bg-white text-[20px] w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-[#4d4d4d] text-[#4d4d4d] hover:text-white border-2 border-white hover:border-[#424242] cursor-pointer ${canSlidePrev?"visible":"invisible"}`}>
                  <IoChevronBackSharp />
                </div>
              
              {/* RIGHT */}
                <div className={`cust-button-next hover:border-[#424242] text-[#4d4d4d] bg-white text-[20px] w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-[#4d4d4d] hover:text-white border-2 border-white cursor-pointer ${canSlideNext?"visible":"invisible"}`}>
                  <IoChevronForwardSharp />
                </div>
              

            </div>
          </Swiper>
             <div 
            className="cust-pag my-[20px] mx-auto w-fit max-w-[150px] h-[3px] flex items-center justify-center gap-1 relative z-50  rounded-[3px] h-[3px] bg-[#57575759] sm:hidden"
            ref={paginationRef}
          >
            
          </div>


          {/* Verified Badge */}
          <div className="mt-[12px] mx-[28px] text-right text-[12px] flex justify-center sm:justify-end">
            <div className='bg-[#157351] text-white flex items-center py-1 px-[14px] w-fit font-bold gap-1'>
              <span className='poppins'> Verified by Trustindex </span>
              <RiInformation2Line />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Reviews;
