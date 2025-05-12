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
  padding: 8px 10px;
  /* border-radius: 4px; */
}

.icons {
  padding: 8px 10px;
  color: var(--primary-button);
  cursor: pointer;
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
