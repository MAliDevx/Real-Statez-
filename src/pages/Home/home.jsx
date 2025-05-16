// HomePage.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { SwiperStyles, AnimatedHeading, StyledSwiperSlide, SlideContainer, SlideOverlay, SlideContent } from './homeStyle';
import { FaChevronRight } from 'react-icons/fa';
import PropertyFilter from '../PropertiseService/propertiseService';
import { Button } from '../../styles/commanClasses';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    image: 'https://wallsproperty.netlify.app/images/bg.jpg',
    HeadingText: 'Explore the Mountains',
    paraText: 'Experience breathtaking views and peaceful moments in nature.',
  },
  {
    image: 'https://wallsproperty.netlify.app/images/bg15.jpg',
    HeadingText: 'Adventure Awaits',
    paraText: 'Unleash your spirit of adventure with thrilling destinations.',
  },
  {
    image: 'https://wallsproperty.netlify.app/images/bg19.jpg',
    HeadingText: 'Discover the World',
    paraText: 'Travel the globe and discover hidden treasures and cultures.',
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <SwiperStyles />
      <Swiper modules={[Navigation]} navigation loop className="mySwiper">
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
