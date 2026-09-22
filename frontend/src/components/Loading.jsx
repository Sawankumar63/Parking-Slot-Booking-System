import React from "react";
import "../css/loading.css";
const Loading = ({ text = "Loading..." }) => <div className="loading"><div className="spinner" /><span>{text}</span></div>;
export default Loading;
