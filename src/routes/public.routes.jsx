import {Routes, Route } from "react-router-dom";
import PropertyListing from "../pages/propertyListing/propertyListing";
import HomePage from "../pages/Home/home";
import Contact from "../pages/Contact/Contact";
const PublicRoutes = () => {
    return (
        <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/property-listing" element={<PropertyListing />} />
       <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}

export default PublicRoutes;