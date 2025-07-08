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
import DataNotFound from "../../../components/shared/not-found";

const Agents = () => {
  const allCity = [
    {value:"none", name:"None"},
    { value:"uk", name: "UK" },
    { value:"pakistan",name: "Pakistan" },
    {value:"uae", name: "UAE" },
  ];
  const allCatogery = [
    { name: "House" },
    { name: "Appartment" },
    { name: "Bangla" },
    { name: "Plot" },
  ];
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();
  const { getAllAgents } = useAgentContext();
  const [agents, setAgents] = useState([]);
  const [formData, setFormData] = useState( {name: ""} );
  const [inputError, setInputError] = useState(false)

      const fetchAgents = async () => {
      const data = await getAllAgents();
      setAgents(data?.data?.data?.data || []);
    };
useEffect(() => {
  const autoFilter = async () => {
    // Don't filter if both are empty
    if (!formData.name.trim() && !city.trim()) {
      setInputError(false);
      fetchAgents(); // show all agents
      return;
    }

    const filters = {};

    if (formData.name.trim()) filters.name = formData.name.trim();
    if (city.trim()) filters.city = city.trim();

    const data = await getAllAgents(filters);
    setAgents(data?.data?.data?.data || []);
    setInputError(false);
  };

  autoFilter();
}, [formData.name, city]);


  const cityOptions = allCity.map((city) => ({
    label: city.name,
    value: city.value,
  }));
const handleCityChange = (selectedOption) => {
  if (selectedOption?.value === "none") {
    setCity(""); // reset city filter
  } else {
    setCity(selectedOption?.value || "");
  }
};



const filterAgent = async () => {
  if (!formData.name && !city) {
    setInputError(true);
    return;
  }

  const filters = {};

  if (formData.name.trim() !== "") {
    filters.name = formData.name.trim();
  }

  if (city.trim() !== "") {
    filters.city = city.trim();
  }

  const data = await getAllAgents(filters);
  setAgents(data?.data?.data?.data || []);
  setInputError(false);
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
              <div className="lable-input-div">
                <label htmlFor="agentName">Enter Agent Name</label>
           <input
  id="agentName"
  type="text"
  placeholder="Enter agent name"
  value={formData.name}
  onChange={(e) =>
    setFormData({ ...formData, name: e.target.value })
  }
  required
/>
 {inputError && <p className="error-text">One Field is required</p>}
                {/* <label htmlFor="category">All Types</label>
                <Select
                  id="category"
                  options={categoryOptions}
                  value={categoryOptions.find(
                    (option) => option.value === categoryOptions
                  )}
                  onChange={handleCategoryChange}
                  placeholder="All Types"
                  styles={customSelectStyles}
                  required
                /> */}

                <label htmlFor="city">All Cities</label>
                <Select
                  id="city"
                  options={cityOptions}
                  value={cityOptions.find((option) => option.value === city)}
                  onChange={handleCityChange}
                  placeholder="All Cities"
                  styles={customSelectStyles}
                  required

                />
                 {inputError && <p className="error-text">One Field is required</p>}

              {/* </div> */}
            </div>

            {/* <div className="ButtonDiv" onClick={filterAgent}>
              <button type="button">Search Agents</button>
              <FaSearch />
            </div> */}
          </SearchagentConatiner>
        </PropertyContainerMaindiv>

        <AgentGridContainer>
                        {agents.length === 0 ? (
    <DataNotFound message="Agnet Not Found" />
  ) : (
          <div className="grid-container">

            {agents.map((agent) => (
              <Card
                key={agent._id}
                onClick={() => navigate(`/agent-detail/${agent._id}`)}
              >
                <div className="image-wrapper">
                  <img
                    src={`${API.defaults.baseURL}/public/${agent.image}`}
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
  )}

        </AgentGridContainer>
      </WrapperContainer>
    </>
  );
};

export default Agents;
