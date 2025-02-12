/* eslint-disable react/prop-types */
import "../pages/SignUpModel.css";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function SignUpModel({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [marketingPreferences, setMarketingPreferences] = useState(false);

  const { signup } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password, name, marketingPreferences);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="signup-model-container">
      <div className="signup-model-content">
        <button className="signup-close-btn" onClick={onClose}>
          Close
        </button>
        <h2 className="signup-title">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="login-inputs"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="login-inputs"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="login-inputs"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="login-inputs"
            type="password"
            placeholder="Confirm Password"
          />
          <div>Error Placeholder</div>
          <label className="marketing-checkbox-label" htmlFor="checkbox">
            Please confirm marketing preferences
            <input
              className="marketing-checkbox"
              type="checkbox"
              checked={marketingPreferences}
              id="checkbox"
              onChange={(e) => setMarketingPreferences(e.target.checked)}
            />
          </label>

          <button type="submit" className="signup-button-modal">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpModel;
