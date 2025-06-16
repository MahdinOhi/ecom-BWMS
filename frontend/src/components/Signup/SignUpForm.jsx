import react from "react";
import InputField from "../Login/InputField";
import EyeIcon from "../Login/EyeIcon";
import { Link } from "react-router-dom"; // Import Link from React Router
import RightsText from "../RightsText";




const SignUpForm = () => (

     <div className="p-4 sm:p-6  lg:p-8 w-full max-w-md mx-auto lg:mx-0 flex flex-col justify-start lg:justify-center min-h-full py-8">
    <div className="w-full space-y-1">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center md:text-lg lg:text-left lg:text-xl">
        Let's Create Account
      </h2>
      
      <div className="space-y-2 sm:space-y-3 m">
        <InputField type="email" placeholder="Email Address" />
        
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <div className="flex-1">
            <InputField placeholder="First Name" />
          </div>
          <div className="flex-1">
            <InputField placeholder="Last Name" />
          </div>
        </div>
        
        <InputField type="tel" placeholder="Phone Number" />
        <InputField type="password" placeholder="Create Password" icon={<EyeIcon />} />
        <InputField type="password" placeholder="Confirm Password" icon={<EyeIcon />} />
      </div>
      
      <div className="flex items-start text-xs sm:text-sm text-gray-600 my-3 sm:my-4">
        <input 
          type="checkbox" 
          className="mr-2 mt-1 flex-shrink-0" 
          id="terms-checkbox"
        />
        <label htmlFor="terms-checkbox" className="leading-relaxed text-xs mb-1 md:text-xs">
          By clicking Create account, I agree that I have read and accepted the Terms of Use and Privacy Policy.
        </label>
      </div>
      
      <button className="w-full py-3 sm:py-4 bg-indigo-600 hover:bg-indigo-700 transition-colors text-white rounded-lg mb-3 sm:mb-4 font-medium md:text-sm">
        Sign up
      </button>
      
      <div className="text-sm md:text-sm sm:text-base text-center mb-3 sm:mb-4">
        Already have an account?{" "}
        <Link to="/login" className="text-indigo-600 hover:text-indigo-700 font-medium">
          Log In
        </Link>
      </div>
      
      <div className="mt-2">
        <RightsText />
      </div>
    </div>
  </div>
);


export default SignUpForm;