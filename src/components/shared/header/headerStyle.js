import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 0px;
  background-color: ${({ scrolled }) => (scrolled ? '#fff' : 'transparent')};
  box-shadow: ${({ scrolled }) => (scrolled ? '0 2px 5px rgba(0, 0, 0, 0.1)' : 'none')};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
`;


export const Logo = styled.div`
  img {
    height: 40px;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 30px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: ${({ scrolled }) => (scrolled ? '#333' : 'white')};
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  padding-bottom: 4px;
  font-size: 15px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: #007BFF;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0%;
    height: 2px;
    background-color: #007BFF;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;



export const LoginButtonWrapper = styled.div``;

export const LoginButton = styled.button`
  padding: 10px 18px;
  background-color: var(--primary-button);
  color: white;
  border: none;
  font-weight: 500;
  font-size:16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
display: flex;
align-items: center;
justify-content: center;

  &:hover {
    background-color: #0056b3;
  }
`;