import React, { useState } from "react";
import "../pages/auth.form.scss";
import { Link } from "react-router";

const Register = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <div className="register-container">
        <h1>Create Account</h1>
        <p className="subtitle">Join us today and get started</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="John Doe"
              required
            />
          </div>

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
              placeholder="At least 6 characters"
              required
            />
          </div>

          <button type="submit">Create Account</button>
        </form>

        <div className="form-footer">
          <span>Already have an account?</span>
          <Link to={"/login"}>Sign in here</Link>
        </div>
      </div>
    </main>
  );
};

export default Register;
