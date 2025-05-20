import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { SwiperStyles, PropertDetails,InnerBox } from "./propertyDetailsStyle";
import { FaExchangeAlt, FaPrint } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { Button } from "../../styles/commanClasses";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import SecondSinglePropertyDetail from "../PropertyDetailsSecondPage/PropertyDetailsSecondPage";

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
  const fullText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ab, quisquam debitis magni cum itaque libero odio praesentium possimus unde accusamus? At eius, laudantium in, nam quo soluta maiores molestias commodi quod similique distinctio quia temporibus cupiditate? Neque nesciunt numquam laboriosam eligendi vero voluptas modi a ipsum illum exercitationem, cumque fugit totam eos quidem! Qui blanditiis corrupti aperiam asperiores. A animi provident beatae? In accusantium tempore quia deleniti explicabo? Reiciendis, in. Reiciendis natus quod nisi doloremque odio adipisci eaque quaerat inventore quisquam perspiciatis, at fugiat nesciunt doloribus debitis ullam voluptas illo accusamus mollitia vero, vitae nihil minus cum. Sapiente quos voluptatem, consequatur aspernatur est consequuntur atque non dignissimos veritatis id minus repudiandae nemo soluta? Harum assumenda dignissimos quia animi! Commodi veniam unde dignissimos ad perspiciatis veritatis, cum ut? Fuga id inventore odit, fugit, libero placeat, consectetur ipsam nobis fugiat voluptatem neque. Quia at facilis fuga in tenetur enim minus corrupti, asperiores quaerat reprehenderit exercitationem nulla ratione nemo nostrum necessitatibus, reiciendis qui quo, perspiciatis porro voluptates optio laboriosam provident ut. Fuga incidunt maiores ad necessitatibus harum soluta repellendus officia ab expedita at perspiciatis quos, iure consequatur sapiente libero ipsum! Officiis minus aut corporis hic quis nihil, ducimus similique earum fuga voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci totam assumenda dolorem laudantium? Debitis cupiditate aspernatur nam praesentium commodi repellat dolore? Reiciendis, sit distinctio. Voluptatem excepturi id quos numquam officia! Placeat, omnis iste, consequatur beatae corrupti commodi suscipit modi at, ullam quod accusamus atque maxime soluta? Aut, delectus eveniet?`;
  const videoId = "Y9XdoRTwBPg";
  const [showFull, setShowFull] = useState(false);

  const toggleText = () => {
    setShowFull(!showFull);
  };

  const [openIndexes, setOpenIndex] = useState([]);

  const handleDropDown = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const getTrimmedText = (text, wordCount = 100) => {
    const words = text.split(" ");
    return words.slice(0, wordCount).join(" ") + "...";
  };

  return (
    <>
      <SwiperStyles />
      <PropertDetails>
      <InnerBox>
        <div className="propertHeading">
          <div className="innerContainer">
            <div className="left-side">
              <h2>Luxury Family Home</h2>
              <p>166 welling street, collingwood, vic 3066</p>
            </div>
            <div className="right-side">
              <h2>$13.000/mo</h2>
              <div className="icons">
                <FaExchangeAlt />
                <FaPrint />
                <MdOutlineFavorite />
              </div>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop={true}
          autoplay={{ delay: 2500 }}
          className="mySwiper"
          style={{ height: "93vh" }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  position: "relative",
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "100%",
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="property-details-container">
          <div className="description">
            <h2>Description</h2>
            <div className="description-text">
              <p>{showFull ? fullText : getTrimmedText(fullText, 150)}</p>
              <Button className="Show-more" onClick={toggleText}>
                {showFull ? "Show Less" : "Show More"}
              </Button>
            </div>
            <div className="details-container">
  {/* Property Details Box */}
  <div className="box" style={{ flex: 1 }}>
    <h2>Property Details</h2>
    <div className="property-details">
      <div className="right-side-details">
        <div className="detail-item"><span className="detail-label">Property ID:</span><span className="detail-value">RV151</span></div>
        <div className="detail-item"><span className="detail-label">Price:</span><span className="detail-value price">$484,400</span></div>
        <div className="detail-item"><span className="detail-label">Property Size:</span><span className="detail-value">1466 Sq Ft</span></div>
        <div className="detail-item"><span className="detail-label">Bedrooms:</span><span className="detail-value">4</span></div>
        <div className="detail-item"><span className="detail-label">Bathrooms:</span><span className="detail-value">2</span></div>
      </div>
      <div className="left-side-details">
        <div className="detail-item"><span className="detail-label">Garage:</span><span className="detail-value">1</span></div>
        <div className="detail-item"><span className="detail-label">Garage Size:</span><span className="detail-value">458 SqFt</span></div>
        <div className="detail-item"><span className="detail-label">Year Built:</span><span className="detail-value">2019-01-09</span></div>
        <div className="detail-item"><span className="detail-label">Property Type:</span><span className="detail-value">Full Family Home</span></div>
        <div className="detail-item"><span className="detail-label">Property Status:</span><span className="detail-value">For rent</span></div>
      </div>
    </div>
  </div>

  {/* Features Box */}
  <div className="box" style={{ flex: 1 }}>
    <h2 >Features</h2>
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
                      {openIndexes === index ? <FaAngleUp /> : <FaAngleDown />}
                    </p>
                  </div>

                  {openIndexes === index && (
                    <div className="floor-details-wrapper">
                      <img src={floor.img} alt="" style={{ width: "100%", height:'70vh' }} />
                      <p>{floor.details}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <h2>Property Video </h2>
            <div
              className="video-container"
              style={{ position: "relative", width: "100%"}}
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
                <div
 className="video-button"
                >
                  ▶
                </div>
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
