import React from "react";
import { PartnersSection,MainContainer,PeopleFeedBack,FeedBackProfile,LastestNews,CardBox,Para,RequestQuotes  } from "./CompanyShowcaseStyle";
import { DividerWithText,CarouselWrapper,Card,CardBodyTop,CardImg,Button} from '../../styles/commanClasses';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import pattnerImage1 from '../../assets/Images/partner-logo1.png'
import pattnerImage2 from '../../assets/Images/partner-logo2.png'
import pattnerImage3 from '../../assets/Images/partner-logo3.png'
import pattnerImage4 from '../../assets/Images/partner-logo4.png'
import pattnerImage5 from '../../assets/Images/partner-logo5.png'
import { FaChevronRight } from 'react-icons/fa';
// import newImg1 from '../../assets/newsImg1.jpg'
// import newImg2 from '../../assets/newsImg2.jpg'
// import newImg3 from '../../assets/newsImg3.jpg'

const CompanyShowCase = () => {

    const listings = [
        {
          name: 'Modern Villa',
          feedbackMessage:' Thank you walls property help me, choice dream home We were impressed with the build  quality, Plus they are competitively price',
          role: 'owner, Digital Agency ',
        },
        {
          name: 'Urban Apartment',
          feedbackMessage:' Thank you walls property help me, choice dream home We were impressed with the build  quality, Plus they are competitively price',
          role: 'owner, Digital Agency ',
        },
        {
          name: 'Cozy Cottage',
          feedbackMessage:' Thank you walls property help me, choice dream home We were impressed with the build  quality, Plus they are competitively price',
          role: 'owner, Digital Agency ',
        },
        
      ];
    const lastesNews = [
        {
          name: 'tom wilson',
          newsMessage:'Real estate festival is one of the famous feval for explain to you how all this mistaolt deand praising pain wasnad I will give complete',
          newsHeading: 'Best Interior Oppertunity',
          imgage :`https://wallsproperty.netlify.app/images/gallery4.jpg`,
        },
        {
          name: 'tom wilson',
          newsMessage:'Real estate festival is one of the famous feval for explain to you how all this mistaolt deand praising pain wasnad I will give complete',
          newsHeading: 'Tips & Trick buy real estate',
          imgage :`	https://wallsproperty.netlify.app/images/gallery23.png`,

        },
        {
          name: 'tom wilson',
          newsMessage:'Real estate festival is one of the famous feval for explain to you how all this mistaolt deand praising pain wasnad I will give complete',
          newsHeading: 'Our Must Popular Deluxe House',
          imgage :'	https://wallsproperty.netlify.app/images/gallery17.jpg',

        },
       
      ];
  return (
    <MainContainer>
    <PartnersSection>
      <DividerWithText style={{padding:'20px 0px 27px 0px'}}>
        <span>Our Partners
        </span>
      </DividerWithText>
      <Para className="partners__description">
      Brand Partners Successful Projects Trusted Many Clients Real Estate
      </Para>
      <div className="partners__logos" id="partnersLogos">
        <img src={pattnerImage1} alt="Partner 1" className="partners__logo" />
        <img src={pattnerImage2} alt="Partner 2" className="partners__logo" />
        <img src={pattnerImage3} alt="Partner 3" className="partners__logo" />
        <img src={pattnerImage4} alt="Partner 4" className="partners__logo" />
        <img src={pattnerImage5} alt="Partner 5" className="partners__logo" />
      </div>
    </PartnersSection>

    <PeopleFeedBack>
    <DividerWithText style={{padding:'80px 0px 27px 0px'}}>
        <span>what people says</span>
      </DividerWithText>
      <Para className="partners__description">people says about walls property</Para>

<CarouselWrapper>
      <Swiper
     modules={[Pagination, Autoplay]}
  slidesPerView={2}          
  slidesPerGroup={2}        
  spaceBetween={20}
  loop={true}
  autoplay={{ delay: 6000 }}
      >

        {listings.map((item, idx) => (
          <SwiperSlide key={idx}>
            <Card style={{padding:'2rem', borderRadius:'4px',border:' 1px solid #f4f4f4'}}>
                <p>{item.feedbackMessage}</p>


            </Card>
            <FeedBackProfile>
  <figure>
    <img
      src="https://wallsproperty.netlify.app/images/profile-blog.jpg"
      alt="Owner"
      className="property-profile__image"
    />
  </figure>
  <div>
    <p>{item.name}</p>
    <p>{item.role}</p>
  </div>
</FeedBackProfile>

          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselWrapper>
    </PeopleFeedBack>

    <LastestNews>
    <DividerWithText style={{padding:'20px 0px 27px 0px'}}>
        <span>Lastest News Post</span>
      </DividerWithText>
      < Para className="partners__description">
      Brand Partners Successful Projects Trusted Many Clients Real Estate
      </Para>

      <CardBox >
        {lastesNews.map((item, idx) => (
            <Card style={{width:'33%'}}>
              <button className='isForSale'>For Sale</button>
              <CardImg src={item.imgage} alt={item.name} />
              <CardBodyTop>
                <h4 className='property-name' style={{fontSize:'inherit'}}>{item.newsHeading}</h4>
                <p className='property-location' style={{textTransform:"inherit", fontSize:'14px'}}>{item.newsMessage}</p>
              </CardBodyTop>
<div className="property-profile">
  <div className="property-profile__info">
   <figure>
   <img
      src="https://wallsproperty.netlify.app/images/profile-blog.jpg"
      alt="Owner"
      className="property-profile__image"
    />
   </figure>
    <p className="property-profile__name">{item.name}</p>
  </div>
  <Button style={{padding:'7px', fontSize:'14px'}}>Learn More <FaChevronRight style={{fontSize:'12px',marginLeft:'5px'}} /></Button>
</div>
            </Card>
        ))}
        </CardBox>
    </LastestNews>
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

    </MainContainer>
  );
};

export default CompanyShowCase;
