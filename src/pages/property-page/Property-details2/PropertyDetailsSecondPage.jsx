import React, { useState, useEffect } from 'react';
import { PropertDetailsSecondPage,FilteredContent,RequestQuotes,InnerContainer } from "./PropertyDetailsStyleSecondPage";
import { IoLocationSharp, } from "react-icons/io5";
import {CarouselWrapper,
  Card,
  CardImg,
  CardBodyTop,
  CardBodyBottom,
  Button
 } from '../../../styles/CommanClasses';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaLocationDot } from "react-icons/fa6";
import { FaBath, FaBed, FaInbox , FaMap,FaBuilding ,FaAmbulance ,FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import PropertyCard from "../../../components/shared/cards/Cards";
import { CardJSON } from '../../../healpers/Card-json';
  const education = [
    {
      name: "Eladia's Kids",
      distance: "2.5 km"
    },
    {
      name: "Brooklyn Brainery",
      distance: "3.5 km"
    },
    {
      name: "Wikdom Senior High Scool",
      distance: "2.5 km"
    }
  ]
  const health_and_medical = [
    {
      name: "Eladia's Kids",
      distance: "2.5 km"
    },
    {
      name: "Brooklyn Brainery",
      distance: "3.5 km"
    },
    {
      name: "Wikdom Senior High Scool",
      distance: "2.5 km"
    }
  ]

 

const SecondSinglePropertyDetail = ({ViewProperty}) => {
    const navigate = useNavigate()
     const [showCard, setCard] = useState(3);
     const [propertyData, setpropertyData] = useState([]);
     const [isError, setIsError] = useState(false);
     const [nearBy, setNearBy] = useState([])
     
const fetchData = async () => {
  try{
  const data = await ViewProperty();   
  const similarPropertise = data.similarProperties
  setNearBy(data.property)
  setpropertyData(similarPropertise)
  setIsError(false)
  console.log("similarProperties", similarPropertise); 
  }catch(error){
   setProperties([CardJSON, CardJSON, CardJSON]);
   setIsError(true);
  }
};

useEffect(() => {
  fetchData()
  const updateCardCount = () => {
    const width = window.innerWidth;

    if (width <= 480) {
      setCard(1);
    } else if (width <= 768) {
      setCard(2);
    } else {
      setCard(3);
    }
  };

  updateCardCount(); 
  window.addEventListener("resize", updateCardCount); 

  return () => window.removeEventListener("resize", updateCardCount);
}, [])


const lat = propertyData?.location?.coordinates?.lat;
const lng = propertyData?.location?.coordinates?.long;

const embedMapUrl = `https://www.google.com/maps?q=${lat},${lng}&hl=es;&output=embed`;



  return (
    <PropertDetailsSecondPage>
<InnerContainer>

<h2 className="location-heading">Location</h2>
      <iframe
        src={embedMapUrl}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

<div className="education-facilities">
  <h2>What's Nearby</h2>
  {nearBy.nearby  && (
  <div className="facilities-container">
      <div className="facilities-box">
      <div className="facilities-heading">
        <FaBuilding />
        <h3>Education</h3>
      </div>
    {nearBy.nearby[0]?.places.map((item, index) => (
      <div className="facilities-list" key={index}>
        <div className="name">{item.name}</div>
        <div className="location">
          <IoLocationSharp /> {item.distanceKm} km
        </div>
      </div>
    ))}
    </div>
   

    <div className="facilities-box">
      <div className="facilities-heading">
        <FaAmbulance  />
        <h3>Health & Medical</h3>
      </div>
          {nearBy.nearby[1]?.places.map((item, index) => (
      <div className="facilities-list" key={index}>
        <div className="name">{item.name}</div>
        <div className="location">
          <IoLocationSharp /> {item.distanceKm} km
        </div>
      </div>
    ))}
    </div>

  </div>
  )}
</div>
<FilteredContent >
<h2>Similar Properties</h2>
<CarouselWrapper style={{width:'100%'}}>
      <Swiper
     modules={[Pagination, Autoplay]}
  slidesPerView={showCard}          
  slidesPerGroup={2}        
  spaceBetween={20}
  loop={true}
  autoplay={{ delay: 6000 }}
  pagination={{ clickable: true }}
      >
            {propertyData === 0 ? (
  <p>No cards found.</p>
) : (
            propertyData?.map((item, idx) => (
              <SwiperSlide key={idx}>
                <PropertyCard item={item} isError={isError} />
                
              </SwiperSlide>
            ))
)}
      </Swiper>
    </CarouselWrapper>
</FilteredContent>

</InnerContainer>

    

<RequestQuotes>
        <div className="innerContainer">
          <div className="leftSide">
            <h1>Looking To Sell Or Rent Your Property?</h1>
            <p>We Will Assist You In The Best And Comfortable Property Services For You </p>
          </div>
          <div className="rightSide">
            <Button style={{background:`var(--background-light-gray)`, color:'black', textTransform:'uppercase', fontSize:'13px', fontWeight:'600'}}>Request A Quote <FaChevronRight style={{fontSize:'11px',marginLeft:'10px'}} /></Button>
          </div>
        </div>
      </RequestQuotes>
      </PropertDetailsSecondPage>
  );
};

export default SecondSinglePropertyDetail;
