import React, { createContext, useState } from "react";
import API from "../api/axios";
import {
  showSuccessToast,
  showErrorToast,
} from "../components/shared/toaster/Toaster";
import axios from "axios";

export const AgentContext = createContext();

const UserProvider = ({ children }) => {
const getAllAgents = async() => {
   const data = await API.get('')
}

  return (
    <AgentContext.Provider
      value={{
        fetchAllAgents
      }}
    >
      {children}
    </AgentContext.Provider>
  );
};

export const useAgentContext = () => React.useContext(AgentContext);

export default UserProvider;
