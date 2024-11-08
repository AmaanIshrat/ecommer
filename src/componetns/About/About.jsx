import { useContext } from 'react';
import React from 'react';
import { ThemeContext } from '../Context/ThemeContext';

export default function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <div  className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
    <div
      className={`container mx-auto my-8 p-4 `}
    >
      <h1 className="text-4xl font-bold text-center mb-6">About Our E-Commerce Website</h1>

      <p className="text-lg text-center mb-4">
        Welcome to our e-commerce website! We are dedicated to providing you with the best shopping experience possible.
      </p>

      <div className="flex flex-wrap justify-center">
        <img
          src="/assets/Images/ab1.png" // Replace with your image URL
          alt="Description of image 1"
          className="w-full md:w-1/3 p-2"
        />
        <img
          src="/assets/Images/Ab4.jpg" // Replace with your image URL
          alt="Description of image 2"
          className="w-full md:w-1/3 p-2"
        />
        <img
          src="/assets/Images/ab2.jpg" // Replace with your image URL
          alt="Description of image 3"
          className="w-full md:w-1/3 p-2"
        />
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
      <p className="text-lg mb-4">
        Our mission is to offer a wide variety of high-quality products at competitive prices, ensuring that every customer finds exactly what they are looking for.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us?</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Wide selection of products</li>
        <li>Exceptional customer service</li>
        <li>Fast shipping and easy returns</li>
        <li>Secure payment options</li>
      </ul>

      <p className="text-lg text-center">
        Thank you for choosing us for your shopping needs!
      </p>
    </div>
    </div>
  );
}
