import React, { useState } from 'react';

const FeaturesProducts = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const categories = [
    { id: 'all', name: 'All Products', icon: '🐟' },
    { id: 'fish', name: 'Fresh Fish', icon: '🐟' },
    { id: 'shrimp', name: 'Shrimp', icon: '🦐' },
    { id: 'crab', name: 'Crab', icon: '🦀' },
    { id: 'frozen', name: 'Frozen', icon: '❄️' }
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Atlantic Salmon',
      category: 'fish',
      image: 'https://i.ibb.co.com/rKv8s6sK/Atlantic-Salmon-Whole-1-1.jpg',
      price: '$24.99/kg',
      origin: 'Norway',
      sustainability: 'ASC Certified',
      freshness: 'Ultra Fresh',
      description: 'Premium quality Norwegian salmon, rich in omega-3 fatty acids',
      features: ['Wild Caught', 'Sustainably Sourced', 'Flash Frozen'],
      rating: 4.9,
      inStock: true,
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'King Tiger Prawns',
      category: 'shrimp',
      image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: '$32.99/kg',
      origin: 'Bangladesh',
      sustainability: 'BAP Certified',
      freshness: 'Live Fresh',
      description: 'Large, succulent tiger prawns perfect for grilling and cooking',
      features: ['Jumbo Size', 'Shell-On', 'Chemical Free'],
      rating: 4.8,
      inStock: true,
      badge: 'Premium'
    },
    {
      id: 3,
      name: 'Fresh Tuna Steaks',
      category: 'fish',
      image: 'https://i.ibb.co.com/7xBj8xV3/Tuna-Fillet-2-d6df366fa3fb.jpg',
      price: '$28.50/kg',
      origin: 'Maldives',
      sustainability: 'MSC Certified',
      freshness: 'Sashimi Grade',
      description: 'Premium yellowfin tuna steaks, perfect for sushi and grilling',
      features: ['Sashimi Grade', 'Line Caught', 'Mercury Tested'],
      rating: 4.9,
      inStock: true,
      badge: 'Sashimi Grade'
    },
    {
      id: 4,
      name: 'Blue Swimming Crab',
      category: 'crab',
      image: 'https://i.ibb.co.com/MkS0PmJm/istockphoto-1399923695-612x612-1.jpg',
      price: '$18.75/kg',
      origin: 'Bay of Bengal',
      sustainability: 'Responsibly Sourced',
      freshness: 'Live/Fresh',
      description: 'Sweet and tender blue swimming crabs from pristine waters',
      features: ['Live Delivery', 'Shell Cleaned', 'Premium Size'],
      rating: 4.7,
      inStock: true,
      badge: 'Local Catch'
    },
    {
      id: 5,
      name: 'Frozen Cod Fillets',
      category: 'frozen',
      image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: '$16.99/kg',
      origin: 'Iceland',
      sustainability: 'MSC Certified',
      freshness: 'IQF Frozen',
      description: 'Premium skinless, boneless cod fillets, flash frozen at sea',
      features: ['Skinless', 'Boneless', 'IQF Frozen'],
      rating: 4.6,
      inStock: true,
      badge: 'Value Pack'
    },
    {
      id: 6,
      name: 'Jumbo Sea Bass',
      category: 'fish',
      image: 'https://i.ibb.co.com/DHrrPkVB/istockphoto-1266166774-612x612.jpg',
      price: '$22.50/kg',
      origin: 'Mediterranean',
      sustainability: 'Organic Certified',
      freshness: 'Ultra Fresh',
      description: 'Whole sea bass, perfect for grilling or steaming',
      features: ['Whole Fish', 'Scaled & Gutted', 'Restaurant Quality'],
      rating: 4.8,
      inStock: false,
      badge: 'Seasonal'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const getBadgeColor = (badge) => {
    const colors = {
      'Best Seller': 'bg-emerald-400 text-white',
      'Premium': 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white',
      'Sashimi Grade': 'bg-gradient-to-r from-purple-500 to-pink-500 text-white',
      'Local Catch': 'bg-teal-500 text-white',
      'Value Pack': 'bg-blue-500 text-white',
      'Seasonal': 'bg-orange-500 text-white'
    };
    return colors[badge] || 'bg-gray-500 text-white';
  };

  // Check if we're on mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-teal-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute top-40 sm:top-60 right-10 sm:right-20 w-32 sm:w-40 h-32 sm:h-40 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 sm:bottom-32 left-1/3 w-28 sm:w-36 h-28 sm:h-36 bg-emerald-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-teal-100 mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-medium text-teal-700">Premium Seafood Collection</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">Fish Products</span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Discover our premium selection of fresh and frozen seafood, sourced directly from the world's finest fishing grounds with full traceability and quality assurance.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-12 px-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 text-sm sm:text-base ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-teal-600 to-cyan-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-700 shadow-md border border-gray-200'
              }`}
            >
              <span className="text-sm sm:text-base lg:text-lg mr-1 sm:mr-2">{category.icon}</span>
              <span className="hidden sm:inline">{category.name}</span>
              <span className="sm:hidden">{category.name.split(' ')[category.name.split(' ').length - 1]}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`group bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                !product.inStock ? 'opacity-75' : ''
              }`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badge */}
                <div className={`absolute top-3 sm:top-4 left-3 sm:left-4 px-2 sm:px-3 py-1 rounded-full text-xs font-bold ${getBadgeColor(product.badge)}`}>
                  {product.badge}
                </div>

                {/* Stock Status */}
                <div className={`absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                  product.inStock 
                    ? 'bg-emerald-400 text-white' 
                    : 'bg-red-400 text-white'
                }`}>
                  {product.inStock ? (
                    <span className="flex items-center">
                      <span className="hidden sm:inline">✓ </span>In Stock
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <span className="hidden sm:inline">⚠ </span>Out of Stock
                    </span>
                  )}
                </div>

                {/* Hover Quick Actions - Always visible on mobile */}
                <div className={`absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 transform transition-all duration-300 ${
                  hoveredProduct === product.id || isMobile ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <div className="flex gap-2">
                    <button
                      onClick={() => console.log(`View details for product ${product.id}`)}
                      className="flex-1 bg-white/90 backdrop-blur-sm text-teal-700 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-white transition-colors text-center"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => console.log('Request quote clicked')}
                      className="flex-1 bg-teal-600 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-teal-700 transition-colors text-center"
                    >
                      Request Quote
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 lg:p-6">
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* Price & Rating */}
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <div className="text-xl sm:text-2xl font-bold text-teal-600">
                    {product.price}
                  </div>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-1 sm:mr-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-xs sm:text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                          ⭐
                        </span>
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>

                {/* Product Info - Compact on mobile */}
                <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Origin:</span>
                    <span className="font-medium text-gray-900">{product.origin}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Freshness:</span>
                    <span className="font-medium text-emerald-600">{product.freshness}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Certification:</span>
                    <span className="font-medium text-teal-600 truncate ml-2">{product.sustainability}</span>
                  </div>
                </div>

                {/* Features - Show fewer on mobile */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {(isMobile ? product.features.slice(0, 2) : product.features).map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-teal-50 text-teal-700 text-xs rounded-md font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                  {product.features.length > 2 && isMobile && (
                    <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md font-medium">
                      +{product.features.length - 2}
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <button
                  onClick={() => {
                    if (product.inStock) {
                      console.log('Add to RFQ clicked');
                    } else {
                      console.log('Notify when available clicked');
                    }
                  }}
                  className={`w-full block text-center py-2 sm:py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base ${
                    product.inStock
                      ? 'bg-gradient-to-r from-teal-600 to-cyan-500 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-400 text-white cursor-not-allowed'
                  }`}
                  disabled={!product.inStock}
                >
                  {product.inStock ? (
                    <span className="flex items-center justify-center">
                      <span className="mr-2">🛒</span>Add to RFQ
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <span className="mr-2">📧</span>Notify When Available
                    </span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <button
            onClick={() => console.log('View all products clicked')}
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-teal-700 font-semibold rounded-xl shadow-lg border-2 border-teal-100 hover:border-teal-300 hover:bg-teal-50 transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
          >
            <span className="mr-2">🐟</span>
            View All Products
            <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-gray-200">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">🏆</div>
            <div className="font-bold text-gray-900 text-sm sm:text-base">Premium Quality</div>
            <div className="text-xs sm:text-sm text-gray-600">HACCP Certified</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">❄️</div>
            <div className="font-bold text-gray-900 text-sm sm:text-base">Cold Chain</div>
            <div className="text-xs sm:text-sm text-gray-600">-18°C Maintained</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">🚚</div>
            <div className="font-bold text-gray-900 text-sm sm:text-base">Fast Delivery</div>
            <div className="text-xs sm:text-sm text-gray-600">48h Worldwide</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">📋</div>
            <div className="font-bold text-gray-900 text-sm sm:text-base">Full Traceability</div>
            <div className="text-xs sm:text-sm text-gray-600">Source to Table</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesProducts;