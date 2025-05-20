import React from "react";
import { useEffect } from "react";
import {
  PartnersSection,
  MainContainer,
  PeopleFeedBack,
  FeedBackProfile,
  LastestNews,
  CardBox,
  Para,
  RequestQuotes,
} from "./CompanyShowcaseStyle";
import {
  DividerWithText,
  CarouselWrapper,
  Card,
  CardBodyTop,
  CardImg,
  Button,
} from "../../styles/commanClasses";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import pattnerImage1 from "../../assets/Images/partner-logo1.png";
import pattnerImage2 from "../../assets/Images/partner-logo2.png";
import pattnerImage3 from "../../assets/Images/partner-logo3.png";
import pattnerImage4 from "../../assets/Images/partner-logo4.png";
import pattnerImage5 from "../../assets/Images/partner-logo5.png";
import { FaChevronRight } from "react-icons/fa";

const CompanyShowCase = () => {
  const listings = [
    {
      name: "Modern Villa",
      feedbackMessage:
        "Thank you walls property help me, choice dream home. We were impressed with the build quality, Plus they are competitively priced.",
      role: "Owner, Digital Agency",
    },
    {
      name: "Urban Apartment",
      feedbackMessage:
        "Thank you walls property help me, choice dream home. We were impressed with the build quality, Plus they are competitively priced.",
      role: "Owner, Digital Agency",
    },
    {
      name: "Cozy Cottage",
      feedbackMessage:
        "Thank you walls property help me, choice dream home. We were impressed with the build quality, Plus they are competitively priced.",
      role: "Owner, Digital Agency",
    },
  ];

  const lastesNews = [
    {
      name: "Tom Wilson",
      newsMessage:
        "Real estate festival is one of the famous festivals to explain how all this mistake and praising pain wasn’t I will give complete",
      newsHeading: "Best Interior Opportunity",
      imgage: "https://wallsproperty.netlify.app/images/gallery4.jpg",
    },
    {
      name: "Tom Wilson",
      newsMessage:
        "Real estate festival is one of the famous festivals to explain how all this mistake and praising pain wasn’t I will give complete",
      newsHeading: "Tips & Tricks to Buy Real Estate",
      imgage: "https://wallsproperty.netlify.app/images/gallery23.png",
    },
    {
      name: "Tom Wilson",
      newsMessage:
        "Real estate festival is one of the famous festivals to explain how all this mistake and praising pain wasn’t I will give complete",
      newsHeading: "Our Most Popular Deluxe House",
      imgage: "https://wallsproperty.netlify.app/images/gallery17.jpg",
    },
  ];

  return (
    <MainContainer>
      {/* Partners Section */}
      <PartnersSection>
        <DividerWithText style={{ padding: "20px 0px 27px 0px" }}>
          <span>Our Partners</span>
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

      {/* People Feedback Section */}
      <PeopleFeedBack>
        <DividerWithText style={{ padding: "80px 0px 27px 0px" }}>
          <span>What People Say</span>
        </DividerWithText>
        <Para className="partners__description">
          People say about Walls Property
        </Para>

        <CarouselWrapper>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 6000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              481: {
                slidesPerView: 2,
              },
              769: {
                slidesPerView: 3,
              },
            }}
          >
            {listings.map((item, idx) => (
              <SwiperSlide key={idx}>
                <Card
                  style={{
                    padding: "2rem",
                    borderRadius: "4px",
                    border: "1px solid #f4f4f4",
                  }}
                >
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

      {/* Latest News Section */}
      <LastestNews>
        <DividerWithText style={{ padding: "20px 0px 27px 0px" }}>
          <span>Latest News Post</span>
        </DividerWithText>
        <Para className="partners__description">
          Stay updated with our real estate insights
        </Para>

        <CardBox>
          {lastesNews.map((item, idx) => (
            <Card style={{ width: "33%" }} key={idx}>
              <button className="isForSale">For Sale</button>
              <CardImg src={item.imgage} alt={item.name} />
              <CardBodyTop>
                <h4 className="property-name" style={{ fontSize: "inherit" }}>
                  {item.newsHeading}
                </h4>
                <p
                  className="property-location"
                  style={{ textTransform: "inherit", fontSize: "14px" }}
                >
                  {item.newsMessage}
                </p>
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
                <Button style={{ padding: "7px", fontSize: "14px" }}>
                  Learn More{" "}
                  <FaChevronRight
                    style={{ fontSize: "12px", marginLeft: "5px" }}
                  />
                </Button>
              </div>
            </Card>
          ))}
        </CardBox>
      </LastestNews>

      {/* Request Quote Section */}
      <RequestQuotes>
        <div className="innerContainer">
          <div className="leftSide">
            <h1>Looking To Sell Or Rent Your Property?</h1>
            <p>
              We Will Assist You In The Best And Comfortable Property Services
              For You
            </p>
          </div>
          <div className="rightSide">
            <Button
              style={{
                background: `var(--background-light-gray)`,
                color: "black",
                textTransform: "uppercase",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              Request A Quote{" "}
              <FaChevronRight
                style={{ fontSize: "11px", marginLeft: "10px" }}
              />
            </Button>
          </div>
        </div>
      </RequestQuotes>
    </MainContainer>
  );
};

export default CompanyShowCase;
