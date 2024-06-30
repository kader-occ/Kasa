import React, { useState } from "react";
import "./Dropdown.scss";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Dropdown = ({ label, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const isEquipement = label === "Equipements";
  const content = isEquipement ? (
    <ul>
      {text.map((line, index) => (
        <li key={index}>{line}</li>
      ))}
    </ul>
  ) : (
    <p>{text}</p>
  );

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        <span className="dropdown-label">{label}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && <div className="dropdown-content">{content}</div>}
    </div>
  );
};

export default Dropdown;
