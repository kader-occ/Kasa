import React, { useState } from "react";
import "./Dropdown.scss";

const Dropdown = ({ label, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-wrapper">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span>{label}</span>
        <span className={`dropdown-icon ${isOpen ? "rotate" : ""}`}>
          &#9660;
        </span>{" "}
      </div>
      {label === "Description" ||
        label === "Fiabilité" ||
        label === "Respect" ||
        label === "Service" ||
        (label === "Securité" && isOpen && (
          <div className="dropdown-content">
            <p>{text}</p>
          </div>
        ))}
      {label === "Equipements" && isOpen && (
        <div className="dropdown-content">
          <ul>
            {text.map((equipement) => (
              <li>{equipement}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
