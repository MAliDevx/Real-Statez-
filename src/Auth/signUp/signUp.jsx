import { useState } from "react";
import { AuthPageLayout, FormCard } from "./signUpStyle";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.repeatPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Submit form logic here
  };

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
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Row 2: Email */}
          <div className="input-field" id="email-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Row 3: Gender */}
          <div className="input-field">
            <label>Gender</label>
            <div style={{ display: "flex", gap: "1em", marginTop: "0.5em" }}>
              <label className="select-gender"><input type="radio" name="gender"  value="male" onChange={handleChange} required /> Male</label>
              <label className="select-gender"><input type="radio" name="gender"  value="female" onChange={handleChange} /> Female</label>
              <label className="select-gender"><input type="radio" name="gender" value="other" onChange={handleChange} /> Other</label>
            </div>
          </div>

          <div className="form-row" id="location">
            <div className="input-field">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="country">Country</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Country</option>
                <option value="pakistan">Pakistan</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <div className="field-wrap password-wrap">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <div className="icon" onClick={() => setShowPassword(p => !p)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            <div className="input-field">
              <label htmlFor="repeatPassword">Repeat Password</label>
              <div className="field-wrap password-wrap">
                <input
                  type={showRepeatPassword ? "text" : "password"}
                  id="repeatPassword"
                  name="repeatPassword"
                  placeholder="Repeat password"
                  value={formData.repeatPassword}
                  onChange={handleChange}
                  required
                />
                <div className="icon" onClick={() => setShowRepeatPassword(p => !p)}>
                  {showRepeatPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className="btn-primary-full">Sign Up</button>
        </form>
        <div className="sign-up">I Have account <a onClick={()=> navigate('/login')} >Sign In</a></div>
      </FormCard>
    </AuthPageLayout>
  );
};

export default SignUp;
