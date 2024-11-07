import React, { useEffect } from 'react';
import './OrderConfirm.css';

const OrderConfirm = () => {
  useEffect(() => {
    const container = document.querySelector('.falling-flowers-container');

    // Create multiple flower elements to fall down the screen
    for (let i = 0; i < 20; i++) {
      const flower = document.createElement('div');
      flower.classList.add('falling-flower');
      flower.style.left = `${Math.random() * 100}vw`;
      flower.style.animationDelay = `${Math.random() * 5}s`;
      flower.style.animationDuration = `${5 + Math.random() * 5}s`;
      container.appendChild(flower);
    }
  }, []);

  

  return (
    <div className="order-confirm-page">
      <div className="falling-flowers-container"></div>
      <div className="order-confirm-content">
        <h2 className="text-3xl font-bold text-purple-600 mb-4">Order Confirmed!</h2>
        <p className="text-gray-700 mb-6">
          Thank you for your purchase! You will receive a confirmation email shortly.
        </p>
        <p className="text-lg font-semibold text-green-600">
          Your order has been successfully placed.
        </p>
      </div>
    </div>
  );
};

export default OrderConfirm;
