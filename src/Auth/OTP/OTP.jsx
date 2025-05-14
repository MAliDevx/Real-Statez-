import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthPageLayout, FormCard } from "./OTPStyle";
import OtpInput from "react-otp-input";

const OtpVerify = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (otp.length !== 5) {
      setError("Please enter the 5-digit OTP.");
      return;
    }

    alert("OTP verified!");
    navigate("/reset-password"); 
  };

  return (
    <AuthPageLayout>
      <FormCard>
        <div className="form-title">
          <h3>OTP Verification</h3>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="otp-input-wrapper">
          <OtpInput
  value={otp}
  onChange={setOtp}
  numInputs={5}
  isInputNum={true} 
  renderSeparator={<span>*</span>}
  renderInput={(props) => <input {...props} inputMode="numeric" />} 
  inputStyle={{
    width: '2.5em',
    height: '2.5em',
    fontSize: '1.2rem',
    margin: '0 0.5em',
    textAlign: 'center',
    border: '1px solid #ccc',
    outline: 'none',
  }}
/>

          </div>

          {error && <div style={{ color: "red", marginTop: "1em" }}>{error}</div>}

          <button type="submit" className="btn-primary-full" onClick={() => navigate("/reset-password")}>
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
