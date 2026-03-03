import React, { useState } from "react";
import "../pages/auth.form.scss";
import { Link } from "react-router";

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <div className="login-container">
        <h1>Welcome Back</h1>
        <p className="subtitle">Sign in to continue to your account</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="link-group">
            <a href="/forgot-password" className="forgot-password">
              Forgot password?
            </a>
          </div>

          <button type="submit">Sign In</button>
        </form>

        <div className="form-footer">
          <span>Don't have an account?</span>
          <Link to={"/register"}>Create Account</Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
