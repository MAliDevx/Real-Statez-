import {Routes, Route } from "react-router-dom";
import PropertyListing from "../pages/propertyListing/propertyListing";
import HomePage from "../pages/Home/home";
const PublicRoutes = () => {
    return (
        <Routes>
       <Route path="/" element={<HomePage />} />
       {/* <Route path="/property-listing" element={<PropertyListing />} /> */}
        </Routes>
    )
}

export default PublicRoutes;