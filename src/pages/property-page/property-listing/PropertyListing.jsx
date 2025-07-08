import React, { useState, useEffect } from "react";
import {
  PropertyListingContainer,
  PropertyFilterdiv,
  Filterbox,
  StyledSelectBox,
  ListConatiner,
  GridContainer
} from "./PropertyListingStyle";

import {
  FilterContainer,
  FilterRow,
  StyledSelect,
  PriceRange,
  PriceValues,
  SearchButton,
  OuterContainer,
} from "../../home-Page/propertise-service/PropertyStyle";
import { 
  Pagination
} from '../../../styles/CommanClasses';
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
} from "../../agent-page/single-agent-detail/SingleAgentDetailStyle";
import { useNavigate } from "react-router-dom";
import { CardJSON } from "../../../healpers/Card-json";
import { useUserContext } from "../../../Context/UserContext";
import PropertyCard from "../../../components/shared/cards/Cards";
import DataNotFound from "../../../components/shared/not-found";

const PropertyListing = () => {
  const navigate = useNavigate();
  const [priceRangeValue, setPriceRange] = useState([1000, 1000000]);
  const [activeView, setActiveView] = useState("grid");
  const { fetchAllPropertise } = useUserContext();
  const [properties, setProperties] = useState([]);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const limit = 9;
  const totalPages = Math.ceil(totalCount / limit);

  const [status, setStatus] = useState(null);
  const [type, setType] = useState(null);
  const [area, setArea] = useState(null);
  const [location, setLocation] = useState(null);
  const [bedrooms, setBedrooms] = useState(null);
  const [bathrooms, setBathrooms] = useState(null);

  const statusOptions = [
    { value: "none", label: "None" },
    { value: "available", label: "Available" },
    { value: "sold", label: "Sold" },
    { value: "rented", label: "Rented" },
    { value: "pending", label: "Pending" },
  ];

  const typeOptions = [
    { value: "none", label: "None" },
    { value: "apartment", label: "Apartment" },
    { value: "house", label: "House" },
    { value: "villa", label: "Villa" },
    { value: "penthouse", label: "Penthouse" },
    { value: "farmhouse", label: "Farmhouse" },
    { value: "plot", label: "Plot" },
    { value: "commercial", label: "Commercial" },
    { value: "office", label: "Office" },
    { value: "shop", label: "Shop" },
    { value: "warehouse", label: "Warehouse" },
    { value: "building", label: "Building" },
    { value: "hostel", label: "Hostel" },
  ];

  const areaOptions = [
    { value: "none", label: "None" },
    { value: "500", label: "500 sqft" },
    { value: "1000", label: "1000 sqft" },
    { value: "1500", label: "1500 sqft" },
  ];

  const locationOptions = [
    { value: "none", label: "None" },
    { value: "ny", label: "New York" },
    { value: "la", label: "Los Angeles" },
    { value: "chi", label: "Chicago" },
  ];

  const bedroomOptions = [
    { value: "none", label: "None" },
    { value: "1", label: "1 Bedroom" },
    { value: "2", label: "2 Bedrooms" },
    { value: "3", label: "3 Bedrooms" },
  ];

  const bathroomOptions = [
    { value: "none", label: "None" },
    { value: "1", label: "1 Bathroom" },
    { value: "2", label: "2 Bathrooms" },
    { value: "3", label: "3 Bathrooms" },
  ];

  useEffect(() => {
    const fetchFilteredProperties = async () => {
      const rawFilters = {
        propertyStatus: status?.value !== "none" ? status?.value : "",
        propertyType: type?.value !== "none" ? type?.value : "",
        areaFrom: area?.value !== "none" ? area?.value : "",
        location: location?.value !== "none" ? location?.value : "",
        bedrooms: bedrooms?.value !== "none" ? bedrooms?.value : "",
        bathrooms: bathrooms?.value !== "none" ? bathrooms?.value : "",
        priceMin: priceRangeValue[0],
        priceMax: priceRangeValue[1],
      };

      const cleanedFilters = Object.fromEntries(
        Object.entries(rawFilters).filter(
          ([key, value]) => value !== "" && value !== null
        )
      );

      try {
        const data = await fetchAllPropertise(currentPage, limit, cleanedFilters);
        setProperties(data.data);
        setIsError(false);
        setTotalCount(data.pagination.total);
      } catch (error) {
        setProperties([CardJSON, CardJSON, CardJSON]);
        setIsError(true);
        setTotalCount(3);
      }
    };

    fetchFilteredProperties();
  }, [status, type, area, location, bedrooms, bathrooms, priceRangeValue, currentPage]);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };
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
   <FilterContainer>
        <FilterRow>
          <StyledSelect
            options={statusOptions}
            placeholder="Property Status"
            onChange={(value) => setStatus(value)}
          />
          <StyledSelect
            options={typeOptions}
            placeholder="Property Type"
            onChange={(value) => setType(value)}
          />
          <StyledSelect
            options={areaOptions}
            placeholder="Area"
            onChange={(value) => setArea(value)}
          />
          <StyledSelect
            options={locationOptions}
            placeholder="Locations"
            onChange={(value) => setLocation(value)}
          />
        </FilterRow>

        <FilterRow>
          <StyledSelect
            options={bedroomOptions}
            placeholder="Bedrooms"
            onChange={(value) => setBedrooms(value)}
          />
          <StyledSelect
            options={bathroomOptions}
            placeholder="Bathrooms"
            onChange={(value) => setBathrooms(value)}
          />
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

    
          {/*
          <SearchButton onClick={handleSearch}>
            Search <FaSearch />
          </SearchButton>
          */}
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
{activeView === "grid" && (
  properties.length === 0 ? (
    <DataNotFound message="Property Not Found" />
  ) : (
 <GridContainer>
  {properties.map((item, idx) => (
    <PropertyCard key={item.id || idx} item={item} isError={isError} />
  ))}
</GridContainer>

  )
)}


      {activeView === "list" && (
          properties.length === 0 ? (
    <DataNotFound message="Property Not Found" />
  ) : (
        <ListConatiner>
                  {properties.map((property, index) => (
                    <CardContainer key={index}>
                      <ImageContainer>
                        <img src={property.image} alt={property.propertyType} />
<SoldOutRibbon status={property.status}>{property.status}</SoldOutRibbon>
                        <button>{property.purpose}</button>
                      </ImageContainer>

                      <InfoSection>
                        <Tag>{property.propertyType}</Tag>
                        <AgentTitle>{property.name}</AgentTitle>
                        <Location>
                          <FaMapMarkerAlt size={12} style={{marginTop:'2px'}} /> {property.fullAddress}
                        </Location>

                        <DetailRow>
                          <p><span>Baths</span><span><FaBath /> {property.bathrooms}</span></p>
                          <p><span>Beds</span><span><FaBed /> {property.bedrooms}</span></p>
                          <p><span>Rooms</span><span><FaInbox /> {property.rooms}</span></p>
                          <p><span>Area</span><span><FaMap /> {property.area} Sq Ft</span></p>
                        </DetailRow>
                      </InfoSection>

                      <RightSection>
                        <AgentCircle src={property.agencyImage} />
                        <AgentName>{property.agencyName}</AgentName>
                        <Price>${property.price}</Price>
                      </RightSection>
                    </CardContainer>
                  ))}
        </ListConatiner>
      )
    )}
      {totalPages > 1 && (
              <Pagination>
                <button 
                  onClick={handlePrevious} 
                  disabled={currentPage === 1}
                >
                  ← Previous
                </button>
                <span>
                  Page {currentPage} of {totalPages}
                </span>
                <button 
                  onClick={handleNext} 
                  disabled={currentPage === totalPages}
                >
                  Next →
                </button>
              </Pagination>
      )}
    </PropertyListingContainer>
  );
};

export default PropertyListing;
