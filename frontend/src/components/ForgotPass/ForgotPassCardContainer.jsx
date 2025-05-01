// src/components/Login/AuthCardContainer.jsx
import React from "react";
import LoginForm from "./ForgotPassForm";
import IllustrationPanel from "../Login/IllustrationPanel";

const AuthCardContainer = () => (
    <div className="flex rounded-3xl overflow-hidden bg-white shadow-[0_0_25px_5px_rgba(128,0,255,0.5)]">
        <LoginForm />
        <IllustrationPanel />
    </div>

);

export default AuthCardContainer;