import react from "react";
import InputField from "../Login/InputField";
import EyeIcon from "../Login/EyeIcon";
import { Link } from "react-router-dom"; // Import Link from React Router

const SignUpForm = ()=> (

    <div className="p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Let’s Create Account</h2>
        <InputField type="email" placeholder="Email Address" />
        <div className="flex gap-2">
            <InputField placeholder="First Name" />
            <InputField placeholder="Last Name" />
        </div>
        <InputField type="tel" placeholder="Phone Number" />
        <InputField type="password" placeholder="Create Password" icon={<EyeIcon />} />
        <InputField type="password" placeholder="Confirm Password" icon={<EyeIcon />} />
        <div className="flex items-start text-sm text-gray-600 my-4">
            <input type="checkbox" className="mr-2 mt-1" />
            <p>
                By clicking Create account, I agree that I have read and accepted the Terms of Use and Privacy Policy.
            </p>
        </div>
        <button className="w-full py-2 bg-indigo-600 text-white rounded mb-4">
            Sign up
        </button>
        <div className="text-sm text-center mb-4">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 cursor-pointer">
                Sign in
            </Link>
        </div>
        <p className="text-xs text-center text-gray-400 mt-6">
            All rights reserved © BroWheresMyStuff.
        </p>
    </div>
);

export default SignUpForm;