import React from "react";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
