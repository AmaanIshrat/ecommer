import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useCollection } from '../Context/CollectionContext'; 
import { CartContext } from '../Context/CartContext';

const SearchResults = () => {
  const location = useLocation();
  const collectionItems = useCollection();
  const [filteredItems, setFilteredItems] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const { addToCart } = useContext(CartContext);

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
      {/* Display success message if it's set */}
      {successMessage && (
        <div className="fixed top-16 right-4 px-4 py-2 rounded-md shadow-md z-50 bg-green-500 text-white font-semibold text-sm">
          {successMessage}
        </div>
      )}

      <h1 className="text-2xl font-semibold mb-6 text-center text-purple-600">Search Results</h1>
      
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"> {/* Increased gap between items */}
          {filteredItems.map((item) => (
            <div key={item.id} className="item bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105"> {/* Reduced padding */}
              <img
                src={item.imgSrc}
                alt={item.name}
                className="item-image w-full h-56 object-cover rounded-t-lg mb-3"  
              />
              <div className="item-details text-center">
                <p className="item-name text-base font-semibold truncate text-gray-700">{item.name}</p> {/* Reduced font size */}
                
                {/* Display discount price if available */}
                {item.discountPrice ? (
                  <div className="item-price text-lg font-bold text-purple-600 mt-2"> {/* Reduced font size */}
                    Rs-{item.discountPrice}
                    <span className="text-sm line-through text-gray-500 ml-2">Rs-{item.price}</span>
                  </div>
                ) : (
                  <p className="item-price text-lg font-bold text-purple-600 mt-2">Rs-{item.price}</p>
                )}

                {/* Display rating */}
                <div className="item-rating mt-2 text-yellow-500">
                  {'★'.repeat(Math.floor(item.rating))}{'☆'.repeat(5 - Math.floor(item.rating))}
                </div>

                <button 
                  onClick={() => handleAddToCart(item)} 
                  className="add-to-cart-btn bg-purple-500 text-white py-2 px-5 rounded-full mt-4 w-full transition-all hover:bg-purple-600 hover:scale-105">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl text-gray-600">No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
