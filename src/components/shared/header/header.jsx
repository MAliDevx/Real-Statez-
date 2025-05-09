import React, { useEffect, useState, } from 'react';
import {
  HeaderContainer,
  Logo,
  NavLinks,
  NavLink,
  LoginButtonWrapper,
  LoginButton
} from './headerStyle';
import { FaSignInAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { NavLink as RouterNavLink } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <HeaderContainer scrolled={scrolled}>
      <Logo>
        <img src="https://wallsproperty.netlify.app/images/logo-blue-stiky.png" alt="Logo" />
      </Logo>
      <NavLinks>
        <NavLink scrolled={scrolled} >Home</NavLink>
        <NavLink scrolled={scrolled} onClick={() => navigate('/property-listing')}>Property</NavLink>
        <NavLink scrolled={scrolled}>Contact</NavLink>
        <NavLink scrolled={scrolled}>Agents</NavLink>
      </NavLinks>
      <LoginButtonWrapper>
        <LoginButton scrolled={scrolled}>Login <FaSignInAlt style={{marginLeft:5}} size={18} /></LoginButton>
      </LoginButtonWrapper>
    </HeaderContainer>
  );
};

export default Header;
