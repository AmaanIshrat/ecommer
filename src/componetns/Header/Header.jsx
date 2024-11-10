// import React, { useState, useEffect, useRef, useContext } from 'react';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { FaShoppingCart } from 'react-icons/fa';
// import logo from '/assets/Images/Elog2.jpg';
// import { CartContext } from '../Context/CartContext';
// import { SunIcon, MoonIcon } from '@heroicons/react/outline';

// import { ThemeContext } from '../Context/ThemeContext';

// export default function Header() {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [isNavbarVisible, setIsNavbarVisible] = useState(true);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // State for mobile dropdown
//   const dropdownRef = useRef(null);
//   const navigate = useNavigate();
//   const { cartItems } = useContext(CartContext);
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   const handleScroll = () => {
//     const currentScrollPosition = window.pageYOffset;

//     if (currentScrollPosition > scrollPosition) {
//       setIsNavbarVisible(false);
//     } else {
//       setIsNavbarVisible(true);
//     }

//     setScrollPosition(currentScrollPosition);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };6
//   }, [scrollPosition]);

//   // const handleClickOutside = (event) => {
//   //   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//   //     setIsDropdownOpen(false);
//   //     setIsMobileDropdownOpen(false); // Close mobile dropdown as well
//   //   }
//   // };

//   // useEffect(() => {
//   //   document.addEventListener('mousedown', handleClickOutside);
//   //   return () => {
//   //     document.removeEventListener('mousedown', handleClickOutside);
//   //   };
//   // }, []);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen((prev) => !prev);
//     setIsMobileDropdownOpen(false); // Close mobile dropdown when toggling main menu
//   };

//   const handleDropdownClick = () => {
//     setIsDropdownOpen((prev) => !prev);
//   };

//   const toggleMobileDropdown = () => {
//     setIsMobileDropdownOpen((prev) => !prev);
//     console.log("Mobile dropdown toggled:", !isMobileDropdownOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//     setIsDropdownOpen(false);
//     setIsMobileDropdownOpen(false);

//   };
//   // const handleLinkClick = (path) => {
//   //   navigate(path);
//   //   setIsMobileMenuOpen(false);
//   //   // setIsMobileDropdownOpen(false);
//   // };

//   const handleCartClick = () => {
//     navigate('/cart');
//   };

//   useEffect(() => {
//     document.body.className = theme === 'dark' ? 'dark' : 'light';
//   }, [theme]);


//   console.log("isMobileDropdownOpen",isMobileDropdownOpen)

//   return (
//     <header
//       className={`shadow sticky top-0 z-50 transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'} ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-r from-purple-500 to-pink-400'}`}
//     >
//       <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
//         <div className="flex justify-between items-center mx-auto max-w-screen-xl">
//           <div className="flex-grow flex justify-center">
//             <img src={logo} alt="Logo" className="w-30 h-20" />
//           </div>

//           <div className="hidden lg:flex items-center justify-center flex-grow">
//             <ul className="flex space-x-8 font-medium relative">
//               <li>
//                 <NavLink
//                   to="/"
//                   className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-purple-800 underline' : 'text-white'} border-b border-purple-400 hover:bg-purple-600 lg:hover:bg-transparent lg:border-0`}
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/about"
//                   className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-purple-800 underline' : 'text-white'} border-b border-purple-400 hover:bg-purple-600 lg:hover:bg-transparent lg:border-0`}
//                 >
//                   About
//                 </NavLink>
//               </li>
//               <li>
//                 <div className="relative" ref={dropdownRef}>
//                   <button
//                     onClick={handleDropdownClick}
//                     className="block py-2 pr-4 pl-3 duration-200 text-white border-b border-purple-400 hover:bg-purple-600 lg:hover:bg-transparent lg:border-0"
//                   >
//                     Collections
//                   </button>
//                   {isDropdownOpen && (
//                     <div className="absolute left-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg">
//                       <ul className="py-1" aria-labelledby="dropdown">
//                         <li>
//                           <NavLink
//                             to="/men"
//                             className="block px-4 py-2 text-gray-800 hover:bg-gradient-to-r from-purple-500 to-pink-400 hover:text-white"
//                             onClick={closeMobileMenu}
//                           >
//                             Men
//                           </NavLink>
//                         </li>
//                         <li>
//                           <NavLink
//                             to="/women"
//                             className="block px-4 py-2 text-gray-800 hover:bg-gradient-to-r from-purple-500 to-pink-400 hover:text-white"
//                             onClick={closeMobileMenu}
//                           >
//                             Women
//                           </NavLink>
//                         </li>
//                         <li>
//                           <NavLink
//                             to="/kids"
//                             className="block px-4 py-2 text-gray-800 hover:bg-gradient-to-r from-purple-500 to-pink-400 hover:text-white"
//                             onClick={closeMobileMenu}
//                           >
//                             Kids
//                           </NavLink>
//                         </li>
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               </li>
//               <li>
//                 <NavLink
//                   to="/faq"
//                   className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-purple-800 underline' : 'text-white'} border-b border-purple-400 hover:bg-purple-600 lg:hover:bg-transparent lg:border-0`}
//                 >
//                   FAQ
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/contact"
//                   className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-purple-800 underline' : 'text-white'} border-b border-purple-400 hover:bg-purple-600 lg:hover:bg-transparent lg:border-0`}
//                 >
//                   Contact
//                 </NavLink>
//               </li>
//             </ul>
//           </div>

//           <div className="flex items-center space-x-4">
//             <div className="relative" onClick={handleCartClick}>
//               <FaShoppingCart className="text-3xl text-white cursor-pointer" />
//               {cartItems.length > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   {cartItems.length}
//                 </span>
//               )}
//             </div>

//             <button onClick={toggleTheme} className="text-white">
//               {theme === 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
//             </button>

//             <button onClick={toggleMobileMenu} className="text-white lg:hidden">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden bg-gradient-to-r from-purple-500 to-pink-400 p-4">
//           <ul className="flex flex-col space-y-2">
//             <li>
//               <NavLink to="/" className="block py-2 text-white" onClick={closeMobileMenu}>
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/about" className="block py-2 text-white" onClick={closeMobileMenu}>
//                 About
//               </NavLink>
//             </li>
//             <li>
//               <button onClick={toggleMobileDropdown} className="block py-2 text-white">
//                 Collections
//               </button>
//               {isMobileDropdownOpen && (
//                 <ul className="pl-4">
//                   <li>
//                     <Link
//                       to="/men"
//                       className="block py-2 text-white hover:bg-gradient-to-r from-purple-500 to-pink-400"
//                       onClick={closeMobileMenu}
//                     >
//                       Men
//                     </Link>
//                   </li>
//                   <li>
//                     <NavLink
//                       to="/women"
//                       className="block py-2 text-white hover:bg-gradient-to-r from-purple-500 to-pink-400"
//                       onClick={closeMobileMenu}
//                     >
//                       Women
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       to="/kids"
//                       className="block py-2 text-white hover:bg-gradient-to-r from-purple-500 to-pink-400"
//                       onClick={closeMobileMenu}
//                     >
//                       Kids
//                     </NavLink>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li>
//               <NavLink to="/faq" className="block py-2 text-white" onClick={closeMobileMenu}>
//                 FAQ
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact" className="block py-2 text-white" onClick={closeMobileMenu}>
//                 Contact
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       )}

//     </header>
//   );
// }

import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '/assets/Images/Elog2.jpg';
import { CartContext } from '../Context/CartContext';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import { ThemeContext } from '../Context/ThemeContext';

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null); // Add a ref for the mobile menu
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;
    setIsNavbarVisible(currentScrollPosition <= scrollPosition);
    setScrollPosition(currentScrollPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current && !dropdownRef.current.contains(event.target) && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)
    ) {
      setIsDropdownOpen(false);
      setIsMobileMenuOpen(false);
      setIsMobileDropdownOpen(false);
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
    setIsMobileDropdownOpen(false);
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
    setIsMobileDropdownOpen(false);
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark' : 'light';
  }, [theme]);

  return (
    <header
      className={`shadow sticky top-0 z-50 transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'} ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-r from-purple-500 to-pink-400'}`}
      ref={mobileMenuRef} // Attach ref to the mobile menu
    >
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex-grow flex justify-center">
            <img src={logo} alt="Logo" className="w-30 h-20" />
          </div>

          <div className="hidden lg:flex items-center justify-center flex-grow">
            <ul className="flex space-x-8 font-medium relative">
              <li>
                <NavLink to="/" className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-purple-800 underline' : 'text-white'} border-b border-purple-400 hover:bg-purple-600 lg:hover:bg-transparent lg:border-0`}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-purple-800 underline' : 'text-white'} border-b border-purple-400 hover:bg-purple-600 lg:hover:bg-transparent lg:border-0`}>About</NavLink>
              </li>
              <li>
                <div className="relative" ref={dropdownRef}>
                  <button onClick={handleDropdownClick} className="block py-2 pr-4 pl-3 duration-200 text-white border-b border-purple-400 hover:bg-purple-600 lg:hover:bg-transparent lg:border-0">Collections</button>
                  {isDropdownOpen && (
                    <div className="absolute left-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg">
                      <ul className="py-1">
                        <li>
                          <NavLink
                            to="/men"
                            className={`block px-4 py-2 ${theme === 'dark' ? 'hover:bg-gray-900 text-gray-700' : 'hover:bg-gradient-to-r from-purple-500 to-pink-400 text-gray-900'}`}
                            onClick={closeMobileMenu}
                          >
                            Men
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/women"
                            className={`block px-4 py-2 ${theme === 'dark' ? 'hover:bg-gray-900 text-gray-700' : 'hover:bg-gradient-to-r from-purple-500 to-pink-400 textgray-900'}`}
                            onClick={closeMobileMenu}
                          >
                            Women
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/kids"
                            className={`block px-4 py-2 ${theme === 'dark' ? 'hover:bg-gray-900 text-gray-700 ' : 'hover:bg-gradient-to-r from-purple-500 to-pink-400 text-gray-900'}`}
                            onClick={closeMobileMenu}
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

          <div className="flex items-center space-x-4">
            <div className="relative" onClick={handleCartClick}>
              <FaShoppingCart className="text-3xl text-white cursor-pointer" />
              {cartItems.length > 0 && <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{cartItems.length}</span>}
            </div>

            <button onClick={toggleTheme} className="text-white">
              {theme === 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
            </button>

            <button onClick={toggleMobileMenu} className="text-white lg:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className={`lg:hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-r from-purple-500 to-pink-400'} p-4`} ref={mobileMenuRef}>
          <ul className="flex flex-col space-y-2">
            <li><NavLink to="/" className="block py-2 text-white" onClick={closeMobileMenu}>Home</NavLink></li>
            <li><NavLink to="/about" className="block py-2 text-white" onClick={closeMobileMenu}>About</NavLink></li>
            <li>
              <button onClick={toggleMobileDropdown} className="block py-2 text-white">Collections</button>
              {isMobileDropdownOpen && (
                <ul className="pl-4">
                  <li><NavLink to="/men" className="block py-2 text-white hover:bg-gradient-to-r from-purple-500 to-pink-400" onClick={closeMobileMenu}>Men</NavLink></li>
                  <li><NavLink to="/women"  className={`block  py-2 ${theme === 'dark' ? 'hover:bg-gray-900 text-white ' : 'hover:bg-gradient-to-r from-purple-500 to-pink-400 text-gray-900'}`} onClick={closeMobileMenu}>Women</NavLink></li>
                  <li><NavLink to="/kids"  className={`block  py-2 ${theme === 'dark' ? 'hover:bg-gray-900 text-white ' : 'hover:bg-gradient-to-r from-purple-500 to-pink-400 text-gray-900'}`}onClick={closeMobileMenu}>Kids</NavLink></li>
                </ul>
              )}
            </li>
            <li> <NavLink to="/faq" className="block py-2 text-white" onClick={closeMobileMenu}>                FAQ              </NavLink>            </li>            <li>              <NavLink to="/contact" className="block py-2 text-white" onClick={closeMobileMenu}>                Contact              </NavLink>            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
