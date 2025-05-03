// src/components/Login/AuthCardContainer.jsx
import React from "react";
import LoginForm from "./ForgotPassForm";
import IllustrationPanel from "../Login/IllustrationPanel";

const AuthCardContainer = () => (
    <div className="flex h-[500px] rounded-3xl overflow-hidden shadow-[0_0_25px_5px_rgba(128,0,255,0.5)]">
    <div className="bg-white flex-1">
        <LoginForm />
    </div>
    <div className="bg-white/5 backdrop-blur-sm flex-1">
        <IllustrationPanel />
    </div>
</div>

);

export default AuthCardContainer;