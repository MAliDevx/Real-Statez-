import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { SwiperStyles } from './homeStyle';
import { FaChevronRight } from 'react-icons/fa';
import PropertyFilter from '../PropertiseService/propertiseService'
import { Button } from '../../styles/commanClasses';
 import {AnimatedHeading} from './homeStyle';

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
      image: '	https://wallsproperty.netlify.app/images/bg19.jpg',
      HeadingText: 'Discover the World',
      paraText: 'Travel the globe and discover hidden treasures and cultures.',
    },
  ];
  

const HomePage = () => {
  return (
    <>
      <SwiperStyles />
      <Swiper
        modules={[Navigation]}
        navigation
        loop
        className="mySwiper"
        style={{ height: '93vh', top:'-100px' }}
      >
        {slides.map((slide, index) => (
            <SwiperSlide key={index}>
  <div
    style={{
      position: 'relative',
      backgroundImage: `url(${slide.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '100%',
    }}
  >
    {/* Dark overlay */}
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
      }}
    />
    
    {/* Text & Button Content */}
    <div
      style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100%',
        color: 'white',
        textAlign: 'center',
        padding: '0 20px',
      }}
    >
      <AnimatedHeading >{slide.HeadingText}</AnimatedHeading>
      <p style={{
        fontSize: '1.1rem',
        maxWidth: '600px',
        marginBottom: '1.5rem',
        color: '#f0f0f0'
      }}>
        {slide.paraText}
      </p>
      <Button>
        Contact Us < FaChevronRight  style={{fontSize:'17.5px'}}/>
      </Button>
    </div>
  </div>
</SwiperSlide>
        ))}
      </Swiper>
      <PropertyFilter/>
    </>
  );
};

export default HomePage;
