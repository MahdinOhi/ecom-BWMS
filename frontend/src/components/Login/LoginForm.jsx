// src/components/Login/LoginForm.jsx
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import InputField from "./InputField";
import SocialButton from "./SocialButton";
import RightsText from "../RightsText";
import { login } from '../../api';

const LoginForm = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');
    try {
      const res = await login(form);
      // Store tokens in localStorage (or context, or memory)
      localStorage.setItem('access', res.data.access);
      localStorage.setItem('refresh', res.data.refresh);
      setMessage('Login successful!');
      // Redirect or update app state as needed
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
    setLoading(false);
  };

  return (
    <div className="p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6">Let's Get Started</h2>
      
      <form onSubmit={handleLogin}>
        <InputField 
          type="text" 
          placeholder="Email Address or Phone Number" 
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <InputField 
          type="password" 
          placeholder="Password" 
          name="password"
          value={form.password}
          onChange={handleChange}
          required
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
          disabled={loading}
          className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      
      {message && <div className="text-sm text-center mb-4 mt-4 text-green-500">{message}</div>}
      {error && <div className="text-sm text-center mb-4 mt-4 text-red-500">{error}</div>}
      
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