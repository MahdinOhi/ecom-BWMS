import React from "react";
import SearchBar from "./SearchBar";
import HeroShowcase from "./HeroShowcase";

export default function HeroBanner() {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center  py-20 ml-40">
            {/* Left Banner Text */}
            <div className="flex flex-col justify-center items-start text-white max-w-xl ml-16">
                <h1 className="text-6xl font-extrabold leading-none mb-5">
                    BRO WHERE’S <br /> MY STUFF !!!
                </h1>
                <h2 className="text-3xl font-extrabold uppercase text-transparent stroke-text mb-6">
                    RIGHT HERE CHAMP &gt;:&lt;
                </h2>
                <p className="text-base text-gray-300 mb-8 leading-relaxed">
                    Upgrade your style with ease. <br />
                    We bring the trend to your footsteps.
                </p>
                <SearchBar />
            </div>

            {/* Right Showcase */}
            <HeroShowcase />
        </div>
    );
}
