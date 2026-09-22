import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "../css/auth.css";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      await register({
        name: form.name,
        email: form.email,
        phone: form.phone,
        password: form.password,
      });
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="auth-page">
      <div className="auth-container">
        <h1 className="auth-title">Register</h1>
        <p className="auth-subtitle">Create your ParkEase account.</p>
        <div className="form-card auth-card">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                className="form-control"
                name="name"
                placeholder="Enter your full name"
                required
                value={form.name}
                onChange={update}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                value={form.email}
                onChange={update}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                className="form-control"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                required
                value={form.phone}
                onChange={update}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                value={form.password}
                onChange={update}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <input
                className="form-control"
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                required
                value={form.confirmPassword}
                onChange={update}
              />
            </div>
            {error && <p className="error-text">{error}</p>}
            <label
              style={{
                display: "flex",
                gap: 8,
                alignItems: "center",
                marginBottom: 24,
              }}
            >
              <input type="checkbox" required /> I agree to the Terms &amp;
              Conditions
            </label>
            <button
              className="btn btn-primary"
              style={{ width: "100%" }}
              disabled={loading}
            >
              {loading ? "Creating account..." : "Register"}
            </button>
            <p className="auth-footer">
              Already have an account?{" "}
              <NavLink className="auth-link" to="/login">
                Login
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Register;
