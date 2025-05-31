
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCategoriesSection from './ProductCategoriesSection';
import FeaturedProductsSection from './FeaturedProductsSection';
import SaleBanner from '../Landing/SaleBanner';

const ShopPage = () => {

  const navigate = useNavigate();
  
  const handleCategoryClick = (categoryId, categoryName) => {
    console.log(`Navigating to category: ${categoryName} (ID: ${categoryId})`);
    navigate(`/shop/category/${categoryId}?name=${encodeURIComponent(categoryName)}`);
   
  };

  const handleFeaturedClick = (productId, productName) => {
    console.log(`Viewing featured product: ${productName} (ID: ${productId})`);
    // You can implement product detail navigation here
  
  };

  return (
    <div className="min-h-screen bg-transparent">
      <div className="container mx-auto px-4 py-8">
        
        <ProductCategoriesSection onCategoryClick={handleCategoryClick} />
        <FeaturedProductsSection onProductClick={handleFeaturedClick} />
        <SaleBanner />
      </div>
    </div>
  );
};
export default ShopPage;