import React, { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
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
} from "./PropertyStyle";
import {
  DividerWithText,
  CarouselWrapper,
} from "../../../styles/CommanClasses";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CompanyShowCase from "../company-showcase/CompanyShowcase";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context/UserContext";
import PropertyCard from "../../../components/shared/cards/Cards";
import { CardJSON } from "../../../healpers/Card-json";
const PropertyFilter = () => {
  const { fetchAllPropertise } = useUserContext();
  const [properties, setProperties] = useState([]);
const [isError, setIsError] = useState(false);
  useEffect(() => {

    const fetchProperties = async () => {
      try{
      const data = await fetchAllPropertise();

      setProperties(data.data);
      setIsError(false);
      } catch{
setProperties([CardJSON, CardJSON, CardJSON]);
setIsError(true);
      }
    };
    fetchProperties();
  }, []);

  useEffect(() => {
  }, [properties]);

  const navigate = useNavigate();

  const [priceRangeValue, setPriceRange] = useState([2000, 6000]);

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


  const [showCard, setCard] = useState(3);

  useEffect(() => {
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

    updateCardCount(); // Run once on mount
    window.addEventListener("resize", updateCardCount); // Run on resize

    return () => window.removeEventListener("resize", updateCardCount); // Cleanup
  }, []);

  return (
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
              <span>${priceRangeValue[0]}</span> -{" "}
              <span>${priceRangeValue[1]}</span>
            </PriceValues>
          </PriceRange>
          <SearchButton>
            Search <FaSearch />
          </SearchButton>
        </FilterRow>
      </FilterContainer>
      <FilteredContent>
        <DividerWithText>
          <span>Featured Properties</span>
        </DividerWithText>
        <p>handpicked exclusive properties by our team.</p>
        <CarouselWrapper>
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={showCard}
            slidesPerGroup={2}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 6000 }}
            pagination={{ clickable: true }}
          >
            {properties.length === 0 ? (
  <p>No cards found.</p>
) : (
            properties.map((item, idx) => (
              <SwiperSlide key={idx}>
                <PropertyCard item={item} isError={isError} />
                
              </SwiperSlide>
            ))
)}

          </Swiper>
        </CarouselWrapper>
      </FilteredContent>
      <FilteredContent style={{ background: `var(--background-light-gray)` }}>
        <DividerWithText>
          <span>Recent Property</span>
        </DividerWithText>

        <p>We provide full service at every step</p>
        <CarouselWrapper>
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={showCard}
            slidesPerGroup={2}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 6000 }}
            pagination={{ clickable: true }}
          >
            {properties.length === 0 ? (
  <p>No cards found.</p>
) : (
            properties.map((item, idx) => (
              <SwiperSlide key={idx}>
                <PropertyCard item={item} isError={isError} />
                
              </SwiperSlide>
            ))
)}

          </Swiper>
        </CarouselWrapper>
      </FilteredContent>

      <CompanyShowCase />
    </OuterContainer>
  );
};

export default PropertyFilter;
