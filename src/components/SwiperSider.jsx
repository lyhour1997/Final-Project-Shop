import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function SwiperSider() {
  return (
    <>
      <Swiper
        spaceBetween={30} centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
    
        modules={[Autoplay, Pagination ]}
        className="mySwiper w-100 h-100 "
      >
        <SwiperSlide className=' d-flex justify-content-center align-items-center position-relative imagehover '>
            <div className="text-center text-light w-75  position-absolute top-50 start-50 translate-middle  z-1">
                <h1 className=' pb-3'>Gaming laptops</h1>
                <p>Our top gaming laptop for most shoppers is the Lenovo Legion Slim 5 Gen 8, 
                    but we present a breakout of additional tested vetted picks, shopping advice
                </p>
                <button className=' bg-transparent border text-light py-2 px-3'>Shop Now</button>
            </div>
            <img style={{ filter:'brightness(50%)'}} src="/img/s1.webp" alt="" className=' w-100 h-100 object-fit-cover' />
        </SwiperSlide>
        <SwiperSlide className=' position-relative d-flex justify-content-center align-items-center imagehover '>
            <div className=" text-center text-light w-75  position-absolute top-50 start-50 translate-middle z-1">
                <h1 className=' pb-3'>Popular gaming phones</h1>
                <p>When choosing a phone for gaming, you can consider things like its RAM,
                     processor, and cooling system.
                </p>
                <button className=' bg-transparent border text-light py-2 px-3'>Shop Now</button>
            </div>
            <img style={{ filter:'brightness(50%)'}} src="/img/s2.jpeg" alt="" className=' w-100 h-100 object-fit-cover' />
        </SwiperSlide>
        <SwiperSlide className=' position-relative d-flex justify-content-center align-items-center imagehover '>
            <div className=" text-center text-light w-75  position-absolute top-50 start-50 translate-middle z-1">
                <h1 className=' pb-3'>Popular ipad</h1>
                <p>When choosing a phone for gaming, you can consider things like its RAM,
                     processor, and cooling system.
                </p>
                <button className=' bg-transparent border text-light py-2 px-3'>Shop Now</button>
            </div>
            <img style={{ filter:'brightness(50%)'}} src="/img/s3.webp" alt="" className=' w-100 h-100 object-fit-cover' />
        </SwiperSlide>
        <SwiperSlide className=' position-relative d-flex justify-content-center align-items-center imagehover '>
            <div className=" text-center text-light w-75  position-absolute top-50 start-50 translate-middle z-1">
                <h1 className=' pb-3'>Popular headphones</h1>
                <p>When choosing a phone for gaming, you can consider things like its RAM,
                     processor, and cooling system.
                </p>
                <button className=' bg-transparent border text-light py-2 px-3'>Shop Now</button>
            </div>
            <img style={{ filter:'brightness(50%)'}} src="/img/s4.jpg" alt="" className=' w-100 h-100 object-fit-cover' />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
