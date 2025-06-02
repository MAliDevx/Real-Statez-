import React, { useEffect, useState, useRef } from "react";
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
  ProfileImage,
  DropdownMenu,
  DropdownItem,
} from "./headerStyle";
import { FaSignInAlt, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import navlogo from "../../../assets/Images/logo-blue-stiky.png";

const Header = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [token, setToken] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

useEffect(() => {
  const updateToken = () => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  };

  updateToken();

  window.addEventListener("login-success", updateToken);

  return () => window.removeEventListener("login-success", updateToken);
}, []);


  useEffect(() => {

    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Navigate function
  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    setDropdownOpen(false);
    navigate("/login");
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
          onClick={() => handleNavigate("/")}
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

      {/* Login or Profile */}
      <LoginButtonWrapper ref={dropdownRef}>
        {token ? (
          <ProfileImage onClick={() => setDropdownOpen(!dropdownOpen)} scrolled={scrolled}>
            <img src={navlogo} alt="" />
            {dropdownOpen && (
              <DropdownMenu>
                <DropdownItem onClick={() => handleNavigate("/user-profile")}>Profile</DropdownItem>
                <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
              </DropdownMenu>
            )}
          </ProfileImage>
        ) : (
          <LoginButton onClick={() => handleNavigate("/login")} scrolled={scrolled}>
            Login <FaSignInAlt style={{ marginLeft: 5 }} size={18} />
          </LoginButton>
        )}
      </LoginButtonWrapper>

      {/* Hamburger Icon */}
      <HamburgerIcon scrolled={scrolled} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </HamburgerIcon>

      {/* Mobile Menu */}
      <MobileMenu isOpen={menuOpen}>
        <MobileMenuItem onClick={() => handleNavigate("/")}>Home</MobileMenuItem>
        <MobileMenuItem onClick={() => handleNavigate("/property-listing")}>Property</MobileMenuItem>
        <MobileMenuItem onClick={() => handleNavigate("/agents")}>Agents</MobileMenuItem>
        <MobileMenuItem onClick={() => handleNavigate("/contact")}>Contact</MobileMenuItem>
        {!token ? (
          <MobileMenuItem $primary onClick={() => handleNavigate("/login")}>
            Login <FaSignInAlt style={{ marginLeft: 2 }} size={18} />
          </MobileMenuItem>
        ) : (
          <>
            <MobileMenuItem onClick={() => handleNavigate("/user-profile")}>Profile</MobileMenuItem>
            <MobileMenuItem onClick={handleLogout}>Logout</MobileMenuItem>
          </>
        )}
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;
