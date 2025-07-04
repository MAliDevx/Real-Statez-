import React, { useState, useEffect, useRef } from "react";
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
import { useUserContext } from "../../../Context/UserContext";
import {useNavigate } from "react-router-dom";


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
  const [showFull, setShowFull] = useState(false);
  const { id } = useParams();
  const { viewSingleProperty } = useUserContext();
  const [property, setProperties] = useState([]);
  const [isError, setIsError] = useState(false);
  const [images, setImages] = useState([]);
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    if (videoRef.current && property.video) {
      videoRef.current.muted = true; 
      const playPromise = videoRef.current.pause();

      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(error => {
            console.log("Autoplay prevented:", error);
            setIsPlaying(false);
          });
      }
    }
  }, [property.video]);
  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex || 0);
  };

  let currentSlide = images[currentIndex];
  let baseUrl = API.defaults.baseURL;
  const nextSlide = images[currentIndex + 1];

  const ViewProperty = async () => {
    try {
      const data = await viewSingleProperty(id);

      setProperties(data.property);
      setImages(data.property.images);
      setIsError(false);
      return data
        ;
    } catch {
      set
      setProperties([CardJSON, CardJSON, CardJSON]);
      setIsError(true);
      return null;
    }
  };
  useEffect(() => {

    ViewProperty();
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => { }, [property]);
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

  const getTrimmedText = (text = "", wordCount = 100) => {
    const words = text.split(" ");
    return words.length > wordCount
      ? words.slice(0, wordCount).join(" ") + "..."
      : text;
  };

  const price = property.price || 0;
  const discount = property.discount || 0;

  const discountedPrice = price - (price * discount) / 100;
  return (
    <>
      <SwiperStyles />
      <PropertDetails>
        <InnerBox>
          <h2>Single Property Detail</h2>
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
                {images?.map((slide, index) => (
                  
                  <SwiperSlide key={index}>
                    <div
                      style={{
                        backgroundImage: `url(${baseUrl}/public/${slide})`,
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
                    backgroundImage: `url(${baseUrl}/public/${nextSlide})`,
                  }}
                ></div>
              </div>

              <div className="bottom-box">
                <div
                  className="first-image"
                  style={{
                    backgroundImage: `url(${baseUrl}/public/${currentSlide})`,
                  }}
                >
                  <div className="overlay-text">
                    {currentIndex + 1} / {images.length}
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
                    className={`status-badge ${property.status?.toLowerCase() || "available"
                      }`}
                  >
                    {property.status || "--"}
                  </span>

                  {property.status == "available" && (
                    <span
                      className={`purpose-badge ${property.purpose?.toLowerCase() || "rent"
                        }`}
                    >
                      For {property.purpose || "--"}
                    </span>
                  )}
                </div>
              </div>

              <div className="rightSection">
                {/* <button className="purchaseButton">Purchase this Property</button> */}
                <div className="actionIcons">
                  {/* <FaExchangeAlt className="icon" />
        <FaPrint className="icon" /> */}
                  {/* <FaRegHeart className="icon" /> */}
                  <FaHeart style={{color:'red'}} className="icon" />
                </div>
              </div>
            </div>
<div>
  {property.agents && property.agents.length > 0 ? (
    <div className="agent-section">
      <h2 className="agent-heading">Meet Our Agents</h2>
      <p className="agent-subtext">
        Contact our agents for more details and personalized assistance.
      </p>

      {property.agents.map((data, index) => (
        <div className="profile-image-container" key={index}>
          <div className="profile-right-side">
            <img
              src={`${API.defaults.baseURL}/public/${data.image}`}
              className="profile-image"
              alt="img"
            />
            <div className="userDetails">
              <p className="userName">{data.name}</p>
              <p className="userEmail">{data.phone}</p>
            </div>
          </div>

          <div className="profile-left-side">
            <button
              className="view-agent-btn"
              onClick={() => navigate(`/agent-detail/${data._id}`)}
            >
              View Agent
            </button>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p>No Agent Found Due To some Reason</p>
  )}
</div>


          </div>
          <div className="property-details-container">
            <div className="description">
              <h2>Description</h2>
              <div className="description-text">
                <p>
                  {showFull
                    ? property.description || "No description available"
                    : getTrimmedText(property.description || "", 50)}
                </p>

                {property.description?.length === 100 && (
                  <Button className="Show-more" onClick={toggleText}>
                    {showFull ? "Show Less" : "Show More"}
                  </Button>
                )}

              </div>
              <div className="details-container">
                <div className="box" style={{ flex: 1 }}>
                  <h2>Features</h2>
                  <div className="propert-features">
                    {property?.facilities?.map((facility, index) => (
                      <div className="features-item" key={index}>
                        <label className="custom-checkbox">
                          <input type="checkbox" checked={true} readOnly />
                          <span className="checkmark"></span>
                          {facility}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="box" style={{ flex: 1 }}>
                  <h2>Amenities</h2>
                  <div className="propert-features">
                    {property?.amenities?.map((amenity, index) => (
                      <div className="features-item" key={index}>
                        <label className="custom-checkbox">
                          <input type="checkbox" checked={true} readOnly />
                          <span className="checkmark"></span>
                          {amenity}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* This page definately add in future with the floor pricing of a appartment no one remove this code please  */}
{/* 
              <h2>Floors</h2>
              {floors.map((floor, index) => (
                <div key={index}>
                  <div
                    className={`floor-drop-downs ${openIndexes === index ? "active" : ""}`}
                    onClick={() => handleDropDown(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <p>
                      <span className="floor-name">{floor.name}</span>{" "}
                      <span className="floor-size">{floor.size}</span>
                    </p>
                    <p>{openIndexes === index ? <FaAngleUp /> : <FaAngleDown />}</p>
                  </div>

                  {openIndexes === index && (
                    <div className="floor-details">
                      <p>{floor.details}</p>
                      <img
                        src={floor.img}
                        alt={floor.name}
                        style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
                      />
                    </div>
                  )}
                </div>
              ))} */}

              {/* here is it being end  */}

              <h2>Property Video </h2>
              <div className="video-container">
                {property.video ? (
                  <div className="video-wrapper">
                    <video
                      ref={videoRef}
                      width="100%"
                      controls
                      muted
                      playsInline
                      poster={`${API.defaults.baseURL}/public/${property.thumbnail}`}
                      onError={() => setVideoError(true)}
                    >
                      <source src={`${baseUrl}${property.video}`} type="video/webm" />
                    </video>


                    {videoError && (
                      <div className="video-error">
                        <p>Video failed to load. <a href={`${API.defaults.baseURL}/public/${property.video}`} target="_blank" rel="noopener noreferrer">open Video</a></p>
                      </div>
                    )}
                  </div>
                ) : (
                  <p>No video available for this property</p>
                )}
              </div>
            </div>
          </div>
        </InnerBox>
        <SecondSinglePropertyDetail ViewProperty={ViewProperty} />
      </PropertDetails>
    </>
  );
};

export default SinglePropertyDetail;
