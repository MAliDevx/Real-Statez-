import React, { useState, useEffect, } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  FaPaperPlane, FaBath, FaBed, FaInbox, FaMap, FaMapMarkerAlt,
  FaPhoneAlt, FaFax, FaEnvelope, FaFacebookF, FaTwitter,
  FaLinkedinIn, FaInstagram, FaBuilding, FaRegFilePdf, FaRegFileWord
} from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import agentImage from '../../../assets/Images/team12.jpg';
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
import { useNavigate, useParams } from "react-router-dom";
import { useAgentContext } from "../../../context/AgentContext";
import API from "../../../api/axios";
const SingleAgentDetail = () => {
  const [showFull, setShowFull] = useState(false);
  const [agent, setAgent] = useState(null);
  const [properties, setProperties] = useState([]);
  const [propertyCategories, setPropertyCategories] = useState([]);
  const { id } = useParams()
 const {getSingleAgent} = useAgentContext();
 const [SingleAgent, setSingleAgnet] = useState([])
 const [agentProperties, setAgnetProperties] = useState([])
   const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

const navigate = useNavigate()
  useEffect(() => {
    // Static agent data
    const staticAgent = {
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
    };

    // Static properties data
    const staticProperties = [
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
        agentId: "1",
        title: "Modern Studio Apartment",
        image: agentImage,
        location: "Midtown, Cityville",
        baths: 1,
        beds: 1,
        rooms: 2,
        area: 1200,
        price: 250000,
        status: "available",
        purpose: "For Rent",
        type: "Apartment",
        agentName: "Sarah Lee",
        agentInitial: "S"
      }
    ];

    // Static property categories
    const categories = staticProperties.reduce((acc, prop) => {
      acc[prop.type] = (acc[prop.type] || 0) + 1;
      return acc;
    }, {});
    const formattedCategories = Object.entries(categories).map(([name, count]) => ({ name, count }));

    setAgent(staticAgent);
    setProperties(staticProperties);
    setPropertyCategories(formattedCategories);
  }, []);

const getDataSingleAgent = async() =>{
  const data = await getSingleAgent(id)
setAgnetProperties(data.data.data.properties)
  setSingleAgnet(data?.data?.data?.agent)
  
}

useEffect(()=>{
  getDataSingleAgent()
},[])


  const handleSubmit = () => {
    const payload = {
      fullName,
      email,
      phone,
      message,
      agentName: SingleAgent?.name || "Unknown Agent",
    };

    console.log("Contact Form Payload:", payload);

  };


  if (!agent) return <div>Loading...</div>;

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

        </div>
      </SingleAgentHeadingContainer>

      <AgentContentMainContainer>
        <StyledAgentInnerContainer>
          <AgentDetailContainer>
            <StyledAgentDetail>
            {/* {SingleAgent.map((item, index)=>( */}
                           <Card >
                <ImageWrapper>
                  <img src={`${API.defaults.baseURL}${SingleAgent.image}`} alt={SingleAgent.name} />
                  {/* <Badge>{item.listings} LISTING</Badge> */}
                </ImageWrapper>
                <Content>
                  <Name>{SingleAgent.name}</Name>
                  <Title>{SingleAgent.name}</Title>
                  <InfoRow><FaBuilding /> <span>Office:</span> <span>{SingleAgent.phone}</span></InfoRow>
                  <InfoRow><FaPhoneAlt /> <span>Mobile:</span> <span>{SingleAgent.phone}</span></InfoRow>
                  <InfoRow><FaEnvelope /> <span>Email:</span> <span>{SingleAgent.email}</span></InfoRow>
                  
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
                  {agentProperties?.map((property, index) => (
                    <CardContainer key={index} onClick={()=> navigate(`/propertydetails/${property._id}`)}>
                      <ImageContainer>
                        <img src={`${API.defaults.baseURL}${property?.images[0]}`} alt={property?.title} />
                        <SoldOutRibbon>{property.status}</SoldOutRibbon>
                        <button >For {property?.purpose}</button>
                      </ImageContainer>
                      <InfoSection>
                        <Tag>{property?.propertyType}</Tag>
                        <AgentTitle>{property.name}</AgentTitle>
                        <Location>
                          <FaMapMarkerAlt size={12} style={{marginTop:'2px'}} /> {property?.fullAddress}
                        </Location>

                        <DetailRow>
                          <p><span>Baths</span><span><FaBath /> {property.bathrooms}</span></p>
                          <p><span>Beds</span><span><FaBed /> {property.bedrooms}</span></p>
                          <p><span>Rooms</span><span><FaInbox /> {property.rooms}</span></p>
                          <p><span>Area</span><span><FaMap /> {property.area} Sq Ft</span></p>
                        </DetailRow>
                      </InfoSection>

                      <RightSection>
                        {/* <AgentCircle>{property.agentInitial}</AgentCircle>
                        <AgentName>{property.agentName}</AgentName> */}
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
        <Heading>Contact With {SingleAgent?.name}</Heading>
      </div>

      <div className="InputContainer">
        <div className="lable-input-div">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="lable-input-div">
          <label htmlFor="email">Email (Optional)</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="lable-input-div">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="text"
            placeholder="Enter your phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="lable-input-div">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows={4}
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>

      <div className="ButtonDiv" onClick={handleSubmit}>
        <button type="button" >
          Submit
        </button>
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