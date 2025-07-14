import React, { createContext, useState } from "react";
import API from "../api/axios";
import {
  showSuccessToast,
  showErrorToast,
} from "../components/shared/toaster/Toaster";
import axios from "axios";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
const fetchAllPropertise = async ({ page = 1, limit = 10, filters = {} } = {}) => {
  try {
    const query = new URLSearchParams({
      page,
      limit,
      ...filters
    }).toString();

    const res = await API.get(`/property/view-properties?${query}`);
    const propertyArray = res.data.data;
    return propertyArray;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
};

  const viewSingleProperty = async (id) => {
    const res = await API.get(`/property/view-property/${id}`);
    const propertyArray = res.data.data || [];
    return propertyArray;
  };

  const fetchUserProfile = async () => {
    const res = await API.get("/profile/view-profile");
    const propertyArray = res.data;
    return propertyArray;
  };


  const updateProfile = async (userData) => {
    try {
      const response = await API.put("/profile/edit-profile", userData);
      showSuccessToast("Your profile has been updated successfully.");
      return response;
    } catch (err) {
      if (err.response?.status === 400) {
        showErrorToast("Invalid profile data. Please review and try again.");
      } else if (!err.response) {
        showErrorToast("Network error. Please check your internet connection.");
      } else {
        showErrorToast("Failed to update profile. Please try again.");
      }
    }
  };


const uploadfile = async (userData) => {
  try {
    const response = await API.post("/upload/file", userData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    showSuccessToast("File uploaded successfully.");
    return response;
  } catch (err) {
    if (err.response?.status === 413) {
      showErrorToast("File is too large. Please upload a smaller file.");
    } else if (!err.response) {
      showErrorToast("Network error. Please check your internet connection.");
    } else {
      showErrorToast("File upload failed. Please try again.");
    }
  }
};

const addFevorite = async (userData) => {
  try {
    const response = await API.post("/favorite/add-favorite", userData);
    showSuccessToast("Property has been added to your favorites.");
    return response;

  } catch (err) {
    if (err.response?.status === 409) {
      showErrorToast("This property is already in your favorites.");
    } else if (err.response?.status === 401) {
      showErrorToast("You must be logged in to add favorites.");
    } else if (!err.response) {
      showErrorToast("Network error. Please check your internet connection.");
    } else {
      showErrorToast("Failed to add the property to your favorites.");
    }

    throw err;
  }
};

const fetchAllFevorite = async (page, limit) => {
  try{
  const res = await API.get(`/favorite/view-favorites?page=${page}&limit=${limit}`);
    const propertyArray = res.data;
    return propertyArray;
  } catch (error) {
  }
};

  const deleteFavorite = async (_id) => {
    const res = await API.delete(`/favorite/delete-favorite/${_id}`);
    const propertyArray = res.data.data || [];
    showSuccessToast("Property has been successfully removed from your favorites.");

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
