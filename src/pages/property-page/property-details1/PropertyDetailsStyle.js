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

.propertyHeader {
  padding: 2rem 0;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 2rem;

  .headerContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;

    .leftSection {
      .name {
        color: var(--large-text);
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 0.5rem;
      
      }
      .price {
        color: var(--large-text);
        font-size: 17px;
        font-weight: 500;
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
        gap: 20px;

      .price-after-discount {
  font-size: 20px;
  color: var(--large-text); 
}

.actual-price {
  font-size: 15px;
  color: var(--gray);
}

.discount {
  background-color: #ffc107;
  color: #000;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: bold;
  margin-right: 6px;
}

.original-price {
  text-decoration: line-through;
  color: #999;
}
      }

      .address {
        color: var(--gray);
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 10px;
        span{
        font-size: 16px;
        }
      }

      .features {
        display: flex;
        gap: 1.5rem;

        .feature {
          color: var(--gray);
          font-size: 15px;
          position: relative;
          padding-left: .5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;

          }
        }
        .property-icon{
             font-size: 20px;
        }
      }
    }
.status-badge,
.purpose-badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 7px;
  font-size: 15px;
  color: white;
  text-transform: capitalize;
}

.status-badge.available {
  background-color: #28a745; 
}
.status-badge.sold {
  background-color: red; 
}

.purpose-badge.rent {
  background-color: #17a2b8; 
}
.purpose-badge.sale {
  background-color: #6f42c1;
}

    .rightSection {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 1rem;

      /* .purchaseButton {
        background-color: #4a90e2;
        color: white;
        border: none;
        padding: 0.8rem 1.5rem;
        border-radius: 4px;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
          background-color: #3a7bc8;
        }
      } */

      .actionIcons {
        display: flex;
        gap: 1rem;

        .icon {
          color: var(--gray);
          font-size: 28px;
          cursor: pointer;
          transition: color 0.3s;

          &:hover {
            color: #4a90e2;
          }
        }
      }
    }
  }


/* For mobile responsiveness */
@media (max-width: 768px) {
  .propertyHeader {
    .headerContainer {
      flex-direction: column;
      gap: 1.5rem;

      .rightSection {
        align-items: flex-start;
        width: 100%;
      }
    }
  }
}

  
  @media (max-width: 768px) {
    .propertyHeader {
      .headerContainer {
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
    .propertyHeader {
      .headerContainer {
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
export const SliderContainer = styled.div`
  display: flex;
  height: 70vh;
  gap: 10px;

  .slider-left {
    width: 60%;
    border-radius: 10px;
    overflow: hidden;
  }

  .slider-right {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .top-box,
    .bottom-box {
      width: 100%;
      height: 50%;
      border-radius: 10px;
      overflow: hidden;
      position: relative;
    }

    .top-box {
      .preview-image {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
      }
    }

    .bottom-box {
      .first-image {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        .overlay-text {
          color: white;
          background-color: rgba(0, 0, 0, 0.6);
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 18px;
          font-weight: bold;
        }
      }
    }
  }
`;



