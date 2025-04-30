// src/components/Login/InputField.jsx
import React from "react";

const InputField = ({ type, placeholder, icon }) => (
    <div className="relative mb-4">
        <input
            type={type}
            placeholder={placeholder}
            className="w-full px-4 py-2 border rounded focus:outline-none"
        />
        {icon && <span className="absolute right-3 top-2.5">{icon}</span>}
    </div>
);

export default InputField;