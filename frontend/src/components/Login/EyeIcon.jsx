// src/components/Login/EyeIcon.jsx
import React from "react";
import { Eye, EyeOff } from "lucide-react";

const EyeIcon = ({ isVisible, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="p-1 hover:bg-gray-100 rounded transition-colors duration-200"
      aria-label={isVisible ? "Hide password" : "Show password"}
    >
      {isVisible ? (
        <EyeOff size={20} className="text-gray-500 hover:text-gray-700" />
      ) : (
        <Eye size={20} className="text-gray-500 hover:text-gray-700" />
      )}
    </button>
  );
};

export default EyeIcon;