import "./App.css";
import FooterPage from "./components/shared/footer/footer";
import Header from "./components/shared/header/header";
import HomePage from "./pages/Home/home";
import GlobalStyling from "./styles/globalStyling";
import PropertyFilter from "./pages/PropertiseService/propertiseService";
import PublicRoutes from "./routes/public.routes";
function App() {
  return (
    <>
      <Header />
      {/* <HomePage /> */}
      <GlobalStyling/>
      <PublicRoutes />
      {/* <PropertyFilter /> */}
      <FooterPage />
    </>
  );
}

export default App;
