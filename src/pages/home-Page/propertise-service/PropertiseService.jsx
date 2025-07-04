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
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CompanyShowCase from "../company-showcase/CompanyShowcase";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../Context/UserContext";
import PropertyCard from "../../../components/shared/cards/Cards";
import { CardJSON } from "../../../healpers/Card-json";
import DataNotFound from "../../../components/shared/not-found";

const PropertyFilter = () => {
  const { fetchAllPropertise } = useUserContext();
  const [properties, setProperties] = useState([]);
  const [isError, setIsError] = useState(false);

  const [status, setStatus] = useState(null);
  const [type, setType] = useState(null);
  const [area, setArea] = useState(null);
  const [location, setLocation] = useState(null);
  const [bedrooms, setBedrooms] = useState(null);
  const [bathrooms, setBathrooms] = useState(null);
  const [priceRangeValue, setPriceRange] = useState([1000, 1000000]);

  const [showCard, setCard] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const updateCardCount = () => {
      const width = window.innerWidth;
      if (width <= 480) setCard(1);
      else if (width <= 768) setCard(2);
      else setCard(3);
    };

    updateCardCount();
    window.addEventListener("resize", updateCardCount);
    return () => window.removeEventListener("resize", updateCardCount);
  }, []);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await fetchAllPropertise();
        setProperties(data.data);
        setIsError(false);
      } catch {
        setProperties([CardJSON, CardJSON, CardJSON]);
        setIsError(true);
      }
    };

    fetchProperties();
  }, []);


  useEffect(() => {
    const applyFilters = async () => {
   const rawFilters = {
  propertyStatus: status?.value && status?.value !== "none" ? status?.value : "",
  propertyType: type?.value && type?.value !== "none" ? type?.value : "",
  areaFrom: area?.value && area?.value !== "none" ? area?.value : "",
  location: location?.value && location?.value !== "none" ? location?.value : "",
  bedrooms: bedrooms?.value && bedrooms?.value !== "none" ? bedrooms?.value : "",
  bathrooms: bathrooms?.value && bathrooms?.value !== "none" ? bathrooms?.value : "",
  priceMin: priceRangeValue[0],
  priceMax: priceRangeValue[1],
};


      const cleanedFilters = Object.fromEntries(
        Object.entries(rawFilters).filter(
          ([key, value]) =>
            value !== "" &&
            value !== null &&
            !(key.startsWith("price") && (value === 0 || value === undefined))
        )
      );

      try {
        const data = await fetchAllPropertise({
          page: 1,
          limit: 10,
          filters: cleanedFilters,
        });

        setProperties(data.data);
        setIsError(false);
      } catch {
        setIsError(true);
        setProperties([CardJSON, CardJSON, CardJSON]);
      }
    };

    applyFilters();
  }, [status, type, area, location, bedrooms, bathrooms, priceRangeValue]);

  const statusOptions = [
    {value:"none", label:"None"},
    { value: "available", label: "Available" },
    { value: "sold", label: "Sold" },
    { value: "rented", label: "Rented" },
    { value: "pending", label: "Pending" },
  ];
  const typeOptions = [
        {value:"none", label:"None"},
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

    {value:"none", label:"None"},

    { value: "500", label: "500 sqft" },
    { value: "1000", label: "1000 sqft" },
    { value: "1500", label: "1500 sqft" },
  ];
  const locationOptions = [
        {value:"none", label:"None"},

    { value: "ny", label: "New York" },
    { value: "la", label: "Los Angeles" },
    { value: "chi", label: "Chicago" },
  ];
  const bedroomOptions = [
        {value:"none", label:"None"},

    { value: "1", label: "1 Bedroom" },
    { value: "2", label: "2 Bedrooms" },
    { value: "3", label: "3 Bedrooms" },
  ];
  const bathroomOptions = [
        {value:"none", label:"None"},

    { value: "1", label: "1 Bathroom" },
    { value: "2", label: "2 Bathrooms" },
    { value: "3", label: "3 Bathrooms" },
  ];

  return (
    <OuterContainer>
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

      <FilteredContent>
        <DividerWithText>
          <span>Recent Property</span>
        </DividerWithText>
        <p>We provide full service at every step</p>

        {properties.length === 0 ? (
          <DataNotFound message="No searched property found." />
        ) : (
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
              {properties.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <PropertyCard item={item} isError={isError} />
                </SwiperSlide>
              ))}
            </Swiper>
          </CarouselWrapper>
        )}
      </FilteredContent>

      <FilteredContent style={{ background: `var(--background-light-gray)` }}>
        <DividerWithText>
          <span>Recent Property</span>
        </DividerWithText>
        <p>We provide full service at every step</p>

        {properties.length === 0 ? (
          <DataNotFound message="No search property found." />
        ) : (
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
              {properties.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <PropertyCard item={item} isError={isError} />
                </SwiperSlide>
              ))}
            </Swiper>
          </CarouselWrapper>
        )}
      </FilteredContent>

      <CompanyShowCase />
    </OuterContainer>
  );
};

export default PropertyFilter;
