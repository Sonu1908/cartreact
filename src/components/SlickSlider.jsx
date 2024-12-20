import React from 'react'
import Slider from "react-slick";
import slide1 from "./Img/img1.jpg";
import slide2 from "./Img/img2.jpg";
import slide3 from "./Img/img3.jpeg";
import slide4 from "./Img/img4.jpg";


const SlickSlider = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    fade:true,
       
       
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
    
    ],
  };


  
  return (
    <div>

  <Slider {...settings}>
        <div>
          <img className="img-fluid "  src={slide1} alt="" />
        </div>
        <div>
          <img className="img-fluid"  src={slide2} alt="" />
        </div>
        <div>
          <img className="img-fluid"  src={slide3} alt="" />
        </div>
        <div>
          <img className="img-fluid"  src={slide4} alt="" />
        </div>
        
      
      </Slider>


    </div>
  )
}

export default SlickSlider