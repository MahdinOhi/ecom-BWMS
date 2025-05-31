import React from 'react';
import { ChevronDown, Grid, List } from 'lucide-react';
import ViewToggle from './ViewToggle';

const ProductSidebar = ({ filters, onFilterChange, totalProducts,viewMode,setViewMode }) => {
  const handleSortChange = (sortBy) => {
    onFilterChange({ ...filters, sortBy });
  };

  const handlePriceChange = (priceRange) => {
    onFilterChange({ ...filters, priceRange });
  };

  const handleAvailabilityChange = (availability) => {
    onFilterChange({ ...filters, availability });
  };

  const productCategories = [
    { id: 1, name: 'Bags & Purses', count: 12 },
    { id: 2, name: 'Accessories', count: 8 },
    { id: 3, name: 'Wallets', count: 6 },
    { id: 4, name: 'Watches', count: 4 },
    { id: 5, name: 'Sunglasses', count: 7 },
    { id: 6, name: 'Belts', count: 5 }
  ];

  const featuredProducts = [
    { id: 1, name: 'Product 1', rating: 4.5 },
    { id: 2, name: 'Product 2', rating: 4.8 },
    { id: 3, name: 'Product 3', rating: 4.3 },
    { id: 4, name: 'Product 4', rating: 4.6 }
  ];

  return (
    <div className="w-64 bg-black/30 backdrop-blur-lg rounded-xl p-6 h-fit border border-white/20 mr-12">
      {/* Sort By */}
      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <h3 className="text-white font-semibold mb-3">Sort by</h3>
          <div className="relative">
            <select 
              value={filters.sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="w-full bg-purple-800/50 text-white p-2 rounded border border-purple-500/30 appearance-none cursor-pointer text-sm"
            >
              <option value="price-high">Price high</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="rating">Highest Rated</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-300 w-4 h-4 pointer-events-none" />
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-white font-semibold mb-3">Show</h3>
          <div className="relative">
            <select className="w-full bg-purple-800/50 text-white p-2 rounded border border-purple-500/30 appearance-none cursor-pointer text-sm">
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="36">36</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-300 w-4 h-4 pointer-events-none" />
          </div>
        </div>
      </div>
      {/* view toggle button */}
      <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />

      {/* Price Range */}
     
      <div className="mb-6">
        <h3 className="text-white font-semibold mb-3">Price</h3>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="10000"
            value={filters.priceRange[1]}
            onChange={(e) => handlePriceChange([filters.priceRange[0], parseInt(e.target.value)])}
            className="w-full"
          />
          <div className="flex justify-between text-purple-300 text-sm">
            <span>BDT 0</span>
            <span>BDT {filters.priceRange[1]}</span>
          </div>
        </div>
      </div>
      {/* Availability */}
      <div className="mb-6">
        <h3 className="text-white font-bold mb-3">Availability</h3>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Items' },
            { value: 'in-stock', label: 'In Stock' },
            { value: 'limited', label: 'Limited Stock' },
            { value: 'out-of-stock', label: 'Out of Stock' }
          ].map((option) => (
            <label key={option.value} className="flex items-center text-white text-sm cursor-pointer">
              <input
                type="radio"
                name="availability"
                value={option.value}
                checked={filters.availability === option.value}
                onChange={(e) => handleAvailabilityChange(e.target.value)}
                className="mr-2"
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>

      {/* Product Categories */}
      <div className="mb-6">
        <h3 className="text-white font-bold mb-3">Product Categories</h3>
        <div className="space-y-2">
          {productCategories.map((category) => (
            <div key={category.id} className="flex justify-between text-white text-sm">
              <span>{category.name}</span>
              <span className="text-purple-300">({category.count})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div>
        <h3 className="text-white font-bold mb-3">Featured Products</h3>
        <div className="space-y-2">
          {featuredProducts.map((product) => (
            <div key={product.id} className="flex items-center gap-2 p-2 bg-purple-800/30 rounded-md">
              <div className="w-8 h-8 bg-gray-400 rounded"></div>
              <div className="flex-1">
                <p className="text-white text-xs">{product.name}</p>
                <div className="flex text-yellow-400 text-xs">
                  {'★'.repeat(Math.floor(product.rating))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSidebar;