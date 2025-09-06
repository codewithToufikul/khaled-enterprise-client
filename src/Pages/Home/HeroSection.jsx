import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Premium Quality Fish & Seafood",
      subtitle: "Directly from Ocean to Your Table",
      description: "We export the finest selection of fresh and frozen fish, shrimp, and seafood products worldwide with guaranteed quality and traceability.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      stats: { countries: "50+", products: "200+", experience: "15+" }
    },
    {
      id: 2,
      title: "Sustainable Fishing Practices",
      subtitle: "Committed to Ocean Conservation",
      description: "Our responsible sourcing ensures premium seafood while protecting marine ecosystems for future generations through certified sustainable practices.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      stats: { certified: "100%", carbon: "30%", waste: "90%" }
    },
    {
      id: 3,
      title: "Global Supply Chain Excellence",
      subtitle: "Worldwide Delivery Network",
      description: "From fishing vessels to your warehouse - our integrated cold chain logistics ensure maximum freshness and quality throughout the journey.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      stats: { delivery: "48h", temperature: "-18°C", tracking: "Real-time" }
    }
  ];

  const features = [
    { icon: "🏆", title: "Premium Quality", desc: "Grade A certified seafood" },
    { icon: "❄️", title: "Cold Chain", desc: "Temperature controlled logistics" },
    { icon: "🌍", title: "Global Reach", desc: "Worldwide delivery network" },
    { icon: "📋", title: "Full Traceability", desc: "Complete supply chain visibility" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 to-cyan-50 min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="60" height="60" viewBox="0 0 60 60" className="absolute top-20 left-20">
          <path d="M30 5L35 20L50 15L40 30L55 35L40 45L45 60L30 50L15 55L25 40L10 35L25 25L20 10Z" fill="currentColor"/>
        </svg>
        <svg width="40" height="40" viewBox="0 0 60 60" className="absolute top-40 right-32">
          <path d="M30 5L35 20L50 15L40 30L55 35L40 45L45 60L30 50L15 55L25 40L10 35L25 25L20 10Z" fill="currentColor"/>
        </svg>
        <svg width="50" height="50" viewBox="0 0 60 60" className="absolute bottom-32 left-40">
          <path d="M30 5L35 20L50 15L40 30L55 35L40 45L45 60L30 50L15 55L25 40L10 35L25 25L20 10Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8 z-10">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-teal-100">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></span>
                <span className="text-sm font-medium text-teal-700">Trusted by 500+ Global Partners</span>
              </div>

              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {slides[currentSlide].title.split(' ').map((word, index) => (
                    <span key={index} className={index === slides[currentSlide].title.split(' ').length - 1 || index === slides[currentSlide].title.split(' ').length - 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500' : ''}>
                      {word}{' '}
                    </span>
                  ))}
                </h1>
                
                <h2 className="text-xl lg:text-2xl text-teal-600 font-semibold">
                  {slides[currentSlide].subtitle}
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              {Object.entries(slides[currentSlide].stats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-teal-700">{value}</div>
                  <div className="text-sm text-gray-600 capitalize">
                    {key === 'countries' && 'Countries'}
                    {key === 'products' && 'Products'}
                    {key === 'experience' && 'Years Exp.'}
                    {key === 'certified' && 'Certified'}
                    {key === 'carbon' && 'Less Carbon'}
                    {key === 'waste' && 'Less Waste'}
                    {key === 'delivery' && 'Delivery'}
                    {key === 'temperature' && 'Storage'}
                    {key === 'tracking' && 'Tracking'}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/rfq"
                className="group relative px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                <span className="relative flex items-center justify-center">
                  📋 Request RFQ
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>

              <Link 
                to="/products"
                className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl shadow-lg border-2 border-teal-100 hover:border-teal-300 hover:bg-teal-50 transform hover:-translate-y-0.5 transition-all duration-300"
              >
                🐟 View Products
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center shadow-sm border border-white/50 hover:shadow-md transition-all duration-300">
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <div className="font-semibold text-gray-900 text-sm">{feature.title}</div>
                  <div className="text-xs text-gray-600 mt-1">{feature.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-[600px] object-cover transition-all duration-1000"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Floating Quality Badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-800">Premium Quality</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">HACCP Certified</div>
                </div>

                {/* Bottom Info Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">Fresh Daily Catch</h3>
                      <p className="text-sm text-gray-600">Temperature: -2°C to 2°C</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-teal-600">24/7</div>
                      <div className="text-xs text-gray-600">Monitoring</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl blur-xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl blur-xl opacity-40 animate-pulse delay-300"></div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-teal-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <Link 
        to="/contact"
        className="fixed bottom-8 right-8 bg-gradient-to-r from-emerald-400 to-teal-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 z-50 group"
      >
        <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </Link>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-16 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;