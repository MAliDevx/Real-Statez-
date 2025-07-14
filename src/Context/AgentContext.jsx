import React, { createContext, useState } from "react";
import API from "../api/axios";
import {
  showSuccessToast,
  showErrorToast,
} from "../components/shared/toaster/Toaster";
import axios from "axios";

export const AgentContext = createContext();

const AgentProvider = ({ children }) => {
const getAllAgents = async (filters = {}) => {
  const queryString = new URLSearchParams(filters).toString();
  const data = await API.get(`/agent/view-agents?${queryString}`);
  return data;
};


const getSingleAgent = async (id) =>  {
  const response = await API.get(`/agent/view-agent/${id}`)
  return response
}

const contactAgent = async (payload) =>{

  const response = API.post("/notification/send-notification", payload)
  return response
}

  const getALlCities = async () =>{
    const data = await API.get(`/city/view-cities`);
    return data.data.data.data
  }
  return (
    <AgentContext.Provider
      value={{
        getAllAgents,
        getSingleAgent,
        contactAgent,
        getALlCities
      }}
    >
      {children}
    </AgentContext.Provider>
  );
};

export const useAgentContext = () => React.useContext(AgentContext);

export default AgentProvider;
