import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const Verification = () => {
  const { emailVerificaion } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");
  const otp = queryParams.get("otp");

  const verifyUser = async () => {
    try {
      const verificationData = { email, otp };
      const res = await emailVerificaion(verificationData);
      if (res?.success) {
        navigate("/login");
      }
    } catch{
        
    }
  }

  useEffect(() => {
    if (email && otp) {
      verifyUser();
    }
  }, [email, otp]);

  return <div>Verifying your account...</div>;
};

export default Verification;
