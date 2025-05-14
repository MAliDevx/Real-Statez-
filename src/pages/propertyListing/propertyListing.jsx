import React, { useState } from "react";
import {
  PropertyListingContainer,
  PropertyFilterdiv,
  Filterbox,
  StyledSelectBox,
  PropertyCardContainer,
  Card,
  CardImg,
  CardBodyTop,
  CardBodyBottom,
  CardDetailListContainer,
  CardWrapper,
  SaleButton
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

import { FaHome, FaSearch, FaBath, FaBed, FaInbox, FaMap, FaThList } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const PropertyListing = () => {
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

      <OuterContainer>
        <FilterContainer>
          <FilterRow>
            <StyledSelect options={statusOptions} placeholder="Property Status" />
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
                <span>${priceRangeValue[0]}</span> - <span>${priceRangeValue[1]}</span>
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
            className={`icons ${activeView === "list" ? "active" : ""}`}
            onClick={() => setActiveView("list")}
          />
          <IoGridSharp
            className={`icons ${activeView === "grid" ? "active" : ""}`}
            onClick={() => setActiveView("grid")}
          />
        </div>
      </PropertyFilterdiv>

      <PropertyCardContainer view={activeView}>
        <div className={`property-card-grid ${activeView}`}>
          {listings.map((item, idx) => (
            <Card key={idx} view={activeView}>
              <div className="list-card-container">
                <button className="property-feature">Featured</button>
                <CardWrapper view={activeView}>
                  <SaleButton>For Sale</SaleButton>
                  <CardImg src={item.image} alt={item.name} view={activeView} />
                </CardWrapper>

                <CardDetailListContainer view={activeView}>
                  <CardBodyTop view={activeView}>
                    <button className="isHouse">House</button>
                    <h4 className="property-name">{item.name}</h4>
                    <p className="property-location">
                      <MdLocationOn /> {item.location}
                    </p>
                  </CardBodyTop>
                  <CardBodyBottom>
                    <div className="bath-box">
                      <div>Baths</div>
                      <div className="bottom-box">
                        <FaBath /> {item.baths}
                      </div>
                    </div>
                    <div className="beds-box">
                      <div>Beds</div>
                      <div className="bottom-box">
                        <FaBed /> {item.bedRooms}
                      </div>
                    </div>
                    <div className="room-box">
                      <div>Rooms</div>
                      <div className="bottom-box">
                        <FaInbox /> {item.rooms}
                      </div>
                    </div>
                    <div className="area-box">
                      <div>Area</div>
                      <div className="bottom-box">
                        <FaMap /> {item.Area}
                      </div>
                    </div>
                  </CardBodyBottom>
                </CardDetailListContainer>
                <div className="property-profile">
                  <div className="property-profile__info">
                    <figure>
                      <img
                        src="https://wallsproperty.netlify.app/images/profile-blog.jpg"
                        alt="Owner"
                        className="property-profile__image"
                      />
                    </figure>
                    <p className="property-profile__name">{item.ownerName}</p>
                  </div>
                  <div className="property-profile__price">{item.price}.00</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </PropertyCardContainer>
    </PropertyListingContainer>
  );
};

export default PropertyListing;
