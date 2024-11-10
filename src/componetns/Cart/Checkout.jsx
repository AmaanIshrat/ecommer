import React, { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';

const CheckoutModal = ({ isOpen, onClose }) => {
  const { theme } = useContext(ThemeContext);
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: '',
  });

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + (item.price - item.price * (item.discount / 100)) * item.quantity,
    0
  );

  const handleNextStep = () => setStep((prevStep) => prevStep + 1);
  const handlePreviousStep = () => setStep((prevStep) => prevStep - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleConfirmOrder = () => {
    console.log("Confirm order clicked!");
    clearCart();
    navigate('/order-confirmation');
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
        <div className={`p-8 rounded-lg shadow-lg w-96 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Shipping Details</h2>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-2 mb-2 border rounded ${theme === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-100 text-black border-gray-300'}`}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-2 mb-2 border rounded ${theme === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-100 text-black border-gray-300'}`}
              />
              <input
                type="text"
                name="address"
                placeholder="Delivery Address"
                value={formData.address}
                onChange={handleChange}
                className={`w-full p-2 mb-2 border rounded ${theme === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-100 text-black border-gray-300'}`}
              />
              <div className="flex justify-between mt-4">
                <button onClick={onClose} className={`px-4 py-2 rounded ${theme === 'dark' ? 'bg-gray-600 text-white' : 'bg-gray-200 text-black'}`}>Cancel</button>
                <button onClick={handleNextStep} className="px-4 py-2 bg-purple-500 text-white rounded">Next</button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Payment Method</h2>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className={`w-full p-2 mb-2 border rounded ${theme === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-100 text-black border-gray-300'}`}
              >
                <option value="">Select Payment Method</option>
                <option value="creditCard">Credit/Debit Card</option>
                <option value="cashOnDelivery">Cash on Delivery</option>
              </select>
              <div className="flex justify-between mt-4">
                <button onClick={handlePreviousStep} className={`px-4 py-2 rounded ${theme === 'dark' ? 'bg-gray-600 text-white' : 'bg-gray-200 text-black'}`}>Back</button>
                <button onClick={handleNextStep} className="px-4 py-2 bg-purple-500 text-white rounded">Next</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <p>Name: {formData.name}</p>
              <p>Email: {formData.email}</p>
              <p>Address: {formData.address}</p>
              <p>Payment Method: {formData.paymentMethod}</p>
              <p>Total Price: Rs-{totalPrice.toFixed(2)}</p>
              <div className="flex justify-between mt-4">
                <button onClick={handlePreviousStep} className={`px-4 py-2 rounded ${theme === 'dark' ? 'bg-gray-600 text-white' : 'bg-gray-200 text-black'}`}>Back</button>
                <button
                  onClick={handleConfirmOrder}
                  className="px-4 py-2 bg-green-500 text-white rounded"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default CheckoutModal;
