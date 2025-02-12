/* eslint-disable react/prop-types */
import "../pages/LoginModel.css";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function LoginModel({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="login-model-container">
      <div className="login-model-content">
        <button className="login-close-btn" onClick={onClose}>
          Close
        </button>
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
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
          <div>Error Placeholder</div>
          <button type="submit" className="login-button-modal">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginModel;
