import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import "./css/global.css";
import "./css/responsive.css";

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
    </AuthProvider>
  </BrowserRouter>
);
export default App;
