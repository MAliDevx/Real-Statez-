import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthPageLayout, FormCard } from "./verifyEmailStyle";

const VerifyEmail = () => {
  const navigate = useNavigate();

 

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AuthPageLayout>
      <FormCard>
        <div className="logo">
        </div>
        <div className="form-title">
          <h2>Enter Valid Email</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-fields">
            <div className="input-field">
              <label htmlFor="username">Username</label>
              <div className="field-wrap">
                <input type="text" id="username" placeholder="Enter your username" required />
              </div>
            </div>
          </div>

          <button type="submit" className="btn-primary-full"onClick={() => navigate("/otp-verification")}>Verify</button>
          <div className="btns-tray">
            <button
              type="button"
              className="btn-primary-outline"
              onClick={() => navigate("/login")}
              style={{
                marginTop: "1em",
                width: "100%",
                padding: "0.7em",
                border: "1px solid var(--primary-button)",
                background: "#fff",
                color: "var(--primary-button)",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              Back to Login
            </button>
          </div>
        </form>
 
      </FormCard>
    </AuthPageLayout>
  );
};

export default VerifyEmail;
