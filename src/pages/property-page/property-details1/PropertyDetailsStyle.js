import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const SwiperStyles = createGlobalStyle`
  .swiper-button-next,
  .swiper-button-prev {
    color: white !important;
    background-color: #9A9A9B;
    padding: 6px;
    width: 20px;
    height: 20px;
    font-weight: bold;

    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
      color: blue;
    }
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 18px;
    font-weight: bold;
  }

  .propertHeading {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--background-color);

    .innerContainer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 80%;

      h2 {
        margin-bottom: 0;
        color: var(--large-text);
        font-size: 29px;
      }

      .left-side {
        p {
          margin-top: 10px;
          color: var(--gray);
        }
      }

      .right-side {
        .icons {
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;

          svg {
            background-color: var(--primary-button);
            padding: 7px;
            color: var(--white-color);
            font-size: 13px;
            font-weight: bold;
            border-radius: 4px;
            cursor: pointer;

            &:hover {
              background-color: rgb(2, 21, 96) !important;
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .propertHeading {
      .innerContainer {
        flex-direction: column;
        /* gap: 10px; */
        width: 90%;
        padding: 20px;

        h2 {
          font-size: 22px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .propertHeading {
      .innerContainer {
        h2 {
          font-size: 20px;
          /* text-align: center; */
        }
      }
    }
  }
`;

export const InnerBox = styled.div`
  display: block;
  margin: 0 auto;
  width: 85%;
`;

export const PropertDetails = styled.div`
  .property-details-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .description {
    width: 100%;

    h2 {
      border-bottom: 1px solid var(--light-gray);
      padding: 4rem 0rem 1.5rem 0rem;
      color: var(--large-text);
      margin: 0;
    }

    p {
      color: var(--gray);
    }

    .Show-more {
      width: 108px !important;
      display: block;
      margin: 0 auto;
      text-align: center;
      padding: 12px 0px;
    }

    .details-container {
      display: flex;
      gap: 20px;
    }

    .property-details {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid #ccc;
      padding: 15px;
      border-radius: 8px;
      background-color: var(--background-light-gray);
      width: 95%;
      min-height: 180px;
      margin-top: 20px;
      @media (max-width:768px) {
        align-items: baseline;
      }
    }

    .detail-item {
      margin-bottom: 4px;
    }

    .detail-label {
      font-weight: 700;
      color: #212529;
      display: inline-block;
      width: 140px;
    }

    .detail-value {
      display: inline-block;
      color: var(--gray);
    }

    .propert-features {
      display: flex;
      flex-wrap: wrap;
      margin-top: 20px;
      border: 1px solid #ccc;
      padding: 15px;
      border-radius: 8px;
      background-color: var(--background-light-gray);
      width: 95%;
      min-height: 180px;

      .features-item {
        display: flex;
        align-items: center;
        width: calc(33.33% - 20px);
        min-width: 200px;
        margin-bottom: 10px;
      }
    }

    .custom-checkbox {
      position: relative;
      padding-left: 28px;
      cursor: pointer;
      user-select: none;
      display: inline-block;
      font-size: 16px;
      color: #333;
    }

    .custom-checkbox input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 20px;
      width: 20px;
      background-color: #c1d0ff;
      border-radius: 3px;
    }

    .custom-checkbox input:checked ~ .checkmark::after {
      content: "";
      position: absolute;
      left: 6px;
      top: 2px;
      width: 5px;
      height: 10px;
      border: solid #3454d1;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }

    label {
      font-size: 16px;
      color: #333;
      cursor: pointer;
    }
  }

  .floor-drop-downs {
    background: var(--white-color);
    border: 1px solid var(--light-gray);
    padding: 4px 10px;
    margin: 5px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover,
    &.active {
      background-color: var(--primary-button);
      color: var(--white-color) !important;

      p {
        color: var(--white-color) !important;
      }
    }
  }

  .show-first-floor {
    background: #e0f7fa;
    padding: 10px;
    margin-left: 20px;
  }

  .floor-details-wrapper {
    border: 1px solid var(--light-gray);
    padding: 0px 23px;
    margin-top: -5px;
    transition: all 3s ease-in-out;
  }

  .floor-size {
    background-color: var(--light-gray);
    border-radius: 4px;
    padding: 2px 4px;
    text-align: center;
  }

  .video-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 51px;
    color: var(--white-color);
    background-color: var(--primary-button);
    border-radius: 50%;
    padding: 9px;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 6px;
  }

  /* ✅ Tablet Styles */
  @media (max-width: 768px) {
    .description {
      h2 {
        font-size: 22px;
        padding: 2rem 0rem 1rem 0rem;
      }

      .details-container {
        flex-direction: column;
      }

      .property-details {
        flex-direction: column;
        gap: 12px;
        padding: 12px;
      }

      .propert-features {
        flex-direction: column;

        .features-item {
          width: 100%;
          min-width: 100%;
        }
      }
    }

    .floor-details-wrapper {
      padding: 0px 15px;
    }

    .video-button {
      font-size: 38px;
      width: 60px;
      height: 60px;
    }

    .floor-drop-downs {
      font-size: 14px;
    }
  }

  /* ✅ Mobile Styles */
  @media (max-width: 480px) {
    .description {
      h2 {
        font-size: 20px;
        padding: 1.5rem 0rem 1rem 0rem;
      }

      .property-details {
        flex-direction: column;
        padding: 10px;
      }

      .propert-features {
        padding: 10px;

        .features-item {
          width: 100%;
        }
      }

      .detail-label,
      .detail-value {
        font-size: 14px;
        width: auto;
      }

      .Show-more {
        width: 100px !important;
        font-size: 14px;
      }
    }

    .floor-drop-downs {
      font-size: 13px;
      padding: 4px 8px;
    }

    .video-button {
      font-size: 32px;
      width: 50px;
      height: 50px;
    }

    .checkmark {
      width: 16px;
      height: 16px;
    }

    .custom-checkbox {
      font-size: 14px;
      padding-left: 24px;
    }

    label {
      font-size: 14px;
    }
  }
`;
