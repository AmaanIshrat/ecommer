import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; 
import logo from '/assets/Images/Elog2.jpg';
import { CartContext } from '../Context/CartContext';

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate(); 
  const { cartItems } = useContext(CartContext);

  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > scrollPosition) {
      setIsNavbarVisible(false);
    } else {
      setIsNavbarVisible(true);
    }

    setScrollPosition(currentScrollPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false); // Close dropdown when mobile menu items are clicked
  };

  return (
    <header
      className={`shadow sticky top-0 z-50 transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <nav className="bg-purple-500 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          {/* Left: Logo */}
          <div className="flex-grow flex justify-center">
            <img
              src={logo}
              alt="Logo"
              className="w-30 h-20" 
            />
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden lg:flex items-center justify-center flex-grow">
            <ul className="flex space-x-8 font-medium relative">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-purple-800 underline' : 'text-white'} border-b border-purple-400 hover:bg-purple-600 lg:hover:bg-transparent lg:border-0`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-purple-800 underline' : 'text-white'} border-b border-purple-400 hover:bg-purple-600 lg:hover:bg-transparent lg:border-0`}
                >
                  About
                </NavLink>
              </li>
              <li>
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={handleDropdownClick}
                    className={`block py-2 pr-4 pl-3 duration-200 text-white border-b border-purple-400 hover:bg-purple-600 lg:hover:bg-transparent lg:border-0`}
                  >
                    Collections
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute left-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg">
                      <ul className="py-1" aria-labelledby="dropdown">
                        <li>
                          <NavLink
                            to="/men"
                            className="block px-4 py-2 text-gray-800 hover:bg-purple-600 hover:text-white"
                            onClick={closeMobileMenu} // Close menu after selection
                          >
                            Men
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/women"
                            className="block px-4 py-2 text-gray-800 hover:bg-purple-600 hover:text-white"
                            onClick={closeMobileMenu} // Close menu after selection
                          >
                            Women
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/kids"
                            className="block px-4 py-2 text-gray-800 hover:bg-purple-600 hover:text-white"
                            onClick={closeMobileMenu} // Close menu after selection
                          >
                            Kids
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <NavLink
                  to="/faq"
                  className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-purple-800 underline' : 'text-white'} border-b border-purple-400 hover:bg-purple-600 lg:hover:bg-transparent lg:border-0`}
                >
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-purple-800 underline' : 'text-white'} border-b border-purple-400 hover:bg-purple-600 lg:hover:bg-transparent lg:border-0`}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Right: Cart Icon and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <FaShoppingCart className="text-3xl text-white" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </div>

            <button 
              onClick={toggleMobileMenu} 
              className="text-white lg:hidden"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-purple-500 p-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `block py-2 duration-200 ${isActive ? 'text-purple-800 underline' : 'text-white'}`}
                onClick={closeMobileMenu} // Close mobile menu after selection
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => `block py-2 duration-200 ${isActive ? 'text-purple-800 underline' : 'text-white'}`}
                onClick={closeMobileMenu} // Close mobile menu after selection
              >
                About
              </NavLink>
            </li>
            <li>
              <div>
                <button
                  onClick={handleDropdownClick} // Toggle Dropdown for Collections
                  className="block py-2 text-white"
                >
                  Collections
                </button>
                {isDropdownOpen && (
                  <div className="flex flex-col space-y-1">
                    <NavLink to="/men" className="block py-2 text-gray-200 hover:bg-purple-600" onClick={closeMobileMenu}>Men</NavLink>
                    <NavLink to="/women" className="block py-2 text-gray-200 hover:bg-purple-600" onClick={closeMobileMenu}>Women</NavLink>
                    <NavLink to="/kids" className="block py-2 text-gray-200 hover:bg-purple-600" onClick={closeMobileMenu}>Kids</NavLink>
                  </div>
                )}
              </div>
            </li>
            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) => `block py-2 duration-200 ${isActive ? 'text-purple-800 underline' : 'text-white'}`}
                onClick={closeMobileMenu} // Close mobile menu after selection
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => `block py-2 duration-200 ${isActive ? 'text-purple-800 underline' : 'text-white'}`}
                onClick={closeMobileMenu} // Close mobile menu after selection
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
