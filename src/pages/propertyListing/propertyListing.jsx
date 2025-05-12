import {
  PropertyListingContainer,
  PropertyFilterdiv,
  Filterbox,
  StyledSelectBox
} from "./propertyListingStyle";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "rc-slider";
// import Slider from 'rc-slider';
import "rc-slider/assets/index.css";
import React, { useState } from "react";
import { FaThList } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";

import { FaSearch } from "react-icons/fa";
import {
  FilterContainer,
  FilterRow,
  StyledSelect,
  PriceRange,
  PriceValues,
  SearchButton,
  OuterContainer,
  FilteredContent,
} from "../PropertiseService/propertyStyle";
import { DividerWithText } from "../../styles/commanClasses";
const PropertyListing = () => {
  const properties = [
    {
      id: 1,
      name: "Luxury Villa",
      price: "$1,500,000",
      location: "California, USA",
    },
    {
      id: 2,
      name: "Modern Apartment",
      price: "$350,000",
      location: "New York, USA",
    },
    {
      id: 3,
      name: "Beachfront House",
      price: "$2,000,000",
      location: "Florida, USA",
    },
    { id: 4, name: "Cozy Cottage", price: "$150,000", location: "Oregon, USA" },
  ];
const [priceRangeValue, setPriceRange] = useState([2000, 6000]);
const [activeView, setActiveView] = useState("grid"); // default to "grid" or "list"

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
        <FilteredContent>
         
        </FilteredContent>
      </OuterContainer>

      <PropertyFilterdiv>
        <div className="filter-container">
  <span>Sort by</span>
        <Filterbox>
          <StyledSelectBox options={statusOptions} placeholder="Property Status"   styles={{
    control: (base) => ({
      ...base,
      border: 'none',
      boxShadow: 'none',
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

      <h1 className="text-center mb-4">Property Listings</h1>
      <div className="row">
        {properties.map((property) => (
          <div key={property.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/300x200"
                className="card-img-top"
                alt="property"
              />
              <div className="card-body">
                <h5 className="card-title">{property.name}</h5>
                <p className="card-text">
                  <strong>Price: </strong>
                  {property.price}
                  <br />
                  <strong>Location: </strong>
                  {property.location}
                </p>
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PropertyListingContainer>
  );
};

export default PropertyListing;
