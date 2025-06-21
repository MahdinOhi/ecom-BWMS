import React from 'react';
import  { useState, useEffect } from 'react';
import { getCategories } from '../../api';

const ProductCategoriesSection = ({ onCategoryClick }) => {

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      setError(null);
      
       try {
        const response = await getCategories();
        const fetchedCategories = response.data;
        
        // Add default colors if not provided by backend
        const categoriesWithColors = fetchedCategories.map((category, index) => ({
          ...category,
          color: category.color || defaultColors[index % defaultColors.length]
        }));
        
        setCategories(categoriesWithColors);

         } catch (err) {
        console.error('Error fetching categories:', err);
        setError('Failed to load categories. Please try again.');

          // Fallback to hardcoded categories if API fails needed for now
        const fallbackCategories = [
          { 
            id: 1, 
            name: 'Bags & Purses', 
            description: 'Stylish bags for every occasion', 
            color: 'from-purple-500 to-purple-600' 
          },
          { 
            id: 2, 
            name: 'Accessories', 
            description: 'Fashion accessories & jewelry', 
            color: 'from-purple-600 to-purple-700' 
          },
          { 
            id: 3, 
            name: 'Wallets', 
            description: 'Premium wallets & card holders', 
            color: 'from-purple-400 to-purple-500' 
          },
          { 
            id: 4, 
            name: 'Watches', 
            description: 'Trendy timepieces', 
            color: 'from-purple-700 to-purple-800' 
          },
          { 
            id: 5, 
            name: 'Sunglasses', 
            description: 'Stylish eyewear collection', 
            color: 'from-purple-500 to-purple-700' 
          },
          { 
            id: 6, 
            name: 'Belts', 
            description: 'Quality leather belts', 
            color: 'from-purple-600 to-purple-800' 
          }
        ];
        setCategories(fallbackCategories);
        
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  
  // Loading state
  if (loading) {
    return (
      <div className="mb-12">
        <h2 className="text-white text-2xl font-bold text-center mb-8">PRODUCTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-purple-500 to-purple-600 backdrop-blur-sm rounded-xl h-40 p-6 flex flex-col justify-center items-center text-center animate-pulse"
            >
              <div className="bg-white bg-opacity-20 h-6 w-32 rounded mb-2"></div>
              <div className="bg-white bg-opacity-10 h-4 w-48 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

   // Error state (with fallback categories)
  if (error && categories.length === 0) {
    return (
      <div className="mb-12">
        <h2 className="text-white text-2xl font-bold text-center mb-8">PRODUCTS</h2>
        <div className="text-center mb-6">
          <div className="text-red-400 mb-2">{error}</div>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  

  return (
      <div className="mb-12">
      <h2 className="text-white text-2xl font-bold text-center mb-8">PRODUCTS</h2>
      
      {/* Show error message but still display categories if fallback worked */}
      {error && categories.length > 0 && (
        <div className="text-center mb-4">
          <div className="text-yellow-400 text-sm">Using cached categories - {error}</div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
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