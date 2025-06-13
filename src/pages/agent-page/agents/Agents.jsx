import React, { useEffect, useState } from "react";
import Select from "react-select";
import {
  AgentContainer,
  WrapperContainer,
  AgentGridContainer,
  SearchagentConatiner,
  PropertyContainerMaindiv,
  customSelectStyles,
  Card,
  Badge,
  Content,
} from "./AgentsStyle";

import { FaSearch, FaPhoneAlt, FaEnvelope, FaBuilding } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useAgentContext } from "../../../context/AgentContext";
import API from "../../../api/axios";

const Agents = () => {
  const allCity = [
    { name: "UK" },
    { name: "Pakistan" },
    { name: "UAE" },
    { name: "Saudi Arabia" },
  ];
  const allCatogery = [
    { name: "House" },
    { name: "Appartment" },
    { name: "Bangla" },
    { name: "Plot" },
  ];
  const [primaryAgent, setPrimaryAgent] = useState(null);
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();
  const { getAllAgents } = useAgentContext();
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      const data = await getAllAgents();
      setAgents(data?.data?.data?.data || []);
    };
    fetchAgents();
  }, []);

  const cityOptions = allCity.map((city) => ({
    label: city.name,
    value: city.name,
  }));
  const categoryOptions = allCatogery.map((catogery) => ({
    label: catogery.name,
    value: catogery.name,
  }));
  const handleCityChange = (selectedOption) => {
    if (selectedOption) {
      setCity(selectedOption.value);
      console.log("Selected city:", selectedOption.value);
      
    }
  };
  const handleCategoryChange = (selectedOption) => {
    if (selectedOption) {
      setCategory(selectedOption.value);
    }
  };

  return (
    <>
      <AgentContainer />

      <WrapperContainer>
        <PropertyContainerMaindiv>
          <SearchagentConatiner>
            <div className="heading-container">
              <h4>Find Agents</h4>
            </div>

            {/* <div className="InputContainer"> */}
              <div className="lable-input-div">
                <label htmlFor="agentName">Enter Agent Name</label>
                <input
                  id="agentName"
                  type="text"
                  placeholder="Enter agent name"
                />

                <label htmlFor="category">All Categories</label>
                <Select
                  id="category"
                  options={categoryOptions}
                  value={categoryOptions.find(
                    (option) => option.value === categoryOptions
                  )}
                  onChange={handleCategoryChange}
                  placeholder="All Categories"
                  styles={customSelectStyles}
                />

                <label htmlFor="city">All Cities</label>
                <Select
                  id="city"
                  options={cityOptions}
                  value={cityOptions.find((option) => option.value === city)}
                  onChange={handleCityChange}
                  placeholder="All Cities"
                  styles={customSelectStyles}
                />
              {/* </div> */}
            </div>

            <div className="ButtonDiv">
              <button type="button">Search Agents</button>
              <FaSearch />
            </div>
          </SearchagentConatiner>
        </PropertyContainerMaindiv>

        <AgentGridContainer>
          <div className="grid-container">
            {agents.map((agent) => (
              <Card
                key={agent._id}
                onClick={() => navigate(`/agent-detail/${agent._id}`)}
              >
                <div className="image-wrapper">
                  <img
                    src={`${API.defaults.baseURL}${agent.image}`}
                    alt={agent.name}
                  />
                  <Badge>{agent.propertyListing} LISTING</Badge>
                </div>
                <Content>
                  <h3>{agent.name}</h3>
                  <div className="agent-information">
                    <FaBuilding /> <span>Office:</span>{" "}
                    <span>{agent.phone}</span>
                  </div>
                  <div className="agent-information">
                    <FaPhoneAlt /> <span>Mobile:</span>{" "}
                    <span>{agent.phone}</span>
                  </div>
                  <div className="agent-information">
                    <FaEnvelope /> <span>Email:</span>{" "}
                    <span>{agent.email}</span>
                  </div>
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
