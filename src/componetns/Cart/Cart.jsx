import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems } = useContext(CartContext); // Access cartItems from CartContext

  // Calculate the total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + (item.price - item.price * (item.discount / 100)),
    0
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-purple-600 mb-6">Your Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is currently empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li 
                key={index} 
                className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md border-b border-gray-200"
              >
                <div className="flex items-center space-x-4">
                  <img src={item.imgSrc} alt={item.name} className="h-20 w-20 object-cover rounded" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-500">Price: Rs-{item.price - (item.price * (item.discount / 100))}</p>
                    {item.discount > 0 && (
                      <p className="text-sm text-green-500">Discount: {item.discount}% off</p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Total Price Section */}
          <div className="mt-6 p-4 bg-white rounded-lg shadow-md text-right">
            <h3 className="text-xl font-semibold text-gray-800">Total: Rs-{totalPrice.toFixed(2)}</h3>
            <button className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-400 text-white rounded-lg hover:bg-purple-600 transition duration-300">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}

      {/* Continue Shopping Button */}
      <div className="mt-6">
        <Link to="/" className="inline-block px-4 py-2 bg-purple-100 text-purple-500 rounded-lg hover:bg-purple-200 transition duration-300">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Cart;
