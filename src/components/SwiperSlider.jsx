import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,EffectCube } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperSlider = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y,EffectCube]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    effect={'cube'}
    cubeEffect={{
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }}
 
  
  >
    <SwiperSlide> <img className="img-fluid "  src="https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg" alt="" /> </SwiperSlide>
    <SwiperSlide>  <img className="img-fluid "  src="https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg" alt="" /></SwiperSlide>
    <SwiperSlide> <img className="img-fluid "  src="https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg" alt="" /></SwiperSlide>
    <SwiperSlide> <img className="img-fluid "  src="https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg" alt="" /></SwiperSlide>

  </Swiper>
  )
}


export default SwiperSlider