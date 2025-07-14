import React from "react";
import footerlogo from '../../../assets/Images/logo-white-footer.png'
import {
  FooterContainer,
  FooterWrapper,
  Column,
  Logo,
  Address,
  QuickLinks,
  SocialIcons,
  Newsletter,
  Copyright,
  Input,
  NavLink,
  SubscribeButton
} from "./FooterStyle.js";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

function FooterPage() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Column>
          <Logo>
            <img src={footerlogo} alt="Logo"  width={140} height={40} />

          </Logo>
          <p>
            Estate Mate is a trusted name in real estate, offering a premium property browsing experience powered by modern, responsive design. Built on Bootstrap 4, our platform has helped thousands of clients find the perfect home, investment property, or commercial space. Whether you're buying, selling, or exploring, Estate Mate connects you with the right opportunities.


          </p>
          <Address>
            <p><FaMapMarkerAlt /> 214 West Arnold St. New York, NY 10002</p>
            <p><FaPhone /> (123) 345-6789</p>
            <p><FaPhone /> (+100) 123 456 7890</p>
            <p><FaEnvelope /> support@realvilla.demo</p>
            <p><FaClock /> Mon - Sun / 9:00AM - 8:00PM</p>
          </Address>
        </Column>

        <Column>
          <QuickLinks>
            <h4>Quick Links</h4>
            <ul>
              <li>Commercial</li>
              <li>Business</li>
              <li>House</li>
              <li>Residential</li>
              <li>Residential Tower</li>
              <li>Beverly Hills</li>
              <li>Los Angeles</li>
              <li>The Beach</li>
              <li>Property Listing</li>
              <li>Classic</li>
              <li>Modern Home</li>
              <li>Luxury</li>
              <li>Beach Pasadena</li>
            </ul>
          </QuickLinks>
        </Column>

        <Column>
          <h4>Follow Us</h4>
          <p>Follow us and stay in touch to get the latest news</p>
          <SocialIcons>
            <FaFacebookF style={{background:'rgb(59, 89, 153)',}} />
            <FaTwitter style={{background:'rgb(85, 172, 238)',}} />
            <FaLinkedinIn style={{background:'rgb(0, 119, 181)',}} />
            <FaInstagram style={{background:'rgb(217, 28, 172)',}} />
            <TfiYoutube style={{background:'rgb(204, 24, 30)',}} />
          </SocialIcons>
          
          <Newsletter>
            <h4>Newsletter</h4>
            <p>Don't miss to subscribe to our news feeds, kindly fill the form below</p>
            <Input placeholder="Your email address" />
            <SubscribeButton>Subscribe</SubscribeButton>
          </Newsletter>
        </Column>
      </FooterWrapper>
      <Copyright>
     <div>© 2025 Estate Mate – Premium Real Estate</div>
     <div className="icons">
      <NavLink >Privacy</NavLink> /
      <NavLink href="">Contact</NavLink> /
      <NavLink href="">About Us</NavLink> /
      <NavLink href="">FAQs</NavLink> 
     </div>
      </Copyright>
    </FooterContainer>
  );
}

export default FooterPage;
