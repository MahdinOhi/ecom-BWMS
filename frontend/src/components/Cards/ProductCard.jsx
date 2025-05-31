import React from "react";
import { Star } from "@mui/icons-material";

const ProductCard = ({
    image,
    name,
    price,
    rating,
    ratingCount,
    size,
    colors,
    fabrics,
}) => {
    return (
        <div className="w-96 rounded-xl p-4 shadow-[0_0_20px_5px_rgba(128,0,255,0.5)] backdrop-blur-sm bg-white/5 ">
            <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover rounded-md mb-4"
            />
            <div className="text-white font-bold text-lg flex justify-between items-center">
                {name}
                <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} fontSize="small" />
                    ))}
                </div>
            </div>
            <p className="text-gray-200 text-sm">{`BDT ${price}`}</p>
            <p className="text-xs text-gray-400 mb-2">{`(${ratingCount} Ratings)`}</p>

            <div className="text-sm text-white space-y-1">
                <p><span className="font-semibold">Size:</span> {size}</p>
                <p className="flex items-center gap-2">
                    <span className="font-semibold">Color:</span>
                    {colors.map((color, idx) => (
                        <span
                            key={idx}
                            className="w-4 h-4 rounded-full border border-white"
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </p>
                <p><span className="font-semibold">Fabrics:</span> {fabrics}</p>
            </div>

            <div className="mt-4 flex gap-3">
                <button className="flex-1 bg-transparent border border-purple-400 text-white px-3 py-1 rounded-md hover:bg-purple-600/80">
                    Add to Cart
                </button>
                <button className="flex-1 bg-green-600/80 text-white px-3 py-1 rounded-md hover:bg-green-700/90">
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
