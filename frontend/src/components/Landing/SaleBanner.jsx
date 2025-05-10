import React from "react";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function SaleBanner() {
    return (
        <div className="bg-[#f4b728] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] p-8 flex justify-between items-center w-[90%] max-w-6xl mx-auto h-[250px]">
            {/* Cloud Shape */}
            <div className="relative w-1/3 h-full flex items-center justify-center">
                <div className="absolute w-32 h-32 bg-[#d29b17] rounded-full top-10 left-12"></div>
                <div className="absolute w-32 h-32 bg-[#d29b17] rounded-full top-5 right-10"></div>
                <div className="absolute w-44 h-44 bg-[#d29b17] rounded-full top-14"></div>

                {/* Floating Product */}
                <img
                    src="/product.png"
                    alt="Product"
                    className="absolute w-40 h-40 object-contain opacity-80 drop-shadow-xl animate-float"
                />
            </div>

            {/* Text + Button */}
            <div className="w-2/3 text-right">
                <h1 className="text-4xl font-black text-black leading-tight">
                    LARGEST SALE<br />THIS MONTH
                </h1>
                <p className="text-sm text-gray-700 mt-2">
                    Details of the product, like price and all.
                </p>
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowForwardIosIcon />}
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
                    See More
                </Button>
            </div>
        </div>
    );
}
