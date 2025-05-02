import React from "react";
import showcaseBag from "../../assets/bag-png-22324.png"; 

export default function HeroShowcase() {
    return (
        <div className="flex justify-end w-1/2 px-0">
        <div className="relative w-full max-w-[800px] h-[550px] rounded-l-[3rem] overflow-hidden border-l-[3px] border-t-[3px] border-b-[3px] border-purple-500/50 bg-white/5 backdrop-blur-sm shadow-[-8px_0_15px_rgba(147,51,234,0.3)] ">
            {/* Light glare effect */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 -left-20 w-40 h-40 bg-white/10 rounded-full blur-lg"></div>

            {/* Image content */}
            <div className="relative z-10 flex justify-center items-center h-full">
                <img
                    src={showcaseBag}
                    alt="Featured Product"
                    className="w-[50%] h-auto object-contain drop-shadow-xl"
                />
            </div>
        </div>
    </div>
    );
}
