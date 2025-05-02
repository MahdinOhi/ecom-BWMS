import React from "react";
import Navbar from "../Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import HeroBanner from "./HeroBanner";

const routes = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Blog", path: "/blog" },
    { label: "Log In", path: "/login" },
];

const LandingPage = () => (
    <div>
        <Navbar routes={routes} />
        <Routes>
        </Routes>
        <HeroBanner />
    </div>
);

export default LandingPage;
