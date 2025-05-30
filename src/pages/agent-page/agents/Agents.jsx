import React, { useState } from "react";
import Select from "react-select";
// import agentsiamge from "../../assets/Images/team7.jpg";
// import agentsiamge1 from "../../assets/Images/team11.jpg";
// import agentsiamge2 from "../../assets/Images/team12.jpg";
// import agentsiamge3 from "../../assets/Images/team13.jpg";
import agentsiamge from "../../../assets/Images/team7.jpg";
import agentsiamge1 from "../../../assets/Images/team11.jpg";
import agentsiamge2 from "../../../assets/Images/team12.jpg";
import agentsiamge3 from "../../../assets/Images/team13.jpg";
import {
  AgentContainer,
  WrapperContainer,
  AgentGridContainer,
  SearchagentConatiner,
  PropertyContainerMaindiv,
  PropertyCetagoriesContainer,
  Subheading,
  customSelectStyles,
  Heading,
  PropertyAttachmentDiv,
  Card,
  ImageWrapper,
  Badge,
  Content,
  Name,
  Title,
  InfoRow,
  Email,
  SocialIcons,
} from "./AgentsStyle";

import {
  FaSearch,
  FaRegFilePdf,
  FaRegFileWord,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaBuilding,
} from "react-icons/fa";

import { TfiYoutube } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

const Agents = () => {
  const propertyCategories = [
    { name: "Apartment", count: 14 },
    { name: "Villa", count: 8 },
    { name: "House", count: 12 },
    { name: "Studio", count: 5 },
  ];

  const [primaryAgent, setPrimaryAgent] = useState(null);
  const [backupAgent, setBackupAgent] = useState(null);
  const navigate = useNavigate();
  const dummyAgents = [
    {
      id: 1,
      name: "Christine",
      title: "Property Agent",
      office: "123 456 789",
      mobile: "123 456 789",
      fax: "342 655",
      email: "christine@property.com",
      listings: 20,
      image: agentsiamge,
    },
    {
      id: 2,
      name: "Michael Smith",
      title: "Senior Agent",
      office: "987 654 321",
      mobile: "987 654 321",
      fax: "765 432",
      email: "michael@property.com",
      listings: 15,
      image: agentsiamge2,
    },
    {
      id: 3,
      name: "Sarah Lee",
      title: "Rental Agent",
      office: "456 789 123",
      mobile: "456 789 123",
      fax: "123 789",
      email: "sarah@property.com",
      listings: 10,
      image: agentsiamge1,
    },
    {
      id: 4,
      name: "Sarah Lee",
      title: "Rental Agent",
      office: "456 789 123",
      mobile: "456 789 123",
      fax: "123 789",
      email: "sarah@property.com",
      listings: 10,
      image: agentsiamge3,
    },
    {
      id: 5,
      name: "Sarah Lee",
      title: "Rental Agent",
      office: "456 789 123",
      mobile: "456 789 123",
      fax: "123 789",
      email: "sarah@property.com",
      listings: 10,
      image: agentsiamge3,
    },
    {
      id: 6,
      name: "Sarah Lee",
      title: "Rental Agent",
      office: "456 789 123",
      mobile: "456 789 123",
      fax: "123 789",
      email: "sarah@property.com",
      listings: 10,
      image: agentsiamge3,
    },
    {
      id: 7,
      name: "Sarah Lee",
      title: "Rental Agent",
      office: "456 789 123",
      mobile: "456 789 123",
      fax: "123 789",
      email: "sarah@property.com",
      listings: 10,
      image: agentsiamge3,
    },
    {
      id: 8,
      name: "Sarah Lee",
      title: "Rental Agent",
      office: "456 789 123",
      mobile: "456 789 123",
      fax: "123 789",
      email: "sarah@property.com",
      listings: 10,
      image: agentsiamge,
    },
  ];

  const agentOptions = dummyAgents.map((agent) => ({
    value: agent.id,
    label: agent.name,
  }));

  return (
    <>
      <AgentContainer>
        <div className="imageContainer">
          <div className="textContainer">
            <h2>agents property</h2>
            <div>
              <span>home </span> / <span>agents</span> /{" "}
              <span> agents property</span>
            </div>
          </div>
        </div>
      </AgentContainer>
      <WrapperContainer>
        <PropertyContainerMaindiv>
          <SearchagentConatiner>
            <div className="heading-container">
              <Heading>find agents</Heading>
            </div>

            <div className="InputContainer">
              <div className="lable-input-div">
                <label htmlFor="agentName">Enter Agent Name</label>
                <input
                  id="agentName"
                  type="text"
                  placeholder="Enter agent name"
                />

                <label htmlFor="primaryAgent">All Categories</label>
                <Select
                  id="primaryAgent"
                  options={agentOptions}
                  value={agentOptions.find(
                    (option) => option.value === primaryAgent
                  )}
                  onChange={(selectedOption) =>
                    setPrimaryAgent(selectedOption.value)
                  }
                  placeholder="All Categories
"
                  styles={customSelectStyles}
                />

                <label htmlFor="backupAgent">All Cities</label>
                <Select
                  id="backupAgent"
                  options={agentOptions}
                  value={agentOptions.find(
                    (option) => option.value === backupAgent
                  )}
                  onChange={(selectedOption) =>
                    setBackupAgent(selectedOption.value)
                  }
                  placeholder="All Cities"
                  styles={customSelectStyles}
                />
              </div>
            </div>

            <div className="ButtonDiv">
              <button type="button">Search Agents</button>
              <FaSearch />
            </div>
          </SearchagentConatiner>

          <PropertyCetagoriesContainer>
            <Subheading>
              <Heading>Categories Property</Heading>
            </Subheading>
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
            <div className="attachment-container" >
              <Heading>Property Attachments</Heading>
              <div className="button-container">
                <div className="button-div">
                  <FaRegFilePdf />
                  <button>Download Documents.Pdf</button>
                </div>
                <div className="button-div">
                  <FaRegFileWord />
                  <button>Presentation 2016-17 .Doc</button>
                </div>
              </div>
            </div>
          </PropertyAttachmentDiv>
        </PropertyContainerMaindiv>
        <AgentGridContainer>
          <div className="grid-container">
            {/* Dynamic Cards Section */}
            {dummyAgents.map((agent) => (
              <Card
                key={agent.id}
                onClick={() => navigate(`/agent-detail/${agent.id}`)}
              >
                <ImageWrapper>
                  <img src={agent.image} alt={agent.name} />
                  <Badge>{agent.listings} LISTING</Badge>
                </ImageWrapper>
                <Content>
                  <Name>{agent.name}</Name>
                  <Title>{agent.title}</Title>

                  <InfoRow>
                    <FaBuilding /> <span>Office:</span>{" "}
                    <span>{agent.office}</span>
                  </InfoRow>
                  <InfoRow>
                    <FaPhoneAlt /> <span>Mobile:</span>{" "}
                    <span>{agent.mobile}</span>
                  </InfoRow>
                  <InfoRow>
                    <FaFax /> <span>Fax:</span> <span>{agent.fax}</span>
                  </InfoRow>
                  <InfoRow>
                    <FaEnvelope /> <span>Email:</span>{" "}
                    <span>{agent.email}</span>
                  </InfoRow>

                  <SocialIcons>
                    <FaFacebookF style={{ background: "rgb(59, 89, 153)" }} />
                    <FaTwitter style={{ background: "rgb(85, 172, 238)" }} />
                    <FaLinkedinIn style={{ background: "rgb(0, 119, 181)" }} />
                    <FaInstagram style={{ background: "rgb(217, 28, 172)" }} />
                    <TfiYoutube style={{ background: "rgb(204, 24, 30)" }} />
                  </SocialIcons>
                </Content>
              </Card>
            ))}
          </div>
        </AgentGridContainer>
      </WrapperContainer>
    </>
  );
};

export default Agents;
