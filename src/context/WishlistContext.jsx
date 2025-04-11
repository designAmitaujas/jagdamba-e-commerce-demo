import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  // Initialize wishlist state from localStorage or empty array
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlistItems');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Update localStorage whenever wishlistItems changes
  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (product) => {
    setWishlistItems(prevItems => {
      // Check if product already exists in wishlist
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // If product exists, return the same array (no duplicate items)
        return prevItems;
      }
      
      // If product doesn't exist, add it to the wishlist
      return [...prevItems, product];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item.id === productId);
  };

  const wishlistCount = wishlistItems.length;

  return (
    <WishlistContext.Provider value={{ 
      wishlistItems, 
      addToWishlist, 
      removeFromWishlist, 
      isInWishlist,
      wishlistCount 
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}; 