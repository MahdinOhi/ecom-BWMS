// Layout.js for holding the background image
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const routes = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Blog", path: "/blog" },
    { label: "Log In", path: "/login" },
];

const Layout = () => {
    return (
        <div
            style={{
                backgroundImage: 'url(/img/hero/Background.svg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight: '100vh',
            }}
        >
            <Navbar routes={routes} />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
