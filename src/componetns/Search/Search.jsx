import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useCollection } from '../Context/CollectionContext';
import { CartContext } from '../Context/CartContext';
import { ThemeContext } from '../Context/ThemeContext';

const calculateDiscountedPrice = (originalPrice, discountPercentage) => {
  if (!discountPercentage) return originalPrice; // If no discount, return the original price
  return Math.round(originalPrice - (originalPrice * discountPercentage) / 100);
};

const SearchResults = () => {
  const location = useLocation();
  const collectionItems = useCollection();
  const [filteredItems, setFilteredItems] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const { addToCart } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);

  const handleAddToCart = (item) => {
    addToCart(item);
    setSuccessMessage('Item added successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');

    if (query) {
      const results = collectionItems.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(results);
    }
  }, [location.search, collectionItems]);

  return (
    <div className="search-results p-6">
      {successMessage && (
        <div className="fixed top-16 right-4 px-4 py-2 rounded-md shadow-md z-50 bg-green-500 text-white font-semibold text-sm">
          {successMessage}
        </div>
      )}

      <h1 className="text-3xl font-bold mb-8 text-center text-purple-700">Search Results</h1>

      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => {
            const discountedPrice = item.discountPrice || calculateDiscountedPrice(item.price, item.discount || 0);
            return (
              <div
                key={index}
                className={`max-w-sm shadow-md rounded-lg mx-auto transition-transform transform hover:scale-105 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
                  }`}
              >
                <div className="relative w-full h-64 overflow-hidden rounded-t-lg">
                  <img
                    className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                    src={item.imgSrc}
                    alt={item.name}
                    onClick={() => handleImageClick(item)}
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <div className="mt-2">
                    <p className="text-gray-500">
                      <span className="line-through">Rs-{item.price}</span>
                    </p>
                    <p className="text-lg font-bold text-purple-600">
                      Rs-{discountedPrice}
                    </p>
                  </div>
                  <div className="flex items-center justify-center mt-2">
                    <span className="text-yellow-500">
                      {'★'.repeat(Math.floor(item.rating))}
                    </span>
                    <span className="text-gray-300">
                      {'☆'.repeat(5 - Math.floor(item.rating))}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`mt-4 w-full px-4 py-2 rounded-lg font-medium focus:outline-none transition-colors ${theme === 'dark'
                        ? 'bg-gray-700 hover:bg-gray-600'
                        : 'bg-gradient-to-r from-purple-500 to-pink-400 hover:bg-purple-700 text-white'
                      }`}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

            );
          })}
        </div>
      ) : (
        <p className="text-center text-2xl text-gray-600">No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
