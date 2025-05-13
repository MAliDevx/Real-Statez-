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
  FilteredContent,
  
} from './propertyStyle';
import { DividerWithText,  CarouselWrapper,
  Card,
  CardImg,
  CardBodyTop,
  CardBodyBottom
 } from '../../styles/commanClasses';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { MdLocationOn } from "react-icons/md";
import { FaBath, FaBed, FaInbox , FaMap } from 'react-icons/fa';
import CompanyShowCase from '../CompanyShowcase/CompanyShowcase';
import { useNavigate } from 'react-router-dom';

const PropertyFilter = () => {
  const navigate = useNavigate()

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

  const listings = [
    {
      image: 'https://wallsproperty.netlify.app/images/gallery17.jpg',
      name: 'Modern Villa',
      location: 'Los Angeles, CA',
      rooms: 4,
      bedRooms: 4,
      baths: 3,
      Area: "43 Sq Ft",
      ownerName: 'Alice Johnson',
      price: "$3,300",
      id:"sdkjf8938432kjadlkajd"

    },
    {
      image: 'https://wallsproperty.netlify.app/images/gallery11.jpg',
      name: 'Urban Apartment',
      location: 'New York, NY',
      rooms: 2,
      bedRooms: 2,
      baths: 1,
      Area: "38 Sq Ft",
      ownerName: 'Michael Lee',
      price: "$2,200",
      id:"asdjask93823432jksd"

    },
    {
      image: 'https://wallsproperty.netlify.app/images/gallery17.jpg',
      name: 'Cozy Cottage',
      location: 'Nashville, TN',
      rooms: 3,
      bedRooms: 3,
      baths: 2,
      Area: "40 Sq Ft",
      ownerName: 'Samantha Brown',
      price: "$2,800",
      id:"adja3849jkdjsdlask"

    },
    {
      image: 'https://wallsproperty.netlify.app/images/gallery10.jpg',
      name: 'Luxury Loft',
      location: 'Chicago, IL',
      rooms: 2,
      bedRooms: 2,
      baths: 2,
      Area: "35 Sq Ft",
      ownerName: 'Daniel Green',
      price: "$3,100",
      id:"sdkjf8938432kjadlkajd"

    },
    {
      image: 'https://wallsproperty.netlify.app/images/gallery15.jpg',
      name: 'Beach House',
      location: 'Miami, FL',
      rooms: 5,
      bedRooms: 5,
      baths: 4,
      Area: "55 Sq Ft",
      ownerName: 'Olivia Martinez',
      price: "$5,200",
      id:"sdkjf8938432kjadlkajd"

    },
    {
      image: 'https://wallsproperty.netlify.app/images/gallery16.jpg',
      name: 'Penthouse',
      location: 'San Francisco, CA',
      rooms: 3,
      bedRooms: 3,
      baths: 2,
      Area: "48 Sq Ft",
      ownerName: 'Chris Evans',
      price: "$4,700",
      id:"sdkjf8938432kjadlkajd"

    },
    {
      image: 'https://picsum.photos/id/1027/600/300',
      name: 'Suburban Home',
      location: 'Dallas, TX',
      rooms: 4,
      bedRooms: 4,
      baths: 3,
      Area: "50 Sq Ft",
      ownerName: 'Emma Watson',
      price: "$3,600",
      id:"sdkjf8938432kjadlkajd"

    },
    {
      image: 'https://wallsproperty.netlify.app/images/gallery18.jpg',
      name: 'Ranch House',
      location: 'Austin, TX',
      rooms: 6,
      bedRooms: 6,
      baths: 5,
      Area: "60 Sq Ft",
      ownerName: 'Liam Carter',
      price: "$6,000",
      id:"sdkjf8938432kjadlkajd"

    }
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
          Search <FaSearch /> 
        </SearchButton>
      </FilterRow>
    </FilterContainer>
<FilteredContent>
<DividerWithText>
  <span>Featured Properties
  </span>
</DividerWithText>
<p>handpicked exclusive properties by our team.</p>
<CarouselWrapper>
      <Swiper
     modules={[Pagination, Autoplay]}
  slidesPerView={2}          
  slidesPerGroup={2}        
  spaceBetween={20}
  loop={true}
  autoplay={{ delay: 6000 }}
  pagination={{ clickable: true }}
      >

        {listings.map((item, idx) => (
          <SwiperSlide key={idx}>
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
      src="https://wallsproperty.netlify.app/images/profile-blog.jpg"
      alt="Owner"
      className="property-profile__image"
    />
   </figure>
    <p className="property-profile__name">{item.ownerName}</p>
  </div>
  <div className="property-profile__price">{item.price}.00</div>
</div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselWrapper>
</FilteredContent>
<FilteredContent style={{background:`var(--background-light-gray)`}}>
<DividerWithText>
  <span>Recent Property
  </span>
</DividerWithText>
<p>We provide full service at every step</p>
<CarouselWrapper>
      <Swiper
     modules={[Pagination, Autoplay]}
  slidesPerView={2}          
  slidesPerGroup={2}        
  spaceBetween={20}
  loop={true}
  autoplay={{ delay: 6000 }}
  pagination={{ clickable: true }}
      >

        {listings.map((item, idx) => (
          <SwiperSlide key={idx}>
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
      src="https://wallsproperty.netlify.app/images/profile-blog.jpg"
      alt="Owner"
      className="property-profile__image"
    />
   </figure>
    <p className="property-profile__name">{item.ownerName}</p>
  </div>
  <div className="property-profile__price">{item.price}.00</div>
</div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselWrapper>
</FilteredContent>

<CompanyShowCase />
    </OuterContainer>
  );
};

export default PropertyFilter;
