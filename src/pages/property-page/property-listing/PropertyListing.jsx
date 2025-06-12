import React, { useState ,useEffect} from "react";
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
import {useNavigate } from "react-router-dom";
import { CardJSON } from "../../../healpers/Card-json";
import { useUserContext } from "../../../context/UserContext";
import PropertyCard from "../../../components/shared/cards/Cards";
const PropertyListing = () => {
  const navigate = useNavigate()
  const [priceRangeValue, setPriceRange] = useState([2000, 6000]);
  const [activeView, setActiveView] = useState("grid");
  const { fetchAllPropertise } = useUserContext();
  const [properties, setProperties] = useState([]);
  const [isError, setIsError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const limit = 9;
  
    const totalPages = Math.ceil(totalCount / limit);


useEffect(() => {
  const fetchProperties = async () => {
    try {
      const data = await fetchAllPropertise(currentPage, limit);
      setProperties(data.data);
      setIsError(false);
      setTotalCount(data.pagination.total);
    } catch (error) {
      console.error("Error fetching properties:", error);
      setIsError(true);
      setProperties([CardJSON, CardJSON, CardJSON]);
      setTotalCount(3);
    }
  };

  fetchProperties();
}, [currentPage]);


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

  useEffect(() => {
  }, [currentPage]);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
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
            className={`icons ${activeView === "list" ? "active" : ""}`}
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
        {properties.map((item, idx) => (
                  <PropertyCard  key={item.id || idx} item={item} isError={isError} />
        ))}
        </GridContainer>
      )}

      {activeView === "list" && (
        <ListConatiner>
                  {properties.map((property, index) => (
                    <CardContainer key={index}>
                      <ImageContainer>
                        <img src={property.image} alt={property.propertyType} />
                        <SoldOutRibbon> {property.status}</SoldOutRibbon>
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
