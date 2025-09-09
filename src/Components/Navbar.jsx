import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const closeMenus = () => {
    setIsOpen(false);
    setIsProductsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className=" mx-auto px-2 sm:px-6 lg:px-4">
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
              <span className=" text-2xl lg:text-[35px] font-extrabold ">Khaled Enterprise</span>
              <span className=" text-xs md:text-sm mt-0.5">
                Global Fish & Food Export Solutions
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-[15px] font-semibold transition-colors ${
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
                `px-3 py-2 rounded-md text-[15px] font-semibold transition-colors ${
                  isActive
                    ? "text-teal-700 bg-teal-50 border-b-2 border-teal-700"
                    : "text-gray-700 hover:text-teal-700 hover:bg-gray-50"
                }`
              }
            >
              About Us
            </NavLink>

            {/* Products Dropdown */}
            <div className="relative group">
              <button
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-teal-700 hover:bg-gray-50 transition-colors flex items-center"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                Products
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border transition-all duration-200 ${
                  isProductsOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <div className="py-2">
                  <NavLink
                    to="/products/fish-shrimp"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "text-emerald-400 bg-emerald-50 border-l-4 border-emerald-400"
                          : "text-gray-700 hover:text-emerald-400 hover:bg-gray-50"
                      }`
                    }
                  >
                    🐟 Fish & Shrimp
                    <span className="text-emerald-400 text-xs ml-2">
                      ★ Featured
                    </span>
                  </NavLink>
                  <NavLink
                    to="/products/meat-poultry"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm transition-colors ${
                        isActive
                          ? "text-teal-700 bg-teal-50 border-l-4 border-teal-700"
                          : "text-gray-700 hover:text-teal-700 hover:bg-gray-50"
                      }`
                    }
                  >
                    🍖 Meat & Poultry
                  </NavLink>
                  <NavLink
                    to="/products/vegetables-fruits"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm transition-colors ${
                        isActive
                          ? "text-teal-700 bg-teal-50 border-l-4 border-teal-700"
                          : "text-gray-700 hover:text-teal-700 hover:bg-gray-50"
                      }`
                    }
                  >
                    🥬 Vegetables & Fruits
                  </NavLink>
                  <NavLink
                    to="/products/frozen-processed"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm transition-colors ${
                        isActive
                          ? "text-teal-700 bg-teal-50 border-l-4 border-teal-700"
                          : "text-gray-700 hover:text-teal-700 hover:bg-gray-50"
                      }`
                    }
                  >
                    ❄️ Frozen & Processed Foods
                  </NavLink>
                  <NavLink
                    to="/products/others"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm transition-colors ${
                        isActive
                          ? "text-teal-700 bg-teal-50 border-l-4 border-teal-700"
                          : "text-gray-700 hover:text-teal-700 hover:bg-gray-50"
                      }`
                    }
                  >
                    📦 Others
                  </NavLink>
                </div>
              </div>
            </div>

            <NavLink
              to="/quality-certificates"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-[15px] font-semibold transition-colors ${
                  isActive
                    ? "text-teal-700 bg-teal-50 border-b-2 border-teal-700"
                    : "text-gray-700 hover:text-teal-700 hover:bg-gray-50"
                }`
              }
            >
              Quality & Certificates
            </NavLink>

            {/* <NavLink
              to="/traceability"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-[15px] font-semibold transition-colors ${
                  isActive
                    ? "text-teal-700 bg-teal-50 border-b-2 border-teal-700"
                    : "text-gray-700 hover:text-teal-700 hover:bg-gray-50"
                }`
              }
            >
              Traceability
            </NavLink> */}

            <NavLink
              to="/services"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-[15px] font-semibold transition-colors ${
                  isActive
                    ? "text-teal-700 bg-teal-50 border-b-2 border-teal-700"
                    : "text-gray-700 hover:text-teal-700 hover:bg-gray-50"
                }`
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/markets-logistics"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-[15px] font-semibold transition-colors ${
                  isActive
                    ? "text-teal-700 bg-teal-50 border-b-2 border-teal-700"
                    : "text-gray-700 hover:text-teal-700 hover:bg-gray-50"
                }`
              }
            >
              Markets & Logistics
            </NavLink>

            <NavLink
              to="/rfq"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-[15px] font-semibold transition-colors border ${
                  isActive
                    ? "text-white bg-teal-700 border-teal-700"
                    : "text-teal-700 border-teal-700 hover:bg-teal-700 hover:text-white"
                }`
              }
            >
              Request Quote
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

            {/* Mobile Products Section */}
            <div>
              <button
                onClick={toggleProducts}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-700 hover:bg-gray-100"
              >
                Products
                <svg
                  className={`h-4 w-4 transform transition-transform ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isProductsOpen && (
                <div className="ml-4 space-y-1">
                  <NavLink
                    to="/products/fish-shrimp"
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-[15px] font-semibold transition-colors ${
                        isActive
                          ? "text-emerald-400 bg-emerald-50"
                          : "text-gray-600 hover:text-emerald-400 hover:bg-gray-100"
                      }`
                    }
                    onClick={closeMenus}
                  >
                    🐟 Fish & Shrimp ★
                  </NavLink>
                  <NavLink
                    to="/products/meat-poultry"
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-[15px] font-semibold transition-colors ${
                        isActive
                          ? "text-teal-700 bg-teal-100"
                          : "text-gray-600 hover:text-teal-700 hover:bg-gray-100"
                      }`
                    }
                    onClick={closeMenus}
                  >
                    🍖 Meat & Poultry
                  </NavLink>
                  <NavLink
                    to="/products/vegetables-fruits"
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-[15px] font-semibold transition-colors ${
                        isActive
                          ? "text-teal-700 bg-teal-100"
                          : "text-gray-600 hover:text-teal-700 hover:bg-gray-100"
                      }`
                    }
                    onClick={closeMenus}
                  >
                    🥬 Vegetables & Fruits
                  </NavLink>
                  <NavLink
                    to="/products/frozen-processed"
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-[15px] font-semibold transition-colors ${
                        isActive
                          ? "text-teal-700 bg-teal-100"
                          : "text-gray-600 hover:text-teal-700 hover:bg-gray-100"
                      }`
                    }
                    onClick={closeMenus}
                  >
                    ❄️ Frozen & Processed Foods
                  </NavLink>
                  <NavLink
                    to="/products/others"
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-[15px] font-semibold transition-colors ${
                        isActive
                          ? "text-teal-700 bg-teal-100"
                          : "text-gray-600 hover:text-teal-700 hover:bg-gray-100"
                      }`
                    }
                    onClick={closeMenus}
                  >
                    📦 Others
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink
              to="/quality-certificates"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "text-teal-700 bg-teal-100"
                    : "text-gray-700 hover:text-teal-700 hover:bg-gray-100"
                }`
              }
              onClick={closeMenus}
            >
              Quality & Certificates
            </NavLink>

            <NavLink
              to="/traceability"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "text-teal-700 bg-teal-100"
                    : "text-gray-700 hover:text-teal-700 hover:bg-gray-100"
                }`
              }
              onClick={closeMenus}
            >
              Traceability
            </NavLink>

            <NavLink
              to="/resources"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "text-teal-700 bg-teal-100"
                    : "text-gray-700 hover:text-teal-700 hover:bg-gray-100"
                }`
              }
              onClick={closeMenus}
            >
              Resources
            </NavLink>

            <NavLink
              to="/markets-logistics"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "text-teal-700 bg-teal-100"
                    : "text-gray-700 hover:text-teal-700 hover:bg-gray-100"
                }`
              }
              onClick={closeMenus}
            >
              Markets & Logistics
            </NavLink>

            <NavLink
              to="/rfq"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors border ${
                  isActive
                    ? "text-white bg-teal-700 border-teal-700"
                    : "text-teal-700 border-teal-700 hover:bg-teal-700 hover:text-white"
                }`
              }
              onClick={closeMenus}
            >
              Request Quote
            </NavLink>

            <NavLink
              to="/news"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "text-teal-700 bg-teal-100"
                    : "text-gray-700 hover:text-teal-700 hover:bg-gray-100"
                }`
              }
              onClick={closeMenus}
            >
              News
            </NavLink>

            <NavLink
              to="/careers"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "text-teal-700 bg-teal-100"
                    : "text-gray-700 hover:text-teal-700 hover:bg-gray-100"
                }`
              }
              onClick={closeMenus}
            >
              Careers
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
