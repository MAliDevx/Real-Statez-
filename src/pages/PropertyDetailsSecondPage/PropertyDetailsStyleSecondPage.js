import styled from "styled-components";

export const PropertDetailsSecondPage = styled.div`
    h2 {
      border-bottom: 1px solid var(--light-gray);
      padding: 2rem 0rem 1.5rem 0rem;
      color: var(--large-text);
    }

    .education-facilities {

  .facilities-container {
    display: flex;
    gap: 20px;

    .facilities-box {
      flex: 1;
      border: 1px solid #ccc;
      padding: 15px;
      border-radius: 8px;
      background-color: var(--background-light-gray);
    }

    .facilities-heading {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;

      h3 {
        margin: 0;
        font-size: 18px;
        color: var(--large-text);
      }

      svg {
        font-size: 20px;
        background-color: #c1d0ff;
        color: var(--primary-button);
        padding: 6px;
        border-radius: 4px;
      }
    }

    .facilities-list {
      display: flex;
      justify-content: space-between;
      font-size: 14px;

      .name {
        font-weight: 400;
    margin: 3px 0px;
        color: var(--gray);
      }

      .location {
        display: flex;
        align-items: center;
        gap: 5px;
        color: #666;
        color: var(--primary-button);

        svg {
          font-size: 14px;
          color: var(--primary-button);
        }
      }
    }
  }
}

`

export  const InnerContainer = styled.div`
width: 85%;
display: block;
margin: 0 auto;
` 
export  const FilteredContent = styled.div`

` 
export const RequestQuotes = styled.section`
  display: flex;
  justify-content: center; 
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