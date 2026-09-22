import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";

const Footer = () => {
  const quickLinks = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Parking", path: "/parking" },
    { id: 4, name: "Booking", path: "/booking" },
  ];
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h2 className="footer-brand">🚗 ParkEase</h2>
          <p>Find and book secure parking slots easily. Smart, fast and hassle-free parking solution.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          {quickLinks.map((item) => <Link key={item.id} to={item.path}>{item.name}</Link>)}
        </div>
        <div>
          <h3>Support</h3>
          <span>FAQ</span><span>Privacy Policy</span><span>Terms & Conditions</span><span>Help Center</span>
        </div>
        <div>
          <h3>Contact</h3>
          <span>📍 Indore, Madhya Pradesh</span>
          <span>📞 +91 6363695985</span>
          <span>📧 support@parkease.com</span>
        </div>
      </div>
      <div className="footer-bottom">© 2026 ParkEase. All Rights Reserved.</div>
    </footer>
  );
};
export default Footer;
