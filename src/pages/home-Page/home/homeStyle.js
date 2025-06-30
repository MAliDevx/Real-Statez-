// homeStyle.js
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const SwiperStyles = createGlobalStyle`
  .swiper-button-next,
  .swiper-button-prev {
    color: white !important;
    background-color: #9A9A9B;
    padding: 6px;
    width: 20px;
    height: 20px;
    font-weight: bold;
    &:hover{
      background-color: rgba(0, 0, 0, 0.5);
      color: blue;
    }
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 18px;
    font-weight: bold;
  }
  .mySwiper {
    height: 93vh;
    margin-top: -70px;
  }
`;

const slideFromTop = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const AnimatedHeading = styled.h1`
  font-size: 3rem;
  margin-bottom: 0rem;
  animation: ${slideFromTop} 1s ease-out;
  text-align: center;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  width: 100%;
  height: 93vh;
`;

export const SlideContainer = styled.div`
  position: relative;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;

`;

export const SlideOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.3); /* Optional: a light overlay */
`;

export const SlideContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  color: white;
  text-align: center;
  padding: 0 20px;
   @media (min-width: 768px) {
height:80%;
  }

  p {
    font-size: 1.1rem;
    max-width: 600px;
    margin-bottom: 1.5rem;
    color: #f0f0f0;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;
