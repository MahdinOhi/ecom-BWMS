import React, { useState } from 'react';
import { signup, verifyOtp } from '../../api';
import InputField from "../Login/InputField";
import EyeIcon from "../Login/EyeIcon";
import { Link } from "react-router-dom"; // Import Link from React Router
import RightsText from "../RightsText";

const SignUpForm = () => {
  const [form, setForm] = useState({
    first_name: '', last_name: '', email: '', password: '', phone: '', address: ''
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = async e => {
    e.preventDefault();
    setError('');
    setMessage('');
    // Frontend validation
    if (!form.first_name || !form.last_name || !form.email || !form.password || !form.phone || !form.address) {
      setError('All fields are required.');
      return;
    }
    if (form.password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setLoading(true);
    try {
      await signup(form);
      setShowOtp(true);
      setMessage('OTP sent to your email.');
    } catch (err) {
      setError(err.response?.data?.error || 'Signup failed');
    }
    setLoading(false);
  };

  const handleVerifyOtp = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');
    try {
      await verifyOtp({ email: form.email, code: otp });
      setMessage('Account verified! You can now log in.');
      setShowOtp(false);
      setForm({ first_name: '', last_name: '', email: '', password: '', phone: '', address: '' });
      setConfirmPassword('');
      setOtp('');
    } catch (err) {
      setError(err.response?.data?.error || 'OTP verification failed');
    }
    setLoading(false);
  };

  return (
    <div className="p-4 sm:p-6  lg:p-8 w-full max-w-md mx-auto lg:mx-0 flex flex-col justify-start lg:justify-center min-h-full py-8">
      <div className="w-full space-y-1">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center md:text-lg lg:text-left lg:text-xl">
          Let's Create Account
        </h2>
        
        {!showOtp ? (
          <form onSubmit={handleSignup}>
            <div className="space-y-2 sm:space-y-3 m">
              <InputField type="email" placeholder="Email Address" name="email" value={form.email} onChange={handleChange} required />
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <div className="flex-1">
                  <InputField placeholder="First Name" name="first_name" value={form.first_name} onChange={handleChange} required />
                </div>
                <div className="flex-1">
                  <InputField placeholder="Last Name" name="last_name" value={form.last_name} onChange={handleChange} required />
                </div>
              </div>
              <InputField type="tel" placeholder="Phone Number" name="phone" value={form.phone} onChange={handleChange} required />
              <InputField type="text" placeholder="Address" name="address" value={form.address} onChange={handleChange} required />
              <InputField type="password" placeholder="Create Password" icon={<EyeIcon />} name="password" value={form.password} onChange={handleChange} required />
              <InputField type="password" placeholder="Confirm Password" icon={<EyeIcon />} name="confirm_password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
            </div>
            <div className="flex items-start text-xs sm:text-sm text-gray-600 my-3 sm:my-4">
              <input 
                type="checkbox" 
                className="mr-2 mt-1 flex-shrink-0" 
                id="terms-checkbox"
                required
              />
              <label htmlFor="terms-checkbox" className="leading-relaxed text-xs mb-1 md:text-xs">
                By clicking Create account, I agree that I have read and accepted the Terms of Use and Privacy Policy.
              </label>
            </div>
            <button type="submit" disabled={loading} className="w-full py-3 sm:py-4 bg-indigo-600 hover:bg-indigo-700 transition-colors text-white rounded-lg mb-3 sm:mb-4 font-medium md:text-sm">
              {loading ? 'Sending OTP...' : 'Sign Up'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp}>
            <div className="space-y-2 sm:space-y-3 m">
              <InputField type="text" placeholder="Enter OTP" name="otp" value={otp} onChange={e => setOtp(e.target.value)} required />
            </div>
            <button type="submit" disabled={loading} className="w-full py-3 sm:py-4 bg-indigo-600 hover:bg-indigo-700 transition-colors text-white rounded-lg mb-3 sm:mb-4 font-medium md:text-sm">
              {loading ? 'Verifying...' : 'Verify OTP'}
            </button>
          </form>
        )}
        {message && <div className="text-sm md:text-sm sm:text-base text-center mb-3 sm:mb-4 text-green-500">{message}</div>}
        {error && <div className="text-sm md:text-sm sm:text-base text-center mb-3 sm:mb-4 text-red-500">{error}</div>}
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
};

export default SignUpForm;