import React, { useState, useRef, useEffect } from 'react';

const CertificationBadged = () => {
  const [hoveredCert, setHoveredCert] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const certifications = [
    {
      id: 'haccp',
      name: 'HACCP',
      fullName: 'Hazard Analysis Critical Control Points',
      description: 'International food safety management system ensuring safe food production',
      icon: '🛡️',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      validUntil: '2025',
      category: 'Food Safety',
      badge: '/api/placeholder/120/120'
    },
    {
      id: 'iso22000',
      name: 'ISO 22000',
      fullName: 'Food Safety Management Systems',
      description: 'Global standard for food safety management throughout the food chain',
      icon: '🏆',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-600',
      validUntil: '2025',
      category: 'Quality Management',
      badge: '/api/placeholder/120/120'
    },
    {
      id: 'halal',
      name: 'HALAL',
      fullName: 'Islamic Dietary Laws Compliance',
      description: 'Certified compliance with Islamic dietary requirements for Muslim consumers',
      icon: '☪️',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      validUntil: '2025',
      category: 'Religious Compliance',
      badge: '/api/placeholder/120/120'
    },
    {
      id: 'brc',
      name: 'BRC',
      fullName: 'British Retail Consortium',
      description: 'Global food safety standard for retailers and food service organizations',
      icon: '🇬🇧',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
      validUntil: '2025',
      category: 'Global Standard',
      badge: '/api/placeholder/120/120'
    },
    {
      id: 'msc',
      name: 'MSC',
      fullName: 'Marine Stewardship Council',
      description: 'Sustainable seafood certification ensuring responsible fishing practices',
      icon: '🌊',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
      textColor: 'text-cyan-600',
      validUntil: '2025',
      category: 'Sustainability',
      badge: '/api/placeholder/120/120'
    },
    {
      id: 'asc',
      name: 'ASC',
      fullName: 'Aquaculture Stewardship Council',
      description: 'Responsible aquaculture standard for farmed seafood products',
      icon: '🐟',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600',
      validUntil: '2025',
      category: 'Aquaculture',
      badge: '/api/placeholder/120/120'
    },
    {
      id: 'bap',
      name: 'BAP',
      fullName: 'Best Aquaculture Practices',
      description: 'Comprehensive aquaculture certification covering environmental and social responsibility',
      icon: '🦐',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      validUntil: '2025',
      category: 'Best Practices',
      badge: '/api/placeholder/120/120'
    },
    {
      id: 'organic',
      name: 'ORGANIC',
      fullName: 'Organic Food Certification',
      description: 'Certified organic products free from synthetic pesticides and chemicals',
      icon: '🌱',
      color: 'from-lime-500 to-lime-600',
      bgColor: 'bg-lime-50',
      textColor: 'text-lime-600',
      validUntil: '2025',
      category: 'Organic Standards',
      badge: '/api/placeholder/120/120'
    }
  ];

  const trustMetrics = [
    { icon: '🏅', number: '15+', label: 'Certifications', color: 'text-teal-600' },
    { icon: '📅', number: '10+', label: 'Years Certified', color: 'text-cyan-600' },
    { icon: '🔍', number: '100%', label: 'Compliance Rate', color: 'text-emerald-600' },
    { icon: '🌍', number: '50+', label: 'Countries Approved', color: 'text-blue-600' }
  ];

  // Check if we're on mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-teal-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute top-5 sm:top-10 left-5 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 text-teal-400" fill="currentColor" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="4"/>
          <circle cx="30" cy="30" r="3"/>
          <circle cx="70" cy="30" r="3"/>
          <circle cx="30" cy="70" r="3"/>
          <circle cx="70" cy="70" r="3"/>
        </svg>
        <svg className="absolute top-20 sm:top-32 right-10 sm:right-20 w-18 sm:w-24 h-18 sm:h-24 text-cyan-400" fill="currentColor" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="3"/>
          <circle cx="25" cy="25" r="2"/>
          <circle cx="75" cy="25" r="2"/>
          <circle cx="25" cy="75" r="2"/>
          <circle cx="75" cy="75" r="2"/>
        </svg>
        <div className="absolute bottom-10 sm:bottom-20 left-1/4 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-teal-100 mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-medium text-teal-700">Quality Assurance & Compliance</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">Certifications</span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
            Trust in our commitment to quality, safety, and sustainability. Our products meet the highest international standards with comprehensive certifications from globally recognized organizations.
          </p>

          {/* Trust Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto">
            {trustMetrics.map((metric, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{metric.icon}</div>
                <div className={`text-lg sm:text-xl lg:text-2xl font-bold ${metric.color} mb-1`}>{metric.number}</div>
                <div className="text-xs sm:text-sm text-gray-600 leading-tight">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certification Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-12 sm:mb-16">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg border-2 border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer ${
                hoveredCert === cert.id ? 'scale-102 sm:scale-105' : ''
              } ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
              onMouseEnter={() => setHoveredCert(cert.id)}
              onMouseLeave={() => setHoveredCert(null)}
              onClick={() => isMobile ? setHoveredCert(hoveredCert === cert.id ? null : cert.id) : null}
            >
              {/* Badge Icon/Image */}
              <div className="relative mb-3 sm:mb-4">
                <div className={`w-16 sm:w-18 lg:w-20 h-16 sm:h-18 lg:h-20 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-white text-2xl sm:text-3xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  {cert.icon}
                </div>
                
                {/* Valid Badge */}
                <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 bg-emerald-400 text-white text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full font-bold">
                  ✓ Valid
                </div>
              </div>

              {/* Certification Name */}
              <div className="text-center mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{cert.name}</h3>
                <p className={`text-xs sm:text-sm font-medium ${cert.textColor} mb-1 sm:mb-2`}>{cert.category}</p>
                <p className="text-xs text-gray-500">Valid until {cert.validUntil}</p>
              </div>

              {/* Hover Details - Always show on mobile when tapped */}
              <div className={`transition-all duration-300 overflow-hidden ${
                hoveredCert === cert.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="border-t border-gray-200 pt-3 sm:pt-4">
                  <h4 className="font-semibold text-gray-800 text-sm mb-2 leading-tight">{cert.fullName}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3 sm:mb-4">{cert.description}</p>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log(`View certificate for ${cert.name}`);
                    }}
                    className={`block w-full text-center py-2 px-3 sm:px-4 rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 bg-gradient-to-r ${cert.color} text-white hover:opacity-90`}
                  >
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Commitment Section */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-gray-100 mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Quality <span className="text-teal-600">Commitment</span>
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    icon: '🔒',
                    title: 'Food Safety First',
                    description: 'Rigorous testing and quality control at every stage of production and processing.'
                  },
                  {
                    icon: '🌍',
                    title: 'Global Standards',
                    description: 'Meeting and exceeding international food safety and quality requirements worldwide.'
                  },
                  {
                    icon: '🔄',
                    title: 'Continuous Monitoring',
                    description: 'Regular audits and updates to maintain the highest certification standards.'
                  },
                  {
                    icon: '📋',
                    title: 'Full Documentation',
                    description: 'Complete traceability with detailed records from source to destination.'
                  }
                ].map((commitment, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                    <div className="text-xl sm:text-2xl flex-shrink-0 mt-1">{commitment.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{commitment.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{commitment.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certification Timeline */}
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Certification Timeline</h4>
                
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { year: '2010', milestone: 'First HACCP Certification', icon: '🎯' },
                    { year: '2015', milestone: 'ISO 22000 & BRC Standards', icon: '📈' },
                    { year: '2018', milestone: 'Sustainable Certifications', icon: '🌱' },
                    { year: '2020', milestone: 'Halal & Organic Certified', icon: '✅' },
                    { year: '2024', milestone: '15+ Active Certifications', icon: '🏆' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-full flex items-center justify-center text-base sm:text-lg shadow-md flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-teal-600 text-sm sm:text-base">{item.year}</div>
                        <div className="text-xs sm:text-sm text-gray-700 leading-tight">{item.milestone}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-teal-600 to-cyan-500 rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 text-white">
          <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">📜</div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Need Certificate Verification?</h3>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-2">
            Access our complete certification portfolio and verify our credentials with issuing authorities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
            <button
              onClick={() => console.log('View all certificates clicked')}
              className="flex-1 bg-white text-teal-600 px-4 sm:px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center text-sm sm:text-base"
            >
              <span className="mr-2">📋</span>
              View All Certificates
            </button>
            <button
              onClick={() => console.log('Verify credentials clicked')}
              className="flex-1 bg-teal-700 text-white px-4 sm:px-6 py-3 rounded-xl font-semibold hover:bg-teal-800 transition-colors border-2 border-white/20 flex items-center justify-center text-sm sm:text-base"
            >
              <span className="mr-2">📞</span>
              Verify Credentials
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationBadged;