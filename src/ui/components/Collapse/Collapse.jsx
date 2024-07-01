import React, { useState } from "react";
import "./Collapse.scss";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Collapse = ({ label, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
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
    <div className="collapse">
      <button className="collapse-toggle" onClick={toggleCollapse}>
        <span className="collapse-label">{label}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
};

export default Collapse;
