import React from "react";

const Input = ({ name, type, placeholder, error }) => {
  return (
    <div className="input">
      <div className="input-content">
        <span className="input-content_label">{name}</span>
        <input
          type={type}
          placeholder={placeholder}
          className="input-content_input"
        />
      </div>
    </div>
  );
};

export default Input;
