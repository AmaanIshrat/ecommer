import React from 'react';

// Function to calculate discounted price
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
  const products = [
    { name: 'Formal Wear', price: 599, discount: 10, imgSrc: './src/assets/Images/W2.jpg', rating: 4 },
    { name: 'Casual Dress', price: 699, discount: 15, imgSrc: './src/assets/Images/W3.jpg', rating: 5 },
    { name: 'Summer Dress', price: 499, discount: 20, imgSrc: './src/assets/Images/W4.jpg', rating: 3 },
    { name: 'Evening Gown', price: 899, discount: 25, imgSrc: './src/assets/Images/W5.jpg', rating: 5 },
    { name: 'Cocktail Dress', price: 799, discount: 10, imgSrc: './src/assets/Images/W6.jpg', rating: 4 },
    { name: 'Party Wear', price: 499, discount: 5, imgSrc: './src/assets/Images/W7.jpg', rating: 3 },
    { name: 'Formal Dress', price: 599, discount: 15, imgSrc: './src/assets/Images/W8.jpg', rating: 4 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-4 sm:px-16">
      {products.map((product, index) => {
        const discountedPrice = calculateDiscountedPrice(product.price, product.discount);
        return (
          <div key={index} className="max-w-sm bg-white shadow-lg rounded-lg mx-auto">
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
              <button className="mt-4 w-full px-4 py-2 text-white bg-purple-500 hover:bg-purple-700 rounded-lg focus:outline-none">
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Women;
