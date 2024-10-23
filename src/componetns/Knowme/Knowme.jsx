import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

function Knowme() {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-purple-600 text-center mb-6">
          Welcome to Our Shopping Paradise!
        </h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          Our shopping website is your one-stop destination for all things fashion! Whether you’re
          looking for men’s wear, women’s wear, or kids’ apparel, we’ve got you covered with the best
          deals and trends.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Men’s Collection */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-purple-500 mb-4">Men’s Collection</h2>
            <p className="text-gray-600 mb-4">
              Our men’s collection features classic formal wear, stylish casuals, and everything in between!
              Discover a wide range of outfits curated to make you stand out.
            </p>
            <img src="/assets/Images/Men.jpg" alt="Men Collection" className="w-full h-48 object-cover rounded-lg" />
          </div>

          {/* About Women’s Collection */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-purple-500 mb-4">Women’s Collection</h2>
            <p className="text-gray-600 mb-4">
              Explore our vibrant women’s collection, perfect for every occasion. From chic dresses
              to everyday wear, our range is designed to bring out the best in you!
            </p>
            <img src="/assets/Images/Women.jpg" alt="Women Collection" className="w-full h-48 object-cover rounded-lg" />
          </div>

          {/* About Kids Collection */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-purple-500 mb-4">Kids’ Collection</h2>
            <p className="text-gray-600 mb-4">
              Our kids’ collection is playful and comfortable, designed to suit the little ones! Browse
              through fun outfits that your kids will love to wear every day.
            </p>
            <img src="/assets/Images/Kids.jpg" alt="Kids Collection" className="w-full h-48 object-cover rounded-lg" />
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Knowme;

