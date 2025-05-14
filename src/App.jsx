import "./App.css";
import React, {useState, useEffect} from "react";
import FooterPage from "./components/shared/footer/footer";
import Header from "./components/shared/header/header";
import HomePage from "./pages/Home/home";
import GlobalStyling from "./styles/globalStyling";
import PropertyFilter from "./pages/PropertiseService/propertiseService";
import PublicRoutes from "./routes/public.routes";
import { FaAngleUp } from "react-icons/fa6";

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
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '22px',
          color: '#fff',
          border: 'none',
          padding: '5px 8px',
          borderRadius: '6px',
          cursor: 'pointer',
          zIndex: 1000,
          backgroundColor: '#9A9A9B',
          fontWeight: 'bold',
          fontSize:'20px'

        }}
      >
        <FaAngleUp />
      </button>
      <Header />
      <GlobalStyling/>
      <PublicRoutes />
      <FooterPage />
    </>
  );
}

export default App;
