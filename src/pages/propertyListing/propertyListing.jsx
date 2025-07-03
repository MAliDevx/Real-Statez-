import React, { useState } from "react";
import {
  PropertyListingContainer,
  PropertyFilterdiv,
  Filterbox,
  StyledSelectBox,
  ListConatiner,
  GridContainer
} from "./propertyListingStyle";

import {
  FilterContainer,
  FilterRow,
  StyledSelect,
  PriceRange,
  PriceValues,
  SearchButton,
  OuterContainer,
} from "../PropertiseService/propertyStyle";
import { 
  Card,
  CardImg,
  CardBodyTop,
  CardBodyBottom
 } from '../../styles/commanClasses';
import {
  FaPaperPlane,
  FaHome,
  FaSearch,
  FaBath,
  FaBed,
  FaInbox,
  FaMap,
  FaThList, FaMapMarkerAlt,
} from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { MdLocationOn } from "react-icons/md";
import {
  CardContainer,
  ImageContainer,
  SoldOutRibbon,
  InfoSection,
  Tag,
  AgentTitle,
  Location,
  DetailRow,
  RightSection,
  AgentCircle,
  AgentName,
  Price,
} from "../SingleAgentDetail/SingleAgentDetailStyle";
import {useNavigate } from "react-router-dom";
const PropertyListing = () => {
  const navigate = useNavigate()
  const [priceRangeValue, setPriceRange] = useState([2000, 6000]);
  const [activeView, setActiveView] = useState("grid");

  const statusOptions = [
    { value: "for-sale", label: "For Sale" },
    { value: "for-rent", label: "For Rent" },
  ];
  const typeOptions = [
    { value: "house", label: "House" },
    { value: "apartment", label: "Apartment" },
    { value: "villa", label: "Villa" },
  ];
  const areaOptions = [
    { value: "500", label: "500 sqft" },
    { value: "1000", label: "1000 sqft" },
    { value: "1500", label: "1500 sqft" },
  ];
  const locationOptions = [
    { value: "ny", label: "New York" },
    { value: "la", label: "Los Angeles" },
    { value: "chi", label: "Chicago" },
  ];
  const bedroomOptions = [
    { value: "1", label: "1 Bedroom" },
    { value: "2", label: "2 Bedrooms" },
    { value: "3", label: "3 Bedrooms" },
  ];
  const bathroomOptions = [
    { value: "1", label: "1 Bathroom" },
    { value: "2", label: "2 Bathrooms" },
    { value: "3", label: "3 Bathrooms" },
  ];

  const listings = [
    {
      image: "https://wallsproperty.netlify.app/images/gallery17.jpg",
      name: "Modern Villa",
      location: "Los Angeles, CA",
      rooms: 4,
      bedRooms: 4,
      baths: 3,
      Area: "43 Sq Ft",
      ownerName: "Alice Johnson",
      price: "$3,300",
    },
    {
      image: "https://wallsproperty.netlify.app/images/gallery17.jpg",
      name: "Modern Villa",
      location: "Los Angeles, CA",
      rooms: 4,
      bedRooms: 4,
      baths: 3,
      Area: "43 Sq Ft",
      ownerName: "Alice Johnson",
      price: "$3,300",
    },
    {
      image: "https://wallsproperty.netlify.app/images/gallery17.jpg",
      name: "Modern Villa",
      location: "Los Angeles, CA",
      rooms: 4,
      bedRooms: 4,
      baths: 3,
      Area: "43 Sq Ft",
      ownerName: "Alice Johnson",
      price: "$3,300",
    },
    {
      image: "https://wallsproperty.netlify.app/images/gallery17.jpg",
      name: "Modern Villa",
      location: "Los Angeles, CA",
      rooms: 4,
      bedRooms: 4,
      baths: 3,
      Area: "43 Sq Ft",
      ownerName: "Alice Johnson",
      price: "$3,300",
    },
    {
      image: "https://wallsproperty.netlify.app/images/gallery17.jpg",
      name: "Modern Villa",
      location: "Los Angeles, CA",
      rooms: 4,
      bedRooms: 4,
      baths: 3,
      Area: "43 Sq Ft",
      ownerName: "Alice Johnson",
      price: "$3,300",
    },
    {
      image: "https://wallsproperty.netlify.app/images/gallery17.jpg",
      name: "Modern Villa",
      location: "Los Angeles, CA",
      rooms: 4,
      bedRooms: 4,
      baths: 3,
      Area: "43 Sq Ft",
      ownerName: "Alice Johnson",
      price: "$3,300",
    },
    //... other listings
  ];

  return (
    <PropertyListingContainer>
      <div className="property-heading-box">
        <div className="propertyname-heading">
          <FaHome id="homeIcon" />
          <IoIosArrowForward />
          <span id="property">Property</span>
          <IoIosArrowForward />
          <span id="housetype">Luxury family home</span>
        </div>
      </div>

      <OuterContainer style={{top:'45px'}}>
        <FilterContainer style={{ boxShadow:'0 0 0px rgba(0, 0, 0, 0.2)'}}>
          <FilterRow>
            <StyledSelect
              options={statusOptions}
              placeholder="Property Status"
            />
            <StyledSelect options={typeOptions} placeholder="Property Type" />
            <StyledSelect options={areaOptions} placeholder="Area From" />
            <StyledSelect options={locationOptions} placeholder="Locations" />
          </FilterRow>
          <FilterRow>
            <StyledSelect options={bedroomOptions} placeholder="Bedrooms" />
            <StyledSelect options={bathroomOptions} placeholder="Bathrooms" />
            <PriceRange>
              <label>Price Range:</label>
              <Slider
                range
                min={1000}
                max={10000}
                step={500}
                defaultValue={priceRangeValue}
                onChange={(value) => setPriceRange(value)}
              />
              <PriceValues>
                <span>${priceRangeValue[0]}</span> -{" "}
                <span>${priceRangeValue[1]}</span>
              </PriceValues>
            </PriceRange>
            <SearchButton>
              <FaSearch /> Search
            </SearchButton>
          </FilterRow>
        </FilterContainer>
      </OuterContainer>

      <PropertyFilterdiv>
        <div className="filter-container">
          <span>Sort by</span>
          <Filterbox>
            <StyledSelectBox
              options={statusOptions}
              placeholder="Property Status"
              styles={{
                control: (base) => ({
                  ...base,
                  border: "none",
                  boxShadow: "none",
                }),
              }}
            />
          </Filterbox>
        </div>
       <div className="icon-container">
  <FaThList
    className={`icons list-icon ${activeView === "list" ? "active" : ""}`}
    onClick={() => setActiveView("list")}
  />
  <IoGridSharp
    className={`icons ${activeView === "grid" ? "active" : ""}`}
    onClick={() => setActiveView("grid")}
  />
</div>

      </PropertyFilterdiv>
      {/* Conditional rendering based on activeView */}
      {activeView === "grid" && (
        <GridContainer >
                    


        {listings.map((item, idx) => (
<Card onClick={() => navigate(`/propertydetails/${item.id}`)}>
          <button className='property-feature'>Featured</button>
              <button className='isForSale'>For Sale</button>
              <CardImg src={item.image} alt={item.name} />
              <CardBodyTop>
                <button className="isHouse">House</button>
                <h4 className='property-name'>{item.name}</h4>
                <p className='property-location'><MdLocationOn /> {item.location}</p>
              </CardBodyTop>
              <CardBodyBottom>
                <div className="bath-box">
                <div> Baths</div> <div className='bottom-box'><FaBath /> {item.baths}</div>
                </div>
                <div className="beds-box">
                <div> Beds</div> <div className='bottom-box'><FaBed />{item.bedRooms}</div>
                </div>
                <div className="room-box">
                <div> Rooms</div> <div className='bottom-box'><FaInbox  />{item.rooms}</div>
                </div>
                <div className="area-box">
                <div> Area</div> <div className='bottom-box'><FaMap />{item.Area}</div>
                </div>



              </CardBodyBottom>
        <div className="property-profile">
          <div className="property-profile__info">
            <figure>
              <img
                src={`${API.defaults.baseURL}/public/${item.agencyImage}`}
                alt="Owner"
                className="property-profile__image"
              />
            </figure>
            <p className="property-profile__name">{item?.agencyName}</p>
          </div>
          <div className="property-profile__price">{item?.price}.00</div>
        </div>
            </Card>
        ))}
        </GridContainer>
      )}

      {activeView === "list" && (
        <ListConatiner>
                  {listings.map((property, index) => (
                    <CardContainer key={index}>
                      <ImageContainer>
                        <img src={property.image} alt={property.title} />
                        <SoldOutRibbon>Sold Out</SoldOutRibbon>
                        <button>For Sale</button>
                      </ImageContainer>

                      <InfoSection>
                        <Tag>House</Tag>
                        <AgentTitle>{property.name}</AgentTitle>
                        <Location>
                          <FaMapMarkerAlt size={12} style={{marginTop:'2px'}} /> {property.location}
                        </Location>

                        <DetailRow>
                          <p><span>Baths</span><span><FaBath /> {property.baths}</span></p>
                          <p><span>Beds</span><span><FaBed /> {property.beds}</span></p>
                          <p><span>Rooms</span><span><FaInbox /> {property.rooms}</span></p>
                          <p><span>Area</span><span><FaMap /> {property.area} Sq Ft</span></p>
                        </DetailRow>
                      </InfoSection>

                      <RightSection>
                        <AgentCircle>{property.agentInitial}</AgentCircle>
                        <AgentName>{property.agentName}</AgentName>
                        <Price>${property.price}</Price>
                      </RightSection>
                    </CardContainer>
                  ))}
        </ListConatiner>
      )}
    </PropertyListingContainer>
  );
};

export default PropertyListing;
