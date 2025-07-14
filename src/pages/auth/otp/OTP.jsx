import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthPageLayout, FormCard, OtpInputStyles } from "./OTPStyle";
import OtpInput from "react-otp-input";
import { showSuccessToast, showErrorToast } from "../../../components/shared/toaster/Toaster";

const OtpVerify = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (otp.length !== 5 || !/^\d+$/.test(otp)) {
      setError("Please enter the 5-digit OTP using numbers only.");
      showErrorToast("Please enter the 5-digit OTP using numbers only.");
      return;
    }

    console.log("OTP entered:", otp); 
    showSuccessToast("OTP verified successfully.");
    navigate("/reset-password");
  };

  return (
    <AuthPageLayout>
      <FormCard>
        <div className="form-title">
          <h3>OTP Verification</h3>
        </div>

        <form onSubmit={handleSubmit}>
          <OtpInputStyles>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={5}
              isInputNum={true}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} inputMode="numeric" />}
            />
          </OtpInputStyles>

          {error && (
            <div style={{ color: "red", marginTop: "1em", textAlign: "center" }}>{error}</div>
          )}

          <button type="submit" className="btn-primary-full">
            Verify OTP
          </button>

          <div className="sign-up">
            Didn't receive OTP?
            <a onClick={() => alert("Resending OTP...")}>Resend</a>
          </div>
        </form>
      </FormCard>
    </AuthPageLayout>
  );
};

export default OtpVerify;
