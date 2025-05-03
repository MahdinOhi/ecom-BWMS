import React from "react";
import { motion } from "framer-motion";
import VerticalImageCard from "../Cards/VerticalImageCard";

const AnimatedCard = ({ imageSrc, overlayText, textColor, linkHref }) => (
    <motion.div
        whileHover={{ scale: 1.05, y: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
    >
        <VerticalImageCard
            imageSrc={imageSrc}
            overlayText={overlayText}
            textColor={textColor}
            linkHref={linkHref}
        />
    </motion.div>
);

const FeaturedSection = () => {
    // Sample featured cards (replace with real content)
    const featuredCards = [
        {
            imageSrc: "https://picsum.photos/200/300",
            overlayText: "Smart Tech",
            textColor: "#FFFFFF",
            linkHref: "/category/smart-tech",
        },
        {
            imageSrc: "https://picsum.photos/200/300",
            overlayText: "Eco Gadgets",
            textColor: "#FFFFFF",
            linkHref: "/category/eco-gadgets",
        },
        {
            imageSrc: "https://picsum.photos/200/300",
            overlayText: "AI Devices",
            textColor: "#FFFFFF",
            linkHref: "/category/ai-devices",
        },
        {
            imageSrc: "https://picsum.photos/200/300",
            overlayText: "Wearables",
            textColor: "#FFFFFF",
            linkHref: "/category/wearables",
        },
    ];

    return (
        <section
            className="w-full max-w-[1957.6px] h-[526.4px] pt-[76px] pr-[104.8px] pb-[76px] pl-[104.8px] mx-auto flex items-center justify-center gap-[52.8px]"
        >

            {/* Left two cards */}
            <div className="flex gap-[52.8px]">
                <AnimatedCard {...featuredCards[0]} />
                <AnimatedCard {...featuredCards[1]} />
            </div>

            {/* FEATURED text */}
            <h2
                className="text-[48px] font-extrabold text-transparent"
                style={{
                    WebkitTextStroke: "2px white",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                }}
            >
                FEATURED
            </h2>

            {/* Right two cards */}
            <div className="flex gap-[52.8px]">
                <AnimatedCard {...featuredCards[2]} />
                <AnimatedCard {...featuredCards[3]} />
            </div>
        </section>
    );
};

export default FeaturedSection;
