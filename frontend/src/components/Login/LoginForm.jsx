import React from "react";
import { Link } from "react-router-dom";  // Import Link from React Router
import InputField from "./InputField";
import EyeIcon from "./EyeIcon";
import SocialButton from "./SocialButton";

const LoginForm = () => (
    <div className="p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Let’s Get Started</h2>
        <InputField type="text" placeholder="Email Address or Phone Number" />
        <InputField type="password" placeholder="Password" icon={<EyeIcon />} />
        <div className="text-sm text-right mb-4 text-gray-500 cursor-pointer">
            Forget Password?
        </div>
        <button className="w-full py-2 bg-indigo-600 text-white rounded mb-4">
            Log In
        </button>
        <div className="text-sm text-center mb-4">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-indigo-600 cursor-pointer">
                Sign Up
            </Link>
        </div>
        <div className="flex items-center mb-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-sm text-gray-500">Or signing with</span>
            <hr className="flex-grow border-gray-300" />
        </div>
        <div className="flex justify-center">
            <SocialButton icon={<span className="text-red-500">G</span>} />
        </div>
        <p className="text-xs text-center text-gray-400 mt-6">
            All rights reserved © BroWheresMyStuff.
        </p>
    </div>
);

export default LoginForm;
