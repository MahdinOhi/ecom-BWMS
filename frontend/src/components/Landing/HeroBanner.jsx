import React from "react";
import SearchBar from "./SearchBar";

export default function HeroBanner() {
    return (
        <div className="text-left min-h-screen flex flex-col justify-center px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
                BRO WHERE’S <br className="md:hidden" />
                MY STUFF !!!
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-white text-transparent-stroke mt-2">
                RIGHT HERE CHAMP &gt;&lt;
            </h2>
            <blockquote className="border-l-4 border-white pl-4 text-white italic text-sm md:text-base mt-4">
                Upgrade your style with ease. <br /> We bring the trend to your footsteps.
            </blockquote>

            <div className="mt-6 w-full max-w-md">
                <SearchBar />
            </div>
        </div>
    );
}
