import react, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import ProductCard from '../Cards/ProductCard';
import ProductSidebar from './ProductSidebar';
import ProductPagination from './ProductPagination';
import ViewToggle from './ViewToggle';
import ProductListItem from './ProductListItem';


const ProductPage = () => {
  const { categoryId } = useParams();
  const [searchParams] = useSearchParams();
  const categoryName = searchParams.get('name') || 'All Products';
  const [viewMode, setViewMode] = useState('grid');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    sortBy: 'newest',
    priceRange: [0, 10000],
    availability: 'all',
    selectedColors: [],
    selectedSizes: []
  });

  const productsPerPage = 12;

  // Mock product data - replace with your actual data fetching
  const mockProducts = [
    {
      id: 1,
      image: "https://picsum.photos/id/292/400/300",
      name: "Premium Leather Bag",
      price: 2500,
      rating: 4.5,
      ratingCount: 125,
      size: "Medium",
      colors: ["#8B4513", "#000000"],
      fabrics: "Genuine Leather",
      category: "Bags & Purses",
      categoryId: 1,
      availability: "in-stock"
    },
    {
      id: 2,
      image: "https://picsum.photos/id/119/400/300",
      name: "Designer Watch",
      price: 4500,
      rating: 4.8,
      ratingCount: 89,
      size: "One Size",
      colors: ["#C0C0C0", "#FFD700"],
      fabrics: "Stainless Steel",
      category: "Watches",
      categoryId: 4,
      availability: "in-stock"
    },
    {
      id: 3,
      image: "https://picsum.photos/id/96/400/300",
      name: "Stylish Sunglasses",
      price: 1200,
      rating: 4.3,
      ratingCount: 67,
      size: "One Size",
      colors: ["#000000", "#8B4513"],
      fabrics: "Plastic Frame",
      category: "Sunglasses",
      categoryId: 5,
      availability: "in-stock"
    },
    {
      id: 4,
      image: "https://picsum.photos/id/367/400/300",
      name: "Fashion Wallet",
      price: 800,
      rating: 4.2,
      ratingCount: 45,
      size: "Small",
      colors: ["#8B4513", "#000000", "#654321"],
      fabrics: "PU Leather",
      category: "Wallets",
      categoryId: 3,
      availability: "limited"
    },
    {
      id: 5,
      image: "https://picsum.photos/id/234/400/300",
      name: "Gold Necklace",
      price: 3200,
      rating: 4.7,
      ratingCount: 92,
      size: "One Size",
      colors: ["#FFD700"],
      fabrics: "18K Gold Plated",
      category: "Accessories",
      categoryId: 2,
      availability: "in-stock"
    },
    {
      id: 6,
      image: "https://picsum.photos/id/158/400/300",
      name: "Leather Belt",
      price: 950,
      rating: 4.4,
      ratingCount: 78,
      size: "Adjustable",
      colors: ["#8B4513", "#000000"],
      fabrics: "Genuine Leather",
      category: "Belts",
      categoryId: 6,
      availability: "in-stock"
    },
    // Add more products as needed
    ...Array.from({ length: 30 }, (_, i) => ({
      id: 7 + i,
      image: `https://picsum.photos/id/${200 + i}/400/300`,
      name: `Product ${7 + i}`,
      price: Math.floor(Math.random() * 5000) + 500,
      rating: (Math.random() * 2 + 3).toFixed(1),
      ratingCount: Math.floor(Math.random() * 200) + 10,
      size: ["Small", "Medium", "Large", "One Size"][Math.floor(Math.random() * 4)],
      colors: [["#FF0000", "#00FF00"], ["#0000FF", "#FFFF00"], ["#000000", "#FFFFFF"]][Math.floor(Math.random() * 3)],
      fabrics: ["Cotton", "Leather", "Synthetic", "Metal"][Math.floor(Math.random() * 4)],
      category: ["Bags & Purses", "Accessories", "Wallets", "Watches", "Sunglasses", "Belts"][Math.floor(Math.random() * 6)],
      categoryId: Math.floor(Math.random() * 6) + 1,
      availability: ["in-stock", "limited", "out-of-stock"][Math.floor(Math.random() * 3)]
    }))
  ];

  useEffect(() => {
    // Filter products based on category
    let filtered = mockProducts;
    if (categoryId && categoryId !== 'all') {
      filtered = mockProducts.filter(product => product.categoryId === parseInt(categoryId));
    }
    setProducts(filtered);
    setFilteredProducts(filtered);
  }, [categoryId]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (currentFilters) => {
    let filtered = [...products];

    // Apply price filter
    filtered = filtered.filter(product => 
      product.price >= currentFilters.priceRange[0] && 
      product.price <= currentFilters.priceRange[1]
    );

    // Apply availability filter
    if (currentFilters.availability !== 'all') {
      filtered = filtered.filter(product => product.availability === currentFilters.availability);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (currentFilters.sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
        default:
          return b.id - a.id;
      }
    });

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="min-h-screen bg-transparent">
      <div className="container ml-32 px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-white text-4xl font-bold mb-2">{categoryName.toUpperCase()}</h1>
          <p className="text-purple-200">SHOP → CATEGORY</p>
        </div>

        <div className="flex gap-4">
          {/* Sidebar */}
          <ProductSidebar 
            filters={filters}
            onFilterChange={handleFilterChange}
            totalProducts={filteredProducts.length}
            viewMode={viewMode}
            setViewMode={setViewMode}
          />

          {/* Products Grid */}
          
          <div className="flex-1">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mb-8  " >
                {currentProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    rating={product.rating}
                    ratingCount={product.ratingCount}
                    size={product.size}
                    colors={product.colors}
                    fabrics={product.fabrics}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-4 mb-8">
                {currentProducts.map((product) => (
                  <ProductListItem
                    key={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    rating={product.rating}
                    ratingCount={product.ratingCount}
                    size={product.size}
                    colors={product.colors}
                    fabrics={product.fabrics}
                  />
                ))}
              </div>
            )}

           
            {/* Pagination */}
            <ProductPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalProducts={filteredProducts.length}
              productsPerPage={productsPerPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;