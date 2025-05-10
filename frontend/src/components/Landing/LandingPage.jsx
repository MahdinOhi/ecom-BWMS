import React from "react";
import { Routes } from "react-router-dom";
import HeroBanner from "./HeroBanner";
import TagSection from './TagSection';
import LazyBackground from "../LazyBackground";
import { EmojiEvents, Build, LocalShipping, QuestionAnswer } from '@mui/icons-material';
import FeaturedSection from "./FeaturedSection";
import PolicySection from "./PolicySection";
import SaleBanner from "./SaleBanner";

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
        <LazyBackground src="HomePageBackground.webp">
            <Routes />
            <HeroBanner />
            <TagSection tags={tags} />
            <hr className="border-t border-white/20 mb-10" />
            <FeaturedSection />
            <hr className="border-t border-white/20 mb-10" />
            <PolicySection />
            <hr className="border-t border-white/20 mb-10" />
            <SaleBanner />
        </LazyBackground>
    </div>
);

export default LandingPage;
