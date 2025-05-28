import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthPageLayout, FormCard } from "./VerifyEmailStyle";
import { showSuccessToast, showErrorToast } from "../../../components/shared/toaster/Toaster";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      showErrorToast('Email is required')
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email format");
      showErrorToast('Invalid email format')

      return;
    }

    setError("");
    showSuccessToast('Verified Check email')
    navigate("/otp-verification");
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
