import react, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import ProductCard from '../Cards/ProductCard';
import ProductSidebar from './ProductSidebar';
import ProductPagination from './ProductPagination';
import ViewToggle from './ViewToggle';
import ProductListItem from './ProductListItem';
import { getProducts, getProductsByCategory} from '../../api';


const ProductPage = () => {
  const { categoryId } = useParams();
  const [searchParams] = useSearchParams();
  const categoryName = searchParams.get('name') || 'All Products';
  const [viewMode, setViewMode] = useState('grid');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    sortBy: 'newest',
    priceRange: [0, 10000],
    availability: 'all',
    selectedColors: [],
    selectedSizes: []
  });

  const productsPerPage = 12;

  // Fetch the products from the API
   useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      
      try {
        let response;
        
        if (categoryId && categoryId !== 'all') {
          // Fetch the products by category
          response = await getProductsByCategory(categoryId);
        } else {
          // Fetch all products
          response = await getProducts();
        }
        
        const fetchedProducts = response.data;
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
        
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again.');
        // Fallback to empty array if API fails
        setProducts([]);
        setFilteredProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]); // re-run when the categoryId changes

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

    // Apply color filter
    if (currentFilters.selectedColors.length > 0) {
      filtered = filtered.filter(product => 
        product.colors && product.colors.some(color => 
          currentFilters.selectedColors.includes(color)
        )
      );
    }

    // Apply size filter
    if (currentFilters.selectedSizes.length > 0) {
      filtered = filtered.filter(product => 
        currentFilters.selectedSizes.includes(product.size)
      );
    }

     // Apply sorting
    filtered.sort((a, b) => {
      switch (currentFilters.sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'newest':
        default:
          return (b.id || 0) - (a.id || 0);
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

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-transparent flex items-center justify-center">
        <div className="text-white text-xl">Loading products...</div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-transparent flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">{error}</div>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }


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
            {filteredProducts.length === 0 ? (
              <div className="text-center text-white text-xl py-8">
                No products found matching your criteria.
              </div>
            ) : (
              <>
                {viewMode === 'grid' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mb-8">
                    {currentProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        rating={product.rating}
                        ratingCount={product.ratingCount || product.rating_count}
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
                        ratingCount={product.ratingCount || product.rating_count}
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;