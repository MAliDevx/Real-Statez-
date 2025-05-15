import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  FaPaperPlane, FaBath, FaBed, FaInbox, FaMap, FaMapMarkerAlt,
  FaPhoneAlt, FaFax, FaEnvelope, FaFacebookF, FaTwitter,
  FaLinkedinIn, FaInstagram, FaBuilding, FaRegFilePdf, FaRegFileWord
} from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import agentImage from '../../assets/Images/team12.jpg';
import agentImage1 from '../../assets/Images/team12.jpg'; // You can replace this with another image

// Import styled components
import {
  SingleAgentHeadingContainer,
  AgentContentMainContainer,
  StyledAgentInnerContainer,
  AgentDetailContainer,
  SingleAgentDetail as StyledAgentDetail,
  ImageWrapper,
  Badge,
  Content,
  Name,
  Title,
  InfoRow,
  SocialIcons,
  Card,
  Heading,
  PropertyCetagoriesContainer,
  PropertyAttachmentDiv,
  Subheading,
  SearchagentConatiner,
  PropertyContainerMaindiv,
  TabsButtonContainer,
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
} from "./SingleAgentDetailStyle";

const SingleAgentDetail = () => {
  const { id } = useParams();
  const [showFull, setShowFull] = useState(false);
  const [agent, setAgent] = useState(null);
  const [properties, setProperties] = useState([]);
  const [propertyCategories, setPropertyCategories] = useState([]);

  // Static mock data
  const agentList = [
    {
      id: "1",
      name: "Sarah Lee",
      title: "Rental Agent",
      office: "456 789 123",
      mobile: "456 789 123",
      fax: "123 789",
      email: "sarah@property.com",
      image: agentImage,
      listings: 10,
      experience: 8,
    },
    {
      id: "2",
      name: "John Smith",
      title: "Sales Agent",
      office: "789 123 456",
      mobile: "789 123 456",
      fax: "456 123",
      email: "john@property.com",
      image: agentImage1,
      listings: 5,
      experience: 5,
    }
  ];

  const allProperties = [
    {
      id: 1,
      agentId: "1",
      title: "Luxury Apartment with City View",
      image: agentImage,
      location: "Downtown, Cityville",
      baths: 2,
      beds: 3,
      rooms: 4,
      area: 2500,
      price: 400000,
      status: "sold",
      purpose: "For Sale",
      type: "Apartment",
      agentName: "Sarah Lee",
      agentInitial: "S"
    },
    {
      id: 2,
      agentId: "2",
      title: "Cozy Suburban House",
      image: agentImage1,
      location: "Suburbs, Cityville",
      baths: 1,
      beds: 2,
      rooms: 3,
      area: 1800,
      price: 250000,
      status: "available",
      purpose: "For Rent",
      type: "House",
      agentName: "John Smith",
      agentInitial: "J"
    },
    {
      id: 3,
      agentId: "2",
      title: "Cozy Suburban House",
      image: agentImage1,
      location: "Suburbs, Cityville",
      baths: 1,
      beds: 2,
      rooms: 3,
      area: 1800,
      price: 250000,
      status: "available",
      purpose: "For Rent",
      type: "House",
      agentName: "John Smith",
      agentInitial: "J"
    }
  ];

  useEffect(() => {
    const foundAgent = agentList.find((agent) => agent.id === id);
    setAgent(foundAgent);

    const agentProperties = allProperties.filter((prop) => prop.agentId === id);
    setProperties(agentProperties);

    const categories = agentProperties.reduce((acc, prop) => {
      acc[prop.type] = (acc[prop.type] || 0) + 1;
      return acc;
    }, {});
    const formattedCategories = Object.entries(categories).map(([name, count]) => ({ name, count }));
    setPropertyCategories(formattedCategories);
  }, [id]);

  if (!agent) return <div>Agent not found</div>;

  const agentDescription = [
    `${agent.name} is a top-rated ${agent.title.toLowerCase()} with over ${agent.listings} listings.`,
    `With deep knowledge in the local market, ${agent.name} helps clients find dream properties quickly and smoothly.`,
    `${agent.name.split(" ")[0]} has ${agent.experience} years of experience in real estate.`,
    `${agent.name} is among the top agents in their region.`,
  ];

  return (
    <>
      <SingleAgentHeadingContainer>
        <div className="imageContainer">
          <div className="textContainer">
            <h2>Agent Detail</h2>
            <div className="breadcrumb">
              <span>Home</span> / <span>Agents</span> / <span>{agent.name}</span>
            </div>
          </div>
        </div>
      </SingleAgentHeadingContainer>

      <AgentContentMainContainer>
        <StyledAgentInnerContainer>
          <AgentDetailContainer>
            <StyledAgentDetail>
              <Card>
                <ImageWrapper>
                  <img src={agent.image} alt={agent.name} />
                  <Badge>{agent.listings} LISTING</Badge>
                </ImageWrapper>
                <Content>
                  <Name>{agent.name}</Name>
                  <Title>{agent.title}</Title>
                  <InfoRow><FaBuilding /> <span>Office:</span> <span>{agent.office}</span></InfoRow>
                  <InfoRow><FaPhoneAlt /> <span>Mobile:</span> <span>{agent.mobile}</span></InfoRow>
                  <InfoRow><FaFax /> <span>Fax:</span> <span>{agent.fax}</span></InfoRow>
                  <InfoRow><FaEnvelope /> <span>Email:</span> <span>{agent.email}</span></InfoRow>
                  <SocialIcons>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaLinkedinIn />
                    <FaInstagram />
                    <TfiYoutube />
                  </SocialIcons>
                </Content>
              </Card>
            </StyledAgentDetail>

            <TabsButtonContainer>
              <Heading>Agent Details</Heading>
              <Tabs>
                <TabList className="TabButton-Container">
                  <Tab className="Tab-Button">Description</Tab>
                  <Tab className="Tab-Button">Listings</Tab>
                </TabList>

                <TabPanel>
                  <Heading>Hi, nice to meet you</Heading>
                  <div className="para-container">
                    {(showFull ? agentDescription : agentDescription.slice(0, 2)).map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                    <div className="button-Container">
                      <button className="descriptionButton" onClick={() => setShowFull(!showFull)}>
                        {showFull ? "Show Less" : "Show More"}
                      </button>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel>
                  {properties.map((property, index) => (
                    <CardContainer key={index}>
                      <ImageContainer>
                        <img src={property.image} alt={property.title} />
                        {property.status === "sold" && <SoldOutRibbon>Sold Out</SoldOutRibbon>}
                        <button>{property.purpose}</button>
                      </ImageContainer>

                      <InfoSection>
                        <Tag>{property.type}</Tag>
                        <AgentTitle>{property.title}</AgentTitle>
                        <Location>
                          <FaMapMarkerAlt size={12} style={{marginTop:'2px'}} /> {property.location}
                        </Location>

                        <DetailRow>
                          <p><span>Baths</span><span><FaBath /> {property.baths}</span></p>
                          <p><span>Beds</span><span><FaBed /> {property.beds}</span></p>
                          <p><span>Rooms</span><span><FaInbox /> {property.rooms}</span></p>
                          <p><span>Area</span><span><FaMap /> {property.area} Sq Ft</span></p>
                        </DetailRow>
                      </InfoSection>

                      <RightSection>
                        <AgentCircle>{property.agentInitial}</AgentCircle>
                        <AgentName>{property.agentName}</AgentName>
                        <Price>${property.price}</Price>
                      </RightSection>
                    </CardContainer>
                  ))}
                </TabPanel>
              </Tabs>
            </TabsButtonContainer>
          </AgentDetailContainer>

          <PropertyContainerMaindiv>
            <SearchagentConatiner>
              <div className="heading-container">
                <Heading>Contact {agent.name}</Heading>
              </div>
              <div className="InputContainer">
                <div className="lable-input-div">
                  <label htmlFor="fullName">Full Name</label>
                  <input id="fullName" type="text" placeholder="Enter your full name" />
                </div>
                <div className="lable-input-div">
                  <label htmlFor="email">Email (Optional)</label>
                  <input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="lable-input-div">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" type="text" placeholder="Enter your phone" />
                </div>
                <div className="lable-input-div">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" rows={4} placeholder="Enter your message" />
                </div>
              </div>
              <div className="ButtonDiv">
                <button type="button">Submit</button>
                <FaPaperPlane />
              </div>
            </SearchagentConatiner>

            <PropertyCetagoriesContainer>
              <Subheading><Heading>Categories Property</Heading></Subheading>
              <div className="property-category-div">
                {propertyCategories.map((category, index) => (
                  <div className="property-category-item" key={index}>
                    <span>{category.name}</span>
                    <span className="property-count">{category.count}</span>
                  </div>
                ))}
              </div>
            </PropertyCetagoriesContainer>

            <PropertyAttachmentDiv>
              <Heading>Property Attachments</Heading>
              <div className="button-container">
                <div className="button-div"><FaRegFilePdf /><button>Download Documents.Pdf</button></div>
                <div className="button-div"><FaRegFileWord /><button>Presentation 2024.Doc</button></div>
              </div>
            </PropertyAttachmentDiv>
          </PropertyContainerMaindiv>
        </StyledAgentInnerContainer>
      </AgentContentMainContainer>
    </>
  );
};

export default SingleAgentDetail;
