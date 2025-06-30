import { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthPageLayout, FormCard } from "./signUpStyle";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  showSuccessToast,
  showErrorToast,
} from "../../../components/shared/toaster/Toaster";
import { useAuth } from "../../../context/AuthContext";

const SignUp = () => {
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    const apiData = {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      address: {
        state: data.state,
        zipCode: data.zipCode,
        city: data.city,
        country: data.country,
      },
      password: data.password,
      phone: data.phoneNumber,
      firmId: "60d21b4667d0d8992e610c85",
    };

    registerUser(apiData);
  };

  return (
    <AuthPageLayout>
      <FormCard>
        <div className="form-title">
          <h3>Create your account</h3>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* First & Last Name */}
          <div className="form-row">
            <div className="input-field">
              <label>First Name</label>
              <input
                {...register("firstName", { required: "First name required" })}
                className={errors.firstName ? "error-border" : ""}
                placeholder="First name"
              />
              {errors.firstName && <small>{errors.firstName.message}</small>}
            </div>

            <div className="input-field">
              <label>Last Name</label>
              <input
                {...register("lastName")}
                placeholder="Last name"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-field">
              <label>Email</label>
              <input
                {...register("email", {
                  required: "Email required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
                className={errors.email ? "error-border" : ""}
                placeholder="Enter your email"
              />
              {errors.email && <small>{errors.email.message}</small>}
            </div>

            <div className="input-field">
              <label>Phone No</label>
              <input
                {...register("phoneNumber", {
                  required: "Phone Number required",
                })}
                className={errors.phoneNumber ? "error-border" : ""}
                placeholder="Enter Phone"
              />
              {errors.phoneNumber && (
                <small>{errors.phoneNumber.message}</small>
              )}
            </div>
          </div>

          {/* City & Country */}
          <div className="form-row">
            <div className="input-field">
              <label>City</label>
              <input
                {...register("city", { required: "City required" })}
                className={errors.city ? "error-border" : ""}
                placeholder="City"
              />
              {errors.city && <small>{errors.city.message}</small>}
            </div>

            <div className="input-field">
              <label>Country</label>
              <select
                {...register("country", { required: "Country required" })}
                className={errors.country ? "error-border" : ""}
              >
                <option value="">Select Country</option>
                <option value="pakistan">Pakistan</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
              </select>
              {errors.country && <small>{errors.country.message}</small>}
            </div>
          </div>

          {/* State & Zip Code */}
          <div className="form-row">
            <div className="input-field">
              <label>State</label>
              <input
                {...register("state")}
                placeholder="Enter state address"
              />
            </div>

            <div className="input-field">
              <label>Zip Code</label>
              <input
                {...register("zipCode", {
                  required: "Zip code required",
                })}
                className={errors.zipCode ? "error-border" : ""}
                placeholder="Enter zip code"
              />
              {errors.zipCode && <small>{errors.zipCode.message}</small>}
            </div>
          </div>

          {/* Password & Repeat Password */}
          <div className="form-row">
            <div className="input-field">
              <label>Password</label>
              <div
                className={`field-wrap password-wrap ${
                  errors.password ? "error-border" : ""
                }`}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters",
                    },
                  })}
                  placeholder="Password"
                />
                <div
                  className="icon"
                  onClick={() => setShowPassword((p) => !p)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
              {errors.password && <small>{errors.password.message}</small>}
            </div>

            <div className="input-field">
              <label>Repeat Password</label>
              <div
                className={`field-wrap password-wrap ${
                  errors.repeatPassword ? "error-border" : ""
                }`}
              >
                <input
                  type={showRepeatPassword ? "text" : "password"}
                  {...register("repeatPassword", {
                    required: "Repeat password",
                    validate: (val) =>
                      val === watch("password") || "Passwords do not match",
                  })}
                  placeholder="Repeat password"
                />
                <div
                  className="icon"
                  onClick={() => setShowRepeatPassword((p) => !p)}
                >
                  {showRepeatPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
              {errors.repeatPassword && (
                <small>{errors.repeatPassword.message}</small>
              )}
            </div>
          </div>

          <button type="submit" className="btn-primary-full">
            Sign Up
          </button>
        </form>

        <div className="sign-up">
          I have an account{" "}
          <a onClick={() => navigate("/login")}>Sign In</a>
        </div>
      </FormCard>
    </AuthPageLayout>
  );
};

export default SignUp;
