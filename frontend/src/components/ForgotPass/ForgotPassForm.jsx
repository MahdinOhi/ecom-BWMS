import React from "react";
import { Link } from "react-router-dom";  // Import Link from React Router
import InputField from "../Login/InputField";
import RightsText from "../RightsText";

const LoginForm = () => (
    <div className="p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Forgot Password?</h2>
        <InputField type="text" placeholder="Enter you email address" />
        <button className="w-full py-2 bg-indigo-600 text-white rounded mb-4">
            Send Recovery Email
        </button>
        <div className="text-sm text-center mb-4">
            Just Remembered?{" "}
            <Link to="/login" className="text-indigo-600 cursor-pointer">
                Log In
            </Link>
        </div>
        <RightsText />
    </div>
);

export default LoginForm;
