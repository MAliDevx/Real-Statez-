import { createContext, useContext, useState } from "react";
import axios from "../api/axios"; 
import { showSuccessToast, showErrorToast } from "../components/shared/toaster/Toaster";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);

  const register = async (userData) => {
    try {
      const response = await axios.post("/auth/register", userData);
      showSuccessToast("Please verify your email address to complete registration.");
    } catch (err) {
        if (err.response?.status === 409) {
          showErrorToast("An account with this email already exists.");
        } else if (!err.response) {
          showErrorToast("Network error. Please check your internet connection.");
        } else {
          showErrorToast("Registration failed. Please try again.");
        }

        throw err;
    }
  };
const emailVerification = async (userData) => {
  try {
    const response = await axios.post("/auth/verify", userData);
    showSuccessToast("Your email has been successfully verified.");
    return response.data;
  } catch (err) {
    if (err.response?.status === 410) {
      showErrorToast("The verification code has expired. Please request a new one.");
    } else if (err.response?.status === 400) {
      showErrorToast("Invalid verification code. Please try again.");
    } else {
      showErrorToast("Email verification failed. Please try again later.");
    }

    return { success: false };
  }
};



const login = async (credentials) => {
  try {
    const res = await axios.post("/auth/login", credentials);
    const { token, user } = res.data.data;

    setAuthUser(user);
    localStorage.setItem("token", token);

    showSuccessToast("You’ve successfully logged in.");
    navigate("/");
  } catch (err) {
    if (err.response?.status === 401) {
      showErrorToast("Invalid email or password. Please try again.");
    } else if (!err.response) {
      showErrorToast("Network error. Please check your internet connection.");
    } else {
      showErrorToast("Login failed. Please try again later.");
    }
  }
};

  const logout = () => {
    localStorage.removeItem("token");
    setAuthUser(null);
    showSuccessToast("You have been logged out successfully.");
  };

  const resetPassword = async (email) => {
    try {
      await axios.post("/auth/forget-password", { email });
      showSuccessToast("A password reset link has been sent to your email.");
    } catch (err) {
      if (err.response?.status === 404) {
        showErrorToast("No account found with this email address.");
      } else if (!err.response) {
        showErrorToast("Network error. Please check your internet connection.");
      } else {
        showErrorToast("Failed to send password reset link. Please try again.");
      }
    }
  };

  const changePassword = async (credentials) => {
    try {
      await axios.post("/auth/reset-password", credentials);
      showSuccessToast("Your password has been reset successfully.");
    } catch (err) {
      if (err.response?.status === 410) {
        showErrorToast("The OTP has expired. Please verify your email again.");
      } else if (err.response?.status === 400) {
        showErrorToast("Invalid OTP or request. Please try again.");
      } else if (!err.response) {
        showErrorToast("Network error. Please check your internet connection.");
      } else {
        showErrorToast("Password reset failed. Please try again.");
      }
    }
  };

  return (
    <AuthContext.Provider value={{ register, login, logout, resetPassword, authUser,changePassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
