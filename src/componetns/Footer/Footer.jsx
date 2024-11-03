import React from 'react';
import { Link } from 'react-router-dom';
import Elog2 from '/assets/Images/Elog2.jpg';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-purple-500 to-pink-400 text-white border-t">
            <div className="container mx-auto p-8">
                <div className="flex flex-wrap justify-between">
                    {/* Logo Section */}
                    <div className="w-full sm:w-1/3 lg:w-1/4 mb-6">
                        <Link to="/" className="flex items-center">
                            <img src={Elog2} alt="Logo" className="h-16 mr-2" />
                            
                        </Link>
                        {/* <p className="text-gray-200 mt-4">
                            Delicious homemade pickles, crafted with love and care.
                        </p> */}
                    </div>

                    {/* Resources */}
                    <div className="w-full sm:w-1/3 lg:w-1/4 mb-6">
                        <h3 className="mb-4 text-sm font-semibold uppercase">Resources</h3>
                        <ul className="text-gray-100 space-y-2">
                            <li><Link to="/" className="hover:underline">Home</Link></li>
                            <li><Link to="/about" className="hover:underline">About</Link></li>
                            <li><Link to="/shop" className="hover:underline">Shop</Link></li>
                            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div className="w-full sm:w-1/3 lg:w-1/4 mb-6">
                        <h3 className="mb-4 text-sm font-semibold uppercase">Customer Service</h3>
                        <ul className="text-gray-100 space-y-2">
                            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
                            <li><Link to="/returns" className="hover:underline">Returns</Link></li>
                            <li><Link to="/shipping" className="hover:underline">Shipping</Link></li>
                            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div className="w-full sm:w-1/3 lg:w-1/4 mb-6">
                        <h3 className="mb-4 text-sm font-semibold uppercase">Follow Us</h3>
                        <ul className="text-gray-100 space-y-2">
                            <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a></li>
                            <li><a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:underline">Facebook</a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:underline">Twitter</a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:underline">Instagram</a></li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="mt-8 text-center">
                    <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
                    <form className="flex justify-center space-x-2">
                        <input type="email" placeholder="Enter your email" className="p-2 rounded-md w-full max-w-xs border border-gray-300 text-gray-700" />
                        <button type="submit" className="bg-purple-600 text-white p-2 rounded-md">Subscribe</button>
                    </form>
                </div>

                <div className="border-t border-gray-400 mt-8 pt-4 text-center">
                    <p className="text-gray-200 text-sm">
                        &copy; 2024 Amaan . All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
