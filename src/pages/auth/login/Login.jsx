import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthPageLayout, FormCard } from "./LoginStyle";
import { showErrorToast } from "../../../components/shared/toaster/Toaster";

import { useAuth } from "../../../Context/AuthContext";

const AuthLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    const apiData = {
      email: data.email,
      password: data.password,
      logAs: "user",
    };

    try {
      await login(apiData);
      window.dispatchEvent(new Event("login-success"));
    } catch (err) {
      showErrorToast("Login failed. Please check your credentials.");
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

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-fields">
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <div className="field-wrap">
                <input
                  type="text"
                  id="email"
                  placeholder="Enter your email"
                  className={`${errors.email ? "error-input" : ""}`}
                  {...register("email", { required: "Email is required" })}
                />
              </div>
              {errors.email && <small className="form-error">{errors.email.message}</small>}
            </div>

            <div className="input-field">
              <label htmlFor="password">Password</label>
              <div className={`field-wrap password-wrap ${errors.password ? "error-input" : ""}`}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  {...register("password", { required: "Password is required" })}
                />
                <div className="icon" onClick={handleTogglePassword}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
              {errors.password && <p className="form-error">{errors.password.message}</p>}
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

          <button type="submit" className="btn-primary-full">
            Sign In
          </button>
        </form>

        <div className="sign-up">
          Don't Have an account?{" "}
          <a onClick={() => navigate("/sign-up")} style={{ cursor: "pointer" }}>
            Sign Up
          </a>
        </div>
      </FormCard>
    </AuthPageLayout>
  );
};

export default AuthLogin;
