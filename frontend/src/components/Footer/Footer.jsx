import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Logo from '../Logo.jsx';

// For FB & Insta icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import IconButton from '@mui/material/IconButton';
import { blue, pink } from '@mui/material/colors';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmitEmail = () => {
        // Handle newsletter subscription logic here
        console.log('Email submitted:', email);
        setEmail('');
    };

    return (
        <footer className="w-full bg-transparent py-12 text-white">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
                {/* Logo and Subscribe Section */}
                <div className="mb-8 md:mb-0">
                    <Logo />
                    <div className="mt-8">
                        <h3 className="text-lg font-medium">Subscribe</h3>
                        <p className="text-sm text-gray-300">Get 10% off your first order</p>

                        <div className="mt-4 flex items-center">
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="Enter your email"
                                className="bg-transparent border-b border-gray-500 text-white focus:outline-none py-1 w-48"
                            />
                            <button
                                onClick={handleSubmitEmail}
                                className="ml-2"
                            >
                                <Send className="text-white h-5 w-5 transform rotate-45" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Support Section */}
                <div className="mb-8 md:mb-0">
                    <h3 className="text-lg font-medium mb-4">Support</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="/address" className="text-sm text-gray-300 hover:text-white">address</a>
                        </li>
                        <li>
                            <a href="mailto:exclusive@gmail.com" className="text-sm text-gray-300 hover:text-white">browheresmystuff@gmail.com</a>
                        </li>
                        <li>
                            <a href="tel:+88015-88888-9999" className="text-sm text-gray-300 hover:text-white">+8801605-701614</a>
                        </li>
                    </ul>
                </div>

                {/* Account Section */}
                <div className="mb-8 md:mb-0">
                    <h3 className="text-lg font-medium mb-4">Account</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="/my-account" className="text-sm text-gray-300 hover:text-white">My Account</a>
                        </li>
                        <li>
                            <a href="/login" className="text-sm text-gray-300 hover:text-white">Login / Register</a>
                        </li>
                        <li>
                            <a href="/cart" className="text-sm text-gray-300 hover:text-white">Cart</a>
                        </li>
                        <li>
                            <a href="/wishlist" className="text-sm text-gray-300 hover:text-white">Wishlist</a>
                        </li>
                        <li>
                            <a href="/shop" className="text-sm text-gray-300 hover:text-white">Shop</a>
                        </li>
                    </ul>
                </div>

                {/* Quick Link Section */}
                <div className="mb-8 md:mb-0">
                    <h3 className="text-lg font-medium mb-4">Quick Link</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="/privacy-policy" className="text-sm text-gray-300 hover:text-white">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/terms-of-use" className="text-sm text-gray-300 hover:text-white">Terms of use</a>
                        </li>
                        <li>
                            <a href="/faq" className="text-sm text-gray-300 hover:text-white">FAQ</a>
                        </li>
                        <li>
                            <a href="/contact" className="text-sm text-gray-300 hover:text-white">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Social Links Section */}
                <div>
                    <h3 className="text-lg font-medium mb-4">Our Social Links</h3>
                    <div className="flex space-x-4">
                        <IconButton
                            component="a"
                            href="https://www.facebook.com/browheresmystuff"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                backgroundColor: blue[700],
                                color: '#fff',
                                '&:hover': { backgroundColor: blue[800] },
                                borderRadius: '50%', // Ensures the button is circular
                                width: 48, // Adjust width to desired size
                                height: 48, // Adjust height to desired size
                            }}
                        >
                            <FontAwesomeIcon icon={faFacebookF} />
                        </IconButton>
                        <IconButton
                            component="a"
                            href="https://www.instagram.com/browheresmystuff"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                backgroundColor: pink[500],
                                color: '#fff',
                                '&:hover': { backgroundColor: pink[600] },
                                borderRadius: '50%', // Ensures the button is circular
                                width: 48, // Adjust width to desired size
                                height: 48, // Adjust height to desired size
                            }}
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </IconButton>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="container mx-auto px-4 mt-12 text-center">
                <p className="text-sm text-gray-400">© Copyright 2025. All right reserved to @browheresmystuff</p>
            </div>
        </footer>
    );
};

export default Footer;