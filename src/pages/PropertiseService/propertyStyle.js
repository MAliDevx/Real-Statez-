import styled from 'styled-components';
import Select from 'react-select';

export const OuterContainer = styled.div`
  width: 100%;
  position: relative;
  
`;

export const FilteredContent = styled.div`
  padding: 2rem;
  text-align: center;
  padding-top: 90px;
  @media (max-width:768px) {
    position: relative;
    top: 430px;
  }

`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  width: 80%;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  z-index: 10;
  overflow-x: visible;
  top: -20px;

  .css-13cymwt-control {
    height: 50px;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 0.8rem;
      top: 200px;

  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 0.6rem;
  }
`;

export const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const StyledSelect = styled(Select)`
  flex: 0 1 22%;
  min-width: 180px;

  @media (max-width: 992px) {
    flex: 0 1 45%;
  }

  @media (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

export const PriceRange = styled.div`
  width: 22%;

  @media (max-width: 992px) {
    width: 45%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const PriceValues = styled.div`
  font-size: 0.9rem;
  margin-top: 0.3rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

export const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--primary-button);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  height: 40px;
  width: 22%;
  font-size: 16.5px;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 992px) {
    width: 45%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
