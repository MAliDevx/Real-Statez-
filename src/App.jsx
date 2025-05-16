import "./App.css";
import React, {useState, useEffect} from "react";
import FooterPage from "./components/shared/footer/footer";
import Header from "./components/shared/header/header";
import HomePage from "./pages/Home/home";
import GlobalStyling from "./styles/globalStyling";
import PropertyFilter from "./pages/PropertiseService/propertiseService";
import PublicRoutes from "./routes/public.routes";
import { FaAngleUp } from "react-icons/fa6";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ScrollTop } from "./styles/commanClasses";
ScrollTop
function App() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  return (
    <>
          <ToastContainer   autoClose={2000} position="top-right" style={{ zIndex: 99999 }} />

      <ScrollTop onClick={scrollToTop}>
        <FaAngleUp />
      </ScrollTop>
      <Header />
      <GlobalStyling/>
      <PublicRoutes />
      <FooterPage />
    </>
  );
}

export default App;
