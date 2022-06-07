import React, {useState} from 'react';
import {SwiperSlide,Swiper} from 'swiper/react'

import "swiper/css";

import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";
import './SwiperDetails.css'
const SwiperDetails = ({img}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
      <div className='swiper-Details'>
          <div className='container'>
              <p className='global-para'>Images</p>
               <div className='content-swiper'>
                   <Swiper
                       loop={true}
                       spaceBetween={10}
                       navigation={true}
                       thumbs={{ swiper: thumbsSwiper }}
                       modules={[  Thumbs]}
                       className="mySwiper2"
                   >
                       {img.map(img => {
                           return (
                               <SwiperSlide key={Math.random() * 2} key={img}>
                                   <img key={Math.random() * 2} src={img}/>
                               </SwiperSlide>
                           )
                       })}
                   </Swiper>


                   <Swiper
                       onSwiper={setThumbsSwiper}
                       loop={true}
                       spaceBetween={10}
                       slidesPerView={4}
                       freeMode={true}
                       watchSlidesProgress={true}
                       modules={[ Thumbs]}
                       className="mySwiper"
                   >
                       {img.map(img => {
                           return (
                               <SwiperSlide key={Math.random() * 2}>
                                   <img key={Math.random() * 2} src={img}/>
                               </SwiperSlide>
                           )
                       })}
                   </Swiper>
               </div>



          </div>
      </div>
    );
};

export default SwiperDetails;