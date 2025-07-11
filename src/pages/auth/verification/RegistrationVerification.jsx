import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";
import { Button } from "../../../styles/CommanClasses";
import axios from "axios"; // Required for API call to /reset-email

const RegistrationVerification = () => {
  const [error, setError] = useState(false);
  const { emailVerificaion } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");
  const otp = queryParams.get("otp");

  const verifyUser = async () => {
    try {
      const verificationData = {
        email: email,
        token: otp,
      };
      const res = await emailVerificaion(verificationData);
      if (res?.success) {
        setError(false);
        navigate("/login");
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    if (email && otp) {
      verifyUser();
    }
  }, [email, otp]);
  const resendVerification = async () => {
    try {
      const res = await axios.post("/reset-email", { email });
      alert("Verification email sent again!");
    } catch (err) {
      alert("Failed to resend email.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
     {!error && ( <p>Verifying your account...</p> )}
      {error && (
        <>
          <p style={{ color: "red" }}>Verification failed. Please try again.</p>
          <Button style={{width:'190px', margin:'12px auto', padding:'8px 5px'}} onClick={resendVerification}>Resend Verification Email</Button>
        </>
      )}
    </div>
  );
};

export default RegistrationVerification;