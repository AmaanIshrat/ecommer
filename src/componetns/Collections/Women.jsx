import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
// import StarRating from './StarRating'; // Uncomment if you have a separate StarRating component

const calculateDiscountedPrice = (originalPrice, discountPercentage) => {
  return originalPrice - (originalPrice * (discountPercentage / 100));
};

// Star Rating Component
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
  const { addToCart } = useContext(CartContext); // Get addToCart from CartContext
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const products = [
    { name: 'Formal Wear', price: 599, discount: 10, imgSrc: '/assets/Images/W2.jpg', rating: 4 },
    { name: 'Casual Dress', price: 699, discount: 15, imgSrc: '/assets/Images/W3.jpg', rating: 5 },
    { name: 'Summer Dress', price: 499, discount: 20, imgSrc: '/assets/Images/W4.jpg', rating: 3 },
    { name: 'Evening Gown', price: 899, discount: 25, imgSrc: '/assets/Images/W5.jpg', rating: 5 },
    { name: 'Cocktail Dress', price: 799, discount: 10, imgSrc: '/assets/Images/W6.jpg', rating: 4 },
    { name: 'Party Wear', price: 499, discount: 5, imgSrc: '/assets/Images/W7.jpg', rating: 3 },
    { name: 'Formal Dress', price: 599, discount: 15, imgSrc: '/assets/Images/W8.jpg', rating: 4 },
  ];

  // Function to handle adding item to cart
  const handleAddToCart = (product) => {
    addToCart(product); // Add product to cart
    setSuccessMessage('Item added successfully!'); // Set success message

    // Clear the success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div className="mt-12 px-4 sm:px-16">
      {/* Success message */}
      {successMessage && (
        <div className="fixed top-16 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md z-50">
          {successMessage}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => {
          const discountedPrice = calculateDiscountedPrice(product.price, product.discount);
          return (
            <div key={index} className="max-w-sm bg-white shadow-lg rounded-lg mx-auto relative">
              <img
                className="w-full h-64 object-cover"
                src={product.imgSrc}
                alt={product.name}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600">
                  Original Price: <span className="line-through">Rs-{product.price}</span>
                </p>
                <p className="text-gray-800">Discounted Price: Rs-{discountedPrice}</p>
                <StarRating rating={product.rating} />
                <button
                  onClick={() => handleAddToCart(product)} // Use the new function to add product to cart
                  className="mt-4 w-full px-4 py-2 text-white bg-purple-500 hover:bg-purple-700 rounded-lg focus:outline-none"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Women;
