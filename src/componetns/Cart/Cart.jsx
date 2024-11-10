import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import CheckoutModal from './Checkout';
import { ThemeContext } from '../Context/ThemeContext';

const Cart = () => {
  const { theme } = useContext(ThemeContext);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + (item.price - item.price * (item.discount / 100)) * item.quantity,
    0
  );

  return (
    <div className={`p-8 min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <h2 className="text-3xl font-bold text-purple-600 mb-6">Your Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Your cart is currently empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li key={index} className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} flex justify-between items-center p-4 rounded-lg shadow-md border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex items-center space-x-4">
                  <img src={item.imgSrc} alt={item.name} className="h-20 w-20 object-cover rounded" />
                  <div>
                    <h3 className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'} text-lg font-semibold`}>{item.name}</h3>
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Price: Rs-{(item.price - (item.price * (item.discount / 100))).toFixed(2)}</p>
                    <div className="flex items-center space-x-4 mt-4">
                      <button onClick={() => removeFromCart(item.name)} className="px-4 py-2 text-white bg-red-500 rounded-full shadow-lg hover:bg-red-600 transition duration-300">Remove</button>
                      <span className="text-lg font-semibold">{item.quantity}</span>
                      <button onClick={() => addToCart(item)} className="px-4 py-2 text-white bg-green-500 rounded-full shadow-lg hover:bg-gray-600 transition duration-300">Add</button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} mt-6 p-4 rounded-lg shadow-md text-right`}>
            <h3 className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'} text-xl font-semibold`}>Total: Rs-{totalPrice.toFixed(2)}</h3>
            <button onClick={() => setIsModalOpen(true)} className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-400 text-white rounded-lg hover:bg-purple-600 transition duration-300">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
      
      <CheckoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Cart;
