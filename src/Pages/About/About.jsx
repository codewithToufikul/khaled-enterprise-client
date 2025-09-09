import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCountry, setActiveCountry] = useState(0);
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

  const keyFacts = [
    {
      icon: '📦',
      number: '2000+',
      unit: 'MT/Month',
      title: 'Export Capacity',
      description: 'Monthly processing capacity',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: '🌍',
      number: '25+',
      unit: 'Countries',
      title: 'Global Destinations',
      description: 'Worldwide market reach',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: '🏆',
      number: '5+',
      unit: 'Certifications',
      title: 'Quality Standards',
      description: 'International certifications',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: '⭐',
      number: '15+',
      unit: 'Years',
      title: 'Business Excellence',
      description: 'Proven industry experience',
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  const teamMembers = [
    {
      name: 'Mr. Khaled Rahman',
      designation: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Visionary leader with 20+ years in seafood export industry'
    },
    {
      name: 'Ms. Ayesha Akter',
      designation: 'Director of Operations',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Operations expert ensuring seamless global supply chain'
    },
    {
      name: 'Mr. Imran Hossain',
      designation: 'Head of Quality Assurance',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Quality control specialist maintaining international standards'
    },
    {
      name: 'Ms. Fatema Sultana',
      designation: 'Export Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'International trade expert managing global partnerships'
    }
  ];

  const globalMarkets = [
    { country: 'USA', flag: '🇺🇸', market: 'North America' },
    { country: 'UK', flag: '🇬🇧', market: 'Europe' },
    { country: 'UAE', flag: '🇦🇪', market: 'Middle East' },
    { country: 'Japan', flag: '🇯🇵', market: 'Asia Pacific' },
    { country: 'Germany', flag: '🇩🇪', market: 'European Union' },
    { country: 'Singapore', flag: '🇸🇬', market: 'Southeast Asia' },
    { country: 'Canada', flag: '🇨🇦', market: 'North America' },
    { country: 'Australia', flag: '🇦🇺', market: 'Oceania' }
  ];

  const certifications = [
    { name: 'Halal', icon: '☪️', color: 'bg-green-100 text-green-800' },
    { name: 'HACCP', icon: '🛡️', color: 'bg-blue-100 text-blue-800' },
    { name: 'ISO 22000', icon: '🏆', color: 'bg-purple-100 text-purple-800' },
    { name: 'BRC', icon: '✅', color: 'bg-emerald-100 text-emerald-800' },
    { name: 'MSC', icon: '🌊', color: 'bg-cyan-100 text-cyan-800' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Seafood Export Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-teal-900/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                  Khaled Enterprise
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-medium text-cyan-200 mb-8">
                Global Fish & Food Export Solutions
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed">
              <p className="text-gray-200">
                We are a Bangladesh-based company specializing in exporting fresh and frozen seafood worldwide. 
                With over 15 years of experience, we have established ourselves as a trusted partner in the global seafood industry.
              </p>
              <p className="text-gray-200">
                Our mission is to deliver premium quality fish, shrimp, and other food products to international markets 
                with strict quality control and sustainable sourcing practices, ensuring the highest standards of food safety and environmental responsibility.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Link
                to="/products"
                className="px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Explore Our Products
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-teal-600">Purpose</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driven by excellence, guided by sustainability
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-center">
                "To provide fresh, safe, and sustainably sourced seafood to global customers while maintaining 
                the highest standards of quality, traceability, and environmental responsibility in everything we do."
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🌟</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-center">
                "To become the most trusted and sustainable seafood exporter from South Asia, setting industry 
                benchmarks for quality, innovation, and customer satisfaction across global markets."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts Section */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key <span className="text-teal-600">Highlights</span>
            </h2>
            <p className="text-xl text-gray-600">Numbers that speak for our excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFacts.map((fact, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${fact.color} rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{fact.icon}</div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold">{fact.number}</div>
                    <div className="text-sm font-medium opacity-90">{fact.unit}</div>
                    <h3 className="text-lg font-semibold">{fact.title}</h3>
                    <p className="text-sm opacity-80">{fact.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Operations Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  State-of-the-Art <span className="text-teal-600">Processing Facilities</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our modern processing facilities are equipped with advanced technology and maintain 
                  the highest standards of hygiene and quality control.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">❄️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Cold Storage</h3>
                    <p className="text-gray-600">Temperature-controlled storage systems maintaining optimal conditions from -25°C to +4°C.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🧪</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Laboratory</h3>
                    <p className="text-gray-600">In-house testing facility for microbiological, chemical, and sensory analysis.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📦</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Automated Packaging</h3>
                    <p className="text-gray-600">Modern packaging lines with vacuum sealing, MAP, and labeling systems.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🛡️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">HACCP Compliance</h3>
                    <p className="text-gray-600">Certified food safety management system ensuring product safety and quality.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {certifications.map((cert, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${cert.color} flex items-center space-x-2`}
                  >
                    <span>{cert.icon}</span>
                    <span>{cert.name}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Processing Facility"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-2">ISO 22000 Certified Facility</h3>
                  <p className="text-sm opacity-90">Processing capacity: 2000+ MT per month</p>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">24/7</div>
                  <div className="text-sm text-gray-600">Operations</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600">99.9%</div>
                  <div className="text-sm text-gray-600">Quality Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-teal-600">Leadership Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals driving excellence in seafood export industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
              >
                <div className="text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-teal-600 font-medium mb-4">{member.designation}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-teal-600">Global Presence</span>
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by clients in over 25 countries worldwide
            </p>
          </div>

          {/* World Map Representation */}
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {globalMarkets.map((market, index) => (
                <div
                  key={index}
                  className={`group text-center p-6 rounded-2xl border-2 border-gray-200 hover:border-teal-300 transition-all duration-300 cursor-pointer ${
                    activeCountry === index ? 'bg-teal-50 border-teal-300' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveCountry(index)}
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {market.flag}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{market.country}</h3>
                  <p className="text-xs text-gray-600">{market.market}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Global Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-3xl mb-4">🌍</div>
              <div className="text-3xl font-bold text-teal-600 mb-2">25+</div>
              <div className="text-gray-600">Export Countries</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-3xl mb-4">🚢</div>
              <div className="text-3xl font-bold text-cyan-600 mb-2">500+</div>
              <div className="text-gray-600">Shipments Annually</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-3xl mb-4">🤝</div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">200+</div>
              <div className="text-gray-600">Global Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Partner with Khaled Enterprise
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90">
              Join hundreds of satisfied customers worldwide who trust us for premium seafood export solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/rfq"
                className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
              >
                <span className="mr-2">📋</span>
                Request for Quotation (RFQ)
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-teal-700 text-white font-semibold rounded-xl border-2 border-white/20 hover:bg-teal-800 transition-all duration-300 flex items-center justify-center"
              >
                <span className="mr-2">💬</span>
                Schedule a Meeting
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-2xl">⚡</div>
                <div className="font-semibold">Quick Response</div>
                <div className="text-sm opacity-90">24-hour quote turnaround</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">🏆</div>
                <div className="font-semibold">Premium Quality</div>
                <div className="text-sm opacity-90">International certifications</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">🤝</div>
                <div className="font-semibold">Trusted Partner</div>
                <div className="text-sm opacity-90">15+ years of excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;