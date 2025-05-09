import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { FaSearch } from 'react-icons/fa';
import {
  FilterContainer,
  FilterRow,
  StyledSelect,
  PriceRange,
  PriceValues,
  SearchButton,
  OuterContainer,
  FilteredContent
} from './propertyStyle';
import { DividerWithText } from '../../styles/commanClasses';
const PropertyFilter = () => {
  const [priceRangeValue, setPriceRange] = useState([2000, 6000]);

  const statusOptions = [
    { value: 'for-sale', label: 'For Sale' },
    { value: 'for-rent', label: 'For Rent' },
  ];
  const typeOptions = [
    { value: 'house', label: 'House' },
    { value: 'apartment', label: 'Apartment' },
    { value: 'villa', label: 'Villa' },
  ];
  const areaOptions = [
    { value: '500', label: '500 sqft' },
    { value: '1000', label: '1000 sqft' },
    { value: '1500', label: '1500 sqft' },
  ];
  const locationOptions = [
    { value: 'ny', label: 'New York' },
    { value: 'la', label: 'Los Angeles' },
    { value: 'chi', label: 'Chicago' },
  ];
  const bedroomOptions = [
    { value: '1', label: '1 Bedroom' },
    { value: '2', label: '2 Bedrooms' },
    { value: '3', label: '3 Bedrooms' },
  ];
  const bathroomOptions = [
    { value: '1', label: '1 Bathroom' },
    { value: '2', label: '2 Bathrooms' },
    { value: '3', label: '3 Bathrooms' },
  ];

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
            <span>${priceRangeValue[0]}</span> - <span>${priceRangeValue[1]}</span>
          </PriceValues>
        </PriceRange>
        <SearchButton>
          <FaSearch /> Search
        </SearchButton>
      </FilterRow>
    </FilterContainer>
<FilteredContent>
<DividerWithText>
  <span>Featured Properties
  </span>
</DividerWithText>

</FilteredContent>
    </OuterContainer>
  );
};

export default PropertyFilter;
