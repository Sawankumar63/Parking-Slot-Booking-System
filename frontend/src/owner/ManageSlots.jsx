import React from "react";
import SlotGrid from "../components/SlotGrid";
import "../css/owner.css";
const demoSlots=Array.from({length:12},(_,i)=>({id:i+1,name:`P-${i+1}`,status:i===3||i===8?"booked":"available"}));
const ManageSlots=()=> <section className="owner-page"><div className="container"><h1 className="page-title">Manage Slots</h1><div className="owner-card" style={{marginTop:40}}><SlotGrid slots={demoSlots}/></div></div></section>;
export default ManageSlots;
