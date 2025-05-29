import React from 'react';

const ProductCategoriesSection = ({ onCategoryClick }) => {
  const productCategories = [
    { id: 1, name: 'Bags & Purses', description: 'Stylish bags for every occasion', color: 'from-purple-500 to-purple-600' },
    { id: 2, name: 'Accessories', description: 'Fashion accessories & jewelry', color: 'from-purple-600 to-purple-700' },
    { id: 3, name: 'Wallets', description: 'Premium wallets & card holders', color: 'from-purple-400 to-purple-500' },
    { id: 4, name: 'Watches', description: 'Trendy timepieces', color: 'from-purple-700 to-purple-800' },
    { id: 5, name: 'Sunglasses', description: 'Stylish eyewear collection', color: 'from-purple-500 to-purple-700' },
    { id: 6, name: 'Belts', description: 'Quality leather belts', color: 'from-purple-600 to-purple-800' }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-white text-2xl font-bold text-center mb-8">PRODUCTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {productCategories.map((category) => (
          <div 
            key={category.id} 
            onClick={() => onCategoryClick(category.id, category.name)}
            className={`bg-gradient-to-br ${category.color} backdrop-blur-sm rounded-xl h-40 p-6 flex flex-col justify-center items-center text-center cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300 group`}
          >
            <h3 className="text-white text-xl font-bold mb-2 group-hover:text-yellow-200 transition-colors">
              {category.name}
            </h3>
            <p className="text-purple-100 text-sm opacity-90">
              {category.description}
            </p>
            <div className="mt-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategoriesSection;