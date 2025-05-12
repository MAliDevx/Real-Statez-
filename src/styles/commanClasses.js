import styled from "styled-components";

export const DividerWithText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;

  &::before,
  &::after {
    content: "";
    flex: 0.13;
    border-bottom: 1px solid #ccc;
  }

  span {
    padding: 0 1rem;
    font-weight: bold;
    color: #666;
    white-space: nowrap;
    font-size: 27px;
    color: var(--large-text);
  }
`;

export const CarouselWrapper = styled.div`
  width: 85%;
  margin: 40px auto;
  position: relative;

  .swiper-pagination {
    margin-top: 20px;
    position: relative;
    bottom: 0;
    text-align: center;
  }

  .swiper-pagination-bullet {
    background: #999;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: #007bff;
  }
`;

export const Card = styled.div`
  position: relative;
  border: 1px solid #ddd;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .isForSale {
    color: black;
    position: absolute;
    right: 10px;
    top: 10px;
    border: 0;
    outline: none;
    padding: 6px 8px;
    background-color:var(--large-text);
    color: white;
  }

  .property-feature {
    position: absolute;
    top: 77px;
    left: -28px;
    width: 151px;
    background-color: var(--primary-button);
    color: white;
    padding: 6px 12px;
    font-size: 14px;
    text-transform: uppercase;
    transform: rotate(-45deg);
    transform-origin: left top;
    z-index: 1;
    outline: none;
    border: 0;
  }

  .property-profile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 20px;
  border-top: 1px solid var(--light-gray);
  figure{
    margin: 0;
    border: 1px solid var(--light-gray);
    border-radius: 50%;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__info {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }

  &__name {
    font-weight: normal;
    color: var(--gray);
    margin: 0;
    font-size: 15px;
  }

  &__price {
    font-size: 18px;
    font-weight: bold;
    color: var(--large-text);
  }
}

`;

export const CardImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const CardBodyTop = styled.div`
  padding: 16px;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  .isHouse{
    border: none;
    outline: none;
    padding: 6px 8px;
    color: var(--white-color);
    background-color: var(--primary-button);
    margin-bottom: 18px;
  }
  .property-location {
    color: #555;
    margin: 6px 0;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
  }
  .property-name {
    margin: 0;
    font-size: 1.2rem;
    text-transform: capitalize;
    color: #002247;
  }
`;
export const CardBodyBottom = styled.div`
  padding: 16px;
  padding-top: 0;
  display: flex;
  gap: 23px;
  padding-top: 0;
  div{
text-align: start;
    color:var(--gray);
    font-size: 17px;
    font-size: 15px;
  }
  .bottom-box{
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 6px;
  }
  
`;
export const Button = styled.div`

          padding: 12px 24px;
          display:flex;
          align-items:center;
          justify-content:center;
          background-color: var(--primary-button);
          color: var(--white-color);
          border: none;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
`