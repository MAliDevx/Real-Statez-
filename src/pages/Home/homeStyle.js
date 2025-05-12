import { createGlobalStyle } from "styled-components";
import styled, {keyframes} from "styled-components";
export const SwiperStyles = createGlobalStyle`
  .swiper-button-next,
  .swiper-button-prev {
    color: white !important;
    background-color: #9A9A9B;
    padding: 10px;
    width: 24px;
    height: 24px;
    border-radius: 6px;
    font-weight: bold;
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 18px;
    font-weight: bold;
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
`;