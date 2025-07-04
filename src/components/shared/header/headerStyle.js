import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 0px;
  background-color: ${({ scrolled }) => (scrolled ? "#fff" : "transparent")};
  box-shadow: ${({ scrolled }) =>
    scrolled ? "0 2px 5px rgba(0, 0, 0, 0.1)" : "none"};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  /* height: 100vh; */
`;

export const Logo = styled.div`
cursor: pointer;
  img {
    height: 40px;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 30px;

  @media (max-width: 576px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: ${({ scrolled, active }) =>
    active ? "#007bff" : scrolled ? "#333" : "#ddd"};
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  padding-bottom: 4px;
  font-size: 15px;
  text-transform: uppercase;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: ${({ active }) => (active ? "100%" : "0%")};
    height: 2px;
    background-color: #007bff;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #007bff;
  }

  &:hover::after {
    width: 100%;
  }
`;


export const LoginButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  @media (max-width: 576px) {
    display: none;
  }
`;

export const LoginButton = styled.button`
  padding: 10px 18px;
  background-color: var(--primary-button, #007bff);
  color: white;
  border: none;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #0056b3;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 576px) {
    display: block;
    color: ${({ scrolled }) => (scrolled ? "#333" : "#ddd")};
  }
`;

// Mobile dropdown menu
export const MobileMenu = styled.div`
  position: absolute;
  top: 67px;
  right: 0px;
  background: white;
  width: 80%;
  max-width: 250px;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
  padding: 20px;
  /* border-radius: 8px; */
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 50px;
  z-index: 2000;
  height: 100vh;


  @media (min-width: 577px) {
    display: none;
  }
`;

export const MobileMenuItem = styled.div`
  color: ${({ $primary }) => ($primary ? "white" : "#333")};
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ $primary }) =>
    $primary ? "var(--primary-button, #007bff)" : "transparent"};
  padding: ${({ $primary }) => ($primary ? "15px 20px" : "0")};

  &:hover {
    color: ${({ $primary }) => ($primary ? "white" : "#007bff")};
  }
`;


export  const ProfileImage = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  img{
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 1px solid #020202;
    object-fit: contain;
  }
`;

export  const DropdownMenu = styled.div`
  position: absolute;
  top: 50px;
  right: -130px;
  background: white;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  padding: 0.5em;
  width: 150px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

 export const DropdownItem = styled.div`
  padding: 0.5em;
  cursor: pointer;
  border-radius: 7px;
  &:hover {
    background: #f5f5f5;
  }
`;