import styled from "styled-components";
import Select from "react-select";

export const PropertyListingContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .property-heading-box {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 150px;
    background-color: var(--background-color);
  }

  .propertyname-heading {
    width: 82%;
    display: flex;
    padding: 20px 0;
    align-items: center;

    #homeIcon {
      color: var(--subheading-color);
      cursor: pointer;
      transition: color 0.3s ease;

      &:hover {
        color: var(--primary-button);
      }
    }

    span {
      font-weight: 600;
      font-size: 15px;
    }

    #property {
      font-family: "Open Sans", sans-serif;
      color: var(--subheading-color);
      cursor: pointer;
      transition: color 0.3s ease;

      &:hover {
        color: var(--primary-button);
      }
    }
  }

  #housetype {
    font-family: "Open Sans", sans-serif;
    color: var(--primary-button);
  }
`;
export const PropertyFilterdiv = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--border-color);
  padding: 10px 15px;
  .filter-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    span {
      font-family: "Open Sans", sans-serif;
      font-size: 14px;
      font-weight: 600;
      color: var(--primary-button);
      margin-right: 5px;
    }
  }
  .icon-container {
    display: flex;
    align-items: center;
    justify-content: flex-start; /* More natural icon alignment */
    border: 1px solid var(--border-color);
    /* padding: 0px 10px; */
    /* border-radius: 4px; */
  }

  .icons {
    padding: 8px 4px;
    color: var(--primary-button);
    cursor: pointer;
    width: 30px;
    height: 20px;
    font-size: 16px;
    transition: all 0.2s ease;
    /* border-radius: 4px; */
  }

  .icons.active {
    background-color: var(--primary-button);
    color: var(--white-color);
  }
`;
export const Filterbox = styled.div`
  /* display: flex; */
  /* flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  border: 0 !important;
  outline: none; */
  color: var(--subheading-color);
`;

export const StyledSelectBox = styled(Select)`
  flex: 1 1 22%;
  min-width: 180px;
  border: none;
  outline: none;
  color: var(--subheading-color);
`;

export const PropertyCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .property-card-grid {
    width: 82%;
    margin-top: 50px;
    gap: 30px;

    display: ${({ view }) => (view === "list" ? "block" : "grid")};
    grid-template-columns: ${({ view }) =>
      view === "list" ? "none" : "repeat(3, 1fr)"};
  }

  .list-card-container {
    display: ${({ view }) => (view === "list" ? "flex" : "grid")};
    /* flex-direction: flex; */
    gap: 110px
    /* justify-content:space-between; */
  }
`;

export const Card = styled.div`
  position: relative;
  border: 1px solid #ddd;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 30px 0px;

  .isForSale {
    color: black;
    position: absolute;
    right: 10px;
    top: 10px;
    border: 0;
    outline: none;
    padding: 6px 8px;
    background-color: var(--large-text);
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
    flex-direction: ${({ view }) => (view === "list" ? "column" : "row")};
    justify-content: ${({ view }) =>
      view === "list" ? "center" : "space-between"};
    align-items: center;
    gap: ${({ view }) => (view === "list" ? "20px" : "0")};
    padding: 9px 20px;
    margin-right: ${({ view }) => (view === "list" ? "-100px" : "0")};
    border-top: ${({ view }) =>
      view === "list" ? "none" : "1px solid var(--light-gray)"};
    figure {
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

      flex-direction: ${({ view }) => (view === "list" ? "column" : "row")};
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
export const CardDetailListContainer = styled.div`
  display: ${({ view }) => (view === "list" ? "flex" : "block")};
  flex-direction: ${({ view }) => (view === "list" ? "column" : "initial")};
  justify-content: ${({ view }) => (view === "list" ? "center" : "initial")};
  margin-left: ${({ view }) => (view === "list" ? "-100px" : "0")};
`;

export const CardWrapper = styled.div`
  position: relative;
  width: ${({ view }) => (view === "list" ? "45%" : "100%")} !important;
`;



export const SaleButton = styled.button`
  color: black;
  position: absolute;
  right: 10px;
  top: 10px;
  border: 0;
  outline: none;
  padding: 6px 8px;
  background-color: var(--large-text);
  color: white;
`;
export const CardImg = styled.img`
  height: 300px;
  object-fit: cover;
  /* position: relative; */
  width: ${({ view }) => (view === "list" ? "100%" : "100%")};
`;

export const CardBodyTop = styled.div`
  padding: 16px;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  .isHouse {
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
  div {
    text-align: start;
    color: var(--gray);
    font-size: 17px;
    font-size: 15px;
  }
  .bottom-box {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 6px;
  }
`;
