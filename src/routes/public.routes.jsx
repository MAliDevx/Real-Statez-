import {Routes, Route } from "react-router-dom";
import PropertyListing from "../pages/propertyListing/propertyListing";
import HomePage from "../pages/Home/home";
import Contact from "../pages/Contact/Contact";
import SinglePropertyDetail from "../pages/PropertyDetails/PropertyDetails";
import AuthLogin from "../Auth/Login/login";
import ResetPassword from "../Auth/ForgotPassword/forgotPassword";
import VerifyEmail from "../Auth/EmailVerify/verifyEmail";
import OtpVerify from "../Auth/OTP/OTP";
import SignUp from "../Auth/signUp/signUp";
import Agents from "../pages/Agents/Agents";
import SingleAgentDetail from "../pages/SingleAgentDetail/SingleAgentDetail";
import NotFoundPage from "../components/shared/pageNotFound/pageNotFount";
import Verification from "../Auth/Verification/mailVerification";

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