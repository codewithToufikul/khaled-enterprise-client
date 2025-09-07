import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Twitter, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import logo from "../assets/logo.jpeg";

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Certificates', path: '/quality-certificates' },
    { name: 'Traceability', path: '/traceability' },
    { name: 'RFQ', path: '/rfq' },
    { name: 'Contact', path: '/contact' }
  ];

  const certifications = [
    { name: 'Halal', icon: '☪️', bgColor: 'bg-green-700' },
    { name: 'HACCP', icon: '🛡️', bgColor: 'bg-blue-700' },
    { name: 'ISO', icon: '🏆', bgColor: 'bg-purple-700' }
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: Facebook, 
      url: 'https://facebook.com/khaledenterprise',
      hoverColor: 'hover:text-blue-400' 
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://linkedin.com/company/khaledenterprise',
      hoverColor: 'hover:text-blue-500' 
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: 'https://instagram.com/khaledenterprise',
      hoverColor: 'hover:text-pink-400' 
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      url: 'https://twitter.com/khaledenterprise',
      hoverColor: 'hover:text-blue-300' 
    }
  ];

  return (
    <footer className="bg-slate-950 text-gray-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-3xl"></div>
        <svg className="absolute top-1/3 right-1/4 w-24 h-24 text-teal-400" fill="currentColor" viewBox="0 0 100 100">
          <circle cx="20" cy="20" r="2"/>
          <circle cx="50" cy="20" r="2"/>
          <circle cx="80" cy="20" r="2"/>
          <circle cx="20" cy="50" r="2"/>
          <circle cx="50" cy="50" r="3"/>
          <circle cx="80" cy="50" r="2"/>
          <circle cx="20" cy="80" r="2"/>
          <circle cx="50" cy="80" r="2"/>
          <circle cx="80" cy="80" r="2"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Branding Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <img 
                  src={logo} 
                  alt="Khaled Enterprise Logo" 
                  className="h-18 w-16 rounded-full object-cover shadow-lg"
                />
                <div>
                  <h2 className="text-2xl font-bold text-white">Khaled Enterprise</h2>
                  <p className="text-sm text-teal-400 font-medium">Global Fish & Food Export Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner in premium seafood export, delivering quality products from Bangladesh to global markets with complete traceability and certification.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-teal-400">15+</div>
                  <div className="text-xs text-gray-500">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400">50+</div>
                  <div className="text-xs text-gray-500">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-emerald-400">500+</div>
                  <div className="text-xs text-gray-500">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
                Quick Links
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="flex items-center space-x-2 text-gray-400 hover:text-teal-400 transition-colors duration-300 group"
                  >
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="text-sm">{link.name}</span>
                  </Link>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="mt-8 p-4 bg-slate-900 rounded-xl border border-gray-800">
                <h4 className="text-sm font-semibold text-white mb-2">Stay Updated</h4>
                <p className="text-xs text-gray-400 mb-3">Get latest updates on products and market insights.</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 text-xs bg-slate-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-teal-500 text-white"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-teal-600 to-cyan-500 text-white text-xs font-medium rounded-r-lg hover:from-teal-700 hover:to-cyan-600 transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Info Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-300">House #123, Road #456</p>
                    <p className="text-sm text-gray-300">Gulshan-2, Dhaka-1212</p>
                    <p className="text-sm text-gray-300">Bangladesh</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-teal-400 flex-shrink-0" />
                  <a 
                    href="tel:+8801712345678" 
                    className="text-sm text-gray-300 hover:text-teal-400 transition-colors duration-300"
                  >
                    +880-1712-345678
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-teal-400 flex-shrink-0" />
                  <a 
                    href="mailto:info@khaledenterprise.com" 
                    className="text-sm text-gray-300 hover:text-teal-400 transition-colors duration-300"
                  >
                    info@khaledenterprise.com
                  </a>
                </div>
              </div>

              {/* WhatsApp Quick Contact */}
              <div className="mt-6">
                <a
                  href="https://wa.me/8801712345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="font-medium">WhatsApp Us</span>
                </a>
              </div>

              {/* Business Hours */}
              <div className="mt-6 p-4 bg-slate-900 rounded-xl border border-gray-800">
                <h4 className="text-sm font-semibold text-white mb-2">Business Hours</h4>
                <div className="space-y-1 text-xs text-gray-400">
                  <div className="flex justify-between">
                    <span>Sunday - Thursday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday:</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Row */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div>
              <h3 className="text-sm font-semibold text-white mb-4 text-center md:text-left">
                Our Certifications
              </h3>
              <div className="flex items-center justify-center md:justify-start space-x-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${cert.bgColor} bg-opacity-20 border border-gray-700 hover:bg-opacity-30 transition-all duration-300`}
                  >
                    <span className="text-lg">{cert.icon}</span>
                    <span className="text-xs font-medium text-white">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-full flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-sm">24/7</span>
                </div>
                <span className="text-xs text-gray-400">Support</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <span className="text-xs text-gray-400">Verified</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-sm">🚚</span>
                </div>
                <span className="text-xs text-gray-400">Fast Ship</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                © 2025 <span className="text-white font-medium">Khaled Enterprise</span>. All Rights Reserved.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              <Link 
                to="/privacy-policy" 
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link 
                to="/terms-of-service" 
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-slate-700 ${social.hoverColor} transition-all duration-300 transform hover:scale-110 shadow-lg`}
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-8 fill-slate-900">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;