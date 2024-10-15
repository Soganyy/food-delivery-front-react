import React, { useState } from "react";
import "./login-form.css";

const LoginForm = ({ login, loginType, isLoginError }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <h2>{loginType} Login</h2>
          <form>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" required onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="actions">
              <button className="login-btn" onClick={handleLogin}>
                Login
              </button>
              <a href="/" className="forgot-password">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
