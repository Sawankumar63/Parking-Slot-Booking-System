import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/navbar.css";

const menu = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Parking", path: "/parking" },
  { name: "Booking", path: "/booking" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const loggedIn = Boolean(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to={loggedIn ? "/home" : "/login"} className="navbar-brand">
          🚗 ParkEase
        </NavLink>
        <button className="navbar-menu" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
        <ul className={`navbar-links ${open ? "open" : ""}`}>
          {menu.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          {!loggedIn && <li><NavLink to="/login" className="navbar-link" onClick={() => setOpen(false)}>Login</NavLink></li>}
          {!loggedIn && <li><NavLink to="/register" className="navbar-link" onClick={() => setOpen(false)}>Register</NavLink></li>}
          {loggedIn && <li><NavLink to="/dashboard" className="navbar-link" onClick={() => setOpen(false)}>Dashboard</NavLink></li>}
        </ul>
        <div className="navbar-actions">
          {loggedIn && <button className="navbar-logout" onClick={handleLogout}>Logout</button>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
