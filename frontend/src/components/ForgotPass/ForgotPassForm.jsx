import React from "react";
import { Link } from "react-router-dom";  // Import Link from React Router
import InputField from "../Login/InputField";
import RightsText from "../RightsText";

const LoginForm = () => (
    <div className="h-full flex items-center justify-center">
        <div className="p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password?</h2>
            <p className="text-sm text-gray-600 mb-4 text-center">
                No worry! Just enter your email and we’ll send you a reset password link.
            </p>
            <InputField type="text" placeholder="Enter your email address" />
            <button className="w-full py-2 bg-indigo-600 text-white rounded mb-4 mt-4">
                Send Recovery Email
            </button>
            <div className="text-sm text-center mb-4">
                Just remembered?{" "}
                <Link to="/login" className="text-indigo-600 cursor-pointer">
                    Sign in
                </Link>
            </div>
            <RightsText />
        </div>
    </div>
);

export default LoginForm;
