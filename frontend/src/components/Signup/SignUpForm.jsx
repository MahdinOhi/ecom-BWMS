import React, { useState } from "react";
import InputField from "../Login/InputField";
import EyeIcon from "../Login/EyeIcon";
import { Link, useNavigate } from "react-router-dom";
import RightsText from "../RightsText";

const SignUpForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
        password: "",
        confirmPassword: "",
        acceptedTerms: false,
    });

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError(null);
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        if (!formData.acceptedTerms) {
            setError("You must accept the terms");
            return;
        }

        setLoading(true);

        try {
            // Adjust the API endpoint to your actual Django signup URL
            const response = await fetch("/users/signup/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: formData.email,
                    username: formData.email, // if your backend expects username, here we use email as username
                    password: formData.password,
                    // Add any other fields your backend expects:
                    // e.g. first_name, last_name, phone
                    // Adapt fields based on your Django model/serializer
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    phone: formData.phone,
                }),
            });

            if (response.ok) {
                // Success: redirect or show success message
                navigate("/login");
            } else {
                const data = await response.json();
                setError(data.detail || "Signup failed");
            }
        } catch (err) {
            setError("Network error");
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6">Let’s Create Account</h2>

            {error && (
                <div className="text-red-600 mb-4 text-center font-semibold">{error}</div>
            )}

            <InputField
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <div className="flex gap-2">
                <InputField
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <InputField
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
            </div>

            <InputField
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
            />

            <InputField
                type="password"
                name="password"
                placeholder="Create Password"
                icon={<EyeIcon />}
                value={formData.password}
                onChange={handleChange}
                required
            />

            <InputField
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                icon={<EyeIcon />}
                value={formData.confirmPassword}
                onChange={handleChange}
                required
            />

            <div className="flex items-start text-sm text-gray-600 my-4">
                <input
                    type="checkbox"
                    name="acceptedTerms"
                    className="mr-2 mt-1"
                    checked={formData.acceptedTerms}
                    onChange={handleChange}
                    required
                />
                <p>
                    By clicking Create account, I agree that I have read and accepted the Terms
                    of Use and Privacy Policy.
                </p>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-72 py-2 bg-indigo-600 text-white rounded mb-4 mx-9 disabled:opacity-50"
            >
                {loading ? "Signing up..." : "Sign up"}
            </button>

            <div className="text-sm text-center mb-4">
                Already have an account?{" "}
                <Link to="/login" className="text-indigo-600 cursor-pointer">
                    Log In
                </Link>
            </div>

            <RightsText />
        </form>
    );
};

export default SignUpForm;