import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthPageLayout, FormCard } from "./VerifyEmailStyle";

import { useAuth } from "../../../Context/AuthContext";

const VerifyEmail = () => {
  const { resetPassword } = useAuth()
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email) {
    setError("Email is required");
    return;
  }

  if (!validateEmail(email)) {
    setError("Invalid email format");
    return;
  }

  setError("");

  const payload = {
    email: email,
    logAs: 'user', 
  };

  try {
    const res = await resetPassword(payload); 
    localStorage.setItem("isResetPassword", "true"); 
  } catch (err) {
  }
};


  return (
    <AuthPageLayout>
      <FormCard>
        <div className="logo"></div>
        <div className="form-title">
          <h2>Enter Valid Email</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-fields">
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <div className={`field-wrap ${error ? "error-input" : ""}`}>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* {error && <p className="error-text">{error}</p>} */}
            </div>
          </div>

          <button type="submit" className="btn-primary-full">
            Verify
          </button>

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
