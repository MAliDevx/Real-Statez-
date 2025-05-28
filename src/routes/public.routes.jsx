import {Routes, Route } from "react-router-dom";
import PropertyListing from "../Pages/property-page/property-listing/PropertyListing";
import HomePage from "../Pages/home-Page/home/home";
import Contact from "../Pages/Contact/Contact";
import SinglePropertyDetail from "../pages/property-page/property-details1/PropertyDetails";
import AuthLogin from "../Pages/auth/login/login";
import ResetPassword from "../Pages/auth/forgot-password/forgotPassword";
import VerifyEmail from "../Pages/auth/email-verify/verifyEmail";
import OtpVerify from "../Pages/auth/otp/OTP";
import SignUp from "../Pages/auth/sign-up/signUp";
import Agents from "../pages/agent-page/agents/Agents";
import SingleAgentDetail from "../pages/agent-page/single-agent-detail/SingleAgentDetail";
import NotFoundPage from "../components/shared/page-not-found/PageNotFount";
import Verification from "../Pages/auth/email-verify/verifyEmail";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/property-listing" element={<PropertyListing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/propertydetails/:id" element={<SinglePropertyDetail />} />
      <Route path="/login" element={<AuthLogin />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/otp-verification" element={<OtpVerify />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/agents" element={<Agents />} />
      <Route path="/agent-detail/:id" element={<SingleAgentDetail />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="*" element={<NotFoundPage />} />

    </Routes>
  )
}

export default PublicRoutes;