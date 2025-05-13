import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthPageLayout, FormCard } from "./loginStyle";

const AuthLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AuthPageLayout>
      <FormCard>
        <div className="logo">
          {/* <img src={Logo} alt="Institute Logo" /> */}
        </div>
        <div className="form-title">
          <h1>Sign In</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-fields">
            <div className="input-field">
              <label htmlFor="username">Username</label>
              <div className="field-wrap">
                <input type="text" id="username" placeholder="Enter your username" required />
              </div>
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <div className="field-wrap password-wrap">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  required
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

          <button type="submit" className="btn-primary-full" >Sign In</button>

        </form>
        <div className="sign-up">Don't Have account <a onClick={()=> navigate('/sign-up')} >Sign Up</a></div>
      </FormCard>
    </AuthPageLayout>
  );
};

export default AuthLogin;
