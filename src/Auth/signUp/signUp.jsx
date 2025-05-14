import { useState } from "react";
import { AuthPageLayout, FormCard } from "./signUpStyle";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { showSuccessToast, showErrorToast } from "../../components/shared/toaster/toaster";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    city: "",
    country: "",
    password: "",
    repeatPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" })); // Clear error on input
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.firstName.trim()) newErrors.firstName = "First name required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name required";
    if (!formData.email.trim()) newErrors.email = "Email required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format";

    if (!formData.gender) newErrors.gender = "Gender required";
    if (!formData.city.trim()) newErrors.city = "City required";
    if (!formData.country) newErrors.country = "Country required";

    if (!formData.password) newErrors.password = "Password required";
    else if (formData.password.length < 6) newErrors.password = "Minimum 6 characters";

    if (!formData.repeatPassword) newErrors.repeatPassword = "Repeat password";
    else if (formData.password !== formData.repeatPassword)
      newErrors.repeatPassword = "Passwords do not match";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();    

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      showErrorToast("Please enter all input fields");
      return;
    }else{
        showSuccessToast("Account created successfully!");
        console.log(formData);
        navigate("/");
    }
    } 
  

  const errorClass = (field) => errors[field] ? "error-border" : "";

  return (
    <AuthPageLayout>
      <FormCard>
        <div className="form-title">
          <h3>Create your account</h3>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Row 1: First and Last Name */}
          <div className="form-row">
            <div className="input-field">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First name"
                className={errorClass("firstName")}
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last name"
                className={errorClass("lastName")}
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email */}
          <div className="input-field" id="email-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className={errorClass("email")}
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Gender */}
          <div>
            <label>Gender</label>
            <div style={{ display: "flex", gap: "1em", marginTop: "0.5em" }}>
              {["male", "female", "other"].map((g) => (
                <label key={g} className="select-gender">
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={formData.gender === g}
                    onChange={handleChange}
                  /> {g.charAt(0).toUpperCase() + g.slice(1)}
                </label>
              ))}
            </div>
          </div>

          {/* City and Country */}
          <div className="form-row" id="location">
            <div className="input-field">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                className={errorClass("city")}
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="country">Country</label>
              <select
                id="country"
                name="country"
                className={errorClass("country")}
                value={formData.country}
                onChange={handleChange}
              >
                <option value="">Select Country</option>
                <option value="pakistan">Pakistan</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
              </select>
            </div>
          </div>

          {/* Password */}
          <div className="form-row">
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <div className={`field-wrap password-wrap ${errorClass("password")}`}>
              <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  
                  value={formData.password}
                  onChange={handleChange}
                />
                <div className="icon" onClick={() => setShowPassword(p => !p)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            <div className="input-field">
              <label htmlFor="repeatPassword">Repeat Password</label>
              <div className={`field-wrap password-wrap ${errorClass("password")}`}>
              <input
                  type={showRepeatPassword ? "text" : "password"}
                  id="repeatPassword"
                  name="repeatPassword"
                  placeholder="Repeat password"
                  value={formData.repeatPassword}
                  onChange={handleChange}
                />
                <div className="icon" onClick={() => setShowRepeatPassword(p => !p)}>
                  {showRepeatPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className="btn-primary-full">Sign Up</button>
        </form>

        <div className="sign-up">
          I have an account <a onClick={() => navigate('/login')}>Sign In</a>
        </div>
      </FormCard>
    </AuthPageLayout>
  );
};

export default SignUp;
