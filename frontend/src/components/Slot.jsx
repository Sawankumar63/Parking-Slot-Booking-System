import React from "react";
import "../css/slots.css";

const Slot = ({ slot, selected, onSelect }) => {
  const disabled = slot.status === "booked" || slot.available === false;
  return (
    <button
      type="button"
      disabled={disabled}
      className={`slot ${disabled ? "slot-booked" : "slot-available"} ${selected ? "slot-selected" : ""}`}
      onClick={() => onSelect?.(slot)}
    >
      <strong>{slot.name || slot.slot_number || `Slot ${slot.id}`}</strong>
      <small>{disabled ? "Booked" : "Available"}</small>
    </button>
  );
};
export default Slot;
