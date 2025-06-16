// src/components/Login/InputField.jsx
import React, { useState } from "react";
import EyeIcon from "./EyeIcon";

const InputField = ({ type, placeholder, icon }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // Determine the actual input type based on visibility state
  const actualInputType = type === "password" && isPasswordVisible ? "text" : type;

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="relative mb-4">
      <input
        type={actualInputType}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent pr-12"
      />
      {type === "password" && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <EyeIcon 
            isVisible={isPasswordVisible} 
            onClick={togglePasswordVisibility} 
          />
        </div>
      )}
      {icon && type !== "password" && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          {icon}
        </div>
      )}
    </div>
  );
};

export default InputField;