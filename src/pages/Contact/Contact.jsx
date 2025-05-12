import React from "react";
import {
  ContactContainer,
  ContactUsFormContainer,
  InfoSection,
  InfoBox,
  InfoItem,
SocialIconDiv,
  span,
  MapPlaceholder,
  LocationItemDiv,
} from "./ContactStyle";
import {
  FaClock,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaGlobeAsia } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";


function Contact() {
  return (
    <>
      <ContactContainer>
        <div className="imageContainer">
          <div className="textContainer">
            <h2>Contact Us</h2>
            <div>
              <span>home </span> / <span>page</span> / <span>contact us</span>
            </div>
          </div>
        </div>
      </ContactContainer>

      <ContactUsFormContainer>
        <div>
          <h3>Contact Us</h3>
          <form>
            <div className="input-grid">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Subject" />
              </div>

              <div className="form-group">
                <label htmlFor="website">Website</label>
                <input type="url" id="website" placeholder="Website URL" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="5"
              ></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>

        <div>
          <InfoSection>
            <div>
              <h3>Open Hours</h3>
              <InfoBox>
                <InfoItem>
                  <span>Monday - Friday</span>
                  <span>09 AM - 19 PM</span>
                </InfoItem>
                <InfoItem>
                  <span>Saturday</span>
                  <span>09 AM - 14 PM</span>
                </InfoItem>
                <InfoItem>
                  <span>Sunday</span>
                  <span>Closed</span>
                </InfoItem>
              </InfoBox>
            </div>

            <div>
              <h3 style={{margin:"0px"}}>Info Location</h3>
              <InfoBox>
                <LocationItemDiv>
                  <div className="IconsBox">
                    <IoHome className="Icons" />
                  </div>
                  <span>
                    PO Box 16122 Collins Street West Victoria 8007 Australia
                  </span>
                </LocationItemDiv>
                <LocationItemDiv>
                  <div className="IconsBox">
                    <IoCall className="Icons" />
                  </div>
                  <span>(+12) 34567 890 123</span>
                </LocationItemDiv>
                <LocationItemDiv>
                  <div className="IconsBox">
                    <FaEnvelope className="Icons" />
                  </div>
                  <span>mail@example.com</span>
                </LocationItemDiv>
                <LocationItemDiv>
                  <div className="IconsBox">
                    <FaGlobeAsia className="Icons" />
                  </div>
                  <span>www.yourdomain.com</span>
                </LocationItemDiv>
              </InfoBox>
            </div>

            <SocialIconDiv>
  <div className="SocialIcons">
                    <FaFacebookF className="Icons" />
                  </div>
  <div className="SocialIcons">
                    <FaTwitter className="Icons" />
                  </div>
  <div className="SocialIcons">
                    <FaWhatsapp className="Icons" />
                  </div>
  <div className="SocialIcons">
                    <FaTelegram className="Icons" />
                  </div>
  <div className="SocialIcons">
                    <FaLinkedin className="Icons" />
                  </div>

            </SocialIconDiv>
          </InfoSection>{" "}
        </div>
      </ContactUsFormContainer>
    </>
  );
}

export default Contact;
