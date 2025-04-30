// src/components/Login/LoginPage.jsx
import React from "react";
import AuthCardContainer from "./AuthCardContainer";

const LoginPage = () => (
    <div
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 to-purple-900 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/img/auth/LoginBG.png')" }}
    >
        <AuthCardContainer />
    </div>

);

export default LoginPage;