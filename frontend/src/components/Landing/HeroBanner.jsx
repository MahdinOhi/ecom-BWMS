import React from "react";
import SearchBar from "./SearchBar";

export default function HeroBanner() {
    return (
        <div className="flex flex-col justify-center items-start text-white px-16 py-20 max-w-xl ml-40 ">
        <h1 className="text-6xl font-extrabold leading-none mb-5">
            BRO WHERE’S <br /> MY STUFF !!!
        </h1>
        <h2 className="text-3xl font-extrabold uppercase text-transparent stroke-text mb-6 ">
            RIGHT HERE CHAMP &gt;:&lt;
        </h2>
        <p className="text-base text-gray-300 mb-8 leading-relaxed">
            Upgrade your style with ease. <br />
            We bring the trend to your footsteps.
        </p>
        <SearchBar />
    </div>
    );
}
