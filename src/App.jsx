import "./App.css";
import FooterPage from "./components/shared/footer/footer";
import Header from "./components/shared/header/header";
import HomePage from "./pages/Home/home";
import GlobalStyling from "./styles/globalStyling";
import PropertyFilter from "./pages/PropertiseService/propertiseService";
function App() {
  return (
    <>
      <Header />
      <GlobalStyling />
      <HomePage />
      <PropertyFilter />
      <FooterPage />
    </>
  );
}

export default App;
