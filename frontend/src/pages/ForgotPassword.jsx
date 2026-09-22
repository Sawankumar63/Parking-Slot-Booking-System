import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/auth.css";

const ForgotPassword = () => {
  const navigate=useNavigate(); const [email,setEmail]=useState("");
  return <section className="auth-page"><div className="auth-container">
    <h1 className="auth-title">Forgot Password</h1><p className="auth-subtitle">Enter your registered email to reset your password.</p>
    <div className="form-card auth-card"><form onSubmit={e=>{e.preventDefault();navigate("/reset-password",{state:{email}})}}>
      <div className="form-group"><label className="form-label">Email</label><input className="form-control" type="email" placeholder="Enter your registered email" required value={email} onChange={e=>setEmail(e.target.value)}/></div>
      <button className="btn btn-primary" style={{width:"100%"}}>Continue</button>
      <p className="auth-footer">Remember your password? <NavLink className="auth-link" to="/login">Login</NavLink></p>
    </form></div>
  </div></section>;
};
export default ForgotPassword;
