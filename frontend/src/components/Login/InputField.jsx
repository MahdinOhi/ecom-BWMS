// src/components/Login/InputField.jsx
import React, { useState } from "react";
import EyeIcon from "./EyeIcon";

const InputField = ({ type, placeholder, icon, value, onChange, ...props }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Determine the actual input type based on visibility state
  const actualInputType = type === "password" && isPasswordVisible ? "text" : type;

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
     <div className="relative text-sm mb-0 ">
      <input
        type={actualInputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-2.5 md:text-xs sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent pr-12 text-sm sm:text-base transition-all duration-200"
        {...props}
      />
      {type === "password" && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
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