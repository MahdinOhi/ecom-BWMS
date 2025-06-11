import React from 'react';
import { Star } from 'lucide-react';

const ProductListItem = ({ id,image, name, price, rating, ratingCount, size, colors, fabrics }) => (
  <div className="rounded-xl p-4 shadow-[0_0_20px_5px_rgba(128,0,255,0.5)] backdrop-blur-sm bg-white/5 flex gap-8">
    <img
      src={image}
      alt={name}
      className="w-52 h-52 object-cover rounded-md flex-shrink-0"
    />
    <div className="flex-1 flex flex-col justify-between">
      <div>
        <div className="text-white text-[26px] font-bold text-lg flex justify-between items-center mb-2">
          {name}
          <div className="flex items-center text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
        </div>
        <p className="text-gray-200 text-lg font-bold">{`BDT ${price}`}</p>
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
      </div>
      
      <div className="mt-4 flex gap-3">
        <button className=" bg-transparent border border-purple-400 text-white px-4 py-2 rounded-md hover:bg-purple-600/80">
          Add to Cart
        </button>
        <button className=" bg-green-600/80 text-white px-4 py-2 rounded-md hover:bg-green-700/90">
          Buy Now
        </button>
      </div>
    </div>
  </div>
);

export default ProductListItem;