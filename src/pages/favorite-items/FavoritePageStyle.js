import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 50px 0px;
    min-height: 100vh;
    width: 85%;
    display: block;
    margin: 0 auto;
`;

export const Header = styled.div`
  text-align: start;
  margin-bottom: 40px;
  width: 85%;

  h1 {
    font-size: 2rem;
    margin-bottom: 5px;
    color: var(--large-text);
  }

  p {
    color: var(--gray);
    font-size: 17px;
  }
`;

export const CardGrid = styled.div`
display: grid;
gap: 25px;
grid-template-columns: repeat(3, 1fr);

`;

export const NoFavorites = styled.p`
  text-align: center;
  color: #999;
  font-size: 1.2rem;
  margin-top: 40px;
`;



