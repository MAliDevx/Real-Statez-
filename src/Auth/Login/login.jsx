import { useState,useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthPageLayout, FormCard } from "./loginStyle";
import { showSuccessToast, showErrorToast } from "../../components/shared/toaster/toaster";

const AuthLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = (e) => {
    e.preventDefault(); // <-- prevents page refresh
  
    if (!username || !password) {
        setError('Please fill in all fields')
      showErrorToast("Please fill in all fields");
    } else {
      showSuccessToast('Testing Toaster...');
      setError('')
      navigate('/');
    }
  };

  return (
    <AuthPageLayout>
      <FormCard>
        <div className="logo">
          {/* Add your logo here */}
        </div>
        <div className="form-title">
          <h1>Sign In</h1>
        </div>

        <form>
          <div className="form-fields">
            <div className="input-field">
              <label htmlFor="username">Username</label>
              <div className="field-wrap">
                <input
                  type="text"
                  className={`${error ? "error-input" : ""}`}
                  id="username"
                  placeholder="Enter your username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <div className={`field-wrap password-wrap ${error ? "error-input" : ""}`}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="icon" onClick={handleTogglePassword}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>
          </div>

          <div className="forget-password">
            <div className="left">
              <input id="rememberMe" type="checkbox" className="check-input" />
              <label htmlFor="rememberMe">Remember</label>
            </div>
            <div className="right" onClick={() => navigate("/verify-email")}>
              Forgot Password?
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary-full"
            onClick={handleLogin}
          >
            Sign In
          </button>
        </form>

        <div className="sign-up">
          Don't Have account{" "}
          <a onClick={() => navigate('/sign-up')} style={{ cursor: "pointer" }}>
            Sign Up
          </a>
        </div>
      </FormCard>
    </AuthPageLayout>
  );
};

export default AuthLogin;
