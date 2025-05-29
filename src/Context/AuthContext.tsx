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
      showSuccessToast("Check Email");
      // return response.data
      // navigate("/");
    } catch (err) {
      showErrorToast("Registration failed");
    }
  };
const emailVerificaion = async (userData) => {
  try {
    const response = await axios.post("/auth/verify", userData);
    showSuccessToast("Email Verified");
    return response.data; 
  } catch (err) {
    showErrorToast("Otp Expired Verify again");
    return { success: false }; 
  }
};



  const login = async (credentials) => {
    try {
      const res = await axios.post("/auth/login", credentials);
      const { token, user } = res.data.data;
      setAuthUser(res.data.user);      
      localStorage.setItem("token", token);
      showSuccessToast("Logged in successfully!");
      navigate("/");
    } catch (err) {
      showErrorToast("Login failed invalid credential");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuthUser(null);
    showSuccessToast("Logged out successfully!");
  };

  const resetPassword = async (email) => {
    try {
      await axios.post("/auth/forget-password", email );
      showSuccessToast("Password reset link sent to email.");
    } catch (err) {
      showErrorToast("Reset failed");
    }
  };

  return (
    <AuthContext.Provider value={{ register,emailVerificaion, login, logout, resetPassword, authUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
