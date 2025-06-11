import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography, Checkbox, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Star, Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Empty from './EmptyList';

const OuterWrapper = styled(Box)({
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const OuterContainer = styled(Box)({
    width: '1048px',
    minHeight: '665.88px',
    padding: '65.6px 77.31px',
    gap: '35.92px',
    borderRadius: '52.32px',
    border: '3px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    background: 'rgba(255, 255, 255, 0.05)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const WishlistContainer = styled(Paper)({
    width: '893.38px',
    minHeight: '534.69px',
    padding: '34.59px',
    gap: '20px',
    borderRadius: '10.09px',
    border: '0.72px solid rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
});

const WishlistItem = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    marginBottom: '12px',
    backgroundColor: '#fafafa',
});

const WishlistPage = () => {
    const [wishlistItems, setWishlistItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        setWishlistItems(wishlist);
    }, []);

    // Update selectAll state based on selectedItems
    const selectAll = selectedItems.length > 0 && selectedItems.length === wishlistItems.length;

    const handleSelectAll = (event) => {
        if (event.target.checked) {
            setSelectedItems(wishlistItems.map(item => String(item.id)));
        } else {
            setSelectedItems([]);
        }
    };

    const handleItemSelect = (itemId) => {
        const stringId = String(itemId);
        if (selectedItems.includes(stringId)) {
            setSelectedItems(selectedItems.filter(id => id !== stringId));
        } else {
            setSelectedItems([...selectedItems, stringId]);
        }
    };

    const handleDeleteSelected = () => {
        const updatedWishlist = wishlistItems.filter(item => !selectedItems.includes(String(item.id)));
        setWishlistItems(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        setSelectedItems([]);
    };

    const handleAddToCart = (item) => {
        console.log('Added to cart:', item);
    };

    const handleBuyNow = (item) => {
        console.log('Buy now:', item);
    };

    const handleRemoveItem = (itemId) => {
        const stringId = String(itemId);
        const updatedWishlist = wishlistItems.filter(item => String(item.id) !== stringId);
        setWishlistItems(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        setSelectedItems(selectedItems.filter(id => id !== stringId));
    };

    if (wishlistItems.length === 0) {
        return (
            <Empty />
        );
    }

    return (
        <OuterWrapper>
            <OuterContainer>
                <WishlistContainer>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
                        Wish<span style={{ color: '#7E57C2' }}>list</span>
                    </Typography>

                    {/* Select All and Delete Header */}
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                        <Box display="flex" alignItems="center">
                            <Checkbox 
                                checked={selectAll}
                                onChange={handleSelectAll}
                                sx={{ mr: 1 }}
                            />
                            <Typography>Select All</Typography>
                        </Box>
                        <Button 
                            variant="contained" 
                            color="error"
                            onClick={handleDeleteSelected}
                            disabled={selectedItems.length === 0}
                            sx={{ borderRadius: '20px', px: 3 }}
                        >
                            Delete
                        </Button>
                    </Box>

                    {/* Wishlist Items */}
                    <Box sx={{ maxHeight: '400px', overflowY: 'auto' }}>
                        {wishlistItems.map((item) => (
                            <WishlistItem key={item.id}>
                                <Checkbox 
                                    checked={selectedItems.includes(item.id)}
                                    onChange={() => handleItemSelect(item.id)}
                                    sx={{ mr: 2 }}
                                />
                                
                                <Box sx={{ width: '80px', height: '80px', mr: 2 }}>
                                    <img 
                                        src={item.image} 
                                        alt={item.name}
                                        style={{ 
                                            width: '100%', 
                                            height: '100%', 
                                            objectFit: 'cover', 
                                            borderRadius: '4px',
                                            backgroundColor: '#f0f0f0'
                                        }}
                                    />
                                </Box>

                                <Box sx={{ flex: 1 }}>
                                    <Box display="flex" alignItems="center" mb={0.5}>
                                        <div style={{ display: 'flex', alignItems: 'center', color: '#ffa500' }}>
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} fontSize="small" />
                                            ))}
                                        </div>
                                        <Typography variant="caption" sx={{ ml: 1, color: 'gray' }}>
                                            ({item.ratingCount} Ratings)
                                        </Typography>
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Details
                                    </Typography>
                                </Box>

                                <Box sx={{ textAlign: 'right', mr: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        BDT {item.price}/-
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <Button 
                                        variant="outlined" 
                                        size="small"
                                        onClick={() => handleAddToCart(item)}
                                        sx={{ 
                                            borderColor: '#4caf50', 
                                            color: '#4caf50',
                                            '&:hover': { 
                                                backgroundColor: '#4caf50', 
                                                color: 'white' 
                                            }
                                        }}
                                    >
                                        Add to Cart
                                    </Button>
                                    <Button 
                                        variant="contained" 
                                        size="small"
                                        onClick={() => handleBuyNow(item)}
                                        sx={{ 
                                            backgroundColor: '#4caf50',
                                            '&:hover': { backgroundColor: '#388e3c' }
                                        }}
                                    >
                                        Buy Now
                                    </Button>
                                </Box>

                                <Button 
                                    onClick={() => handleRemoveItem(item.id)}
                                    sx={{ 
                                        minWidth: 'auto', 
                                        p: 1, 
                                        ml: 1,
                                        color: '#f44336',
                                        '&:hover': { backgroundColor: 'rgba(244, 67, 54, 0.1)' }
                                    }}
                                >
                                    <Delete />
                                </Button>
                            </WishlistItem>
                        ))}
                    </Box>
                </WishlistContainer>
            </OuterContainer>
        </OuterWrapper>
    );
};

export default WishlistPage;