import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  SwiperStyles,
  PropertDetails,
  InnerBox,
  SliderContainer,
} from "./PropertyDetailsStyle";
import { FaExchangeAlt, FaPrint } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { Button } from "../../../styles/CommanClasses";
import { FaAngleDown, FaAngleUp, FaLocationDot } from "react-icons/fa6";
import SecondSinglePropertyDetail from "../Property-details2/propertyDetailsSecondPage";
import { useParams } from "react-router-dom";
import { useUserContext } from "../../../context/UserContext";

import {
  FaBath,
  FaBed,
  FaInbox,
  FaMap,
  FaRegHeart,
  FaHeart,
  FaTrashAlt,
} from "react-icons/fa";
import API from "../../../api/axios";

const slides = [
  {
    image: "https://wallsproperty.netlify.app/images/bg.jpg",
  },
  {
    image: "https://wallsproperty.netlify.app/images/bg15.jpg",
  },
  {
    image: "https://wallsproperty.netlify.app/images/bg19.jpg",
  },
];
const features = {
  features: [
    { name: "Air Conditioning" },
    { name: "Swimming Pool" },
    { name: "Central Heating" },
    { name: "Pets Allow" },
    { name: "Alarm" },
    { name: "Gym" },
    { name: "Window Covering" },
    { name: "Free WiFi" },
    { name: "Car Parking" },
    { name: "Sp & Massage " },
  ],
};
const floors = [
  {
    name: "1st Floor",
    size: "29 sqt",
    details:
      "Details for 1st Floor laboriosam eligendi vero voluptas modi a ipsum illum exercitationem, ",
    img: `	https://wallsproperty.netlify.app/images/floorplan.jpg`,
  },
  {
    name: "2nd Floor",
    size: "29 sqt",
    details:
      "Details for 2nd Floor laboriosam eligendi vero voluptas modi a ipsum illum exercitationem, ",
    img: `	https://wallsproperty.netlify.app/images/floorplan2.jpg`,
  },
  {
    name: "3rd Floor",
    size: "29 sqt",
    details:
      "Details for 3rd Floorlaboriosam eligendi vero voluptas modi a ipsum illum exercitationem, ",
    img: `https://wallsproperty.netlify.app/images/floorplan3.jpg`,
  },
];

const SinglePropertyDetail = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoId = "Y9XdoRTwBPg";
  const [showFull, setShowFull] = useState(false);
  const { id } = useParams();
  const { viewSingleProperty } = useUserContext();
  const [property, setProperties] = useState([]);
  const [isError, setIsError] = useState(false);
  const [images, setImages] = useState([]);

  const handleSlideChange = (swiper) => {
    console.log(swiper)
    setCurrentIndex(swiper.realIndex||0);
  };

  let currentSlide = images[currentIndex];
  let baseUrl = API.defaults.baseURL;
  const nextSlide = images[currentIndex + 1];


  useEffect(() => {
    const ViewProperty = async () => {
      try {
        const data = await viewSingleProperty(id);
        console.log("data", data);

        setProperties(data);
        setImages(data.images);
        setIsError(false);
      } catch {
        setProperties([CardJSON, CardJSON, CardJSON]);
        setIsError(true);
      }
    };
    ViewProperty();
  }, []);

  useEffect(() => {}, [property]);
  useEffect(() => {
    console.log("Updated images here ", images);
  }, [images]);

  const toggleText = () => {
    setShowFull(!showFull);
  };

  const [openIndexes, setOpenIndex] = useState([]);

  const handleDropDown = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const getTrimmedText = (text, wordCount = 100) => {
    // const words = text?.split(" ");
    // return words.slice(0, wordCount).join(" ") + "...";
  };
  const price = property.price || 0;
  const discount = property.discount || 0;

  const discountedPrice = price - (price * discount) / 100;
  return (
    <>
      <SwiperStyles />
      <PropertDetails>
        <InnerBox>
          <h1>Single Property Detail</h1>
          <SliderContainer>
            {images.length > 0 && (

            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              loop={true}
              autoplay={{ delay: 2500 }}
              className="mySwiper slider-left"
              onSlideChange={handleSlideChange}
            >
              {images.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div
                    style={{
                      backgroundImage: `url(${baseUrl}${slide})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  ></div>
                </SwiperSlide>
              ))}
            </Swiper>
)}

            <div className="slider-right">
              <div className="top-box">
                <div
                  className="preview-image"
                  style={{
                    backgroundImage: `url(${baseUrl}${nextSlide})`,
                  }}
                ></div>
              </div>

              <div className="bottom-box">
                <div
                  className="first-image"
                  style={{
                    backgroundImage: `url(${baseUrl}${currentSlide})`,
                  }}
                >
                  <div className="overlay-text">
                    {currentIndex + 1} / {slides.length}
                  </div>
                </div>
              </div>
            </div>
          </SliderContainer>
          <div className="propertyHeader">
            <div className="headerContainer">
              <div className="leftSection">
                <h2 className="name">{property.name || "--"}</h2>
                <div className="price">
                  <div className="price-after-discount">
                    ${discountedPrice.toFixed(2)}
                  </div>
                  <div className="actual-price">
                    <span className="discount">{property.discount}% OFF</span>
                    <span className="original-price">${price.toFixed(2)}</span>
                  </div>
                </div>

                <p className="address">
                  <FaLocationDot />
                  <span>{property.fullAddress || "-- -- --"}</span>
                </p>
                <div className="features">
                  <span className="feature">
                    <FaBed className="property-icon" />
                    {property.bedrooms || "0"} Beds
                  </span>
                  <span className="feature">
                    <FaBath className="property-icon" />
                    {property.bathrooms || "0"} Baths
                  </span>
                  <span className="feature">
                    <FaInbox className="property-icon" />
                    {property.rooms || "00"} rooms
                  </span>
                  <span className="feature">
                    <FaMap className="property-icon" />
                    {property.area || "00"} Sq Ft
                  </span>
                  <span
                    className={`status-badge ${
                      property.status?.toLowerCase() || "available"
                    }`}
                  >
                    {property.status || "--"}
                  </span>

                  {property.status == "available" && (
                    <span
                      className={`purpose-badge ${
                        property.purpose?.toLowerCase() || "rent"
                      }`}
                    >
                      For {property.purpose || "--"}
                    </span>
                  )}
                </div>
              </div>
              {/* ,
  ,
  FaInbox,
  FaMap,
  FaRegHeart,
  FaHeart,
  FaTrashAlt, */}
              <div className="rightSection">
                {/* <button className="purchaseButton">Purchase this Property</button> */}
                <div className="actionIcons">
                  {/* <FaExchangeAlt className="icon" />
        <FaPrint className="icon" /> */}
                  <FaRegHeart className="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="property-details-container">
            <div className="description">
              <h2>Description</h2>
              <div className="description-text">
                <p>
                  {property.description
                    ? property.description
                    : getTrimmedText(property.description, 150)}
                </p>
                {/* <Button className="Show-more" onClick={toggleText}>
                {property.description ? "Show Less" : "Show More"}
              </Button> */}
              </div>
              <div className="details-container">
                <div className="box" style={{ flex: 1 }}>
                  <h2>Property Details</h2>
                  <div className="property-details">
                    <div className="right-side-details">
                      <div className="detail-item">
                        <span className="detail-label">Property ID:</span>
                        <span className="detail-value">RV151</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Price:</span>
                        <span className="detail-value price">
                          ${property.price}
                        </span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Property Size:</span>
                        <span className="detail-value">
                          {property.area} Sq Ft
                        </span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Bedrooms:</span>
                        <span className="detail-value">
                          {property.bedrooms}
                        </span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Bathrooms:</span>
                        <span className="detail-value">
                          {property.bathrooms}
                        </span>
                      </div>
                    </div>
                    <div className="left-side-details">
                      <div className="detail-item">
                        <span className="detail-label">Garage:</span>
                        <span className="detail-value">1</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Garage Size:</span>
                        <span className="detail-value">458 SqFt</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Year Built:</span>
                        <span className="detail-value">2019-01-09</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Property Type:</span>
                        <span className="detail-value">
                          {property.propertyType}
                        </span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Property Status:</span>
                        <span className="detail-value">{property.status}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="box" style={{ flex: 1 }}>
                  <h2>Features</h2>
                  <div className="propert-features">
                    {features.features.map((amenity, index) => (
                      <div className="features-item" key={index}>
                        <label className="custom-checkbox">
                          <input type="checkbox" checked="true" readOnly />
                          <span className="checkmark"></span>
                          {amenity.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <h2>Floors</h2>
              <div className="floor-features">
                {floors.map((floor, index) => (
                  <div key={index}>
                    <div
                      className={`floor-drop-downs ${
                        openIndexes === index ? "active" : ""
                      }`}
                      onClick={() => handleDropDown(index)}
                      style={{ cursor: "pointer" }}
                    >
                      <p>
                        <span className="floor-name">{floor.name}</span>{" "}
                        <span className="floor-size">{floor.size}</span>
                      </p>
                      <p>
                        {openIndexes === index ? (
                          <FaAngleUp />
                        ) : (
                          <FaAngleDown />
                        )}
                      </p>
                    </div>

                    {openIndexes === index && (
                      <div className="floor-details-wrapper">
                        <img
                          src={floor.img}
                          alt=""
                          style={{ width: "100%", height: "70vh" }}
                        />
                        <p>{floor.details}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <h2>Property Video </h2>
              <div
                className="video-container"
                style={{ position: "relative", width: "100%" }}
              >
                <a
                  href={`https://www.youtube.com/watch?v=${videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    alt="Video thumbnail"
                    style={{ width: "100%", cursor: "pointer" }}
                  />
                  <div className="video-button">▶</div>
                </a>
              </div>
            </div>
          </div>
        </InnerBox>
        <SecondSinglePropertyDetail />
      </PropertDetails>
    </>
  );
};

export default SinglePropertyDetail;
