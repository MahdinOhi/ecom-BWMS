// src/components/Login/IllustrationPanel.jsx
import React from "react";
import logoImage from "../../assets/loginBox.png";
import Logo from "../Logo";

const IllustrationPanel = () => (
  <div className="flex-1 flex flex-col items-center justify-between bg-transparent text-white p-8">
    <img src="/img/hero/Logo.png" alt="Logo" className="flex items-center ml-[42px] mt-[12px] h-[14rem]" />

    <div className="w-full flex items-end justify-center pointer-events-none">
      <img
        src={logoImage}
        alt="Bro Where's My Stuff Logo"
        className="absolute bottom-[-110px]  w-[170%] max-w-none object-contain"
      />
    </div>
  </div>
);

export default IllustrationPanel;