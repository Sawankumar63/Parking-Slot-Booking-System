import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "../css/auth.css";

const ResetPassword = () => {
  const navigate=useNavigate(); const {state}=useLocation(); const [password,setPassword]=useState(""); const [confirm,setConfirm]=useState(""); const [error,setError]=useState("");
  const submit=e=>{e.preventDefault();if(password!==confirm){setError("Passwords do not match");return;}setError("");navigate("/login");};
  return <section className="auth-page"><div className="auth-container">
    <h1 className="auth-title">Reset Password</h1><p className="auth-subtitle">Create a new password for your ParkEase account.</p>
    <div className="form-card auth-card"><form onSubmit={submit}>
      {state?.email && <p className="text-muted">Resetting password for {state.email}</p>}
      <div className="form-group"><label className="form-label">New Password</label><input className="form-control" type="password" required value={password} onChange={e=>setPassword(e.target.value)}/></div>
      <div className="form-group"><label className="form-label">Confirm Password</label><input className="form-control" type="password" required value={confirm} onChange={e=>setConfirm(e.target.value)}/></div>
      {error && <p className="error-text">{error}</p>}<button className="btn btn-primary" style={{width:"100%"}}>Reset Password</button>
      <p className="auth-footer">Remember your password? <NavLink className="auth-link" to="/login">Login</NavLink></p>
    </form></div>
  </div></section>;
};
export default ResetPassword;
