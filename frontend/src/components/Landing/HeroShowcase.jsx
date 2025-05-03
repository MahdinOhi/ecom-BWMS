import React, { useEffect, useState } from "react";

// Import all images from showcase folder
const imageModules = import.meta.glob("../../assets/showcase/*png", {
    eager: true,
});

const images = Object.values(imageModules).map((module) => module.default);

export default function HeroShowcase() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [prevImageIndex, setPrevImageIndex] = useState(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setPrevImageIndex(currentImageIndex);
            setIsTransitioning(true);
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            
            // Reset transition state after animation completes
            setTimeout(() => {
                setIsTransitioning(false);
            }, 1000);
        }, 3000);
        
        return () => clearInterval(interval);
    }, [currentImageIndex]);

    return (
        <>
            <style>
                {`
                    @keyframes slideInRight {
                        0% {
                            opacity: 0;
                            transform: translateX(30px) scale(0.95);
                        }
                        100% {
                            opacity: 1;
                            transform: translateX(0) scale(1);
                        }
                    }
                    
                    @keyframes slideOutLeft {
                        0% {
                            opacity: 1;
                            transform: translateX(0) scale(1);
                        }
                        100% {
                            opacity: 0;
                            transform: translateX(-30px) scale(0.95);
                        }
                    }
                    
                    .slide-in {
                        animation: slideInRight 1s forwards;
                    }
                    
                    .slide-out {
                        animation: slideOutLeft 1s forwards;
                    }
                `}
            </style>
            
            <div className="flex justify-end w-1/2 px-0">
                <div className="relative w-full max-w-[800px] h-[550px] rounded-l-[3rem] overflow-hidden border-l-[3px] border-t-[3px] border-b-[3px] border-purple-500/50 bg-white/5 backdrop-blur-sm shadow-[-8px_0_15px_rgba(147,51,234,0.3)]">
                    {/* Light glare effects */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/20 rounded-full blur-xl"></div>
                    <div className="absolute top-1/2 -left-20 w-40 h-40 bg-white/10 rounded-full blur-lg"></div>
                    
                    {/* Product Image Container */}
                    <div className="relative z-10 flex justify-center items-center h-full">
                        {/* Previous Image (sliding out) */}
                        {isTransitioning && prevImageIndex !== null && (
                            <img
                                src={images[prevImageIndex]}
                                alt="Previous Product"
                                className="absolute w-[50%] h-auto object-contain drop-shadow-xl slide-out"
                                loading="lazy"
                            />
                        )}
                        
                        {/* Current Image (sliding in) */}
                        <img
                            key={currentImageIndex}
                            src={images[currentImageIndex]}
                            alt="Featured Product"
                            className={`w-[50%] h-auto object-contain drop-shadow-xl ${isTransitioning ? 'slide-in' : ''}`}
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}