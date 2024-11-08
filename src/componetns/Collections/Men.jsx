import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import { ThemeContext } from '../Context/ThemeContext';

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

function Men() {
  const { addToCart } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);
  const [successMessage, setSuccessMessage] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    
    { name: 'Formal Wear', price: 599, discount: 10, imgSrc: '/assets/Images/M1.jpg', rating: 4 },
    { name: 'Original', price: 699, discount: 15, imgSrc: '/assets/Images/M2.jpg', rating: 5 },
    { name: 'Sport', price: 499, discount: 20, imgSrc: '/assets/Images/M3.jpg', rating: 3 },
    { name: 'Nike', price: 899, discount: 25, imgSrc: '/assets/Images/M4.jpg', rating: 5 },
    { name: 'T-shirt', price: 799, discount: 10, imgSrc: '/assets/Images/M5.jpg', rating: 4 },
    { name: 'Casual wear', price: 499, discount: 5, imgSrc: '/assets/Images/M6.jpg', rating: 3 },
    { name: 'Fashion', price: 599, discount: 15, imgSrc: '/assets/Images/M7.jpg', rating: 4 },
    { name: 'Formal Shirt', price: 699, discount: 10, imgSrc: '/assets/Images/M8.jpg', rating: 5 },
    { name: 'T-Shirt', price: 599, discount: 20, imgSrc: '/assets/Images/M9.jpg', rating: 4 },
    { name: 'fashion-T-Shirt', price: 599, discount: 30, imgSrc: '/assets/Images/M2.jpg', rating: 4 },
  
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
    <div className={`mt-12 px-4 sm:px-16 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      {successMessage && (
       <div className={`fixed top-16 right-4 px-4 py-2 rounded-md shadow-md z-50 ${theme === 'dark' ? 'bg-green-700' : 'bg-green-500'} text-white`}>
       {successMessage}
     </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => {
          const discountedPrice = product.price - (product.price * (product.discount / 100));
          return (
            <div key={index} className={`max-w-sm shadow-lg rounded-lg mx-auto ${theme === 'dark' ? 'bg-gray-800 text-white'  : 'bg-white text-black'} shadow-lg`}>
              <div className="h-64 w-full overflow-hidden flex items-center justify-center">
                <img
                  className="object-cover h-full w-full cursor-pointer"
                  src={product.imgSrc}
                  alt={product.name}
                  onClick={() => handleImageClick(product)}
                />
              </div>
              <div className="p-4 min-h-[180px] flex flex-col justify-between">
                <div>
                  <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{product.name}</h3>
                  <p className="text-gray-600">
                    Original Price: <span className="line-through">Rs-{product.price}</span>
                  </p>
                  <p className={` ${theme === 'dark' ? 'text-gray-200' : ''}`}>Discounted Price: Rs-{discountedPrice}</p>
                  <StarRating rating={product.rating} />
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className={`mt-4 w-full px-4 py-2 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gradient-to-r from-purple-500 to-pink-400 text-white'} hover:bg-purple-700 rounded-lg focus:outline-none`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className={`w-96 p-6 rounded-lg shadow-lg relative ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
            <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-600">
              &times;
            </button>
            <img
              className="w-full h-64 object-cover rounded-md"
              src={selectedProduct.imgSrc}
              alt={selectedProduct.name}
            />
            <h3 className="text-2xl font-semibold mt-4">{selectedProduct.name}</h3>
            <p>
              Original Price: <span className="line-through">Rs-{selectedProduct.price}</span>
            </p>
            <p>
              Discounted Price: Rs-{selectedProduct.price - (selectedProduct.price * (selectedProduct.discount / 100))}
            </p>
            <StarRating rating={selectedProduct.rating} />
            <p className="mt-4">Description: This is a brand new {selectedProduct.name}.</p>
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

export default Men;
