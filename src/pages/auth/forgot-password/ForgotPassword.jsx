import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthPageLayout, FormCard } from "./ForgotPasswordStyle";
import { showSuccessToast, showErrorToast } from "../../../components/shared/toaster/Toaster";
import { useLocation} from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import axios from "axios"; 


const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const { changePassword ,emailVerificaion} = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email",);
  const otp = queryParams.get("otp");

  const newPasswordRef = useState(null);
  const confirmPasswordRef = useState(null);

const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  if (!newPassword) {
    setError("Please enter a new password.");
    showErrorToast("Please enter a new password.");
    newPasswordRef.current.focus();
    return;
  }

  if (!confirmPassword) {
    setError("Please confirm your password.");
    showErrorToast("Please confirm your password.");
    confirmPasswordRef.current.focus();
    return;
  }

  if (newPassword !== confirmPassword) {
    setError("Passwords do not match.");
    showErrorToast("Passwords do not match.");
    confirmPasswordRef.current.focus();
    return;
  }

  const payload = {
    logAs: 'user',
    email: email,
    newPassword: newPassword,
    token: otp
  };

  try {
    const res = await changePassword(payload);
    console.log(res);
    navigate("/");
  } catch (error) {
   navigate('/verify-email')


  }
};


  return (
    <AuthPageLayout>
      <FormCard>
        <div className="form-title">
          <h2>Change Password</h2>
        </div>

        <form>
          <div className="form-fields">
            <div className="input-field">
              <label htmlFor="newPassword">New Password</label>
              <div className="field-wrap password-wrap">
                <input
                  type={showNewPassword ? "text" : "password"}
                  id="newPassword"
                  placeholder="Enter new password"
                  required
                  ref={newPasswordRef}
                  className={`${error ? "error-input" : ""}`}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <div className="icon" onClick={() => setShowNewPassword(!showNewPassword)}>
                  {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            <div className="input-field">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="field-wrap password-wrap">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Re-enter your password"
                  required
                  ref={confirmPasswordRef}
                  className={`${error ? "error-input" : ""}`}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className="icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>
          </div>

          {error && <div style={{ color: "red", margin: "0.5em 0" }}>{error}</div>}

          <button type="submit" className="btn-primary-full" onClick={handleSubmit}>
            Confirm
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

export default ResetPassword;
