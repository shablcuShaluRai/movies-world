import React from "react";

const DropDown = ({ dropdownList, handleState }) => (
  <select
    onChange={e => {
      handleState("type", e.target.value);
    }}
  >
    {dropdownList.map(dropDown => (
      <option key={dropDown.label} value={dropDown.value}>
        {dropDown.label}
      </option>
    ))}
  </select>
);

export default DropDown;
