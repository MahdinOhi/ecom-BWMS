// src/components/Login/SocialButton.jsx
import React from "react";

const SocialButton = ({ icon }) => (
    <button className="w-10 h-10 rounded-full bg-white border mx-2 shadow-md p-0 flex items-center justify-center">
        {icon}
    </button>
);

export default SocialButton;