import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenus = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-20 md:h-24 lg:h-28 ">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center ">
            <NavLink to="/" onClick={closeMenus}>
              <img
                src={logo}
                alt="Fish Export Logo"
                className=" h-16 lg:h-22 lg:w-20 rounded-full object-cover mr-3 "
              />
            </NavLink>
            <NavLink
              to="/"
              className="flex flex-col text-3xl text-teal-700 hover:text-teal-600 transition-colors"
              onClick={closeMenus}
            >
              <span className=" text-2xl lg:text-[35px] font-extrabold ">
                Khaled Enterprise
              </span>
              <span className=" hidden md:block text-lg mt-0.5">
                🇧🇩 Bangladesh & 🇬🇧 England Joint Export Partners
              </span>
              <span className=" block md:hidden text-[15px] md:text-sm mt-0.5">
                🇧🇩 & 🇬🇧 Joint Export Partners
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-lg font-semibold transition-colors ${
                  isActive
                    ? "text-teal-700 bg-teal-50 border-b-2 border-teal-700"
                    : "text-gray-700 hover:text-teal-700 hover:bg-gray-50"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-lg font-semibold transition-colors ${
                  isActive
                    ? "text-teal-700 bg-teal-50 border-b-2 border-teal-700"
                    : "text-gray-700 hover:text-teal-700 hover:bg-gray-50"
                }`
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-lg font-semibold transition-colors ${
                  isActive
                    ? "text-teal-700 bg-teal-50 border-b-2 border-teal-700"
                    : "text-gray-700 hover:text-teal-700 hover:bg-gray-50"
                }`
              }
            >
              Our Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-lg font-semibold transition-colors bg-gradient-to-r ${
                  isActive
                    ? "from-cyan-500 to-teal-600 text-white"
                    : "from-cyan-500 to-teal-600 text-white hover:from-cyan-600 hover:to-teal-700"
                }`
              }
            >
              Contact Us
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-teal-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-lg mt-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "text-teal-700 bg-teal-100"
                    : "text-gray-700 hover:text-teal-700 hover:bg-gray-100"
                }`
              }
              onClick={closeMenus}
            >
              Home
            </NavLink>

            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "text-teal-700 bg-teal-100"
                    : "text-gray-700 hover:text-teal-700 hover:bg-gray-100"
                }`
              }
              onClick={closeMenus}
            >
              About Us
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "text-teal-700 bg-teal-100"
                    : "text-gray-700 hover:text-teal-700 hover:bg-gray-100"
                }`
              }
              onClick={closeMenus}
            >
              Our Services
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md text-base font-medium transition-colors bg-gradient-to-r ${
                  isActive
                    ? "from-cyan-500 to-teal-600 text-white"
                    : "from-cyan-500 to-teal-600 text-white hover:from-cyan-600 hover:to-teal-700"
                }`
              }
              onClick={closeMenus}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
