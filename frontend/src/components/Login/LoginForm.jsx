// src/components/Login/LoginForm.jsx
import React from "react";
import { Link } from "react-router-dom";
import InputField from "./InputField";
import SocialButton from "./SocialButton";
import RightsText from "../RightsText";

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Login form submitted");
  };

  return (
    <div className="p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6">Let's Get Started</h2>
      
      <form onSubmit={handleSubmit}>
        <InputField 
          type="text" 
          placeholder="Email Address or Phone Number" 
        />
        <InputField 
          type="password" 
          placeholder="Password" 
        />
        
        <div className="text-sm text-right mb-4 text-gray-500">
          <Link 
            to="/forgotpass" 
            className="hover:text-indigo-600 transition-colors duration-200"
          >
            Forget Password?
          </Link>
        </div>
        
        <button 
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
        >
          Log In
        </button>
      </form>
      
      <div className="text-sm text-center mb-4 mt-4">
        Don't have an account?{" "}
        <Link 
          to="/signup" 
          className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200"
        >
          Sign Up
        </Link>
      </div>
      
      <div className="flex items-center mb-4">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-2 text-sm text-gray-500">Or signing with</span>
        <hr className="flex-grow border-gray-300" />
      </div>
      
      <div className="flex justify-center">
        <SocialButton icon={<span className="text-red-500 font-bold">G</span>} />
      </div>
      
      <RightsText />
    </div>
  );
};

export default LoginForm;