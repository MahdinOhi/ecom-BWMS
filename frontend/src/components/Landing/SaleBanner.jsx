import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useEffect, useState } from "react";
import { getSaleBanner } from "../../api";

export default function SaleBanner() {

    const [bannerData, setBannerData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fallback data in case API fails
    const fallbackData = {
        title: "LARGEST SALE\nTHIS MONTH",
        description: "Details of the product, like price and all.",
        image: `https://picsum.photos/id/${Math.floor(Math.random() * 1000) + 1}/400/400`,
        buttonText: "SEE MORE",
        backgroundColor: "#f4b728"
    };

     useEffect(() => {
        const fetchBannerData = async () => {
            setLoading(true);
            setError(null);
            
            try {
                const response = await getSaleBanner();
                const data = response.data;
                
                // Set the banner data from API
                setBannerData({
                    title: data.title || fallbackData.title,
                    description: data.description || fallbackData.description,
                    image: data.image || fallbackData.image,
                    buttonText: data.button_text || data.buttonText || fallbackData.buttonText,
                    backgroundColor: data.background_color || data.backgroundColor || fallbackData.backgroundColor,
                    link: data.link || "/products", // Optional link for "SEE MORE" button
                    isActive: data.is_active !== undefined ? data.is_active : true
                });
                
            } catch (err) {
                console.error('Error fetching banner data:', err);
                setError('Failed to load banner data');
                // Use fallback data if API fails
                setBannerData(fallbackData);
                
            } finally {
                setLoading(false);
            }
        };

        fetchBannerData();
    }, []);

      // Loading state
    if (loading) {
        return (
            <div className="rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] mb-5 p-6 flex justify-between items-center mx-auto h-[220px] bg-gray-300 animate-pulse" style={{ width: '55%' }}>
                <div className="flex flex-row items-center w-full">
                    <div className="relative w-1/3 h-full flex items-center justify-center" style={{ marginLeft: '50px' }}>
                        <div className="w-40 h-40 bg-gray-400 rounded-lg"></div>
                    </div>
                    <div className="w-2/3 text-left pl-4" style={{ marginLeft: '35%' }}>
                        <div className="h-8 bg-gray-400 rounded mb-2 w-3/4"></div>
                        <div className="h-4 bg-gray-400 rounded mb-4 w-1/2"></div>
                        <div className="h-10 bg-gray-400 rounded w-32"></div>
                    </div>
                </div>
            </div>
        );
    }

    // Error state (still shows fallback banner)
    const displayData = bannerData || fallbackData;
    
    const handleSeeMoreClick = () => {
        if (displayData.link) {
            window.location.href = displayData.link;
        }
    };


    

    return (
        <div 
            className="rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] mb-5 p-6 flex justify-between items-center mx-auto h-[220px]" 
            style={{ 
                width: '55%',
                backgroundColor: displayData.backgroundColor 
            }}
        >
            {error && (
                <div className="absolute top-2 right-2 text-xs text-red-600 bg-white bg-opacity-80 px-2 py-1 rounded">
                    Using cached data
                </div>
            )}
            
            <div className="flex flex-row items-center w-full">
                <div className="relative w-1/3 h-full flex items-center justify-center" style={{ marginLeft: '50px' }}>
                    <img
                        src={displayData.image}
                        alt="Sale Banner"
                        loading="lazy"
                        className="absolute w-40 h-40 object-cover rounded-lg opacity-90 drop-shadow-xl animate-float"
                        onError={(e) => {
                            // Fallback to random image if banner image fails to load
                            e.target.src = `https://picsum.photos/id/${Math.floor(Math.random() * 1000) + 1}/400/400`;
                        }}
                    />
                </div>

                <div className="w-2/3 text-left pl-4" style={{ marginLeft: '35%' }}>
                    <h1 className="text-3xl font-black text-black leading-tight">
                        {displayData.title.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                {index < displayData.title.split('\n').length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </h1>
                    <p className="text-sm text-gray-700 mt-2">
                        {displayData.description}
                    </p>
                    <Button
                        variant="contained"
                        endIcon={<ArrowForwardIosIcon />}
                        onClick={handleSeeMoreClick}
                        sx={{
                            mt: 2,
                            bgcolor: "white",
                            color: "black",
                            fontWeight: "bold",
                            textTransform: "none",
                            borderRadius: "8px",
                            "&:hover": {
                                bgcolor: "#f0f0f0",
                            },
                        }}
                    >
                        {displayData.buttonText}
                    </Button>
                </div>
            </div>
        </div>
    );
}