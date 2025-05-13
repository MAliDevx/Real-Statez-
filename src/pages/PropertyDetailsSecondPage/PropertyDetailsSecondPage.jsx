import React from "react";
import { PropertDetailsSecondPage,FilteredContent,RequestQuotes,InnerContainer } from "./PropertyDetailsStyleSecondPage";
import { FaBuilding ,FaAmbulance ,FaChevronRight} from "react-icons/fa";
import { IoLocationSharp, } from "react-icons/io5";
import { DividerWithText,  CarouselWrapper,
  Card,
  CardImg,
  CardBodyTop,
  CardBodyBottom,
  Button
 } from '../../styles/commanClasses';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { MdLocationOn } from "react-icons/md";
import { FaBath, FaBed, FaInbox , FaMap } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// import { FaChevronRight } from 'react-icons/fa';

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
const SecondSinglePropertyDetail = () => {
    const navigate = useNavigate()
  
  const embedMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28874.844362470565!2d70.31237521421528!3d28.41356746208927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39375d0045d4fb37%3A0x9a95cea972638cf5!2sAl%20Batha!5e0!3m2!1sen!2s!4v1715612400000!5m2!1sen!2s";

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
  <div className="facilities-container">
      <div className="facilities-box">
      <div className="facilities-heading">
        <FaBuilding />
        <h3>Education</h3>
      </div>
      {education.map((item, index) => (

      <div className="facilities-list" key={index}>
        <div className="name">{item.name}</div>
        <div className="location"><IoLocationSharp />{item.distance}</div>
      </div>
       ))}
    </div>
   

    <div className="facilities-box">
      <div className="facilities-heading">
        <FaAmbulance  />
        <h3>Health & Medical</h3>
      </div>
      {health_and_medical.map((data, index)=>(
      <div className="facilities-list" key={index}>
        <div className="name">{data.name}</div>
        <div className="location"><IoLocationSharp /> {data.distance}</div>
     
      </div>
       ))}
    </div>

  </div>
</div>
<FilteredContent >
<h2>Similar Properties</h2>
<CarouselWrapper style={{width:'100%'}}>
      <Swiper
     modules={[Pagination, Autoplay]}
  slidesPerView={3}          
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
