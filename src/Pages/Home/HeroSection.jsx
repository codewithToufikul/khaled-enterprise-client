import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Premium Quality Fish & Seafoods",
      subtitle: "Directly from Ocean to Your Table",
      description: "We export the finest selection of fresh and frozen fish, shrimp, and seafood products worldwide with guaranteed quality and traceability.",
      image: "https://i.ibb.co.com/5gtqxRwC/engin-akyurt-rbz-J-fpv9v-M-unsplash.jpg",
      stats: { countries: "50+", products: "200+", experience: "15+" }
    },
{
    id: 4,
    title: "Premium Garments Export",
    subtitle: "Quality Apparel for Global Markets",
    description: "We deliver world-class ready-made garments including knitwear, woven wear, and apparel essentials with unmatched quality and timely shipments.",
    image: "https://i.ibb.co.com/xtfGb49y/equalstock-6p-HDH2kz00-A-unsplash-1-1.jpg", // এখানে garments সম্পর্কিত কোনো image দিন
    stats: { factories: "20+", products: "500+", clients: "100+" }
  },
    {
      id: 3,
      title: "Global Supply Chain Excellence",
      subtitle: "Worldwide Delivery Network",
      description: "From fishing vessels to your warehouse - our integrated cold chain logistics ensure maximum freshness and quality throughout the journey.",
      image: "https://i.ibb.co.com/cKCbf0Pv/kurt-cotoaga-oa-RNa2et8-Vg-unsplash.jpg",
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
        <svg width="40" height="40" viewBox="0 0 60 60" className="absolute top-10 left-10 sm:top-20 sm:left-20 sm:w-[60px] sm:h-[60px]">
          <path d="M30 5L35 20L50 15L40 30L55 35L40 45L45 60L30 50L15 55L25 40L10 35L25 25L20 10Z" fill="currentColor"/>
        </svg>
        <svg width="30" height="30" viewBox="0 0 60 60" className="absolute top-32 right-16 sm:top-40 sm:right-32 sm:w-[40px] sm:h-[40px]">
          <path d="M30 5L35 20L50 15L40 30L55 35L40 45L45 60L30 50L15 55L25 40L10 35L25 25L20 10Z" fill="currentColor"/>
        </svg>
        <svg width="35" height="35" viewBox="0 0 60 60" className="absolute bottom-20 left-20 sm:bottom-32 sm:left-40 sm:w-[50px] sm:h-[50px]">
          <path d="M30 5L35 20L50 15L40 30L55 35L40 45L45 60L30 50L15 55L25 40L10 35L25 25L20 10Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-[85vh] sm:min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 z-10 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-teal-100">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                <span className="text-xs sm:text-sm font-medium text-teal-700">Trusted Global Partners</span>
              </div>

              {/* Main Title */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {slides[currentSlide].title.split(' ').map((word, index) => (
                    <span key={index} className={index === slides[currentSlide].title.split(' ').length - 1 || index === slides[currentSlide].title.split(' ').length - 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500' : ''}>
                      {word}{' '}
                    </span>
                  ))}
                </h1>
                
                <h2 className="text-lg sm:text-xl lg:text-2xl text-teal-600 font-semibold">
                  {slides[currentSlide].subtitle}
                </h2>
                
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 text-center shadow-sm border border-white/50 hover:shadow-md transition-all duration-300">
                  <div className="text-xl sm:text-2xl mb-1 sm:mb-2">{feature.icon}</div>
                  <div className="font-semibold text-gray-900 text-xs sm:text-sm">{feature.title}</div>
                  <div className="text-xs text-gray-600 mt-1 leading-tight">{feature.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative lg:pl-8 order-1 lg:order-2">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
                <img 
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[600px] object-cover transition-all duration-1000"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Floating Quality Badge */}
                <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 shadow-lg">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-800">Premium Quality</span>
                  </div>
                </div>

              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-xl sm:rounded-2xl blur-xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl sm:rounded-2xl blur-xl opacity-40 animate-pulse delay-300"></div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-4 sm:mt-6">
              {/* Previous Button */}
              <button
                onClick={() => goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
                className="group bg-white/80 backdrop-blur-sm hover:bg-white border border-gray-200 rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                aria-label="Previous slide"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Slide Indicators */}
              <div className="flex space-x-2 sm:space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-teal-600 w-6 sm:w-8' 
                        : 'bg-gray-300 hover:bg-gray-400 w-2 sm:w-3'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => goToSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)}
                className="group bg-white/80 backdrop-blur-sm hover:bg-white border border-gray-200 rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                aria-label="Next slide"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button 
        onClick={() => window.location.href = '/contact'}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-gradient-to-r from-emerald-400 to-teal-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 z-50 group"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-12 sm:h-16 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;