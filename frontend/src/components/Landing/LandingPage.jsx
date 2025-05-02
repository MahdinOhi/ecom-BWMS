import React from "react";
import Navbar from "../Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import HeroBanner from "./HeroBanner";
import TagSection from './TagSection';
import { EmojiEvents, Build, LocalShipping, QuestionAnswer } from '@mui/icons-material';

const tags = [
    { icon: EmojiEvents, label: 'Quality', rating: 4.7 },
    { icon: Build, label: 'Service', rating: 5.0 },
    { icon: LocalShipping, label: 'Delivery', rating: 4.5 },
    { icon: QuestionAnswer, label: 'Response', rating: 4.8 },
];

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
        <TagSection tags={tags} />
    </div>
);

export default LandingPage;
