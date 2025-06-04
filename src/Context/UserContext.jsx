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
    const propertyArray = res.data.data;
    setUsers(propertyArray);
    return propertyArray;
  };
  const viewSingleProperty = async (id) => {
    const res = await API.get(`/property/view-property/${id}`);
    const propertyArray = res.data.data || [];
    return propertyArray;
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
const addFevorite = async (userData) => {
  try {
    const response = await API.post("/favorite/add-favorite", userData);
    return response;
  } catch (err) {
    if (err.status === 409) {
      showErrorToast("Already in favorites");
    } else if (!err.response) {
      showErrorToast("Please check your Internet connection.");
    } else {
      showErrorToast("Failed to add to favorites");
    }

    throw err;
  }
};
const fetchAllFevorite = async (page = 1, limit = 6) => {
  try{
  const res = await API.get(`/favorite/view-favorites?page=${page}&limit=${limit}`);

    const propertyArray = res.data;
    setUsersProfile(propertyArray);
    return propertyArray;
  } catch (error) {
    console.error("Error fetching favorites:", error);
  }
};

  const deleteFavorite = async (_id) => {
    const res = await API.delete(`/favorite/delete-favorite/${_id}`);
    const propertyArray = res.data.data || [];
    setUsers(propertyArray);
    return propertyArray;
  };

  return (
    <UserContext.Provider
      value={{
        fetchAllPropertise,
        fetchUserProfile,
        updateProfile,
        uploadfile,
        addFevorite,
        fetchAllFevorite,
        viewSingleProperty,
        deleteFavorite
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => React.useContext(UserContext);

export default UserProvider;
