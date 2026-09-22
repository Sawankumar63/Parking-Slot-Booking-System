import React from "react";
import { Link } from "react-router-dom";
import "../css/owner.css";
const OwnerDashboard=()=> <section className="owner-page"><div className="container"><h1 className="page-title">Owner Dashboard</h1><p className="page-subtitle">Manage your parking business from one place.</p><div className="owner-grid">
<Link className="owner-card" to="/owner/parking"><h2>🅿️ Manage Parking</h2><p className="text-muted">Add and manage parking locations.</p></Link>
<Link className="owner-card" to="/owner/slots"><h2>🎯 Manage Slots</h2><p className="text-muted">Manage available parking slots.</p></Link>
<Link className="owner-card" to="/owner/bookings"><h2>📋 Bookings</h2><p className="text-muted">View customer bookings.</p></Link>
<Link className="owner-card" to="/owner/analytics"><h2>📊 Analytics</h2><p className="text-muted">View parking performance.</p></Link>
</div></div></section>;
export default OwnerDashboard;
