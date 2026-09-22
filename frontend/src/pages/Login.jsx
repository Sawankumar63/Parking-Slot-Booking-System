import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "../css/auth.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [error,setError]=useState(""); const [loading,setLoading]=useState(false);

  const handleSubmit = async e => {
    e.preventDefault(); setError(""); setLoading(true);
    try { await login({email,password}); navigate("/home"); }
    catch(err){ setError(err.message); }
    finally { setLoading(false); }
  };

  return <section className="auth-page"><div className="auth-container">
    <h1 className="auth-title">Login</h1><p className="auth-subtitle">Login to access your ParkEase account.</p>
    <div className="form-card auth-card"><form onSubmit={handleSubmit}>
      <div className="form-group"><label className="form-label">Email</label><input className="form-control" type="email" placeholder="Enter your email" required value={email} onChange={e=>setEmail(e.target.value)} /></div>
      <div className="form-group"><label className="form-label">Password</label><input className="form-control" type="password" placeholder="Enter your password" required value={password} onChange={e=>setPassword(e.target.value)} /></div>
      {error && <p className="error-text">{error}</p>}
      <div className="auth-options"><label><input type="checkbox" /> Remember Me</label><NavLink className="auth-link" to="/forgot-password">Forgot Password?</NavLink></div>
      <button className="btn btn-primary" style={{width:"100%"}} disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
      <p className="auth-footer">Don't have an account? <NavLink className="auth-link" to="/register">Register</NavLink></p>
    </form></div>
  </div></section>;
};
export default Login;
