import React, { useState, useRef, useEffect } from 'react';

const OurServiceSection = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const services = [
    {
      id: 'sourcing-procurement',
      title: 'Premium Sourcing & Procurement',
      subtitle: 'Direct from Source',
      description: 'We maintain direct relationships with premium fishing fleets, aquaculture farms, and trusted suppliers to ensure the highest quality seafood reaches your market.',
      shortDesc: 'Direct supplier relationships with quality assessment at source.',
      icon: '🎣',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Direct supplier relationships',
        'Quality assessment at source',
        'Seasonal availability planning',
        'Price negotiation & contracts'
      ],
      benefits: [
        'Best market prices',
        'Guaranteed freshness',
        'Consistent supply',
        'Transparent sourcing'
      ],
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200'
    },
    {
      id: 'quality-control',
      title: 'Quality Control & Testing',
      subtitle: 'Laboratory Certified',
      description: 'Comprehensive quality control processes with in-house laboratory testing and third-party certifications to meet international food safety standards.',
      shortDesc: 'Comprehensive testing with international certifications.',
      icon: '🔬',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Microbiological testing',
        'Chemical residue analysis',
        'Sensory evaluation',
        'Documentation & certificates'
      ],
      benefits: [
        'Food safety compliance',
        'Regulatory approval',
        'Customer confidence',
        'Zero contamination'
      ],
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200'
    },
    {
      id: 'processing-packaging',
      title: 'Processing & Packaging',
      subtitle: 'Custom Solutions',
      description: 'State-of-the-art processing facilities with custom packaging solutions tailored to your specific requirements and market demands.',
      shortDesc: 'Custom processing with tailored packaging solutions.',
      icon: '📦',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Custom cut & portion sizes',
        'Vacuum & MAP packaging',
        'Private label services',
        'Retail-ready packaging'
      ],
      benefits: [
        'Extended shelf life',
        'Brand customization',
        'Market-ready products',
        'Reduced handling costs'
      ],
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 'cold-chain',
      title: 'Cold Chain Logistics',
      subtitle: 'Temperature Controlled',
      description: 'Advanced cold chain management ensuring optimal temperature control from harvest to delivery, maintaining product integrity throughout the supply chain.',
      shortDesc: 'Temperature-controlled logistics with real-time monitoring.',
      icon: '❄️',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Temperature monitoring',
        'Refrigerated transportation',
        'Cold storage facilities',
        'Real-time tracking'
      ],
      benefits: [
        'Maximum freshness',
        'Extended shelf life',
        'Quality preservation',
        'Global reach'
      ],
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200'
    },
    {
      id: 'export-logistics',
      title: 'Export Documentation & Logistics',
      subtitle: 'Global Compliance',
      description: 'Complete export documentation services and logistics coordination ensuring smooth customs clearance and timely delivery to international markets.',
      shortDesc: 'Complete export services with global compliance.',
      icon: '📋',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Export documentation',
        'Customs clearance',
        'Shipping coordination',
        'Insurance & tracking'
      ],
      benefits: [
        'Hassle-free export',
        'Compliance assurance',
        'Timely delivery',
        'Cost optimization'
      ],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      id: 'market-intelligence',
      title: 'Market Intelligence & Support',
      subtitle: 'Strategic Insights',
      description: 'Comprehensive market analysis, pricing intelligence, and ongoing support to help you make informed decisions and maximize profitability.',
      shortDesc: 'Market insights and strategic consulting support.',
      icon: '📊',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Market trend analysis',
        'Price monitoring',
        'Demand forecasting',
        'Strategic consulting'
      ],
      benefits: [
        'Informed decisions',
        'Competitive advantage',
        'Risk mitigation',
        'Profit optimization'
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ];

  const processSteps = [
    { step: '01', title: 'Consultation', description: 'Understanding your requirements', icon: '💬' },
    { step: '02', title: 'Sourcing', description: 'Finding the best suppliers', icon: '🎯' },
    { step: '03', title: 'Quality Check', description: 'Rigorous testing & approval', icon: '✅' },
    { step: '04', title: 'Processing', description: 'Custom processing & packaging', icon: '⚙️' },
    { step: '05', title: 'Logistics', description: 'Cold chain delivery', icon: '🚚' },
    { step: '06', title: 'Support', description: 'Ongoing relationship', icon: '🤝' }
  ];

  // Auto-rotate services on mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setActiveService(prev => (prev + 1) % services.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isMobile, services.length]);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 sm:w-40 h-20 sm:h-40 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-16 sm:w-32 h-16 sm:h-32 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-3xl"></div>
        <svg className="absolute top-1/4 right-1/4 w-12 sm:w-24 h-12 sm:h-24 text-teal-300" fill="currentColor" viewBox="0 0 100 100">
          <circle cx="50" cy="20" r="3"/>
          <circle cx="80" cy="50" r="3"/>
          <circle cx="50" cy="80" r="3"/>
          <circle cx="20" cy="50" r="3"/>
          <circle cx="50" cy="50" r="2"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-full shadow-md border border-teal-100 mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-medium text-teal-700">End-to-End Solutions</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">Services</span>
          </h2>
          
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            From sourcing to delivery, we provide comprehensive seafood export services designed to meet your unique business needs with precision and reliability.
          </p>
        </div>

        {/* Mobile Service Cards */}
        {isMobile ? (
          <div className="mb-12">
            {/* Active Service Card */}
            <div className="mb-6">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center mb-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${services[activeService].color} flex items-center justify-center text-xl shadow-lg mr-3`}>
                      {services[activeService].icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{services[activeService].title}</h3>
                      <p className="text-cyan-200 text-sm">{services[activeService].subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm mb-3 opacity-90">{services[activeService].shortDesc}</p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {services[activeService].benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0"></div>
                        <span className="text-xs">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Navigation Dots */}
              <div className="flex justify-center mt-4 space-x-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeService 
                        ? 'bg-teal-600 w-6' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Service List */}
            <div className="space-y-3">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                    activeService === index 
                      ? `${service.bgColor} ${service.borderColor} shadow-md` 
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                      {service.icon}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 text-sm mb-1 truncate">{service.title}</h3>
                      <p className={`text-xs font-medium mb-2 ${
                        activeService === index ? 'text-teal-600' : 'text-gray-500'
                      }`}>
                        {service.subtitle}
                      </p>
                      
                      {/* Feature Pills - Mobile Optimized */}
                      <div className="flex flex-wrap gap-1">
                        {service.features.slice(0, 2).map((feature, i) => (
                          <span
                            key={i}
                            className={`px-2 py-1 text-xs rounded-full font-medium ${
                              activeService === index
                                ? 'bg-teal-100 text-teal-700'
                                : 'bg-gray-200 text-gray-600'
                            }`}
                          >
                            {feature}
                          </span>
                        ))}
                        <span className="text-xs text-gray-500">+{service.features.length - 2}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Desktop Services Showcase */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Service Details */}
            <div className="space-y-8">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`group cursor-pointer transition-all duration-500 ${
                    activeService === index ? 'opacity-100' : 'opacity-60 hover:opacity-80'
                  } ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setActiveService(index)}
                >
                  <div className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                    activeService === index 
                      ? `${service.bgColor} ${service.borderColor} shadow-lg` 
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                  }`}>
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-xl shadow-lg`}>
                        {service.icon}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
                        <p className={`text-sm font-medium mb-2 ${
                          activeService === index ? 'text-teal-600' : 'text-gray-500'
                        }`}>
                          {service.subtitle}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                        
                        {/* Feature Pills */}
                        <div className="flex flex-wrap gap-2">
                          {service.features.slice(0, 3).map((feature, i) => (
                            <span
                              key={i}
                              className={`px-3 py-1 text-xs rounded-full font-medium ${
                                activeService === index
                                  ? 'bg-teal-100 text-teal-700'
                                  : 'bg-gray-200 text-gray-600'
                              }`}
                            >
                              {feature}
                            </span>
                          ))}
                          <span className="text-xs text-gray-500">+{service.features.length - 3} more</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Active Service Visual */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-96 object-cover transition-all duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Service Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${services[activeService].color} flex items-center justify-center text-2xl shadow-lg mr-4`}>
                      {services[activeService].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{services[activeService].title}</h3>
                      <p className="text-cyan-200">{services[activeService].subtitle}</p>
                    </div>
                  </div>
                  
                  {/* Benefits */}
                  <div className="grid grid-cols-2 gap-4">
                    {services[activeService].benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Navigation */}
              <div className="flex justify-center mt-6 space-x-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeService 
                        ? 'bg-teal-600 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Our Process - Mobile Optimized */}
        <div className="mb-12 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our <span className="text-teal-600">Process</span>
            </h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              A streamlined approach ensuring quality, efficiency, and customer satisfaction at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm mr-3 sm:mr-4 flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="text-2xl sm:text-3xl">{step.icon}</div>
                </div>
                
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
                
                {/* Connecting Line - Hidden on Mobile */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-teal-300 to-transparent transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Service Benefits - Mobile Optimized */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Choose <span className="text-teal-600">Our Services?</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {[
              {
                icon: '⚡',
                title: 'Fast Turnaround',
                description: '48-hour processing and quick response times'
              },
              {
                icon: '🎯',
                title: 'Precision Quality',
                description: 'Exact specifications met every single time'
              },
              {
                icon: '🌐',
                title: 'Global Network',
                description: 'Worldwide reach with local expertise'
              },
              {
                icon: '💰',
                title: 'Cost Effective',
                description: 'Competitive pricing with value-added services'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl shadow-lg mx-auto mb-3 sm:mb-4">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{benefit.title}</h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action - Mobile Optimized */}
        <div className="text-center bg-gradient-to-r from-teal-600 to-cyan-500 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white">
          <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🚀</div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Start Your Project?</h3>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-4">
            Let's discuss how our comprehensive services can support your seafood business goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
            <button
              onClick={() => alert('Navigate to RFQ page')}
              className="flex-1 bg-white text-teal-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center touch-manipulation active:scale-95"
            >
              <span className="mr-2">📋</span>
              Request Quote
            </button>
            <button
              onClick={() => alert('Navigate to contact page')}
              className="flex-1 bg-teal-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-800 transition-colors border-2 border-white/20 flex items-center justify-center touch-manipulation active:scale-95"
            >
              <span className="mr-2">💬</span>
              Discuss Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServiceSection;