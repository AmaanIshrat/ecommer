import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import { ThemeContext } from '../Context/ThemeContext';

const calculateDiscountedPrice = (originalPrice, discountPercentage) => {
  return originalPrice - (originalPrice * (discountPercentage / 100));
};

const StarRating = ({ rating }) => {
  const stars = Array(5).fill(0);
  return (
    <div className="flex items-center">
      {stars.map((_, index) => (
        <svg
          key={index}
          className={`h-5 w-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 .587l3.668 7.431 8.332 1.206-6.016 5.885 1.417 8.288L12 18.897l-7.401 3.895 1.417-8.288-6.016-5.885 8.332-1.206L12 .587z" />
        </svg>
      ))}
    </div>
  );
};

function Women() {
  const { addToCart } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);
  const [successMessage, setSuccessMessage] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [minPrice, setMinPrice] = useState(0);  // Track minimum price filter
  const [maxPrice, setMaxPrice] = useState(10000);  // Track maximum price filter
  const [sortOrder, setSortOrder] = useState('lowToHigh');

  const products = [
    { name: 'Kids 1', price: 599, discount: 15, imgSrc: '/assets/Images/K1.jpg', rating: 5 },
    { name: 'Kids 2', price: 799, discount: 20, imgSrc: '/assets/Images/k5.jpg', rating: 4 },
    { name: 'Kids 3', price: 599, discount: 10, imgSrc: '/assets/Images/K2.jpg', rating: 4 },
    { name: 'Kids 4', price: 999, discount: 25, imgSrc: '/assets/Images/k4.jpg', rating: 5 },
    { name: 'Kids 5', price: 399, discount: 5, imgSrc: '/assets/Images/K3.jpg', rating: 3 },
    { name: 'Kids 6', price: 499, discount: 15, imgSrc: '/assets/Images/k6.jpg', rating: 4 },
    { name: 'Kids 7', price: 599, discount: 10, imgSrc: '/assets/Images/K1.jpg', rating: 4},
  ];

  // Filter products based on price range
  const filteredProducts = products
    .filter((product) => {
      const discountedPrice = calculateDiscountedPrice(product.price, product.discount);
      return discountedPrice >= minPrice && discountedPrice <= maxPrice;
    })
    .sort((a, b) => {
      const priceA = calculateDiscountedPrice(a.price, a.discount);
      const priceB = calculateDiscountedPrice(b.price, b.discount);
      if (sortOrder === 'lowToHigh') {
        return priceA - priceB; // Sort low to high
      } else {
        return priceB - priceA; // Sort high to low
      }
    });

  const handleAddToCart = (product) => {
    addToCart(product);
    setSuccessMessage('Item added successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleImageClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className={`mt-12 px-4 sm:px-16 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      {successMessage && (
        <div className={`fixed top-16 right-4 px-4 py-2 rounded-md shadow-md z-50 ${theme === 'dark' ? 'bg-gray-700' : 'bg-green-500'} text-white`}>
          {successMessage}
        </div>
      )}

      <div className="flex">
        {/* Left Sidebar for Filter */}
        <div className="w-72 p-6 bg-white shadow-xl rounded-lg mr-8 border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Filter by Price</h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-600">Min Price</label>
              <div className="flex items-center border border-gray-300 rounded-lg mt-1">
                <span className="pl-3 text-gray-500">₹</span>
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                  className="w-full p-3 rounded-r-lg border-none focus:outline-none text-gray-800"
                  min="0"
                  placeholder="0"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Max Price</label>
              <div className="flex items-center border border-gray-300 rounded-lg mt-1">
                <span className="pl-3 text-gray-500">₹</span>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full p-3 rounded-r-lg border-none focus:outline-none text-gray-800"
                  placeholder="10000"
                />
              </div>
            </div>

            {/* Sorting Section */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sort by Price</h3>
              <button
                onClick={() => setSortOrder('lowToHigh')}
                className={`w-full py-3 px-5 ${sortOrder === 'lowToHigh' ? 'bg-purple-600 text-white' : 'bg-gray-200'} rounded-lg hover:bg-purple-700 focus:outline-none transition duration-300`}
              >
                Price: Low to High
              </button>
              <button
                onClick={() => setSortOrder('highToLow')}
                className={`w-full py-3 px-5 mt-4 ${sortOrder === 'highToLow' ? 'bg-purple-600 text-white' : 'bg-gray-200'} rounded-lg hover:bg-purple-700 focus:outline-none transition duration-300`}
              >
                Price: High to Low
              </button>
            </div>

            <div className="mt-6">
              <button
                onClick={() => {
                  setMinPrice(0);
                  setMaxPrice(10000);
                }}
                className="w-full py-3 px-5 bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none transition duration-300"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>


        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => {
            const discountedPrice = calculateDiscountedPrice(product.price, product.discount);
            return (
              <div key={index} className={`max-w-sm shadow-lg rounded-lg mx-auto ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                <img
                  className="w-64 h-auto aspect-square object-cover cursor-pointer"
                  src={product.imgSrc}
                  alt={product.name}
                  onClick={() => handleImageClick(product)}
                />
                <div className="p-4">
                  <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{product.name}</h3>
                  <p className="text-gray-600">
                    Original Price: <span className="line-through">Rs-{product.price}</span>
                  </p>
                  <p className={` ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>Discounted Price: Rs-{discountedPrice}</p>
                  <StarRating rating={product.rating} />
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`mt-4 w-full px-4 py-2  ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gradient-to-r from-purple-500 to-pink-400 text-white'} hover:bg-purple-700 rounded-lg focus:outline-none`}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal for product details */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className={`w-96 p-6 rounded-lg shadow-lg relative ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
            <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-600">
              &times;
            </button>
            <img className="w-full h-64 object-cover rounded-md" src={selectedProduct.imgSrc} alt={selectedProduct.name} />
            <h3 className="text-2xl font-semibold mt-4">{selectedProduct.name}</h3>
            <p className="text-gray-600">
              Original Price: <span className="line-through">Rs-{selectedProduct.price}</span>
            </p>
            <p className="text-gray-800">Discounted Price: Rs-{calculateDiscountedPrice(selectedProduct.price, selectedProduct.discount)}</p>
            <StarRating rating={selectedProduct.rating} />
            <p className="mt-4">This is {selectedProduct.name}.</p>
            <button
              onClick={() => handleAddToCart(selectedProduct)}
              className={`mt-4 w-full px-4 py-2 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} hover:bg-purple-700 rounded-lg focus:outline-none`}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Women;
