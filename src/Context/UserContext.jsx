import React, { createContext, useState } from "react";
import API from "../api/axios";
import {
  showSuccessToast,
  showErrorToast,
} from "../components/shared/toaster/Toaster";
import axios from "axios";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [userProfile, setUsersProfile] = useState([]);

  const fetchAllPropertise = async () => {
    const res = await API.get("/property/view-properties");
    const propertyArray = res.data.data || [];
    setUsers(propertyArray);
    return propertyArray;
  };

  const getUserById = async (id) => {
    const res = await API.get(`/users/${id}`);
    return res.data;
  };

  const updateUser = async (id, userData) => {
    const res = await API.put(`/users/${id}`, userData);
    return res.data;
  };

  const fetchUserProfile = async () => {
    const res = await API.get("/profile/view-profile");
    const propertyArray = res.data;
    setUsersProfile(propertyArray);
    return propertyArray;
  };

  const updateProfile = async (userData) => {
    try {
      const response = await API.put("/profile/edit-profile", userData);
      showSuccessToast("Updated Successfully ");
      return response;
    } catch (err) {
      showErrorToast("Profile edit failed");
    }
  };

  const uploadfile = async (userData) => {
    try {
      const response = await API.post("/upload/file", userData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      showSuccessToast("File Uploaded Successfully ");
      return response;
    } catch (err) {
      showErrorToast("File uploaded failed");
    }
  };

  return (
    <UserContext.Provider
      value={{
        fetchAllPropertise,
        getUserById,
        fetchUserProfile,
        updateUser,
        updateProfile,
        uploadfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => React.useContext(UserContext);

export default UserProvider;
