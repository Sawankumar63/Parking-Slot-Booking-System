import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { getProfile } from "../services/authService";
import "../css/dashboard.css";
const Profile = () => {
  const [user,setUser]=useState(null); const [error,setError]=useState(""); 
  useEffect(()=>{getProfile().then(data=>setUser(data.user)).catch(e=>setError(e.message));},[]);
  return <section className="dashboard-page"><div className="container" style={{maxWidth:700}}><h1 className="page-title">My Profile</h1>{error&&<p className="error-text" style={{textAlign:"center"}}>{error}</p>}{!user&&!error?<Loading/>:user&&<div className="form-card" style={{marginTop:40}}><h2>{user.name}</h2><p><strong>Email:</strong> {user.email}</p><p><strong>Phone:</strong> {user.phone}</p></div>}</div></section>;
};
export default Profile;
