import React, { useState } from "react";
import {
  ContactContainer,
  ContactUsFormContainer,
  InfoSection,
  InfoBox,
  InfoItem,
  SocialIconDiv,
  MapPlaceholder,
  LocationItemDiv,
} from "./ContactStyle";

import { IoHome, IoCall } from "react-icons/io5";
import {
  FaFacebookF,
  FaLinkedin,
  FaWhatsapp,
  FaTwitter,
  FaTelegram,
  FaGlobeAsia,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (
      formData.phone.trim().length <= 9 ||
      formData.phone.trim().length > 16
    ) {
      newErrors.phone = "Enter a valid phone number (11–16 digits)";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("Form Submitted with values:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setErrors({});
  };

  return (
    <>
      <ContactContainer>
        <div className="imageContainer">{/* Banner content */}</div>
      </ContactContainer>

      <ContactUsFormContainer>
        <div>
          <h3>Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <div className="input-grid">
              <div className="form-group">
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="error-text">{errors.name}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Your email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone or WhatsApp"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="error-text">{errors.phone}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your message</label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <p className="error-text">{errors.message}</p>}
            </div>

            <div className="buttonDiv">
              <button type="submit">Submit</button>
            </div>
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
              <h3>Info Location</h3>
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
              <div>
                <h3>Find Us</h3>
              </div>
              <div className="social-icon-container">
                <div className="SocialIcons facebook">
                  <FaFacebookF className="Icons" />
                </div>
                <div className="SocialIcons twitter">
                  <FaTwitter className="Icons" />
                </div>
                <div className="SocialIcons whatsapp">
                  <FaWhatsapp className="Icons" />
                </div>
                <div className="SocialIcons telegram">
                  <FaTelegram className="Icons" />
                </div>
                <div className="SocialIcons linkedin">
                  <FaLinkedin className="Icons" />
                </div>
              </div>
            </SocialIconDiv>
          </InfoSection>
        </div>
      </ContactUsFormContainer>
    </>
  );
}

export default Contact;
