
import React, { useState, useRef } from 'react'
import { FaStar } from "react-icons/fa";
import assets from '../assets/assets';
import { RiInformation2Line } from "react-icons/ri";
import { PiSealCheckFill } from "react-icons/pi";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5';

const Reviews = () => {
     // Review data
  const reviewsData = [
  {
    id: 1,
    name: "Barbara D",
    date: "2025-09-19",
    content: "I needed air ducts cleaned after having had the hardwood floors refinished. Dust particles had clogged the return air duct and lines and every and spread this throughout the house. They were very polite and helpful and went to great lengths to perform the task in socks so as not to scratch the new floor finish. They wrapped the legs of their ladder with towels and even put padding on the flooring under anything that would possibly scratch the new wood floor finish. Did a great job getting difficult vents secured and did not leave any mess. I will be using them again!!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUlL-CTWsCZWEL6MYzzE5JIviSrI113jdHhyzma3YMwacNglF0=w40-h40-c-rp-mo-br100",
    sourceIcon: "https://cdn.trustindex.io/assets/platform/Google/icon.svg"
  },
  {
    id: 2,
    name: "Vickie Storie",
    date: "2025-09-05",
    content: "My old carpet looks new. Very clean. They were professional, personable, knowledgeable and kind. Will use them again.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWEhcWhm1v7HzHaHLCGsAoEmzlfln0PKhiQo2jcqlBBoJk1PQB2=w40-h40-c-rp-mo-br100",
    sourceIcon: "https://cdn.trustindex.io/assets/platform/Google/icon.svg"
  },
  {
    id: 3,
    name: "Cristal Gutierrez",
    date: "2025-09-02",
    content: "Elite carpet cleaners is the best company I have used for my carpet and air vent needs. They did an excellent job cleaning my vents and carpet before moving into my house. I even called them when I accidentally spilled laundry detergent in my vehicle and they were able to clean it out no questions asked. They are a very professional and efficient company and I will no doubt use them again in the future. The owners are very responsive and display \"elite\" customer service. Thank you! 😊",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocL8AmBZoOf_-8EYKrbxm_T1Yg59lnc811nq8Tpr0mQ6u2Ydig=w40-h40-c-rp-mo-br100",
    sourceIcon: "https://cdn.trustindex.io/assets/platform/Google/icon.svg"
  },
  {
    id: 4,
    name: "Kenzie M",
    date: "2025-08-29",
    content: "Michael and his family did such an outstanding job! They were quick and responsive. Definitely will be using them in the future!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjV29KGDJXcJKDetCxCqILwWkms5rtd0QrBjbO15kOe7N3S76igE=w40-h40-c-rp-mo-br100",
    sourceIcon: "https://cdn.trustindex.io/assets/platform/Google/icon.svg"
  },
  {
    id: 5,
    name: "santiago aviles",
    date: "2025-07-19",
    content: "Michael at Elite Carpet Cleaning did an outstanding job! He was professional, punctual, and the pricing was very reasonable. His attention to detail really stood out my carpets look brand new. Highly recommend Elite Carpet Cleaning if you're looking for quality work at a fair price.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWFrdszuOuinA1JGL1sr69iTkxkfGgfRupTw5hqoITfiaiSdE8h=w40-h40-c-rp-mo-ba3-br100",
    sourceIcon: "https://cdn.trustindex.io/assets/platform/Google/icon.svg"
  },
  {
    id: 6,
    name: "Takeah Joyner",
    date: "2025-07-17",
    content: "Elite Carpet Cleaning did an amazing job cleaning my carpet. I'm so impressed with how clean everything looks. Not only does the carpet look fresh, but my whole house smells so much better now. I'm beyond satisfied and would highly recommend them to anyone looking for top-notch carpet cleaning. Thank you Elite Carpet Cleaning!",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKaLffJt4xPFC5FRWcBEv-w2lIa1mKypd1CCM2Uby8sgDQwDQ=w40-h40-c-rp-mo-br100",
    sourceIcon: "https://cdn.trustindex.io/assets/platform/Google/icon.svg"
  },
  {
    id: 7,
    name: "steven chen",
    date: "2025-07-16",
    content: "Michael is an honest man and operates with integrity. We need more business owners like him who operate out of integrity instead of using fear tactics to upsell procedures.\n\nYou're a good man Michael. Keep up the amazing work!",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJx82Rn_-N1mVrR9n8ZefrdrCPkSielyAtiwUrFedy0Z-FN0g=w40-h40-c-rp-mo-br100",
    sourceIcon: "https://cdn.trustindex.io/assets/platform/Google/icon.svg"
  },
  {
    id: 8,
    name: "John Banksy",
    date: "2025-07-09",
    content: "They did an amazing job. They came out the same day I called them. We had just moved into a rental and it was thrashed the carpets \" had been cleaned\" by another company here in town according to the landlord before we moved into but they were gross. We called elite and explained the situation. They told me they had an opening on Thursday of that week but I explained to the girl in the phone that I really wanted the carpets cleaned that day before we moved into our furniture. She was able to accommodate and send someone out that afternoon. The owner came out he was great very thorough and reasonable price. Would definitely recommend and we will be using their services again for all our carpet cleaning.",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJxMS5K05KUYEon2FteldaD-DBYGoOB6rIpuB8ITssv3BnPeA=w40-h40-c-rp-mo-br100",
    sourceIcon: "https://cdn.trustindex.io/assets/platform/Google/icon.svg"
  },
  {
    id: 9,
    name: "Hayli",
    date: "2025-06-27",
    content: "These guys are amazing. We are renters, and our A/C unit & waster connections were leaking into the bedrooms wall/floor. Causing our tile to lift, and water to seep through the floor. Landlord contact this company, and Michael and his son were so responsive and quick to get to the root of the problem. A couple days later, the rooms including walls are completely dry like nothing happened. Would recommend to anyone needing this specific work! You won't be disappointed.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUXnZtMWzTPxX1zicbInUP7NrRevDquLXpyrseQW8ByZsulw5l6=w40-h40-c-rp-mo-br100",
    sourceIcon: "https://cdn.trustindex.io/assets/platform/Google/icon.svg"
  },
  {
    id: 10,
    name: "Amadio Lopes",
    date: "2025-06-02",
    content: "Absolutely the best experience I've had with a carpet cleaning company. I called and needed same day service and they showed up a couple hours later. Carpets look great, I'll never use another company again.",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLw7mBb1ieMCgDGd03hJX0mphV9PfIXCw3JyqLvBN5JvhqK3w=w40-h40-c-rp-mo-br100",
    sourceIcon: "https://cdn.trustindex.io/assets/platform/Google/icon.svg"
  }
];
const shouldShowReadMore = (content, maxLength = 150) => {
  return content.length > maxLength;
};

  const [expandedReviews, setExpandedReviews] = useState({});

  // ⭐ Navigation visibility
  const [canSlidePrev, setCanSlidePrev] = useState(false);
  const [canSlideNext, setCanSlideNext] = useState(true);

  const swiperRef = useRef(null);

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
            modules={[Navigation]}
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
            slidesPerView={'auto'}
            navigation={{
              nextEl: '.cust-button-next',
              prevEl: '.cust-button-prev'
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



          {/* Verified Badge */}
          <div className="mt-[12px] mx-[28px] text-right text-[12px] flex justify-end">
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
