import React, { useEffect, useState } from "react";
import {
  HeaderContainer,
  Logo,
  NavLinks,
  NavLink,
  LoginButtonWrapper,
  LoginButton,
  HamburgerIcon,
  MobileMenu,
  MobileMenuItem,
} from "./headerStyle";
import { FaSignInAlt, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import navlogo from "../../../assets/Images/logo-blue-stiky.png";

const Header = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false); // close mobile menu after navigation
  };

  return (
    <HeaderContainer scrolled={scrolled}>
      <Logo>
        <img src={navlogo} alt="Logo" />
      </Logo>
<NavLinks>
  <NavLink
    scrolled={scrolled}
    active={location.pathname === "/"}
    onClick={() => handleNavigate("")}
  >
    Home
  </NavLink>
  <NavLink
    scrolled={scrolled}
    active={location.pathname === "/property-listing"}
    onClick={() => handleNavigate("/property-listing")}
  >
    Property
  </NavLink>
  <NavLink
    scrolled={scrolled}
    active={location.pathname === "/agents"}
    onClick={() => handleNavigate("/agents")}
  >
    Agents
  </NavLink>
  <NavLink
    scrolled={scrolled}
    active={location.pathname === "/contact"}
    onClick={() => handleNavigate("/contact")}
  >
    Contact
  </NavLink>
</NavLinks>


      <LoginButtonWrapper>
        <LoginButton onClick={() => handleNavigate("/login")} scrolled={scrolled}>
          Login <FaSignInAlt style={{ marginLeft: 5 }} size={18} />
        </LoginButton>
      </LoginButtonWrapper>

      {/* Hamburger Icon */}
      <HamburgerIcon scrolled={scrolled} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </HamburgerIcon>

      {/* Mobile Menu */}
      <MobileMenu isOpen={menuOpen}>
        <MobileMenuItem onClick={() => handleNavigate("")}>Home</MobileMenuItem>
        <MobileMenuItem onClick={() => handleNavigate("/property-listing")}>
          Property
        </MobileMenuItem>
        <MobileMenuItem onClick={() => handleNavigate("/agents")}>Agents</MobileMenuItem>
        <MobileMenuItem onClick={() => handleNavigate("/contact")}>Contact</MobileMenuItem>
      <MobileMenuItem $primary onClick={() => handleNavigate("/login")}>
  Login <FaSignInAlt style={{ marginLeft: 2 }} size={18} />
</MobileMenuItem>

      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;
