import React from 'react';

const FeaturedProductsSection = ({ onProductClick }) => {
  const featuredProducts = [
    { 
      id: 1, 
      name: 'Premium Leather Bag', 
      price: '$89.99', 
      image: 'https://picsum.photos/id/292/300/300',
      badge: 'Best Seller'
    },
    { 
      id: 2, 
      name: 'Designer Watch', 
      price: '$159.99', 
      image: 'https://picsum.photos/id/119/300/300',
      badge: 'New Arrival'
    },
    { 
      id: 3, 
      name: 'Stylish Sunglasses', 
      price: '$49.99', 
      image: 'https://picsum.photos/id/96/300/300',
      badge: 'Hot Deal'
    },
    { 
      id: 4, 
      name: 'Fashion Wallet', 
      price: '$39.99', 
      image: 'https://picsum.photos/id/367/300/300',
      badge: 'Limited'
    }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-white text-2xl font-bold text-center mb-8">FEATURED</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <div 
            key={product.id}
            onClick={() => onProductClick(product.id, product.name)}
            className="bg-gray-200/90 backdrop-blur-sm rounded-xl h-48 p-4 flex flex-col justify-between cursor-pointer hover:bg-gray-100/90 hover:scale-105 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
          >
            {/* Product Badge */}
            <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
              {product.badge}
            </div>
            
            {/* Product Image */}
            <div className="flex-1 flex items-center justify-center mb-2">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-16 h-16 object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            
            {/* Product Info */}
            <div className="text-center">
              <h3 className="text-gray-800 font-semibold text-sm mb-1 group-hover:text-purple-700 transition-colors">
                {product.name}
              </h3>
              <p className="text-purple-600 font-bold text-lg">
                {product.price}
              </p>
            </div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-purple-700 font-semibold text-sm">View Product</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductsSection;
