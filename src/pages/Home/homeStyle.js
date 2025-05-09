import { createGlobalStyle } from "styled-components";

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
