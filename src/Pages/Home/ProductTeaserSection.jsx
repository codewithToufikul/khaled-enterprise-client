import React, { useState } from 'react';

const ProductTeaserSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const productCategories = [
    {
      id: 'meat-poultry',
      title: 'Premium Meat & Poultry',
      subtitle: 'Farm-Fresh Quality',
      description: 'Halal-certified chicken, beef, and mutton from trusted farms with complete traceability and quality assurance.',
      image: 'https://images.unsplash.com/photo-1448907503123-67254d59ca4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: '🥩',
      features: ['Halal Certified', 'Hormone-Free', 'Farm Fresh', 'Quality Assured'],
      stats: { varieties: '15+', farms: '50+', countries: '25+' },
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-600'
    },
    {
      id: 'vegetables-fruits',
      title: 'Fresh Vegetables & Fruits',
      subtitle: 'Garden to Global',
      description: 'Premium seasonal vegetables and tropical fruits, carefully selected and packed to maintain freshness.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: '🥬',
      features: ['Pesticide-Free', 'Fresh Harvest', 'Cold Chain', 'Nutritious'],
      stats: { varieties: '100+', seasons: '4', freshness: '7 days' },
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-600'
    },
    {
      id: 'frozen-processed',
      title: 'Frozen & Processed Foods',
      subtitle: 'Convenience Meets Quality',
      description: 'Ready-to-cook and processed food items with extended shelf life, perfect for restaurants.',
      image: 'https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: '❄️',
      features: ['Flash Frozen', 'Ready-to-Cook', 'Extended Shelf Life', 'Bulk Available'],
      stats: { temperature: '-18°C', shelf: '12 months', varieties: '50+' },
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600'
    },
    {
      id: 'others',
      title: 'Specialty Products',
      subtitle: 'Unique & Exotic',
      description: 'Specialty items including spices, condiments, and regional delicacies that add authentic flavors.',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: '🌶️',
      features: ['Authentic Flavors', 'Premium Spices', 'Regional Specials', 'Custom Blends'],
      stats: { spices: '30+', regions: '8', heritage: '100+ years' },
      color: 'from-orange-500 to-yellow-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-600'
    }
  ];

  const quickStats = [
    { icon: '📦', number: '500+', label: 'Product Varieties', color: 'text-teal-600' },
    { icon: '🌍', number: '75+', label: 'Export Countries', color: 'text-cyan-600' },
    { icon: '🏭', number: '200+', label: 'Partner Suppliers', color: 'text-emerald-600' },
    { icon: '⭐', number: '99.5%', label: 'Quality Rating', color: 'text-blue-600' }
  ];

  // Check if we're on mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-100 via-transparent to-cyan-100"></div>
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-24 sm:w-36 lg:w-48 h-24 sm:h-36 lg:h-48 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-full shadow-md border border-teal-100 mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-medium text-teal-700">Complete Product Portfolio</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-2">
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">Complete Range</span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
            Beyond premium seafood, we offer a comprehensive selection of quality food products from trusted sources worldwide, all with the same commitment to excellence and traceability.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto">
            {quickStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="text-xl sm:text-2xl lg:text-3xl mb-1 sm:mb-2">{stat.icon}</div>
                <div className={`text-lg sm:text-xl lg:text-2xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-600 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {productCategories.map((category, index) => (
            <div
              key={category.id}
              className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl transition-all duration-500 hover:shadow-3xl transform hover:-translate-y-1 lg:hover:-translate-y-2 ${
                index % 2 === 0 ? 'lg:translate-y-8' : ''
              }`}
              style={{
                animationDelay: `${index * 0.2}s`
              }}
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Image */}
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Icon Badge */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-xl lg:text-2xl shadow-lg">
                  {category.icon}
                </div>

                {/* Stats Card - Mobile Optimized */}
                <div className={`absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg transform transition-all duration-300 ${
                  hoveredCard === category.id ? 'scale-100 opacity-100' : 'scale-95 opacity-90'
                }`}>
                  <div className="grid grid-cols-3 sm:grid-cols-1 gap-1 sm:gap-1 text-center min-w-[90px] sm:min-w-[110px] lg:min-w-[120px]">
                    {Object.entries(category.stats).map(([key, value], i) => (
                      <div key={i} className="text-xs">
                        <div className="font-bold text-gray-900 text-xs sm:text-sm">{value}</div>
                        <div className="text-gray-600 capitalize text-xs leading-tight">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <div className="mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 leading-tight">{category.title}</h3>
                    <p className={`text-xs sm:text-sm font-medium mb-2 sm:mb-3 bg-gradient-to-r ${category.color} bg-clip-text text-transparent bg-white`}>
                      {category.subtitle}
                    </p>
                    <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                      {isMobile ? `${category.description.substring(0, 120)}...` : category.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {(isMobile ? category.features.slice(0, 2) : category.features).map((feature, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30"
                      >
                        {feature}
                      </span>
                    ))}
                    {category.features.length > 2 && isMobile && (
                      <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30">
                        +{category.features.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className={`flex gap-2 sm:gap-3 transform transition-all duration-300 ${
                    hoveredCard === category.id || isMobile ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    <button
                      onClick={() => console.log(`View products for ${category.id}`)}
                      className="flex-1 bg-white text-gray-900 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-100 transition-colors text-center"
                    >
                      View Products
                    </button>
                    <button
                      onClick={() => console.log('Get quote clicked')}
                      className={`flex-1 bg-gradient-to-r ${category.color} text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity text-center`}
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Our Products */}
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Why Choose Our <span className="text-teal-600">Product Range?</span>
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    icon: '🏆',
                    title: 'Premium Quality Standards',
                    description: 'All products meet international quality certifications and food safety standards.'
                  },
                  {
                    icon: '🔍',
                    title: 'Complete Traceability',
                    description: 'Full supply chain transparency from source to destination with detailed documentation.'
                  },
                  {
                    icon: '🌱',
                    title: 'Sustainable Sourcing',
                    description: 'Environmentally responsible sourcing practices supporting local communities.'
                  },
                  {
                    icon: '🚚',
                    title: 'Global Logistics',
                    description: 'Efficient cold chain and logistics network ensuring timely worldwide delivery.'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                    <div className="text-xl sm:text-2xl flex-shrink-0">{benefit.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="text-3xl sm:text-4xl mb-2 sm:mb-4">📊</div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Product Quality Metrics</h4>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { label: 'Quality Compliance', percentage: 99.5, color: 'bg-emerald-400' },
                    { label: 'On-Time Delivery', percentage: 98.2, color: 'bg-teal-400' },
                    { label: 'Customer Satisfaction', percentage: 97.8, color: 'bg-cyan-400' },
                    { label: 'Sustainability Score', percentage: 95.0, color: 'bg-blue-400' }
                  ].map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-gray-700">{metric.label}</span>
                        <span className="font-bold text-gray-900">{metric.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`${metric.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${metric.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-teal-600 to-cyan-500 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Explore Our Full Catalog?</h3>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 px-2">
            Discover thousands of quality products with competitive pricing and reliable global delivery.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
            <button
              onClick={() => console.log('Browse catalog clicked')}
              className="flex-1 bg-white text-teal-600 px-4 sm:px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center text-sm sm:text-base"
            >
              <span className="mr-2">📋</span>
              Browse Catalog
            </button>
            <button
              onClick={() => console.log('Request bulk quote clicked')}
              className="flex-1 bg-teal-700 text-white px-4 sm:px-6 py-3 rounded-xl font-semibold hover:bg-teal-800 transition-colors border-2 border-white/20 flex items-center justify-center text-sm sm:text-base"
            >
              <span className="mr-2">💼</span>
              Request Bulk Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTeaserSection;