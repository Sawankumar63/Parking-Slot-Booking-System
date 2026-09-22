import React, { useState } from "react";
import Slot from "./Slot";
import "../css/slots.css";

const SlotGrid = ({ slots = [], onSelect }) => {
  const [selected, setSelected] = useState(null);
  const handleSelect = slot => { setSelected(slot.id); onSelect?.(slot); };
  return (
    <div className="slot-grid">
      {slots.map(slot => <Slot key={slot.id} slot={slot} selected={selected === slot.id} onSelect={handleSelect} />)}
    </div>
  );
};
export default SlotGrid;
