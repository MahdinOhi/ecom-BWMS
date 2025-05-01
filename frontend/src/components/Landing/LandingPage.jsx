import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const LandingPage = () => (
    <div className="flex justify-center items-center h-screen">
        <div className="text-center text-black bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <h1 className="text-4xl font-bold mb-6">Welcome to BroWheresMyStuff</h1>
            <p className="text-lg mb-4">A Ecommerce Platform</p>
            <div className="flex gap-4 justify-center">
                <Link to="/signup" className="text-lg text-indigo-600 hover:underline">
                    Sign Up
                </Link>
                <Link to="/login" className="text-lg text-indigo-600 hover:underline">
                    Login
                </Link>
            </div>
        </div>
    </div>
);

export default LandingPage;
