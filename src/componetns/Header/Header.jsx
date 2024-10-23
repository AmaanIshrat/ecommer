import React, { useState, useEffect, useRef } from 'react';
import  { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; 
import logo from '/assets/Images/Elog2.jpg'
import { CartContext } from '../Context/CartContext';

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
  // const [cartItems, setCartItems] = useState(0); // State for cart items
  const dropdownRef = useRef(null); // Ref for the dropdown
  const navigate = useNavigate(); // Hook for programmatic navigation
  const { cartItems } = useContext(CartContext);

  // Handle scroll event
  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > scrollPosition) {
      setIsNavbarVisible(false);
    } else {
      setIsNavbarVisible(true);
    }

    setScrollPosition(currentScrollPosition);
  };

  // Attach the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  // Function to handle click outside of dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  // Attach event listener for clicks
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Add item to cart (example function)
  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <header
      className={`shadow sticky top-0 z-50 transition-transform duration-300 ${
        isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Navbar */}
      <nav className="bg-purple-500 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          {/* Left: Logo */}
          <div className="flex-grow flex justify-center">
            <img
              src='Elog2.jpg' // Replace with your logo image URL
              alt="Logo"
              className="w-30 h-20" // Adjusted logo size
            />
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden lg:flex items-center justify-center flex-grow">
            <ul className="flex space-x-8 font-medium relative">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-purple-800 underline' : 'text-white'
                    } border-b border-purple-400 hover:bg-purple-600 lg:hover:bg-transparent lg:border-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-purple-800 underline' : 'text-white'
                    } border-b border-purple-400 hover:bg-purple-600 lg:hover:bg-transparent lg:border-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                {/* Dropdown for Collections */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`block py-2 pr-4 pl-3 duration-200 text-white border-b border-purple-400 hover:bg-purple-600 lg:hover:bg-transparent lg:border-0`}
                  >
                    Collections
                  </button>
                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute left-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg">
                      <ul className="py-1" aria-labelledby="dropdown">
                        <li>
                          <Link
                            to="/men"
                            className="block px-4 py-2 text-gray-800 hover:bg-purple-600 hover:text-white"
                            onClick={() => setIsDropdownOpen(false)} // Close dropdown after selection
                          >
                            Men
                          </Link>
                        </li>
                        <li>
                          <NavLink
                            to="/women"
                            className="block px-4 py-2 text-gray-800 hover:bg-purple-600 hover:text-white"
                            onClick={() => setIsDropdownOpen(false)} // Close dropdown after selection
                          >
                            Women
                          </NavLink>
                        </li>
                        <li>
                          <Link
                            to="/kids"
                            className="block px-4 py-2 text-gray-800 hover:bg-purple-600 hover:text-white"
                            onClick={() => setIsDropdownOpen(false)} // Close dropdown after selection
                          >
                            Kids
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <NavLink
                  to="/faq"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-purple-800 underline' : 'text-white'
                    } border-b border-purple-400 hover:bg-purple-600 lg:hover:bg-transparent lg:border-0`
                  }
                >
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-purple-800 underline' : 'text-white'
                    } border-b border-purple-400 hover:bg-purple-600 lg:hover:bg-transparent lg:border-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Right: Cart Icon */}
          <div className="flex items-center space-x-4">
           
    <div className="container mx-auto flex justify-between items-center">
  {/* Flex container for cart and login button */}
  <div className="flex items-center space-x-6">
    {/* Cart Icon with Badge */}
    <div className="relative">
      <FaShoppingCart className="text-3xl text-white" />
      
      {cartItems.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {cartItems.length}
        </span>
      )}
    </div>
    
    {/* Login Button */}
    <Link
      to="#"
      className="bg-white text-purple-500 hover:bg-gray-100 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
    >
      Log in
    </Link>
  </div>
</div>

          </div>
        </div>
      </nav>
    </header>
  );
}
