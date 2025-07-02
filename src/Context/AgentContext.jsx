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
  console.log("agent data", data);
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

  return (
    <AgentContext.Provider
      value={{
        getAllAgents,
        getSingleAgent,
        contactAgent
      }}
    >
      {children}
    </AgentContext.Provider>
  );
};

export const useAgentContext = () => React.useContext(AgentContext);

export default AgentProvider;
