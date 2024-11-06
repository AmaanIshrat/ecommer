import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';

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
  const [successMessage, setSuccessMessage] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { name: 'Formal Wear', price: 599, discount: 10, imgSrc: '/assets/Images/W2.jpg', rating: 4 },
    { name: 'Kids Formal Wear', price: 599, discount: 15, imgSrc: '/assets/Images/K1.jpg', rating: 5 },
    { name: 'Kids Wear', price: 799, discount: 20, imgSrc: '/assets/Images/k5.jpg', rating: 4 },
    { name: 'Formal Wear', price: 599, discount: 10, imgSrc: '/assets/Images/K2.jpg', rating: 4 },
    { name: 'Kids Wear', price: 999, discount: 25, imgSrc: '/assets/Images/k4.jpg', rating: 5 },
    { name: 'For Kids', price: 399, discount: 5, imgSrc: '/assets/Images/K3.jpg', rating: 3 },
    { name: 'Kids Wear', price: 499, discount: 15, imgSrc: '/assets/Images/k6.jpg', rating: 4 },
    { name: 'Kids Wear', price: 599, discount: 10, imgSrc: '/assets/Images/K1.jpg', rating: 4 },
  ];

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
    <div className="mt-12 px-4 sm:px-16">
      {successMessage && (
        <div className="fixed top-16 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md z-50">
          {successMessage}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => {
          const discountedPrice = product.price - (product.price * (product.discount / 100));
          return (
            <div key={index} className="max-w-sm bg-white shadow-lg rounded-lg mx-auto">
              <img
                className="w-full h-64 object-cover cursor-pointer"
                src={product.imgSrc}
                alt={product.name}
                onClick={() => handleImageClick(product)}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600">
                  Original Price: <span className="line-through">Rs-{product.price}</span>
                </p>
                <p className="text-gray-800">Discounted Price: Rs-{discountedPrice}</p>
                <StarRating rating={product.rating} />
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-4 w-full px-4 py-2 text-white bg-gradient-to-r from-purple-500 to-pink-400 hover:bg-purple-700 rounded-lg focus:outline-none"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">
            <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-600">
              &times;
            </button>
            <img className="w-full h-64 object-cover rounded-md" src={selectedProduct.imgSrc} alt={selectedProduct.name} />
            <h3 className="text-2xl font-semibold text-gray-800 mt-4">{selectedProduct.name}</h3>
            <p className="text-gray-600">
              Original Price: <span className="line-through">Rs-{selectedProduct.price}</span>
            </p>
            <p className="text-gray-800">
              Discounted Price: Rs-{selectedProduct.price - (selectedProduct.price * (selectedProduct.discount / 100))}
            </p>
            <StarRating rating={selectedProduct.rating} />
            <p className="mt-4">This is a brief description of the {selectedProduct.name}. Add more details here.</p>
            <button
              onClick={() => handleAddToCart(selectedProduct)}
              className="mt-4 w-full px-4 py-2 text-white bg-gradient-to-r from-purple-500 to-pink-400 hover:bg-purple-700 rounded-lg focus:outline-none"
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
