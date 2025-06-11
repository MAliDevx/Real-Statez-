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
  margin-top:200px;
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
    /* height: 200px; */
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

`;

export const ListConatiner = styled.div`
    width: 83%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`
export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 82.5%;
    margin: 29px auto
`;