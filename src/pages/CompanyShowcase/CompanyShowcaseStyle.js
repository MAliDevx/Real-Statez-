import styled from "styled-components";


export const MainContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const PartnersSection = styled.section`
  background-color: var(--background-light-gray);
height: 300px;
width: 100%;




  #partnersLogos {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 90%;
    margin-left: 84px;
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
    line-height: 1.5px;
    `
export const PeopleFeedBack = styled.div`
  background-color: var(--white);
/* height: 300px; */
width: 100%;
.partners__description{
    color: var(--gray);
    font-size: 16px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 30px;
    line-height: 1.5px;

}
`
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
    border-radius:4px;
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
`
export const CardBox = styled.div`
display: flex;
align-items: center;
justify-content:center;
gap: 20px;
width: 100%;
margin-top: 30px;
`
export const RequestQuotes = styled.section`
  display: flex;
  justify-content: center; /* Center the inner container */
  align-items: center;
  background: linear-gradient(to right, #423592  0%, #0892F7 100%);
  padding: 2rem 0rem;
  color: white;
  width: 100%;
  margin-top: 80px;

  .innerContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
  }

  .leftSide {
    flex: 1;

    h1 {
      margin-right: 5px;
      font-size: 27px;
      text-transform: uppercase;

    }

    p {
      margin: 0;
      font-size: 15px;
    }
  }

  .rightSide {
    flex-shrink: 0;
  }
`;


  