import React from 'react';

const ProductPagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  totalProducts, 
  productsPerPage 
}) => {
  const startProduct = (currentPage - 1) * productsPerPage + 1;
  const endProduct = Math.min(currentPage * productsPerPage, totalProducts);

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    let start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let end = Math.min(totalPages, start + maxVisiblePages - 1);
    
    if (end - start < maxVisiblePages - 1) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-3 py-1 rounded-md text-sm ${
            currentPage === i 
              ? 'bg-purple-600 text-white' 
              : 'bg-white/20 text-white hover:bg-white/30'
          }`}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <p className="text-white text-sm">
        Page {currentPage} of {totalPages} ({startProduct}-{endProduct} of {totalProducts})
      </p>
      
      <div className="flex gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-md text-sm bg-white/20 text-white hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        
        {renderPageNumbers()}
        
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded-md text-sm bg-white/20 text-white hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
        </button>
      </div>
    </div>
  );
};

export default ProductPagination;