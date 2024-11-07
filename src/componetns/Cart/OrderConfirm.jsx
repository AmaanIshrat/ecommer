import React from 'react';

const OrderConfirmation = () => (
  <div className="p-8 bg-gray-100 min-h-screen flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
      <h2 className="text-2xl font-bold text-purple-600 mb-4">Order Confirmed!</h2>
      <p className="text-gray-700 mb-6">Thank you for your purchase! You will receive a confirmation email shortly.</p>
      <p className="text-lg font-semibold text-green-600">Your order has been successfully placed.</p>
    </div>
  </div>
);

export default OrderConfirmation;
