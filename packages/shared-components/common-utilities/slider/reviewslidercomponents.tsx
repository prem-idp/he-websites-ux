"use client";

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Reviewscard from '../cards/reviewscard';

const Reviewslidercomponents = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0, 
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows : false,
          centerPadding: "32px",
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows : false,
          centerMode: true,
          centerPadding: "16px",
        }
      },
    ]
  };
  return (
    <> 
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <Reviewscard />
            </div>
            <div>
            <Reviewscard />
            </div>
            <div>
            <Reviewscard />
            </div>
            <div>
            <Reviewscard />
            </div>
            <div>
            <Reviewscard />
            </div>
            <div>
            <Reviewscard />
            </div>
            <div>
            <Reviewscard />
            </div>
            <div>
            <Reviewscard />
            </div>
          </Slider>
          </div>
    </>
  );
};

export default Reviewslidercomponents;
