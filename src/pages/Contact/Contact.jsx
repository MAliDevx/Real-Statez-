// Contact.jsx
import React, { useState } from "react";
import { StyledContactPage,StyledSocialContainer } from "./ContactStyle";
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
import contectUsImage from "../../assets/Images/istockphoto-1498811925-612x612.jpg";

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

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(formData.email)) {
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
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log("Submitted:", formData);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setErrors({});
  };

  return (
    <>
    <StyledContactPage>
      {/* <div className="contact-container">
        <div className="imageContainer">
          <h2>Contact Us</h2>
        </div>
      </div> */}

      <div className="mainheading-div">
        <h1>Get in Touch</h1>
      </div>

      <div className="contact-form-container">
        <div className="image-container">
          <img src={contectUsImage} alt="image is here" />
        </div>
        {/* <div>
          <form onSubmit={handleSubmit}>
            <div className="input-grid">
              <div className="form-group">
                <label htmlFor="name">Your name</label>
                <input
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />
                {errors.name && <p className="error-text">{errors.name}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Your email</label>
                <input
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                />
                {errors.phone && <p className="error-text">{errors.phone}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
              />
              {errors.message && (
                <p className="error-text">{errors.message}</p>
              )}
            </div>
            <div className="buttonDiv">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div> */}

        <div className="info-section">
          <div>
            <h3>Open Hours</h3>
            <div className="info-box">
              <div className="info-item">
                <span>Monday - Friday</span>
                <span>09 AM - 19 PM</span>
              </div>
              <div className="info-item">
                <span>Saturday</span>
                <span>09 AM - 14 PM</span>
              </div>
              <div className="info-item">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          <div>
            <h3>Info Location</h3>
            <div className="info-box">
              <div className="location-item">
                <div className="IconsBox">
                  <IoHome className="Icons" />
                </div>
                <span>PO Box 16122, Collins Street West, Australia</span>
              </div>
              <div className="location-item">
                <div className="IconsBox">
                  <IoCall className="Icons" />
                </div>
                <span>(+12) 34567 890 123</span>
              </div>
              <div className="location-item">
                <div className="IconsBox">
                  <FaEnvelope className="Icons" />
                </div>
                <span>mail@example.com</span>
              </div>
              <div className="location-item">
                <div className="IconsBox">
                  <FaGlobeAsia className="Icons" />
                </div>
                <span>www.yourdomain.com</span>
              </div>
              <div className="location-item">
                <div className="IconsBox">
                  <FaWhatsapp className="Icons" />
                </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
  <span>+923263669053</span>
  <a
    href="https://wa.me/923263669053"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-btn"
  >
    Open WhatsApp
  </a>
</div>

              </div>
            </div>
          </div>

      <StyledSocialContainer>
  <h3>Find Us</h3>
  <div className="social-icon-container">
    <div className="SocialIcons facebook">
      <FaFacebookF />
    </div>
    <div className="SocialIcons twitter">
      <FaTwitter />
    </div>
    <div className="SocialIcons whatsapp">
      <FaWhatsapp />
    </div>
    <div className="SocialIcons telegram">
      <FaTelegram />
    </div>
    <div className="SocialIcons linkedin">
      <FaLinkedin />
    </div>
  </div>
</StyledSocialContainer>
        </div>
      </div>
    </StyledContactPage>
        </>

  );
}

export default Contact;
