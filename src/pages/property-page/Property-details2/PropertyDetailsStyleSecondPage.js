import styled from "styled-components";

export const PropertDetailsSecondPage = styled.div`
  h2 {
    border-bottom: 1px solid var(--light-gray);
    padding: 2rem 0rem 1.5rem 0rem;
    color: var(--large-text);

    @media (max-width: 480px) {
      font-size: 18px;
      padding: 1.5rem 0rem 1rem 0rem;
    }
  }

  .education-facilities {
    .facilities-container {
      display: flex;
      gap: 20px;

      @media (max-width: 1024px) {
        flex-direction: column;
      }

      .facilities-box {
        flex: 1;
        border: 1px solid var(--border-color);
        padding: 15px;
        border-radius: 8px;
        background-color: var(--background-light-gray);

        @media (max-width: 480px) {
          padding: 12px;
        }
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

          @media (max-width: 768px) {
            font-size: 16px;
          }

          @media (max-width: 480px) {
            font-size: 14px;
          }
        }

        svg {
          font-size: 20px;
          background-color: #c1d0ff;
          color: var(--primary-button);
          padding: 6px;
          border-radius: 4px;

          @media (max-width: 480px) {
            font-size: 16px;
            padding: 4px;
          }
        }
      }

      .facilities-list {
        display: flex;
        justify-content: space-between;
        font-size: 14px;

        @media (max-width: 480px) {
          flex-direction: column;
          gap: 6px;
        }

        .name {
          font-weight: 400;
          margin: 3px 0px;
          color: var(--gray);

          @media (max-width: 480px) {
            font-size: 13px;
          }
        }

        .location {
          display: flex;
          align-items: center;
          gap: 5px;
          color: var(--primary-button);
          width: 65px;

          svg {
            font-size: 14px;
            color: var(--primary-button);
          }
        }
      }
    }
  }
`;

export const InnerContainer = styled.div`
  width: 85%;
  display: block;
  margin: 0 auto;
iframe {
  width: 100%;
  object-fit: cover;
      border: 0px;
    border-radius: 10px;
    overflow: hidden;
}
  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`;

export const FilteredContent = styled.div`
  /* Add future responsive logic here if needed */
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
      width: 90%;
    }

    @media (max-width: 768px) {
      width: 95%;
    }

    @media (max-width: 480px) {
      gap: 1rem;
      width: 95%;
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

    @media (max-width: 480px) {
      width: 100%;
    }
  }
`;
