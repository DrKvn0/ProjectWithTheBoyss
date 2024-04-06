import React, { useState } from "react";
import "./tooltip.css";

export const Tooltip = ({ text, children, position }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && (
        <div
          className="tooltip"
          style={{ top: position.top + 'px', left: position.left + 'px'}}
        >
          {text}
        </div>
      )}
    </div>
  );
};