import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const PartnersSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-light-gray);
  flex-direction: column;
  height: 300px;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 400px;
    height: auto;
    padding: 30px 0px;
  }

  #partnersLogos {
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 90%;
 
  }

  .partners__logo {
    height: 70px;
    width: 150px;
    object-fit: contain;
    filter: grayscale(100%);
    transition: filter 0.3s ease;

    &:hover {
      filter: grayscale(0%);
    }
  }
`;

export const Para = styled.div`
  color: var(--gray);
  font-size: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 30px;
  text-align: center;
  margin-bottom: 10px;
  /* line-height: 1.5px; */
`;
export const PeopleFeedBack = styled.div`
  background-color: var(--white);
  /* height: 300px; */
  width: 100%;
  .partners__description {
    color: var(--gray);
    font-size: 16px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 30px;
    line-height: 1.5px;
  }
`;
export const FeedBackProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: -40px;
  padding: 10px 20px;
  margin: 0 auto;
  width: 90%;

  figure {
    margin: 0;
    border: 1px solid var(--light-gray);
    border-radius: 50%;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .property-profile__image {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    text-align: left;
    padding: 12px;
    background-color: var(--white-color);
    border-radius: 4px;
    border: 1px solid #f4f4f4;
  }

  p {
    margin: 0;
    line-height: 1.4;
  }

  p:first-child {
    font-weight: bold;
    color: var(--primary-button);
    font-weight: 700;
    font-size: 14px;
    text-transform: capitalize;
  }

  p:last-child {
    font-size: 14px;
    text-transform: capitalize;
    color: var(--gray);
  }
`;

export const LastestNews = styled.div`
  width: 85%;
  @media (max-width: 768px) {
    width: 95%;
  }
`;
export const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-top: 30px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    /* justify-content: flex-start; */
  }
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const RequestQuotes = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #423592 0%, #0892f7 100%);
  padding: 2rem 0rem;
  color: white;
  width: 100%;
  margin-top: 80px;

  .innerContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;

    @media (max-width: 1024px) {
      flex-direction: column;
      text-align: center;
      gap: 1.5rem;
    }

    @media (max-width: 768px) {
      width: 90%;
    }
  }

  .leftSide {
    flex: 1;

    h1 {
      margin-right: 5px;
      font-size: 27px;
      text-transform: uppercase;

      @media (max-width: 768px) {
        font-size: 22px;
      }

      @media (max-width: 480px) {
        font-size: 18px;
      }
    }

    p {
      margin: 0;
      font-size: 15px;

      @media (max-width: 768px) {
        font-size: 14px;
      }

      @media (max-width: 480px) {
        font-size: 13px;
      }
    }
  }

  .rightSide {
    flex-shrink: 0;

    @media (max-width: 1024px) {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;
