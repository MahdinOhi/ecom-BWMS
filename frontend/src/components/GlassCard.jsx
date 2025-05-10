// src/components/common/GlassCard.jsx
import React from "react";


const GlassCard = ({ children, className = "" }) => {
  return (
    <div 
      className={`
        bg-white/5 
        backdrop-blur-sm
        rounded-3xl
        overflow-hidden 
        shadow-[0_0_25px_5px_rgba(128,0,255,0.5)]
        flex 
        w-full 
        max-w-6xl 
        mx-auto
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;