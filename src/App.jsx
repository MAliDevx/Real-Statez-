import "./App.css";
import React, { useEffect, useState } from "react";
import FooterPage from "./components/shared/footer/Footer.jsx";
import Header from "./components/shared/header/Header";
import PublicRoutes from "./routes/Public.routes";
import { FaAngleUp } from "react-icons/fa6";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ScrollTop } from "./styles/CommanClasses";
import AuthProvider from "./Context/AuthContext";
import UserProvider from "./context/UserContext";
import GlobalStyling from "./styles/GlobalStyling";
import { LoadingProvider, useLoading } from "./Context/LoadingContext";
import { setLoadingHandler } from "./api/axios";
import GlobalLoader from "./Components/shared/loader/GlobalLoader"; 

function AppWrapper() {
  const { setLoading } = useLoading();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setLoadingHandler(setLoading);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const toggleVisibility = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <ToastContainer
        autoClose={2000}
        position="top-right"
        style={{ zIndex: 99999 }}
      />

      <ScrollTop onClick={scrollToTop} style={{ display: visible ? "flex" : "none" }}>
        <FaAngleUp />
      </ScrollTop>

      <GlobalLoader /> 

      <AuthProvider>
        <UserProvider>
          <Header />
          <GlobalStyling />
          <PublicRoutes />
          <FooterPage />
        </UserProvider>
      </AuthProvider>
    </>
  );
}

function App() {
  return (
    <LoadingProvider>
      <AppWrapper />
    </LoadingProvider>
  );
}

export default App;
