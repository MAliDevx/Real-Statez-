// HomePage.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { SwiperStyles, AnimatedHeading, StyledSwiperSlide, SlideContainer, SlideOverlay, SlideContent } from './homeStyle';
import { FaChevronRight } from 'react-icons/fa';
import PropertyFilter from '../propertise-service/PropertiseService';
import { Button } from '../../../styles/CommanClasses';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    image: 'https://wallsproperty.netlify.app/images/bg.jpg',
    HeadingText: 'Find Your Dream Home',
<<<<<<< HEAD
    paraText: 'Explore premium properties with scenic views and modern amenities.',
  },
  {
    image: 'https://wallsproperty.netlify.app/images/bg15.jpg',
    HeadingText: 'Your Investment, Our Priority',
    paraText: 'Find the perfect property where value meets peace of mind.',
  },
  {
    image: 'https://wallsproperty.netlify.app/images/bg19.jpg',
    HeadingText: 'Live the Lifestyle You Deserve',
    paraText: 'Explore homes that offer more than space — they offer meaning.',
=======
    paraText: 'Browse beautiful properties tailored to your lifestyle and budget.',
  },
  {
    image: 'https://wallsproperty.netlify.app/images/bg15.jpg',
    HeadingText: 'Invest in the Future',
    paraText: 'Discover high-yield investment properties in prime locations.',
  },
  {
    image: 'https://wallsproperty.netlify.app/images/bg19.jpg',
    HeadingText: 'Live Where You Love',
    paraText: 'Explore vibrant neighborhoods and premium living spaces.',
>>>>>>> a26529c53e7678fb7762cd41d894d42745d2270f
  },
];


const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <SwiperStyles />
      <Swiper     modules={[Navigation]}
        navigation
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <StyledSwiperSlide key={index}>
            <SlideContainer image={slide.image}>
              <SlideOverlay />
              <SlideContent>
                <AnimatedHeading>{slide.HeadingText}</AnimatedHeading>
                <p>
                  {slide.paraText}
                </p>
                <Button onClick={() => navigate('/contact')}>
                  Contact Us <FaChevronRight style={{ fontSize: '17.5px' }} />
                </Button>
              </SlideContent>
            </SlideContainer>
          </StyledSwiperSlide>
        ))}
      </Swiper>
      <PropertyFilter />
    </>
  );
};

export default HomePage;
