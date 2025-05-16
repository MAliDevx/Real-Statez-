import { createGlobalStyle } from "styled-components";
import styled, {keyframes} from "styled-components";
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