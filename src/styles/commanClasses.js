import styled from "styled-components";

export const DividerWithText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;  

  &::before,
  &::after {
    content: '';
    flex: .07;
    border-bottom: 1px solid #ccc;
  }

  span {
    padding: 0 1rem;
    font-weight: bold;
    color: #666;
    white-space: nowrap;
  }
`;

