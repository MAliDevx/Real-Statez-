import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { StyledProfileWrapper } from "./UserProfile";
import { useUserContext } from "../../context/UserContext";
import API from "../../api/axios";
function UserProfile() {
  const { fetchUserProfile, updateProfile, uploadfile } = useUserContext();

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    country: "",
    city: "",
    state: "",
    email:'',
    zipCode:''
  });

  const [profileImage, setProfileImage] = useState(null);
  const [showImage, setShowImage] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));

      const formData = new FormData();
      formData.append("files", file);

      try {
        const response = await uploadfile(formData);
        const uploadedPath = response?.data?.data?.files?.[0]?.path;

        if (uploadedPath) {
          console.log("API/uploadedPath",API/uploadedPath);
          
          setProfileImage(uploadedPath);
        } else {
        }
      } catch (error) {
        console.error("Upload failed", error);
      }
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetchUserProfile();
      const user = response.data;

      setFormData({
        name: user.name || "",
        email: user.email || "",
        phoneNumber: user.phone || "",
        country: user.address.country || "",
        city: user.address.city || "",
        state: user.address.state || "",
        zipCode: user.address.zipCode || "",
      });

      if (user.image) {
        const image = `${API.defaults.baseURL}${user.image}`
        setShowImage(image);        
        setProfileImage(user.image);        

      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      phone: formData.phoneNumber,
      image: profileImage,
      address: {
        country: formData.country,
        state: formData.state,
        city: formData.city,
        zipCode: formData.zipCode,
      },
    };

    try {
      const response = await updateProfile(payload);
      fetchData()
    } catch (error) {
    }
  };

  return (
    <StyledProfileWrapper>
      {/* <div className="top-banner" /> */}

      <div className="profile-image-container">
        <img
          src={ showImage || "https://via.placeholder.com/100?text=User"}
          className="profile-image"
          alt="Profile"
        />
        <label htmlFor="profile-upload" className="upload-icon">
          <FaPlus />
        </label>
        <input
          id="profile-upload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        <div className="userDetails">
          <p className="userName">{formData.name || "User Name"}</p>
          <p>{formData.email || "user@example.com"}</p>{" "}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
                <div className="form-row">

        <div className="form-group">
          <label>Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
                <div className="form-group">
          <label>Phone Number</label>
          <input
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          </div>
          </div>
        <div className="form-row">

          <div className="form-group">
            <label>Country</label>
            <input
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
          <label>State</label>
          <input
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>City</label>
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
                    <div className="form-group">
            <label>Zip Code</label>
            <input
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="submit-button">
          Save Changes
        </button>
      </form>
    </StyledProfileWrapper>
  );
}
export default UserProfile;
