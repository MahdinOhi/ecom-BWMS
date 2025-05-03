// src/components/Login/IllustrationPanel.jsx
import React from "react";
import logoImage from "../../assets/loginBox.png";
const IllustrationPanel = () => (
    <div className="flex-1 flex flex-col items-center justify-center bg-purple-900 text-white p-8">
    <h1 className="text-3xl font-bold mb-4 text-center">Bro Where's My Stuff</h1>
    <div className="w-45 h-40 bg-purple-900  overflow-hidden flex items-center justify-center">
        <img 
            src={logoImage} 
            alt="Bro Where's My Stuff Logo" 
            className="w-full h-full object-cover"
        />
    </div>
</div>
);

export default IllustrationPanel;